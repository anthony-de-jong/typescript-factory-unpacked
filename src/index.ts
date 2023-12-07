import ts, { DeclarationStatement, Identifier, Modifier, ModuleDeclaration, Node, SourceFile } from 'typescript';
import { existsSync, readFileSync, stat, write, writeFileSync } from 'fs';
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

function findAll<T extends Node = Node>(file: SourceFile, node: Node, filter: (node: Node) => boolean): T[] {
    return Array.from(nodeIterator(file, node, filter)) as T[];
}

function findAllInFile<T extends Node = Node>(file: SourceFile, filter: (node: Node) => boolean) : T[] {
    return Array.from(nodeIterator(file, file, filter)) as T[];
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

const statements: ts.Statement[] = [];

for (const methodSignatures of methods.values()) {
    if (methodSignatures.length === 1) {
        statements.push(createFunctionDeclaration(
            methodSignatures[0].name as ts.Identifier,
            methodSignatures[0].typeParameters,
            methodSignatures[0].parameters,
            methodSignatures[0].type,
        ))
    } else {
        for (const methodSignature of methodSignatures) {
            statements.push(createFunctionDeclaration(
                methodSignature.name as ts.Identifier,
                methodSignature.typeParameters,
                methodSignature.parameters,
                methodSignature.type,
                false
            ));
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

const importTypesFilter = (n:Node) => ts.isEnumDeclaration(n) || ts.isInterfaceDeclaration(n) || ts.isTypeAliasDeclaration(n);

const namespaces = findAllInFile<ModuleDeclaration>(typeFile, ts.isModuleDeclaration);
const namespaceTypes = namespaces.map(a => findAll<DeclarationStatement>(typeFile, a, importTypesFilter).map(b => b.name.text))

const excludedTypes = new Set(namespaceTypes.slice(1).flat());
const includedTypes = new Set(namespaceTypes[0].filter(a => !excludedTypes.has(a)));

const printer = ts.createPrinter({ removeComments: false });

statements.unshift(factory.createImportDeclaration(
    undefined,
    factory.createImportClause(
        false,
        factory.createIdentifier("ts"),
        factory.createNamedImports(
            Array.from(includedTypes.values(), n => factory.createImportSpecifier(false, undefined, factory.createIdentifier(n)))
        )
    ),
    factory.createStringLiteral("typescript"),
    undefined
));

ts.addSyntheticLeadingComment(statements[0], ts.SyntaxKind.MultiLineCommentTrivia, generateHeaderComment(), true);
ts.addSyntheticLeadingComment(statements[0], ts.SyntaxKind.SingleLineCommentTrivia, undefined, true);

statements.splice(1, 0, ts.factory.createEmptyStatement())

const module = printer.printList(
    ts.ListFormat.MultiLine, 
    factory.createNodeArray(statements), 
    undefined
);
[]
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