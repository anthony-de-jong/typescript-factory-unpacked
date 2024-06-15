import ts, { Identifier, Modifier, Node, SourceFile } from 'typescript';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { default as assert } from 'assert';

import generateHeaderComment from './header-comment.js';

const factory = ts.factory;

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

for (const methodSignatures of methods.values()) {
    if (methodSignatures.length === 1) {
        const declaration = createFunctionDeclaration(
            methodSignatures[0].name as ts.Identifier,
            methodSignatures[0].typeParameters,
            methodSignatures[0].parameters,
            methodSignatures[0].type,
        );

        for (const type of getUsedTypeNamesFromMethodOrFunction(methodSignatures[0]))
            usedTypes.add(type);

        statements.push(declaration);
    } else {
        for (const methodSignature of methodSignatures) {
            const declaration = createFunctionDeclaration(
                methodSignature.name as ts.Identifier,
                methodSignature.typeParameters,
                methodSignature.parameters,
                methodSignature.type,
                false
            );

            for (const type of getUsedTypeNamesFromMethodOrFunction(methodSignature))
                usedTypes.add(type);

            statements.push(declaration);
        }

        const parameters = Array.from(new Set(methodSignatures.flatMap(a => a.parameters.map(b => (b.name as ts.Identifier).text))));
        const signature = methodSignatures.find(a => parameters.every(b => a.parameters.some(c => b == (c.name as Identifier).text)));

        statements.push(createFunctionDeclaration(
            signature.name as ts.Identifier,
            undefined,
            signature.parameters.map(a => factory.createParameterDeclaration(undefined, undefined, a.name, a.questionToken)),
            undefined
        ));
    }
}

const printer = ts.createPrinter({ removeComments: false });

statements.unshift(factory.createImportDeclaration(
    undefined,
    factory.createImportClause(
        false,
        factory.createIdentifier("ts"),
        factory.createNamedImports(
            Array.from(usedTypes.values(), n => factory.createImportSpecifier(false, undefined, factory.createIdentifier(n)))
        )
    ),
    factory.createStringLiteral("typescript"),
    undefined
));

ts.addSyntheticLeadingComment(statements[0], ts.SyntaxKind.MultiLineCommentTrivia, generateHeaderComment(), true);

statements.splice(1, 0, ts.factory.createEmptyStatement())

const module = printer.printList(
    ts.ListFormat.MultiLine,
    factory.createNodeArray(statements),
    undefined
);

writeFileSync('./lib/generated.ts', module);

// //ts.SyntaxKind.MultiLineCommentTrivia

console.log('Finished');

function createFunctionDeclaration(
    name: string | Identifier,
    typeParameters: readonly ts.TypeParameterDeclaration[],
    parameters: readonly ts.ParameterDeclaration[],
    type: ts.TypeNode,
    includeBody: boolean = true) {

    return factory.createFunctionDeclaration(
        [factory.createToken(ts.SyntaxKind.ExportKeyword)],
        undefined,
        name,
        typeParameters,
        [
            factory.createParameterDeclaration(
                undefined,
                undefined,
                parameters.length && factory.createObjectBindingPattern(
                    parameters.map(p => factory.createBindingElement(
                        undefined, undefined, p.name, undefined
                    ))
                ),
                undefined,
                parameters.length && factory.createTypeLiteralNode(
                    parameters.map(p => factory.createPropertySignature(
                        p.modifiers?.filter(a => ts.isModifier(a)) as Modifier[],
                        p.name as Identifier,
                        p.questionToken,
                        p.type
                    ))
                ),
                undefined
            )
        ],
        type,
        includeBody && factory.createBlock([
            factory.createReturnStatement(
                factory.createCallExpression(
                    factory.createPropertyAccessExpression(
                        factory.createPropertyAccessExpression(
                            factory.createIdentifier('ts'),
                            factory.createIdentifier('factory'),
                        ),
                        name,
                    ),
                    typeParameters?.map(t => factory.createTypeReferenceNode(t.name)),
                    parameters.map(p => p.name as Identifier)
                )
            )
        ], true)
    )
}

function* getUsedTypeNamesFromMethodOrFunction(declaration: ts.MethodSignature | ts.FunctionTypeNode, ignored?:string[]) {
    ignored ??= []
    ignored.push(...declaration?.typeParameters?.map(a => a.name.text) ??[]);

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