import ts, { Identifier, Modifier, Node, SourceFile } from 'typescript';
import { existsSync, readFileSync, renameSync, writeFileSync } from 'fs';
import { default as assert } from 'assert';

import generateHeaderComment from './header-comment.js';

import * as factory from "../lib/generated.ts";

const FLAG_SINGLE_ARGUMENT_SUPPORT = false;

console.log(`----- ${new Date().toString()} -----`);

const typesPath = new URL(import.meta.resolve('typescript/lib/typescript.d.ts'));

if (!existsSync(typesPath))
    throw new Error('Typescipt package is not installed');

const typesContent = readFileSync(typesPath, { encoding: 'utf-8' });
const typeFile = ts.createSourceFile('types.ts', typesContent, ts.ScriptTarget.ESNext, false, ts.ScriptKind.TS);

function* nodeIterator(file: SourceFile, node: Node, filter: (node: Node) => boolean): Generator<Node> {
    if (filter(node))
        yield node;

    for (const child of node.getChildren(file))
        yield* nodeIterator(file, child, filter);
}

function findFirstInFile<T extends Node = Node>(file: SourceFile, filter: (node: Node) => boolean): T | undefined {
    return nodeIterator(file, file, filter).next().value as T;
}

// Get variable declaration of the 'factory' value.
const declarationFactory = findFirstInFile(typeFile, n => ts.isVariableDeclaration(n) && ts.isIdentifier(n.name) && n.name.text === 'factory');

assert(ts.isVariableDeclaration(declarationFactory));
assert(ts.isTypeReferenceNode(declarationFactory.type));
assert(ts.isIdentifier(declarationFactory.type.typeName));

const interfaceTypeName = declarationFactory.type.typeName.text;

// Get the interface declaration of the factory type
const declarationFactoryType = findFirstInFile(typeFile, n => ts.isInterfaceDeclaration(n) && n.name.text === interfaceTypeName);

assert(ts.isInterfaceDeclaration(declarationFactoryType));

const methods = new Map<string, ts.MethodSignature[]>();

declarationFactoryType.forEachChild(node => {
    if (!ts.isMethodSignature(node))
        return;

    assert(ts.isIdentifier(node.name));

    const name = node.name.text;

    if (methods.has(name)) {
        methods.get(name).push(node);
    } else {
        methods.set(name, [node]);
    }
});

const usedTypes = new Set<string>();
const statements: ts.Statement[] = [];

for (const [name, signatures] of methods) {
    let parameters: { [key: string]: boolean } = null;

    for (const signature of signatures) {
        for (const type of getUsedTypeNamesFromMethodOrFunction(signature))
            usedTypes.add(type);

        for (const parameter of signature.parameters)
            (parameters ??= {})[parameter.name.getText(typeFile)] ||= isParameterOptional(parameter);

        if (FLAG_SINGLE_ARGUMENT_SUPPORT) {
            if (signature.parameters.length === 1) {
                statements.push(createFunction_SingleArgument(signature));
            }
        }

        statements.push(createFunction_ObjectArgument(signature));
    }

    let body: ts.Expression = factory.createCallExpression({
        expression: factory.createPropertyAccessExpression({
            expression: factory.createPropertyAccessExpression({
                expression: factory.createIdentifier({ text: "ts" }),
                name: factory.createIdentifier({ text: "factory" })
            }),
            name: name
        }),
        argumentsArray: Object.keys(parameters ?? {}).map(p => factory.createPropertyAccessExpression({
            expression: factory.createIdentifier({ text: "o" }),
            name: factory.createIdentifier({ text: p })
        }))
    });
    if (FLAG_SINGLE_ARGUMENT_SUPPORT) {
        if (signatures.some(a => a.parameters?.length === 1)) {
            body = factory.createConditionalExpression({
                condition: Object.entries(parameters ?? {})
                    .filter(([_, optional]) => !optional)
                    .map(([name, _]) => factory.createBinaryExpression({
                        left: factory.createStringLiteral({ text: name }),
                        operator: factory.createToken({ token: ts.SyntaxKind.InKeyword }),
                        right: factory.createIdentifier({ text: "o" })
                    })).reduce<ts.Expression>((left, right) => factory.createLogicalAnd({ left, right }), factory.createBinaryExpression({
                        left: factory.createTypeOfExpression({ expression: factory.createIdentifier({ text: "o" }) }),
                        operator: factory.createToken({ token: ts.SyntaxKind.EqualsEqualsEqualsToken }),
                        right: factory.createStringLiteral({ text: "object" })
                    })),
                questionToken: factory.createToken({ token: ts.SyntaxKind.QuestionToken }),
                whenTrue: body,
                colonToken: factory.createToken({ token: ts.SyntaxKind.ColonToken }),
                whenFalse: factory.createCallExpression({
                    expression: factory.createPropertyAccessExpression({
                        expression: factory.createPropertyAccessExpression({
                            expression: factory.createIdentifier({ text: 'ts' }),
                            name: factory.createIdentifier({ text: 'factory' }),
                        }),
                        name: name,
                    }),
                    argumentsArray: [factory.createIdentifier({ text: "o" })]
                })
            })
        }
    }

    statements.push(factory.createFunctionDeclaration({
        modifiers: [factory.createToken({ token: ts.SyntaxKind.ExportKeyword })],
        name: name,
        parameters:
            parameters
                ? [factory.createParameterDeclaration({ name: "o" })]
                : undefined,
        body: factory.createBlock({
            statements: [
                factory.createReturnStatement({ expression: body })
            ],
            multiLine: true
        })
    }));
}

const printer = ts.createPrinter({ removeComments: false });

statements.unshift(factory.createImportDeclaration({
    importClause: factory.createImportClause({
        isTypeOnly: false,
        name: factory.createIdentifier({ text: "ts" }),
        namedBindings: factory.createNamedImports({
            elements: Array.from(usedTypes.values(), n => factory.createImportSpecifier({ isTypeOnly: false, name: factory.createIdentifier({ text: n }) }))
        }),
    }),
    moduleSpecifier: factory.createStringLiteral({ text: "typescript" })
}));

ts.addSyntheticLeadingComment(statements[0], ts.SyntaxKind.MultiLineCommentTrivia, generateHeaderComment(), true);

statements.splice(1, 0, ts.factory.createEmptyStatement())

const module = printer.printList(
    ts.ListFormat.MultiLine,
    factory.createNodeArray({ elements: statements }),
    undefined
);

renameSync('./lib/generated.ts', './lib/generated.old.ts');
writeFileSync('./lib/generated.ts', module);

console.log('Finished');

function createFunction_SingleArgument({ name, typeParameters, parameters, type }: {
    name: ts.PropertyName,
    type?: ts.TypeNode,
    parameters: readonly ts.ParameterDeclaration[],
    typeParameters?: readonly ts.TypeParameterDeclaration[],
}) {
    return factory.createFunctionDeclaration({
        modifiers: [factory.createToken({ token: ts.SyntaxKind.ExportKeyword })],
        name: ts.isIdentifier(name) ? name : name.getText(typeFile),
        typeParameters,
        parameters,
        type
    });
}

function createFunction_ObjectArgument({ name, typeParameters, parameters, type }: {
    name: ts.PropertyName,
    type?: ts.TypeNode,
    parameters: readonly ts.ParameterDeclaration[],
    typeParameters?: readonly ts.TypeParameterDeclaration[],
}) {
    return factory.createFunctionDeclaration({
        modifiers: [factory.createToken({ token: ts.SyntaxKind.ExportKeyword })],
        name: ts.isIdentifier(name) ? name : name.getText(typeFile),
        typeParameters,
        parameters: [
            factory.createParameterDeclaration({
                name: parameters.length && factory.createObjectBindingPattern({
                    elements: parameters.map(p => factory.createBindingElement({ name: p.name }))
                }),
                type: parameters.length && factory.createTypeLiteralNode({
                    members: parameters.map(p => factory.createPropertySignature({
                        modifiers: p.modifiers?.filter(a => ts.isModifier(a)) as Modifier[],
                        name: p.name as Identifier,
                        questionToken: isParameterOptional(p)
                            ? factory.createToken({ token: ts.SyntaxKind.QuestionToken })
                            : undefined,
                        type: p.type
                    }))
                })
            })
        ],
        type
    });
}

function isParameterOptional(parameter: ts.ParameterDeclaration) {
    return !!parameter.questionToken || ts.isUnionTypeNode(parameter.type) && parameter.type.types.some(a => a.kind === ts.SyntaxKind.UndefinedKeyword)
}

function* getUsedTypeNamesFromMethodOrFunction(declaration: ts.MethodSignature | ts.FunctionTypeNode, ignored?: string[]) {
    ignored ??= []
    ignored.push(...declaration?.typeParameters?.map(a => a.name.text) ?? []);

    if (declaration.type)
        yield* getUsedTypeNamesFromTypeNode(declaration.type, ignored)

    if (declaration.typeParameters)
        for (const typeParameter of declaration.typeParameters.filter(a => a.constraint))
            yield* getUsedTypeNamesFromTypeNode(typeParameter.constraint, ignored);

    if (declaration.parameters)
        for (const parameter of declaration.parameters.filter(a => a.type))
            yield* getUsedTypeNamesFromTypeNode(parameter.type, ignored);
}

function* getUsedTypeNamesFromTypeNode(declaration: ts.TypeNode, ignored?: string[]) {
    switch (true) {
        case ts.isTypeReferenceNode(declaration):
            let name: ts.EntityName = declaration.typeName

            while (ts.isQualifiedName(name))
                name = name.left;

            if (declaration.typeArguments)
                for (const typeArgument of declaration.typeArguments)
                    yield* getUsedTypeNamesFromTypeNode(typeArgument, ignored);

            if (ignored?.includes(name.text))
                return;

            yield name.text;
            break;

        case ts.isArrayTypeNode(declaration):
            yield* getUsedTypeNamesFromTypeNode(declaration.elementType, ignored);
            break;

        case ts.isFunctionTypeNode(declaration):
            yield* getUsedTypeNamesFromMethodOrFunction(declaration, ignored);
            break;

        case ts.isIndexedAccessTypeNode(declaration):
            yield* getUsedTypeNamesFromTypeNode(declaration.indexType, ignored);
            yield* getUsedTypeNamesFromTypeNode(declaration.objectType, ignored);
            break;

        case ts.isTypeOperatorNode(declaration):
        case ts.isParenthesizedTypeNode(declaration):
            yield* getUsedTypeNamesFromTypeNode(declaration.type, ignored);
            break;

        case ts.isUnionTypeNode(declaration):
        case ts.isIntersectionTypeNode(declaration):
            for (const type of declaration.types)
                yield* getUsedTypeNamesFromTypeNode(type, ignored);
            break;

        case ts.isLiteralTypeNode(declaration):
        case ts.isTypeLiteralNode(declaration):
        case declaration.kind == ts.SyntaxKind.VoidKeyword:
        case declaration.kind == ts.SyntaxKind.StringKeyword:
        case declaration.kind == ts.SyntaxKind.NumberKeyword:
        case declaration.kind == ts.SyntaxKind.BooleanKeyword:
        case declaration.kind == ts.SyntaxKind.UndefinedKeyword:
            break;

        default:
            console.log(declaration.getText(typeFile))
            console.warn("Not implemented type node: ", ts.SyntaxKind[declaration?.kind]);
    }
}