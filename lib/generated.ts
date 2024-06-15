/*
    This code is automayicly generated, do not edit by hand.
    Generated at: 2024-06-15 08:06:47.403
    Generated for: typescript@5.4.5
*/
import ts, { NodeArray, Node, NumericLiteral, TokenFlags, BigIntLiteral, PseudoBigInt, StringLiteral, PropertyNameLiteral, PrivateIdentifier, RegularExpressionLiteral, Identifier, GeneratedIdentifierFlags, SuperExpression, SyntaxKind, ThisExpression, NullLiteral, TrueLiteral, FalseLiteral, EndOfFileToken, Token, PunctuationToken, PunctuationSyntaxKind, KeywordTypeNode, KeywordTypeSyntaxKind, ModifierToken, ModifierSyntaxKind, KeywordToken, KeywordSyntaxKind, Modifier, ModifierFlags, QualifiedName, EntityName, ComputedPropertyName, Expression, TypeParameterDeclaration, TypeNode, ParameterDeclaration, ModifierLike, DotDotDotToken, BindingName, QuestionToken, Decorator, PropertySignature, PropertyName, PropertyDeclaration, ExclamationToken, MethodSignature, MethodDeclaration, AsteriskToken, Block, ConstructorDeclaration, GetAccessorDeclaration, SetAccessorDeclaration, CallSignatureDeclaration, ConstructSignatureDeclaration, IndexSignatureDeclaration, TemplateLiteralTypeSpan, TemplateMiddle, TemplateTail, ClassStaticBlockDeclaration, TypePredicateNode, AssertsKeyword, ThisTypeNode, TypeReferenceNode, FunctionTypeNode, ConstructorTypeNode, TypeQueryNode, TypeLiteralNode, TypeElement, ArrayTypeNode, TupleTypeNode, NamedTupleMember, OptionalTypeNode, RestTypeNode, UnionTypeNode, IntersectionTypeNode, ConditionalTypeNode, InferTypeNode, ImportTypeNode, ImportAttributes, ParenthesizedTypeNode, TypeOperatorNode, IndexedAccessTypeNode, MappedTypeNode, ReadonlyKeyword, PlusToken, MinusToken, LiteralTypeNode, TemplateLiteralTypeNode, TemplateHead, ObjectBindingPattern, BindingElement, ArrayBindingPattern, ArrayBindingElement, ArrayLiteralExpression, ObjectLiteralExpression, ObjectLiteralElementLike, PropertyAccessExpression, MemberName, PropertyAccessChain, QuestionDotToken, ElementAccessExpression, ElementAccessChain, CallExpression, CallChain, NewExpression, TaggedTemplateExpression, TemplateLiteral, TypeAssertion, ParenthesizedExpression, FunctionExpression, ArrowFunction, EqualsGreaterThanToken, ConciseBody, DeleteExpression, TypeOfExpression, VoidExpression, AwaitExpression, PrefixUnaryExpression, PrefixUnaryOperator, PostfixUnaryExpression, PostfixUnaryOperator, BinaryExpression, BinaryOperator, BinaryOperatorToken, ConditionalExpression, ColonToken, TemplateExpression, TemplateSpan, NoSubstitutionTemplateLiteral, YieldExpression, SpreadElement, ClassExpression, HeritageClause, ClassElement, OmittedExpression, ExpressionWithTypeArguments, AsExpression, NonNullExpression, NonNullChain, MetaProperty, SatisfiesExpression, SemicolonClassElement, Statement, VariableStatement, VariableDeclarationList, VariableDeclaration, EmptyStatement, ExpressionStatement, IfStatement, DoStatement, WhileStatement, ForStatement, ForInitializer, ForInStatement, ForOfStatement, AwaitKeyword, ContinueStatement, BreakStatement, ReturnStatement, WithStatement, SwitchStatement, CaseBlock, LabeledStatement, ThrowStatement, TryStatement, CatchClause, DebuggerStatement, NodeFlags, FunctionDeclaration, ClassDeclaration, InterfaceDeclaration, TypeAliasDeclaration, EnumDeclaration, EnumMember, ModuleDeclaration, ModuleName, ModuleBody, ModuleBlock, CaseOrDefaultClause, NamespaceExportDeclaration, ImportEqualsDeclaration, ModuleReference, ImportDeclaration, ImportClause, NamedImportBindings, AssertClause, AssertEntry, AssertionKey, ImportTypeAssertionContainer, ImportAttribute, ImportAttributeName, NamespaceImport, NamespaceExport, NamedImports, ImportSpecifier, ExportAssignment, ExportDeclaration, NamedExportBindings, NamedExports, ExportSpecifier, ExternalModuleReference, JSDocAllType, JSDocUnknownType, JSDocNonNullableType, JSDocNullableType, JSDocOptionalType, JSDocFunctionType, JSDocVariadicType, JSDocNamepathType, JSDocTypeExpression, JSDocNameReference, JSDocMemberName, JSDocLink, JSDocLinkCode, JSDocLinkPlain, JSDocTypeLiteral, JSDocPropertyLikeTag, JSDocSignature, JSDocTemplateTag, JSDocParameterTag, JSDocReturnTag, JSDocComment, JSDocTypedefTag, JSDocNamespaceDeclaration, JSDocPropertyTag, JSDocTypeTag, JSDocSeeTag, JSDocThisTag, JSDocEnumTag, JSDocCallbackTag, JSDocOverloadTag, JSDocAugmentsTag, JSDocImplementsTag, JSDocAuthorTag, JSDocClassTag, JSDocPublicTag, JSDocPrivateTag, JSDocProtectedTag, JSDocReadonlyTag, JSDocUnknownTag, JSDocDeprecatedTag, JSDocOverrideTag, JSDocThrowsTag, JSDocSatisfiesTag, JSDocText, JSDoc, JSDocTag, JsxElement, JsxOpeningElement, JsxChild, JsxClosingElement, JsxSelfClosingElement, JsxTagNameExpression, JsxAttributes, JsxFragment, JsxOpeningFragment, JsxClosingFragment, JsxText, JsxAttribute, JsxAttributeName, JsxAttributeValue, JsxAttributeLike, JsxSpreadAttribute, JsxExpression, JsxNamespacedName, CaseClause, DefaultClause, PropertyAssignment, ShorthandPropertyAssignment, SpreadAssignment, SourceFile, FileReference, NotEmittedStatement, PartiallyEmittedExpression, CommaListExpression, Bundle, UnparsedSource, InputFiles, DestructuringAssignment, EqualsToken, AssignmentExpression, ImmediatelyInvokedArrowFunction, OuterExpressionKinds, HasModifiers, HasDecorators, AccessorDeclaration } from "typescript";
;
export function createNodeArray<T extends Node>({ elements, hasTrailingComma }: {
    elements?: readonly T[];
    hasTrailingComma?: boolean;
}): NodeArray<T> {
    return ts.factory.createNodeArray<T>(elements, hasTrailingComma);
}
export function createNumericLiteral({ value, numericLiteralFlags }: {
    value: string | number;
    numericLiteralFlags?: TokenFlags;
}): NumericLiteral {
    return ts.factory.createNumericLiteral(value, numericLiteralFlags);
}
export function createBigIntLiteral({ value }: {
    value: string | PseudoBigInt;
}): BigIntLiteral {
    return ts.factory.createBigIntLiteral(value);
}
export function createStringLiteral({ text, isSingleQuote }: {
    text: string;
    isSingleQuote?: boolean;
}): StringLiteral {
    return ts.factory.createStringLiteral(text, isSingleQuote);
}
export function createStringLiteralFromNode({ sourceNode, isSingleQuote }: {
    sourceNode: PropertyNameLiteral | PrivateIdentifier;
    isSingleQuote?: boolean;
}): StringLiteral {
    return ts.factory.createStringLiteralFromNode(sourceNode, isSingleQuote);
}
export function createRegularExpressionLiteral({ text }: {
    text: string;
}): RegularExpressionLiteral {
    return ts.factory.createRegularExpressionLiteral(text);
}
export function createIdentifier({ text }: {
    text: string;
}): Identifier {
    return ts.factory.createIdentifier(text);
}
export function createTempVariable({ recordTempVariable, reservedInNestedScopes }: {
    recordTempVariable: ((node: Identifier) => void) | undefined;
    reservedInNestedScopes?: boolean;
}): Identifier {
    return ts.factory.createTempVariable(recordTempVariable, reservedInNestedScopes);
}
export function createLoopVariable({ reservedInNestedScopes }: {
    reservedInNestedScopes?: boolean;
}): Identifier {
    return ts.factory.createLoopVariable(reservedInNestedScopes);
}
export function createUniqueName({ text, flags }: {
    text: string;
    flags?: GeneratedIdentifierFlags;
}): Identifier {
    return ts.factory.createUniqueName(text, flags);
}
export function getGeneratedNameForNode({ node, flags }: {
    node: Node | undefined;
    flags?: GeneratedIdentifierFlags;
}): Identifier {
    return ts.factory.getGeneratedNameForNode(node, flags);
}
export function createPrivateIdentifier({ text }: {
    text: string;
}): PrivateIdentifier {
    return ts.factory.createPrivateIdentifier(text);
}
export function createUniquePrivateName({ text }: {
    text?: string;
}): PrivateIdentifier {
    return ts.factory.createUniquePrivateName(text);
}
export function getGeneratedPrivateNameForNode({ node }: {
    node: Node;
}): PrivateIdentifier {
    return ts.factory.getGeneratedPrivateNameForNode(node);
}
export function createToken({ token }: {
    token: SyntaxKind.SuperKeyword;
}): SuperExpression;
export function createToken({ token }: {
    token: SyntaxKind.ThisKeyword;
}): ThisExpression;
export function createToken({ token }: {
    token: SyntaxKind.NullKeyword;
}): NullLiteral;
export function createToken({ token }: {
    token: SyntaxKind.TrueKeyword;
}): TrueLiteral;
export function createToken({ token }: {
    token: SyntaxKind.FalseKeyword;
}): FalseLiteral;
export function createToken({ token }: {
    token: SyntaxKind.EndOfFileToken;
}): EndOfFileToken;
export function createToken({ token }: {
    token: SyntaxKind.Unknown;
}): Token<SyntaxKind.Unknown>;
export function createToken<TKind extends PunctuationSyntaxKind>({ token }: {
    token: TKind;
}): PunctuationToken<TKind>;
export function createToken<TKind extends KeywordTypeSyntaxKind>({ token }: {
    token: TKind;
}): KeywordTypeNode<TKind>;
export function createToken<TKind extends ModifierSyntaxKind>({ token }: {
    token: TKind;
}): ModifierToken<TKind>;
export function createToken<TKind extends KeywordSyntaxKind>({ token }: {
    token: TKind;
}): KeywordToken<TKind>;
export function createToken({ token }: {
    token;
}) {
    return ts.factory.createToken(token);
}
export function createSuper(): SuperExpression {
    return ts.factory.createSuper();
}
export function createThis(): ThisExpression {
    return ts.factory.createThis();
}
export function createNull(): NullLiteral {
    return ts.factory.createNull();
}
export function createTrue(): TrueLiteral {
    return ts.factory.createTrue();
}
export function createFalse(): FalseLiteral {
    return ts.factory.createFalse();
}
export function createModifier<T extends ModifierSyntaxKind>({ kind }: {
    kind: T;
}): ModifierToken<T> {
    return ts.factory.createModifier<T>(kind);
}
export function createModifiersFromModifierFlags({ flags }: {
    flags: ModifierFlags;
}): Modifier[] | undefined {
    return ts.factory.createModifiersFromModifierFlags(flags);
}
export function createQualifiedName({ left, right }: {
    left: EntityName;
    right: string | Identifier;
}): QualifiedName {
    return ts.factory.createQualifiedName(left, right);
}
export function updateQualifiedName({ node, left, right }: {
    node: QualifiedName;
    left: EntityName;
    right: Identifier;
}): QualifiedName {
    return ts.factory.updateQualifiedName(node, left, right);
}
export function createComputedPropertyName({ expression }: {
    expression: Expression;
}): ComputedPropertyName {
    return ts.factory.createComputedPropertyName(expression);
}
export function updateComputedPropertyName({ node, expression }: {
    node: ComputedPropertyName;
    expression: Expression;
}): ComputedPropertyName {
    return ts.factory.updateComputedPropertyName(node, expression);
}
export function createTypeParameterDeclaration({ modifiers, name, constraint, defaultType }: {
    modifiers: readonly Modifier[] | undefined;
    name: string | Identifier;
    constraint?: TypeNode;
    defaultType?: TypeNode;
}): TypeParameterDeclaration {
    return ts.factory.createTypeParameterDeclaration(modifiers, name, constraint, defaultType);
}
export function updateTypeParameterDeclaration({ node, modifiers, name, constraint, defaultType }: {
    node: TypeParameterDeclaration;
    modifiers: readonly Modifier[] | undefined;
    name: Identifier;
    constraint: TypeNode | undefined;
    defaultType: TypeNode | undefined;
}): TypeParameterDeclaration {
    return ts.factory.updateTypeParameterDeclaration(node, modifiers, name, constraint, defaultType);
}
export function createParameterDeclaration({ modifiers, dotDotDotToken, name, questionToken, type, initializer }: {
    modifiers: readonly ModifierLike[] | undefined;
    dotDotDotToken: DotDotDotToken | undefined;
    name: string | BindingName;
    questionToken?: QuestionToken;
    type?: TypeNode;
    initializer?: Expression;
}): ParameterDeclaration {
    return ts.factory.createParameterDeclaration(modifiers, dotDotDotToken, name, questionToken, type, initializer);
}
export function updateParameterDeclaration({ node, modifiers, dotDotDotToken, name, questionToken, type, initializer }: {
    node: ParameterDeclaration;
    modifiers: readonly ModifierLike[] | undefined;
    dotDotDotToken: DotDotDotToken | undefined;
    name: string | BindingName;
    questionToken: QuestionToken | undefined;
    type: TypeNode | undefined;
    initializer: Expression | undefined;
}): ParameterDeclaration {
    return ts.factory.updateParameterDeclaration(node, modifiers, dotDotDotToken, name, questionToken, type, initializer);
}
export function createDecorator({ expression }: {
    expression: Expression;
}): Decorator {
    return ts.factory.createDecorator(expression);
}
export function updateDecorator({ node, expression }: {
    node: Decorator;
    expression: Expression;
}): Decorator {
    return ts.factory.updateDecorator(node, expression);
}
export function createPropertySignature({ modifiers, name, questionToken, type }: {
    modifiers: readonly Modifier[] | undefined;
    name: PropertyName | string;
    questionToken: QuestionToken | undefined;
    type: TypeNode | undefined;
}): PropertySignature {
    return ts.factory.createPropertySignature(modifiers, name, questionToken, type);
}
export function updatePropertySignature({ node, modifiers, name, questionToken, type }: {
    node: PropertySignature;
    modifiers: readonly Modifier[] | undefined;
    name: PropertyName;
    questionToken: QuestionToken | undefined;
    type: TypeNode | undefined;
}): PropertySignature {
    return ts.factory.updatePropertySignature(node, modifiers, name, questionToken, type);
}
export function createPropertyDeclaration({ modifiers, name, questionOrExclamationToken, type, initializer }: {
    modifiers: readonly ModifierLike[] | undefined;
    name: string | PropertyName;
    questionOrExclamationToken: QuestionToken | ExclamationToken | undefined;
    type: TypeNode | undefined;
    initializer: Expression | undefined;
}): PropertyDeclaration {
    return ts.factory.createPropertyDeclaration(modifiers, name, questionOrExclamationToken, type, initializer);
}
export function updatePropertyDeclaration({ node, modifiers, name, questionOrExclamationToken, type, initializer }: {
    node: PropertyDeclaration;
    modifiers: readonly ModifierLike[] | undefined;
    name: string | PropertyName;
    questionOrExclamationToken: QuestionToken | ExclamationToken | undefined;
    type: TypeNode | undefined;
    initializer: Expression | undefined;
}): PropertyDeclaration {
    return ts.factory.updatePropertyDeclaration(node, modifiers, name, questionOrExclamationToken, type, initializer);
}
export function createMethodSignature({ modifiers, name, questionToken, typeParameters, parameters, type }: {
    modifiers: readonly Modifier[] | undefined;
    name: string | PropertyName;
    questionToken: QuestionToken | undefined;
    typeParameters: readonly TypeParameterDeclaration[] | undefined;
    parameters: readonly ParameterDeclaration[];
    type: TypeNode | undefined;
}): MethodSignature {
    return ts.factory.createMethodSignature(modifiers, name, questionToken, typeParameters, parameters, type);
}
export function updateMethodSignature({ node, modifiers, name, questionToken, typeParameters, parameters, type }: {
    node: MethodSignature;
    modifiers: readonly Modifier[] | undefined;
    name: PropertyName;
    questionToken: QuestionToken | undefined;
    typeParameters: NodeArray<TypeParameterDeclaration> | undefined;
    parameters: NodeArray<ParameterDeclaration>;
    type: TypeNode | undefined;
}): MethodSignature {
    return ts.factory.updateMethodSignature(node, modifiers, name, questionToken, typeParameters, parameters, type);
}
export function createMethodDeclaration({ modifiers, asteriskToken, name, questionToken, typeParameters, parameters, type, body }: {
    modifiers: readonly ModifierLike[] | undefined;
    asteriskToken: AsteriskToken | undefined;
    name: string | PropertyName;
    questionToken: QuestionToken | undefined;
    typeParameters: readonly TypeParameterDeclaration[] | undefined;
    parameters: readonly ParameterDeclaration[];
    type: TypeNode | undefined;
    body: Block | undefined;
}): MethodDeclaration {
    return ts.factory.createMethodDeclaration(modifiers, asteriskToken, name, questionToken, typeParameters, parameters, type, body);
}
export function updateMethodDeclaration({ node, modifiers, asteriskToken, name, questionToken, typeParameters, parameters, type, body }: {
    node: MethodDeclaration;
    modifiers: readonly ModifierLike[] | undefined;
    asteriskToken: AsteriskToken | undefined;
    name: PropertyName;
    questionToken: QuestionToken | undefined;
    typeParameters: readonly TypeParameterDeclaration[] | undefined;
    parameters: readonly ParameterDeclaration[];
    type: TypeNode | undefined;
    body: Block | undefined;
}): MethodDeclaration {
    return ts.factory.updateMethodDeclaration(node, modifiers, asteriskToken, name, questionToken, typeParameters, parameters, type, body);
}
export function createConstructorDeclaration({ modifiers, parameters, body }: {
    modifiers: readonly ModifierLike[] | undefined;
    parameters: readonly ParameterDeclaration[];
    body: Block | undefined;
}): ConstructorDeclaration {
    return ts.factory.createConstructorDeclaration(modifiers, parameters, body);
}
export function updateConstructorDeclaration({ node, modifiers, parameters, body }: {
    node: ConstructorDeclaration;
    modifiers: readonly ModifierLike[] | undefined;
    parameters: readonly ParameterDeclaration[];
    body: Block | undefined;
}): ConstructorDeclaration {
    return ts.factory.updateConstructorDeclaration(node, modifiers, parameters, body);
}
export function createGetAccessorDeclaration({ modifiers, name, parameters, type, body }: {
    modifiers: readonly ModifierLike[] | undefined;
    name: string | PropertyName;
    parameters: readonly ParameterDeclaration[];
    type: TypeNode | undefined;
    body: Block | undefined;
}): GetAccessorDeclaration {
    return ts.factory.createGetAccessorDeclaration(modifiers, name, parameters, type, body);
}
export function updateGetAccessorDeclaration({ node, modifiers, name, parameters, type, body }: {
    node: GetAccessorDeclaration;
    modifiers: readonly ModifierLike[] | undefined;
    name: PropertyName;
    parameters: readonly ParameterDeclaration[];
    type: TypeNode | undefined;
    body: Block | undefined;
}): GetAccessorDeclaration {
    return ts.factory.updateGetAccessorDeclaration(node, modifiers, name, parameters, type, body);
}
export function createSetAccessorDeclaration({ modifiers, name, parameters, body }: {
    modifiers: readonly ModifierLike[] | undefined;
    name: string | PropertyName;
    parameters: readonly ParameterDeclaration[];
    body: Block | undefined;
}): SetAccessorDeclaration {
    return ts.factory.createSetAccessorDeclaration(modifiers, name, parameters, body);
}
export function updateSetAccessorDeclaration({ node, modifiers, name, parameters, body }: {
    node: SetAccessorDeclaration;
    modifiers: readonly ModifierLike[] | undefined;
    name: PropertyName;
    parameters: readonly ParameterDeclaration[];
    body: Block | undefined;
}): SetAccessorDeclaration {
    return ts.factory.updateSetAccessorDeclaration(node, modifiers, name, parameters, body);
}
export function createCallSignature({ typeParameters, parameters, type }: {
    typeParameters: readonly TypeParameterDeclaration[] | undefined;
    parameters: readonly ParameterDeclaration[];
    type: TypeNode | undefined;
}): CallSignatureDeclaration {
    return ts.factory.createCallSignature(typeParameters, parameters, type);
}
export function updateCallSignature({ node, typeParameters, parameters, type }: {
    node: CallSignatureDeclaration;
    typeParameters: NodeArray<TypeParameterDeclaration> | undefined;
    parameters: NodeArray<ParameterDeclaration>;
    type: TypeNode | undefined;
}): CallSignatureDeclaration {
    return ts.factory.updateCallSignature(node, typeParameters, parameters, type);
}
export function createConstructSignature({ typeParameters, parameters, type }: {
    typeParameters: readonly TypeParameterDeclaration[] | undefined;
    parameters: readonly ParameterDeclaration[];
    type: TypeNode | undefined;
}): ConstructSignatureDeclaration {
    return ts.factory.createConstructSignature(typeParameters, parameters, type);
}
export function updateConstructSignature({ node, typeParameters, parameters, type }: {
    node: ConstructSignatureDeclaration;
    typeParameters: NodeArray<TypeParameterDeclaration> | undefined;
    parameters: NodeArray<ParameterDeclaration>;
    type: TypeNode | undefined;
}): ConstructSignatureDeclaration {
    return ts.factory.updateConstructSignature(node, typeParameters, parameters, type);
}
export function createIndexSignature({ modifiers, parameters, type }: {
    modifiers: readonly ModifierLike[] | undefined;
    parameters: readonly ParameterDeclaration[];
    type: TypeNode;
}): IndexSignatureDeclaration {
    return ts.factory.createIndexSignature(modifiers, parameters, type);
}
export function updateIndexSignature({ node, modifiers, parameters, type }: {
    node: IndexSignatureDeclaration;
    modifiers: readonly ModifierLike[] | undefined;
    parameters: readonly ParameterDeclaration[];
    type: TypeNode;
}): IndexSignatureDeclaration {
    return ts.factory.updateIndexSignature(node, modifiers, parameters, type);
}
export function createTemplateLiteralTypeSpan({ type, literal }: {
    type: TypeNode;
    literal: TemplateMiddle | TemplateTail;
}): TemplateLiteralTypeSpan {
    return ts.factory.createTemplateLiteralTypeSpan(type, literal);
}
export function updateTemplateLiteralTypeSpan({ node, type, literal }: {
    node: TemplateLiteralTypeSpan;
    type: TypeNode;
    literal: TemplateMiddle | TemplateTail;
}): TemplateLiteralTypeSpan {
    return ts.factory.updateTemplateLiteralTypeSpan(node, type, literal);
}
export function createClassStaticBlockDeclaration({ body }: {
    body: Block;
}): ClassStaticBlockDeclaration {
    return ts.factory.createClassStaticBlockDeclaration(body);
}
export function updateClassStaticBlockDeclaration({ node, body }: {
    node: ClassStaticBlockDeclaration;
    body: Block;
}): ClassStaticBlockDeclaration {
    return ts.factory.updateClassStaticBlockDeclaration(node, body);
}
export function createKeywordTypeNode<TKind extends KeywordTypeSyntaxKind>({ kind }: {
    kind: TKind;
}): KeywordTypeNode<TKind> {
    return ts.factory.createKeywordTypeNode<TKind>(kind);
}
export function createTypePredicateNode({ assertsModifier, parameterName, type }: {
    assertsModifier: AssertsKeyword | undefined;
    parameterName: Identifier | ThisTypeNode | string;
    type: TypeNode | undefined;
}): TypePredicateNode {
    return ts.factory.createTypePredicateNode(assertsModifier, parameterName, type);
}
export function updateTypePredicateNode({ node, assertsModifier, parameterName, type }: {
    node: TypePredicateNode;
    assertsModifier: AssertsKeyword | undefined;
    parameterName: Identifier | ThisTypeNode;
    type: TypeNode | undefined;
}): TypePredicateNode {
    return ts.factory.updateTypePredicateNode(node, assertsModifier, parameterName, type);
}
export function createTypeReferenceNode({ typeName, typeArguments }: {
    typeName: string | EntityName;
    typeArguments?: readonly TypeNode[];
}): TypeReferenceNode {
    return ts.factory.createTypeReferenceNode(typeName, typeArguments);
}
export function updateTypeReferenceNode({ node, typeName, typeArguments }: {
    node: TypeReferenceNode;
    typeName: EntityName;
    typeArguments: NodeArray<TypeNode> | undefined;
}): TypeReferenceNode {
    return ts.factory.updateTypeReferenceNode(node, typeName, typeArguments);
}
export function createFunctionTypeNode({ typeParameters, parameters, type }: {
    typeParameters: readonly TypeParameterDeclaration[] | undefined;
    parameters: readonly ParameterDeclaration[];
    type: TypeNode;
}): FunctionTypeNode {
    return ts.factory.createFunctionTypeNode(typeParameters, parameters, type);
}
export function updateFunctionTypeNode({ node, typeParameters, parameters, type }: {
    node: FunctionTypeNode;
    typeParameters: NodeArray<TypeParameterDeclaration> | undefined;
    parameters: NodeArray<ParameterDeclaration>;
    type: TypeNode;
}): FunctionTypeNode {
    return ts.factory.updateFunctionTypeNode(node, typeParameters, parameters, type);
}
export function createConstructorTypeNode({ modifiers, typeParameters, parameters, type }: {
    modifiers: readonly Modifier[] | undefined;
    typeParameters: readonly TypeParameterDeclaration[] | undefined;
    parameters: readonly ParameterDeclaration[];
    type: TypeNode;
}): ConstructorTypeNode {
    return ts.factory.createConstructorTypeNode(modifiers, typeParameters, parameters, type);
}
export function updateConstructorTypeNode({ node, modifiers, typeParameters, parameters, type }: {
    node: ConstructorTypeNode;
    modifiers: readonly Modifier[] | undefined;
    typeParameters: NodeArray<TypeParameterDeclaration> | undefined;
    parameters: NodeArray<ParameterDeclaration>;
    type: TypeNode;
}): ConstructorTypeNode {
    return ts.factory.updateConstructorTypeNode(node, modifiers, typeParameters, parameters, type);
}
export function createTypeQueryNode({ exprName, typeArguments }: {
    exprName: EntityName;
    typeArguments?: readonly TypeNode[];
}): TypeQueryNode {
    return ts.factory.createTypeQueryNode(exprName, typeArguments);
}
export function updateTypeQueryNode({ node, exprName, typeArguments }: {
    node: TypeQueryNode;
    exprName: EntityName;
    typeArguments?: readonly TypeNode[];
}): TypeQueryNode {
    return ts.factory.updateTypeQueryNode(node, exprName, typeArguments);
}
export function createTypeLiteralNode({ members }: {
    members: readonly TypeElement[] | undefined;
}): TypeLiteralNode {
    return ts.factory.createTypeLiteralNode(members);
}
export function updateTypeLiteralNode({ node, members }: {
    node: TypeLiteralNode;
    members: NodeArray<TypeElement>;
}): TypeLiteralNode {
    return ts.factory.updateTypeLiteralNode(node, members);
}
export function createArrayTypeNode({ elementType }: {
    elementType: TypeNode;
}): ArrayTypeNode {
    return ts.factory.createArrayTypeNode(elementType);
}
export function updateArrayTypeNode({ node, elementType }: {
    node: ArrayTypeNode;
    elementType: TypeNode;
}): ArrayTypeNode {
    return ts.factory.updateArrayTypeNode(node, elementType);
}
export function createTupleTypeNode({ elements }: {
    elements: readonly (TypeNode | NamedTupleMember)[];
}): TupleTypeNode {
    return ts.factory.createTupleTypeNode(elements);
}
export function updateTupleTypeNode({ node, elements }: {
    node: TupleTypeNode;
    elements: readonly (TypeNode | NamedTupleMember)[];
}): TupleTypeNode {
    return ts.factory.updateTupleTypeNode(node, elements);
}
export function createNamedTupleMember({ dotDotDotToken, name, questionToken, type }: {
    dotDotDotToken: DotDotDotToken | undefined;
    name: Identifier;
    questionToken: QuestionToken | undefined;
    type: TypeNode;
}): NamedTupleMember {
    return ts.factory.createNamedTupleMember(dotDotDotToken, name, questionToken, type);
}
export function updateNamedTupleMember({ node, dotDotDotToken, name, questionToken, type }: {
    node: NamedTupleMember;
    dotDotDotToken: DotDotDotToken | undefined;
    name: Identifier;
    questionToken: QuestionToken | undefined;
    type: TypeNode;
}): NamedTupleMember {
    return ts.factory.updateNamedTupleMember(node, dotDotDotToken, name, questionToken, type);
}
export function createOptionalTypeNode({ type }: {
    type: TypeNode;
}): OptionalTypeNode {
    return ts.factory.createOptionalTypeNode(type);
}
export function updateOptionalTypeNode({ node, type }: {
    node: OptionalTypeNode;
    type: TypeNode;
}): OptionalTypeNode {
    return ts.factory.updateOptionalTypeNode(node, type);
}
export function createRestTypeNode({ type }: {
    type: TypeNode;
}): RestTypeNode {
    return ts.factory.createRestTypeNode(type);
}
export function updateRestTypeNode({ node, type }: {
    node: RestTypeNode;
    type: TypeNode;
}): RestTypeNode {
    return ts.factory.updateRestTypeNode(node, type);
}
export function createUnionTypeNode({ types }: {
    types: readonly TypeNode[];
}): UnionTypeNode {
    return ts.factory.createUnionTypeNode(types);
}
export function updateUnionTypeNode({ node, types }: {
    node: UnionTypeNode;
    types: NodeArray<TypeNode>;
}): UnionTypeNode {
    return ts.factory.updateUnionTypeNode(node, types);
}
export function createIntersectionTypeNode({ types }: {
    types: readonly TypeNode[];
}): IntersectionTypeNode {
    return ts.factory.createIntersectionTypeNode(types);
}
export function updateIntersectionTypeNode({ node, types }: {
    node: IntersectionTypeNode;
    types: NodeArray<TypeNode>;
}): IntersectionTypeNode {
    return ts.factory.updateIntersectionTypeNode(node, types);
}
export function createConditionalTypeNode({ checkType, extendsType, trueType, falseType }: {
    checkType: TypeNode;
    extendsType: TypeNode;
    trueType: TypeNode;
    falseType: TypeNode;
}): ConditionalTypeNode {
    return ts.factory.createConditionalTypeNode(checkType, extendsType, trueType, falseType);
}
export function updateConditionalTypeNode({ node, checkType, extendsType, trueType, falseType }: {
    node: ConditionalTypeNode;
    checkType: TypeNode;
    extendsType: TypeNode;
    trueType: TypeNode;
    falseType: TypeNode;
}): ConditionalTypeNode {
    return ts.factory.updateConditionalTypeNode(node, checkType, extendsType, trueType, falseType);
}
export function createInferTypeNode({ typeParameter }: {
    typeParameter: TypeParameterDeclaration;
}): InferTypeNode {
    return ts.factory.createInferTypeNode(typeParameter);
}
export function updateInferTypeNode({ node, typeParameter }: {
    node: InferTypeNode;
    typeParameter: TypeParameterDeclaration;
}): InferTypeNode {
    return ts.factory.updateInferTypeNode(node, typeParameter);
}
export function createImportTypeNode({ argument, attributes, qualifier, typeArguments, isTypeOf }: {
    argument: TypeNode;
    attributes?: ImportAttributes;
    qualifier?: EntityName;
    typeArguments?: readonly TypeNode[];
    isTypeOf?: boolean;
}): ImportTypeNode {
    return ts.factory.createImportTypeNode(argument, attributes, qualifier, typeArguments, isTypeOf);
}
export function updateImportTypeNode({ node, argument, attributes, qualifier, typeArguments, isTypeOf }: {
    node: ImportTypeNode;
    argument: TypeNode;
    attributes: ImportAttributes | undefined;
    qualifier: EntityName | undefined;
    typeArguments: readonly TypeNode[] | undefined;
    isTypeOf?: boolean;
}): ImportTypeNode {
    return ts.factory.updateImportTypeNode(node, argument, attributes, qualifier, typeArguments, isTypeOf);
}
export function createParenthesizedType({ type }: {
    type: TypeNode;
}): ParenthesizedTypeNode {
    return ts.factory.createParenthesizedType(type);
}
export function updateParenthesizedType({ node, type }: {
    node: ParenthesizedTypeNode;
    type: TypeNode;
}): ParenthesizedTypeNode {
    return ts.factory.updateParenthesizedType(node, type);
}
export function createThisTypeNode(): ThisTypeNode {
    return ts.factory.createThisTypeNode();
}
export function createTypeOperatorNode({ operator, type }: {
    operator: SyntaxKind.KeyOfKeyword | SyntaxKind.UniqueKeyword | SyntaxKind.ReadonlyKeyword;
    type: TypeNode;
}): TypeOperatorNode {
    return ts.factory.createTypeOperatorNode(operator, type);
}
export function updateTypeOperatorNode({ node, type }: {
    node: TypeOperatorNode;
    type: TypeNode;
}): TypeOperatorNode {
    return ts.factory.updateTypeOperatorNode(node, type);
}
export function createIndexedAccessTypeNode({ objectType, indexType }: {
    objectType: TypeNode;
    indexType: TypeNode;
}): IndexedAccessTypeNode {
    return ts.factory.createIndexedAccessTypeNode(objectType, indexType);
}
export function updateIndexedAccessTypeNode({ node, objectType, indexType }: {
    node: IndexedAccessTypeNode;
    objectType: TypeNode;
    indexType: TypeNode;
}): IndexedAccessTypeNode {
    return ts.factory.updateIndexedAccessTypeNode(node, objectType, indexType);
}
export function createMappedTypeNode({ readonlyToken, typeParameter, nameType, questionToken, type, members }: {
    readonlyToken: ReadonlyKeyword | PlusToken | MinusToken | undefined;
    typeParameter: TypeParameterDeclaration;
    nameType: TypeNode | undefined;
    questionToken: QuestionToken | PlusToken | MinusToken | undefined;
    type: TypeNode | undefined;
    members: NodeArray<TypeElement> | undefined;
}): MappedTypeNode {
    return ts.factory.createMappedTypeNode(readonlyToken, typeParameter, nameType, questionToken, type, members);
}
export function updateMappedTypeNode({ node, readonlyToken, typeParameter, nameType, questionToken, type, members }: {
    node: MappedTypeNode;
    readonlyToken: ReadonlyKeyword | PlusToken | MinusToken | undefined;
    typeParameter: TypeParameterDeclaration;
    nameType: TypeNode | undefined;
    questionToken: QuestionToken | PlusToken | MinusToken | undefined;
    type: TypeNode | undefined;
    members: NodeArray<TypeElement> | undefined;
}): MappedTypeNode {
    return ts.factory.updateMappedTypeNode(node, readonlyToken, typeParameter, nameType, questionToken, type, members);
}
export function createLiteralTypeNode({ literal }: {
    literal: LiteralTypeNode["literal"];
}): LiteralTypeNode {
    return ts.factory.createLiteralTypeNode(literal);
}
export function updateLiteralTypeNode({ node, literal }: {
    node: LiteralTypeNode;
    literal: LiteralTypeNode["literal"];
}): LiteralTypeNode {
    return ts.factory.updateLiteralTypeNode(node, literal);
}
export function createTemplateLiteralType({ head, templateSpans }: {
    head: TemplateHead;
    templateSpans: readonly TemplateLiteralTypeSpan[];
}): TemplateLiteralTypeNode {
    return ts.factory.createTemplateLiteralType(head, templateSpans);
}
export function updateTemplateLiteralType({ node, head, templateSpans }: {
    node: TemplateLiteralTypeNode;
    head: TemplateHead;
    templateSpans: readonly TemplateLiteralTypeSpan[];
}): TemplateLiteralTypeNode {
    return ts.factory.updateTemplateLiteralType(node, head, templateSpans);
}
export function createObjectBindingPattern({ elements }: {
    elements: readonly BindingElement[];
}): ObjectBindingPattern {
    return ts.factory.createObjectBindingPattern(elements);
}
export function updateObjectBindingPattern({ node, elements }: {
    node: ObjectBindingPattern;
    elements: readonly BindingElement[];
}): ObjectBindingPattern {
    return ts.factory.updateObjectBindingPattern(node, elements);
}
export function createArrayBindingPattern({ elements }: {
    elements: readonly ArrayBindingElement[];
}): ArrayBindingPattern {
    return ts.factory.createArrayBindingPattern(elements);
}
export function updateArrayBindingPattern({ node, elements }: {
    node: ArrayBindingPattern;
    elements: readonly ArrayBindingElement[];
}): ArrayBindingPattern {
    return ts.factory.updateArrayBindingPattern(node, elements);
}
export function createBindingElement({ dotDotDotToken, propertyName, name, initializer }: {
    dotDotDotToken: DotDotDotToken | undefined;
    propertyName: string | PropertyName | undefined;
    name: string | BindingName;
    initializer?: Expression;
}): BindingElement {
    return ts.factory.createBindingElement(dotDotDotToken, propertyName, name, initializer);
}
export function updateBindingElement({ node, dotDotDotToken, propertyName, name, initializer }: {
    node: BindingElement;
    dotDotDotToken: DotDotDotToken | undefined;
    propertyName: PropertyName | undefined;
    name: BindingName;
    initializer: Expression | undefined;
}): BindingElement {
    return ts.factory.updateBindingElement(node, dotDotDotToken, propertyName, name, initializer);
}
export function createArrayLiteralExpression({ elements, multiLine }: {
    elements?: readonly Expression[];
    multiLine?: boolean;
}): ArrayLiteralExpression {
    return ts.factory.createArrayLiteralExpression(elements, multiLine);
}
export function updateArrayLiteralExpression({ node, elements }: {
    node: ArrayLiteralExpression;
    elements: readonly Expression[];
}): ArrayLiteralExpression {
    return ts.factory.updateArrayLiteralExpression(node, elements);
}
export function createObjectLiteralExpression({ properties, multiLine }: {
    properties?: readonly ObjectLiteralElementLike[];
    multiLine?: boolean;
}): ObjectLiteralExpression {
    return ts.factory.createObjectLiteralExpression(properties, multiLine);
}
export function updateObjectLiteralExpression({ node, properties }: {
    node: ObjectLiteralExpression;
    properties: readonly ObjectLiteralElementLike[];
}): ObjectLiteralExpression {
    return ts.factory.updateObjectLiteralExpression(node, properties);
}
export function createPropertyAccessExpression({ expression, name }: {
    expression: Expression;
    name: string | MemberName;
}): PropertyAccessExpression {
    return ts.factory.createPropertyAccessExpression(expression, name);
}
export function updatePropertyAccessExpression({ node, expression, name }: {
    node: PropertyAccessExpression;
    expression: Expression;
    name: MemberName;
}): PropertyAccessExpression {
    return ts.factory.updatePropertyAccessExpression(node, expression, name);
}
export function createPropertyAccessChain({ expression, questionDotToken, name }: {
    expression: Expression;
    questionDotToken: QuestionDotToken | undefined;
    name: string | MemberName;
}): PropertyAccessChain {
    return ts.factory.createPropertyAccessChain(expression, questionDotToken, name);
}
export function updatePropertyAccessChain({ node, expression, questionDotToken, name }: {
    node: PropertyAccessChain;
    expression: Expression;
    questionDotToken: QuestionDotToken | undefined;
    name: MemberName;
}): PropertyAccessChain {
    return ts.factory.updatePropertyAccessChain(node, expression, questionDotToken, name);
}
export function createElementAccessExpression({ expression, index }: {
    expression: Expression;
    index: number | Expression;
}): ElementAccessExpression {
    return ts.factory.createElementAccessExpression(expression, index);
}
export function updateElementAccessExpression({ node, expression, argumentExpression }: {
    node: ElementAccessExpression;
    expression: Expression;
    argumentExpression: Expression;
}): ElementAccessExpression {
    return ts.factory.updateElementAccessExpression(node, expression, argumentExpression);
}
export function createElementAccessChain({ expression, questionDotToken, index }: {
    expression: Expression;
    questionDotToken: QuestionDotToken | undefined;
    index: number | Expression;
}): ElementAccessChain {
    return ts.factory.createElementAccessChain(expression, questionDotToken, index);
}
export function updateElementAccessChain({ node, expression, questionDotToken, argumentExpression }: {
    node: ElementAccessChain;
    expression: Expression;
    questionDotToken: QuestionDotToken | undefined;
    argumentExpression: Expression;
}): ElementAccessChain {
    return ts.factory.updateElementAccessChain(node, expression, questionDotToken, argumentExpression);
}
export function createCallExpression({ expression, typeArguments, argumentsArray }: {
    expression: Expression;
    typeArguments: readonly TypeNode[] | undefined;
    argumentsArray: readonly Expression[] | undefined;
}): CallExpression {
    return ts.factory.createCallExpression(expression, typeArguments, argumentsArray);
}
export function updateCallExpression({ node, expression, typeArguments, argumentsArray }: {
    node: CallExpression;
    expression: Expression;
    typeArguments: readonly TypeNode[] | undefined;
    argumentsArray: readonly Expression[];
}): CallExpression {
    return ts.factory.updateCallExpression(node, expression, typeArguments, argumentsArray);
}
export function createCallChain({ expression, questionDotToken, typeArguments, argumentsArray }: {
    expression: Expression;
    questionDotToken: QuestionDotToken | undefined;
    typeArguments: readonly TypeNode[] | undefined;
    argumentsArray: readonly Expression[] | undefined;
}): CallChain {
    return ts.factory.createCallChain(expression, questionDotToken, typeArguments, argumentsArray);
}
export function updateCallChain({ node, expression, questionDotToken, typeArguments, argumentsArray }: {
    node: CallChain;
    expression: Expression;
    questionDotToken: QuestionDotToken | undefined;
    typeArguments: readonly TypeNode[] | undefined;
    argumentsArray: readonly Expression[];
}): CallChain {
    return ts.factory.updateCallChain(node, expression, questionDotToken, typeArguments, argumentsArray);
}
export function createNewExpression({ expression, typeArguments, argumentsArray }: {
    expression: Expression;
    typeArguments: readonly TypeNode[] | undefined;
    argumentsArray: readonly Expression[] | undefined;
}): NewExpression {
    return ts.factory.createNewExpression(expression, typeArguments, argumentsArray);
}
export function updateNewExpression({ node, expression, typeArguments, argumentsArray }: {
    node: NewExpression;
    expression: Expression;
    typeArguments: readonly TypeNode[] | undefined;
    argumentsArray: readonly Expression[] | undefined;
}): NewExpression {
    return ts.factory.updateNewExpression(node, expression, typeArguments, argumentsArray);
}
export function createTaggedTemplateExpression({ tag, typeArguments, template }: {
    tag: Expression;
    typeArguments: readonly TypeNode[] | undefined;
    template: TemplateLiteral;
}): TaggedTemplateExpression {
    return ts.factory.createTaggedTemplateExpression(tag, typeArguments, template);
}
export function updateTaggedTemplateExpression({ node, tag, typeArguments, template }: {
    node: TaggedTemplateExpression;
    tag: Expression;
    typeArguments: readonly TypeNode[] | undefined;
    template: TemplateLiteral;
}): TaggedTemplateExpression {
    return ts.factory.updateTaggedTemplateExpression(node, tag, typeArguments, template);
}
export function createTypeAssertion({ type, expression }: {
    type: TypeNode;
    expression: Expression;
}): TypeAssertion {
    return ts.factory.createTypeAssertion(type, expression);
}
export function updateTypeAssertion({ node, type, expression }: {
    node: TypeAssertion;
    type: TypeNode;
    expression: Expression;
}): TypeAssertion {
    return ts.factory.updateTypeAssertion(node, type, expression);
}
export function createParenthesizedExpression({ expression }: {
    expression: Expression;
}): ParenthesizedExpression {
    return ts.factory.createParenthesizedExpression(expression);
}
export function updateParenthesizedExpression({ node, expression }: {
    node: ParenthesizedExpression;
    expression: Expression;
}): ParenthesizedExpression {
    return ts.factory.updateParenthesizedExpression(node, expression);
}
export function createFunctionExpression({ modifiers, asteriskToken, name, typeParameters, parameters, type, body }: {
    modifiers: readonly Modifier[] | undefined;
    asteriskToken: AsteriskToken | undefined;
    name: string | Identifier | undefined;
    typeParameters: readonly TypeParameterDeclaration[] | undefined;
    parameters: readonly ParameterDeclaration[] | undefined;
    type: TypeNode | undefined;
    body: Block;
}): FunctionExpression {
    return ts.factory.createFunctionExpression(modifiers, asteriskToken, name, typeParameters, parameters, type, body);
}
export function updateFunctionExpression({ node, modifiers, asteriskToken, name, typeParameters, parameters, type, body }: {
    node: FunctionExpression;
    modifiers: readonly Modifier[] | undefined;
    asteriskToken: AsteriskToken | undefined;
    name: Identifier | undefined;
    typeParameters: readonly TypeParameterDeclaration[] | undefined;
    parameters: readonly ParameterDeclaration[];
    type: TypeNode | undefined;
    body: Block;
}): FunctionExpression {
    return ts.factory.updateFunctionExpression(node, modifiers, asteriskToken, name, typeParameters, parameters, type, body);
}
export function createArrowFunction({ modifiers, typeParameters, parameters, type, equalsGreaterThanToken, body }: {
    modifiers: readonly Modifier[] | undefined;
    typeParameters: readonly TypeParameterDeclaration[] | undefined;
    parameters: readonly ParameterDeclaration[];
    type: TypeNode | undefined;
    equalsGreaterThanToken: EqualsGreaterThanToken | undefined;
    body: ConciseBody;
}): ArrowFunction {
    return ts.factory.createArrowFunction(modifiers, typeParameters, parameters, type, equalsGreaterThanToken, body);
}
export function updateArrowFunction({ node, modifiers, typeParameters, parameters, type, equalsGreaterThanToken, body }: {
    node: ArrowFunction;
    modifiers: readonly Modifier[] | undefined;
    typeParameters: readonly TypeParameterDeclaration[] | undefined;
    parameters: readonly ParameterDeclaration[];
    type: TypeNode | undefined;
    equalsGreaterThanToken: EqualsGreaterThanToken;
    body: ConciseBody;
}): ArrowFunction {
    return ts.factory.updateArrowFunction(node, modifiers, typeParameters, parameters, type, equalsGreaterThanToken, body);
}
export function createDeleteExpression({ expression }: {
    expression: Expression;
}): DeleteExpression {
    return ts.factory.createDeleteExpression(expression);
}
export function updateDeleteExpression({ node, expression }: {
    node: DeleteExpression;
    expression: Expression;
}): DeleteExpression {
    return ts.factory.updateDeleteExpression(node, expression);
}
export function createTypeOfExpression({ expression }: {
    expression: Expression;
}): TypeOfExpression {
    return ts.factory.createTypeOfExpression(expression);
}
export function updateTypeOfExpression({ node, expression }: {
    node: TypeOfExpression;
    expression: Expression;
}): TypeOfExpression {
    return ts.factory.updateTypeOfExpression(node, expression);
}
export function createVoidExpression({ expression }: {
    expression: Expression;
}): VoidExpression {
    return ts.factory.createVoidExpression(expression);
}
export function updateVoidExpression({ node, expression }: {
    node: VoidExpression;
    expression: Expression;
}): VoidExpression {
    return ts.factory.updateVoidExpression(node, expression);
}
export function createAwaitExpression({ expression }: {
    expression: Expression;
}): AwaitExpression {
    return ts.factory.createAwaitExpression(expression);
}
export function updateAwaitExpression({ node, expression }: {
    node: AwaitExpression;
    expression: Expression;
}): AwaitExpression {
    return ts.factory.updateAwaitExpression(node, expression);
}
export function createPrefixUnaryExpression({ operator, operand }: {
    operator: PrefixUnaryOperator;
    operand: Expression;
}): PrefixUnaryExpression {
    return ts.factory.createPrefixUnaryExpression(operator, operand);
}
export function updatePrefixUnaryExpression({ node, operand }: {
    node: PrefixUnaryExpression;
    operand: Expression;
}): PrefixUnaryExpression {
    return ts.factory.updatePrefixUnaryExpression(node, operand);
}
export function createPostfixUnaryExpression({ operand, operator }: {
    operand: Expression;
    operator: PostfixUnaryOperator;
}): PostfixUnaryExpression {
    return ts.factory.createPostfixUnaryExpression(operand, operator);
}
export function updatePostfixUnaryExpression({ node, operand }: {
    node: PostfixUnaryExpression;
    operand: Expression;
}): PostfixUnaryExpression {
    return ts.factory.updatePostfixUnaryExpression(node, operand);
}
export function createBinaryExpression({ left, operator, right }: {
    left: Expression;
    operator: BinaryOperator | BinaryOperatorToken;
    right: Expression;
}): BinaryExpression {
    return ts.factory.createBinaryExpression(left, operator, right);
}
export function updateBinaryExpression({ node, left, operator, right }: {
    node: BinaryExpression;
    left: Expression;
    operator: BinaryOperator | BinaryOperatorToken;
    right: Expression;
}): BinaryExpression {
    return ts.factory.updateBinaryExpression(node, left, operator, right);
}
export function createConditionalExpression({ condition, questionToken, whenTrue, colonToken, whenFalse }: {
    condition: Expression;
    questionToken: QuestionToken | undefined;
    whenTrue: Expression;
    colonToken: ColonToken | undefined;
    whenFalse: Expression;
}): ConditionalExpression {
    return ts.factory.createConditionalExpression(condition, questionToken, whenTrue, colonToken, whenFalse);
}
export function updateConditionalExpression({ node, condition, questionToken, whenTrue, colonToken, whenFalse }: {
    node: ConditionalExpression;
    condition: Expression;
    questionToken: QuestionToken;
    whenTrue: Expression;
    colonToken: ColonToken;
    whenFalse: Expression;
}): ConditionalExpression {
    return ts.factory.updateConditionalExpression(node, condition, questionToken, whenTrue, colonToken, whenFalse);
}
export function createTemplateExpression({ head, templateSpans }: {
    head: TemplateHead;
    templateSpans: readonly TemplateSpan[];
}): TemplateExpression {
    return ts.factory.createTemplateExpression(head, templateSpans);
}
export function updateTemplateExpression({ node, head, templateSpans }: {
    node: TemplateExpression;
    head: TemplateHead;
    templateSpans: readonly TemplateSpan[];
}): TemplateExpression {
    return ts.factory.updateTemplateExpression(node, head, templateSpans);
}
export function createTemplateHead({ text, rawText, templateFlags }: {
    text: string;
    rawText?: string;
    templateFlags?: TokenFlags;
}): TemplateHead;
export function createTemplateHead({ text, rawText, templateFlags }: {
    text: string | undefined;
    rawText: string;
    templateFlags?: TokenFlags;
}): TemplateHead;
export function createTemplateHead({ text, rawText, templateFlags }: {
    text;
    rawText?;
    templateFlags?;
}) {
    return ts.factory.createTemplateHead(text, rawText, templateFlags);
}
export function createTemplateMiddle({ text, rawText, templateFlags }: {
    text: string;
    rawText?: string;
    templateFlags?: TokenFlags;
}): TemplateMiddle;
export function createTemplateMiddle({ text, rawText, templateFlags }: {
    text: string | undefined;
    rawText: string;
    templateFlags?: TokenFlags;
}): TemplateMiddle;
export function createTemplateMiddle({ text, rawText, templateFlags }: {
    text;
    rawText?;
    templateFlags?;
}) {
    return ts.factory.createTemplateMiddle(text, rawText, templateFlags);
}
export function createTemplateTail({ text, rawText, templateFlags }: {
    text: string;
    rawText?: string;
    templateFlags?: TokenFlags;
}): TemplateTail;
export function createTemplateTail({ text, rawText, templateFlags }: {
    text: string | undefined;
    rawText: string;
    templateFlags?: TokenFlags;
}): TemplateTail;
export function createTemplateTail({ text, rawText, templateFlags }: {
    text;
    rawText?;
    templateFlags?;
}) {
    return ts.factory.createTemplateTail(text, rawText, templateFlags);
}
export function createNoSubstitutionTemplateLiteral({ text, rawText }: {
    text: string;
    rawText?: string;
}): NoSubstitutionTemplateLiteral;
export function createNoSubstitutionTemplateLiteral({ text, rawText }: {
    text: string | undefined;
    rawText: string;
}): NoSubstitutionTemplateLiteral;
export function createNoSubstitutionTemplateLiteral({ text, rawText }: {
    text;
    rawText?;
}) {
    return ts.factory.createNoSubstitutionTemplateLiteral(text, rawText);
}
export function createYieldExpression({ asteriskToken, expression }: {
    asteriskToken: AsteriskToken;
    expression: Expression;
}): YieldExpression;
export function createYieldExpression({ asteriskToken, expression }: {
    asteriskToken: undefined;
    expression: Expression | undefined;
}): YieldExpression;
export function createYieldExpression({ asteriskToken, expression }: {
    asteriskToken;
    expression;
}) {
    return ts.factory.createYieldExpression(asteriskToken, expression);
}
export function updateYieldExpression({ node, asteriskToken, expression }: {
    node: YieldExpression;
    asteriskToken: AsteriskToken | undefined;
    expression: Expression | undefined;
}): YieldExpression {
    return ts.factory.updateYieldExpression(node, asteriskToken, expression);
}
export function createSpreadElement({ expression }: {
    expression: Expression;
}): SpreadElement {
    return ts.factory.createSpreadElement(expression);
}
export function updateSpreadElement({ node, expression }: {
    node: SpreadElement;
    expression: Expression;
}): SpreadElement {
    return ts.factory.updateSpreadElement(node, expression);
}
export function createClassExpression({ modifiers, name, typeParameters, heritageClauses, members }: {
    modifiers: readonly ModifierLike[] | undefined;
    name: string | Identifier | undefined;
    typeParameters: readonly TypeParameterDeclaration[] | undefined;
    heritageClauses: readonly HeritageClause[] | undefined;
    members: readonly ClassElement[];
}): ClassExpression {
    return ts.factory.createClassExpression(modifiers, name, typeParameters, heritageClauses, members);
}
export function updateClassExpression({ node, modifiers, name, typeParameters, heritageClauses, members }: {
    node: ClassExpression;
    modifiers: readonly ModifierLike[] | undefined;
    name: Identifier | undefined;
    typeParameters: readonly TypeParameterDeclaration[] | undefined;
    heritageClauses: readonly HeritageClause[] | undefined;
    members: readonly ClassElement[];
}): ClassExpression {
    return ts.factory.updateClassExpression(node, modifiers, name, typeParameters, heritageClauses, members);
}
export function createOmittedExpression(): OmittedExpression {
    return ts.factory.createOmittedExpression();
}
export function createExpressionWithTypeArguments({ expression, typeArguments }: {
    expression: Expression;
    typeArguments: readonly TypeNode[] | undefined;
}): ExpressionWithTypeArguments {
    return ts.factory.createExpressionWithTypeArguments(expression, typeArguments);
}
export function updateExpressionWithTypeArguments({ node, expression, typeArguments }: {
    node: ExpressionWithTypeArguments;
    expression: Expression;
    typeArguments: readonly TypeNode[] | undefined;
}): ExpressionWithTypeArguments {
    return ts.factory.updateExpressionWithTypeArguments(node, expression, typeArguments);
}
export function createAsExpression({ expression, type }: {
    expression: Expression;
    type: TypeNode;
}): AsExpression {
    return ts.factory.createAsExpression(expression, type);
}
export function updateAsExpression({ node, expression, type }: {
    node: AsExpression;
    expression: Expression;
    type: TypeNode;
}): AsExpression {
    return ts.factory.updateAsExpression(node, expression, type);
}
export function createNonNullExpression({ expression }: {
    expression: Expression;
}): NonNullExpression {
    return ts.factory.createNonNullExpression(expression);
}
export function updateNonNullExpression({ node, expression }: {
    node: NonNullExpression;
    expression: Expression;
}): NonNullExpression {
    return ts.factory.updateNonNullExpression(node, expression);
}
export function createNonNullChain({ expression }: {
    expression: Expression;
}): NonNullChain {
    return ts.factory.createNonNullChain(expression);
}
export function updateNonNullChain({ node, expression }: {
    node: NonNullChain;
    expression: Expression;
}): NonNullChain {
    return ts.factory.updateNonNullChain(node, expression);
}
export function createMetaProperty({ keywordToken, name }: {
    keywordToken: MetaProperty["keywordToken"];
    name: Identifier;
}): MetaProperty {
    return ts.factory.createMetaProperty(keywordToken, name);
}
export function updateMetaProperty({ node, name }: {
    node: MetaProperty;
    name: Identifier;
}): MetaProperty {
    return ts.factory.updateMetaProperty(node, name);
}
export function createSatisfiesExpression({ expression, type }: {
    expression: Expression;
    type: TypeNode;
}): SatisfiesExpression {
    return ts.factory.createSatisfiesExpression(expression, type);
}
export function updateSatisfiesExpression({ node, expression, type }: {
    node: SatisfiesExpression;
    expression: Expression;
    type: TypeNode;
}): SatisfiesExpression {
    return ts.factory.updateSatisfiesExpression(node, expression, type);
}
export function createTemplateSpan({ expression, literal }: {
    expression: Expression;
    literal: TemplateMiddle | TemplateTail;
}): TemplateSpan {
    return ts.factory.createTemplateSpan(expression, literal);
}
export function updateTemplateSpan({ node, expression, literal }: {
    node: TemplateSpan;
    expression: Expression;
    literal: TemplateMiddle | TemplateTail;
}): TemplateSpan {
    return ts.factory.updateTemplateSpan(node, expression, literal);
}
export function createSemicolonClassElement(): SemicolonClassElement {
    return ts.factory.createSemicolonClassElement();
}
export function createBlock({ statements, multiLine }: {
    statements: readonly Statement[];
    multiLine?: boolean;
}): Block {
    return ts.factory.createBlock(statements, multiLine);
}
export function updateBlock({ node, statements }: {
    node: Block;
    statements: readonly Statement[];
}): Block {
    return ts.factory.updateBlock(node, statements);
}
export function createVariableStatement({ modifiers, declarationList }: {
    modifiers: readonly ModifierLike[] | undefined;
    declarationList: VariableDeclarationList | readonly VariableDeclaration[];
}): VariableStatement {
    return ts.factory.createVariableStatement(modifiers, declarationList);
}
export function updateVariableStatement({ node, modifiers, declarationList }: {
    node: VariableStatement;
    modifiers: readonly ModifierLike[] | undefined;
    declarationList: VariableDeclarationList;
}): VariableStatement {
    return ts.factory.updateVariableStatement(node, modifiers, declarationList);
}
export function createEmptyStatement(): EmptyStatement {
    return ts.factory.createEmptyStatement();
}
export function createExpressionStatement({ expression }: {
    expression: Expression;
}): ExpressionStatement {
    return ts.factory.createExpressionStatement(expression);
}
export function updateExpressionStatement({ node, expression }: {
    node: ExpressionStatement;
    expression: Expression;
}): ExpressionStatement {
    return ts.factory.updateExpressionStatement(node, expression);
}
export function createIfStatement({ expression, thenStatement, elseStatement }: {
    expression: Expression;
    thenStatement: Statement;
    elseStatement?: Statement;
}): IfStatement {
    return ts.factory.createIfStatement(expression, thenStatement, elseStatement);
}
export function updateIfStatement({ node, expression, thenStatement, elseStatement }: {
    node: IfStatement;
    expression: Expression;
    thenStatement: Statement;
    elseStatement: Statement | undefined;
}): IfStatement {
    return ts.factory.updateIfStatement(node, expression, thenStatement, elseStatement);
}
export function createDoStatement({ statement, expression }: {
    statement: Statement;
    expression: Expression;
}): DoStatement {
    return ts.factory.createDoStatement(statement, expression);
}
export function updateDoStatement({ node, statement, expression }: {
    node: DoStatement;
    statement: Statement;
    expression: Expression;
}): DoStatement {
    return ts.factory.updateDoStatement(node, statement, expression);
}
export function createWhileStatement({ expression, statement }: {
    expression: Expression;
    statement: Statement;
}): WhileStatement {
    return ts.factory.createWhileStatement(expression, statement);
}
export function updateWhileStatement({ node, expression, statement }: {
    node: WhileStatement;
    expression: Expression;
    statement: Statement;
}): WhileStatement {
    return ts.factory.updateWhileStatement(node, expression, statement);
}
export function createForStatement({ initializer, condition, incrementor, statement }: {
    initializer: ForInitializer | undefined;
    condition: Expression | undefined;
    incrementor: Expression | undefined;
    statement: Statement;
}): ForStatement {
    return ts.factory.createForStatement(initializer, condition, incrementor, statement);
}
export function updateForStatement({ node, initializer, condition, incrementor, statement }: {
    node: ForStatement;
    initializer: ForInitializer | undefined;
    condition: Expression | undefined;
    incrementor: Expression | undefined;
    statement: Statement;
}): ForStatement {
    return ts.factory.updateForStatement(node, initializer, condition, incrementor, statement);
}
export function createForInStatement({ initializer, expression, statement }: {
    initializer: ForInitializer;
    expression: Expression;
    statement: Statement;
}): ForInStatement {
    return ts.factory.createForInStatement(initializer, expression, statement);
}
export function updateForInStatement({ node, initializer, expression, statement }: {
    node: ForInStatement;
    initializer: ForInitializer;
    expression: Expression;
    statement: Statement;
}): ForInStatement {
    return ts.factory.updateForInStatement(node, initializer, expression, statement);
}
export function createForOfStatement({ awaitModifier, initializer, expression, statement }: {
    awaitModifier: AwaitKeyword | undefined;
    initializer: ForInitializer;
    expression: Expression;
    statement: Statement;
}): ForOfStatement {
    return ts.factory.createForOfStatement(awaitModifier, initializer, expression, statement);
}
export function updateForOfStatement({ node, awaitModifier, initializer, expression, statement }: {
    node: ForOfStatement;
    awaitModifier: AwaitKeyword | undefined;
    initializer: ForInitializer;
    expression: Expression;
    statement: Statement;
}): ForOfStatement {
    return ts.factory.updateForOfStatement(node, awaitModifier, initializer, expression, statement);
}
export function createContinueStatement({ label }: {
    label?: string | Identifier;
}): ContinueStatement {
    return ts.factory.createContinueStatement(label);
}
export function updateContinueStatement({ node, label }: {
    node: ContinueStatement;
    label: Identifier | undefined;
}): ContinueStatement {
    return ts.factory.updateContinueStatement(node, label);
}
export function createBreakStatement({ label }: {
    label?: string | Identifier;
}): BreakStatement {
    return ts.factory.createBreakStatement(label);
}
export function updateBreakStatement({ node, label }: {
    node: BreakStatement;
    label: Identifier | undefined;
}): BreakStatement {
    return ts.factory.updateBreakStatement(node, label);
}
export function createReturnStatement({ expression }: {
    expression?: Expression;
}): ReturnStatement {
    return ts.factory.createReturnStatement(expression);
}
export function updateReturnStatement({ node, expression }: {
    node: ReturnStatement;
    expression: Expression | undefined;
}): ReturnStatement {
    return ts.factory.updateReturnStatement(node, expression);
}
export function createWithStatement({ expression, statement }: {
    expression: Expression;
    statement: Statement;
}): WithStatement {
    return ts.factory.createWithStatement(expression, statement);
}
export function updateWithStatement({ node, expression, statement }: {
    node: WithStatement;
    expression: Expression;
    statement: Statement;
}): WithStatement {
    return ts.factory.updateWithStatement(node, expression, statement);
}
export function createSwitchStatement({ expression, caseBlock }: {
    expression: Expression;
    caseBlock: CaseBlock;
}): SwitchStatement {
    return ts.factory.createSwitchStatement(expression, caseBlock);
}
export function updateSwitchStatement({ node, expression, caseBlock }: {
    node: SwitchStatement;
    expression: Expression;
    caseBlock: CaseBlock;
}): SwitchStatement {
    return ts.factory.updateSwitchStatement(node, expression, caseBlock);
}
export function createLabeledStatement({ label, statement }: {
    label: string | Identifier;
    statement: Statement;
}): LabeledStatement {
    return ts.factory.createLabeledStatement(label, statement);
}
export function updateLabeledStatement({ node, label, statement }: {
    node: LabeledStatement;
    label: Identifier;
    statement: Statement;
}): LabeledStatement {
    return ts.factory.updateLabeledStatement(node, label, statement);
}
export function createThrowStatement({ expression }: {
    expression: Expression;
}): ThrowStatement {
    return ts.factory.createThrowStatement(expression);
}
export function updateThrowStatement({ node, expression }: {
    node: ThrowStatement;
    expression: Expression;
}): ThrowStatement {
    return ts.factory.updateThrowStatement(node, expression);
}
export function createTryStatement({ tryBlock, catchClause, finallyBlock }: {
    tryBlock: Block;
    catchClause: CatchClause | undefined;
    finallyBlock: Block | undefined;
}): TryStatement {
    return ts.factory.createTryStatement(tryBlock, catchClause, finallyBlock);
}
export function updateTryStatement({ node, tryBlock, catchClause, finallyBlock }: {
    node: TryStatement;
    tryBlock: Block;
    catchClause: CatchClause | undefined;
    finallyBlock: Block | undefined;
}): TryStatement {
    return ts.factory.updateTryStatement(node, tryBlock, catchClause, finallyBlock);
}
export function createDebuggerStatement(): DebuggerStatement {
    return ts.factory.createDebuggerStatement();
}
export function createVariableDeclaration({ name, exclamationToken, type, initializer }: {
    name: string | BindingName;
    exclamationToken?: ExclamationToken;
    type?: TypeNode;
    initializer?: Expression;
}): VariableDeclaration {
    return ts.factory.createVariableDeclaration(name, exclamationToken, type, initializer);
}
export function updateVariableDeclaration({ node, name, exclamationToken, type, initializer }: {
    node: VariableDeclaration;
    name: BindingName;
    exclamationToken: ExclamationToken | undefined;
    type: TypeNode | undefined;
    initializer: Expression | undefined;
}): VariableDeclaration {
    return ts.factory.updateVariableDeclaration(node, name, exclamationToken, type, initializer);
}
export function createVariableDeclarationList({ declarations, flags }: {
    declarations: readonly VariableDeclaration[];
    flags?: NodeFlags;
}): VariableDeclarationList {
    return ts.factory.createVariableDeclarationList(declarations, flags);
}
export function updateVariableDeclarationList({ node, declarations }: {
    node: VariableDeclarationList;
    declarations: readonly VariableDeclaration[];
}): VariableDeclarationList {
    return ts.factory.updateVariableDeclarationList(node, declarations);
}
export function createFunctionDeclaration({ modifiers, asteriskToken, name, typeParameters, parameters, type, body }: {
    modifiers: readonly ModifierLike[] | undefined;
    asteriskToken: AsteriskToken | undefined;
    name: string | Identifier | undefined;
    typeParameters: readonly TypeParameterDeclaration[] | undefined;
    parameters: readonly ParameterDeclaration[];
    type: TypeNode | undefined;
    body: Block | undefined;
}): FunctionDeclaration {
    return ts.factory.createFunctionDeclaration(modifiers, asteriskToken, name, typeParameters, parameters, type, body);
}
export function updateFunctionDeclaration({ node, modifiers, asteriskToken, name, typeParameters, parameters, type, body }: {
    node: FunctionDeclaration;
    modifiers: readonly ModifierLike[] | undefined;
    asteriskToken: AsteriskToken | undefined;
    name: Identifier | undefined;
    typeParameters: readonly TypeParameterDeclaration[] | undefined;
    parameters: readonly ParameterDeclaration[];
    type: TypeNode | undefined;
    body: Block | undefined;
}): FunctionDeclaration {
    return ts.factory.updateFunctionDeclaration(node, modifiers, asteriskToken, name, typeParameters, parameters, type, body);
}
export function createClassDeclaration({ modifiers, name, typeParameters, heritageClauses, members }: {
    modifiers: readonly ModifierLike[] | undefined;
    name: string | Identifier | undefined;
    typeParameters: readonly TypeParameterDeclaration[] | undefined;
    heritageClauses: readonly HeritageClause[] | undefined;
    members: readonly ClassElement[];
}): ClassDeclaration {
    return ts.factory.createClassDeclaration(modifiers, name, typeParameters, heritageClauses, members);
}
export function updateClassDeclaration({ node, modifiers, name, typeParameters, heritageClauses, members }: {
    node: ClassDeclaration;
    modifiers: readonly ModifierLike[] | undefined;
    name: Identifier | undefined;
    typeParameters: readonly TypeParameterDeclaration[] | undefined;
    heritageClauses: readonly HeritageClause[] | undefined;
    members: readonly ClassElement[];
}): ClassDeclaration {
    return ts.factory.updateClassDeclaration(node, modifiers, name, typeParameters, heritageClauses, members);
}
export function createInterfaceDeclaration({ modifiers, name, typeParameters, heritageClauses, members }: {
    modifiers: readonly ModifierLike[] | undefined;
    name: string | Identifier;
    typeParameters: readonly TypeParameterDeclaration[] | undefined;
    heritageClauses: readonly HeritageClause[] | undefined;
    members: readonly TypeElement[];
}): InterfaceDeclaration {
    return ts.factory.createInterfaceDeclaration(modifiers, name, typeParameters, heritageClauses, members);
}
export function updateInterfaceDeclaration({ node, modifiers, name, typeParameters, heritageClauses, members }: {
    node: InterfaceDeclaration;
    modifiers: readonly ModifierLike[] | undefined;
    name: Identifier;
    typeParameters: readonly TypeParameterDeclaration[] | undefined;
    heritageClauses: readonly HeritageClause[] | undefined;
    members: readonly TypeElement[];
}): InterfaceDeclaration {
    return ts.factory.updateInterfaceDeclaration(node, modifiers, name, typeParameters, heritageClauses, members);
}
export function createTypeAliasDeclaration({ modifiers, name, typeParameters, type }: {
    modifiers: readonly ModifierLike[] | undefined;
    name: string | Identifier;
    typeParameters: readonly TypeParameterDeclaration[] | undefined;
    type: TypeNode;
}): TypeAliasDeclaration {
    return ts.factory.createTypeAliasDeclaration(modifiers, name, typeParameters, type);
}
export function updateTypeAliasDeclaration({ node, modifiers, name, typeParameters, type }: {
    node: TypeAliasDeclaration;
    modifiers: readonly ModifierLike[] | undefined;
    name: Identifier;
    typeParameters: readonly TypeParameterDeclaration[] | undefined;
    type: TypeNode;
}): TypeAliasDeclaration {
    return ts.factory.updateTypeAliasDeclaration(node, modifiers, name, typeParameters, type);
}
export function createEnumDeclaration({ modifiers, name, members }: {
    modifiers: readonly ModifierLike[] | undefined;
    name: string | Identifier;
    members: readonly EnumMember[];
}): EnumDeclaration {
    return ts.factory.createEnumDeclaration(modifiers, name, members);
}
export function updateEnumDeclaration({ node, modifiers, name, members }: {
    node: EnumDeclaration;
    modifiers: readonly ModifierLike[] | undefined;
    name: Identifier;
    members: readonly EnumMember[];
}): EnumDeclaration {
    return ts.factory.updateEnumDeclaration(node, modifiers, name, members);
}
export function createModuleDeclaration({ modifiers, name, body, flags }: {
    modifiers: readonly ModifierLike[] | undefined;
    name: ModuleName;
    body: ModuleBody | undefined;
    flags?: NodeFlags;
}): ModuleDeclaration {
    return ts.factory.createModuleDeclaration(modifiers, name, body, flags);
}
export function updateModuleDeclaration({ node, modifiers, name, body }: {
    node: ModuleDeclaration;
    modifiers: readonly ModifierLike[] | undefined;
    name: ModuleName;
    body: ModuleBody | undefined;
}): ModuleDeclaration {
    return ts.factory.updateModuleDeclaration(node, modifiers, name, body);
}
export function createModuleBlock({ statements }: {
    statements: readonly Statement[];
}): ModuleBlock {
    return ts.factory.createModuleBlock(statements);
}
export function updateModuleBlock({ node, statements }: {
    node: ModuleBlock;
    statements: readonly Statement[];
}): ModuleBlock {
    return ts.factory.updateModuleBlock(node, statements);
}
export function createCaseBlock({ clauses }: {
    clauses: readonly CaseOrDefaultClause[];
}): CaseBlock {
    return ts.factory.createCaseBlock(clauses);
}
export function updateCaseBlock({ node, clauses }: {
    node: CaseBlock;
    clauses: readonly CaseOrDefaultClause[];
}): CaseBlock {
    return ts.factory.updateCaseBlock(node, clauses);
}
export function createNamespaceExportDeclaration({ name }: {
    name: string | Identifier;
}): NamespaceExportDeclaration {
    return ts.factory.createNamespaceExportDeclaration(name);
}
export function updateNamespaceExportDeclaration({ node, name }: {
    node: NamespaceExportDeclaration;
    name: Identifier;
}): NamespaceExportDeclaration {
    return ts.factory.updateNamespaceExportDeclaration(node, name);
}
export function createImportEqualsDeclaration({ modifiers, isTypeOnly, name, moduleReference }: {
    modifiers: readonly ModifierLike[] | undefined;
    isTypeOnly: boolean;
    name: string | Identifier;
    moduleReference: ModuleReference;
}): ImportEqualsDeclaration {
    return ts.factory.createImportEqualsDeclaration(modifiers, isTypeOnly, name, moduleReference);
}
export function updateImportEqualsDeclaration({ node, modifiers, isTypeOnly, name, moduleReference }: {
    node: ImportEqualsDeclaration;
    modifiers: readonly ModifierLike[] | undefined;
    isTypeOnly: boolean;
    name: Identifier;
    moduleReference: ModuleReference;
}): ImportEqualsDeclaration {
    return ts.factory.updateImportEqualsDeclaration(node, modifiers, isTypeOnly, name, moduleReference);
}
export function createImportDeclaration({ modifiers, importClause, moduleSpecifier, attributes }: {
    modifiers: readonly ModifierLike[] | undefined;
    importClause: ImportClause | undefined;
    moduleSpecifier: Expression;
    attributes?: ImportAttributes;
}): ImportDeclaration {
    return ts.factory.createImportDeclaration(modifiers, importClause, moduleSpecifier, attributes);
}
export function updateImportDeclaration({ node, modifiers, importClause, moduleSpecifier, attributes }: {
    node: ImportDeclaration;
    modifiers: readonly ModifierLike[] | undefined;
    importClause: ImportClause | undefined;
    moduleSpecifier: Expression;
    attributes: ImportAttributes | undefined;
}): ImportDeclaration {
    return ts.factory.updateImportDeclaration(node, modifiers, importClause, moduleSpecifier, attributes);
}
export function createImportClause({ isTypeOnly, name, namedBindings }: {
    isTypeOnly: boolean;
    name: Identifier | undefined;
    namedBindings: NamedImportBindings | undefined;
}): ImportClause {
    return ts.factory.createImportClause(isTypeOnly, name, namedBindings);
}
export function updateImportClause({ node, isTypeOnly, name, namedBindings }: {
    node: ImportClause;
    isTypeOnly: boolean;
    name: Identifier | undefined;
    namedBindings: NamedImportBindings | undefined;
}): ImportClause {
    return ts.factory.updateImportClause(node, isTypeOnly, name, namedBindings);
}
export function createAssertClause({ elements, multiLine }: {
    elements: NodeArray<AssertEntry>;
    multiLine?: boolean;
}): AssertClause {
    return ts.factory.createAssertClause(elements, multiLine);
}
export function updateAssertClause({ node, elements, multiLine }: {
    node: AssertClause;
    elements: NodeArray<AssertEntry>;
    multiLine?: boolean;
}): AssertClause {
    return ts.factory.updateAssertClause(node, elements, multiLine);
}
export function createAssertEntry({ name, value }: {
    name: AssertionKey;
    value: Expression;
}): AssertEntry {
    return ts.factory.createAssertEntry(name, value);
}
export function updateAssertEntry({ node, name, value }: {
    node: AssertEntry;
    name: AssertionKey;
    value: Expression;
}): AssertEntry {
    return ts.factory.updateAssertEntry(node, name, value);
}
export function createImportTypeAssertionContainer({ clause, multiLine }: {
    clause: AssertClause;
    multiLine?: boolean;
}): ImportTypeAssertionContainer {
    return ts.factory.createImportTypeAssertionContainer(clause, multiLine);
}
export function updateImportTypeAssertionContainer({ node, clause, multiLine }: {
    node: ImportTypeAssertionContainer;
    clause: AssertClause;
    multiLine?: boolean;
}): ImportTypeAssertionContainer {
    return ts.factory.updateImportTypeAssertionContainer(node, clause, multiLine);
}
export function createImportAttributes({ elements, multiLine }: {
    elements: NodeArray<ImportAttribute>;
    multiLine?: boolean;
}): ImportAttributes {
    return ts.factory.createImportAttributes(elements, multiLine);
}
export function updateImportAttributes({ node, elements, multiLine }: {
    node: ImportAttributes;
    elements: NodeArray<ImportAttribute>;
    multiLine?: boolean;
}): ImportAttributes {
    return ts.factory.updateImportAttributes(node, elements, multiLine);
}
export function createImportAttribute({ name, value }: {
    name: ImportAttributeName;
    value: Expression;
}): ImportAttribute {
    return ts.factory.createImportAttribute(name, value);
}
export function updateImportAttribute({ node, name, value }: {
    node: ImportAttribute;
    name: ImportAttributeName;
    value: Expression;
}): ImportAttribute {
    return ts.factory.updateImportAttribute(node, name, value);
}
export function createNamespaceImport({ name }: {
    name: Identifier;
}): NamespaceImport {
    return ts.factory.createNamespaceImport(name);
}
export function updateNamespaceImport({ node, name }: {
    node: NamespaceImport;
    name: Identifier;
}): NamespaceImport {
    return ts.factory.updateNamespaceImport(node, name);
}
export function createNamespaceExport({ name }: {
    name: Identifier;
}): NamespaceExport {
    return ts.factory.createNamespaceExport(name);
}
export function updateNamespaceExport({ node, name }: {
    node: NamespaceExport;
    name: Identifier;
}): NamespaceExport {
    return ts.factory.updateNamespaceExport(node, name);
}
export function createNamedImports({ elements }: {
    elements: readonly ImportSpecifier[];
}): NamedImports {
    return ts.factory.createNamedImports(elements);
}
export function updateNamedImports({ node, elements }: {
    node: NamedImports;
    elements: readonly ImportSpecifier[];
}): NamedImports {
    return ts.factory.updateNamedImports(node, elements);
}
export function createImportSpecifier({ isTypeOnly, propertyName, name }: {
    isTypeOnly: boolean;
    propertyName: Identifier | undefined;
    name: Identifier;
}): ImportSpecifier {
    return ts.factory.createImportSpecifier(isTypeOnly, propertyName, name);
}
export function updateImportSpecifier({ node, isTypeOnly, propertyName, name }: {
    node: ImportSpecifier;
    isTypeOnly: boolean;
    propertyName: Identifier | undefined;
    name: Identifier;
}): ImportSpecifier {
    return ts.factory.updateImportSpecifier(node, isTypeOnly, propertyName, name);
}
export function createExportAssignment({ modifiers, isExportEquals, expression }: {
    modifiers: readonly ModifierLike[] | undefined;
    isExportEquals: boolean | undefined;
    expression: Expression;
}): ExportAssignment {
    return ts.factory.createExportAssignment(modifiers, isExportEquals, expression);
}
export function updateExportAssignment({ node, modifiers, expression }: {
    node: ExportAssignment;
    modifiers: readonly ModifierLike[] | undefined;
    expression: Expression;
}): ExportAssignment {
    return ts.factory.updateExportAssignment(node, modifiers, expression);
}
export function createExportDeclaration({ modifiers, isTypeOnly, exportClause, moduleSpecifier, attributes }: {
    modifiers: readonly ModifierLike[] | undefined;
    isTypeOnly: boolean;
    exportClause: NamedExportBindings | undefined;
    moduleSpecifier?: Expression;
    attributes?: ImportAttributes;
}): ExportDeclaration {
    return ts.factory.createExportDeclaration(modifiers, isTypeOnly, exportClause, moduleSpecifier, attributes);
}
export function updateExportDeclaration({ node, modifiers, isTypeOnly, exportClause, moduleSpecifier, attributes }: {
    node: ExportDeclaration;
    modifiers: readonly ModifierLike[] | undefined;
    isTypeOnly: boolean;
    exportClause: NamedExportBindings | undefined;
    moduleSpecifier: Expression | undefined;
    attributes: ImportAttributes | undefined;
}): ExportDeclaration {
    return ts.factory.updateExportDeclaration(node, modifiers, isTypeOnly, exportClause, moduleSpecifier, attributes);
}
export function createNamedExports({ elements }: {
    elements: readonly ExportSpecifier[];
}): NamedExports {
    return ts.factory.createNamedExports(elements);
}
export function updateNamedExports({ node, elements }: {
    node: NamedExports;
    elements: readonly ExportSpecifier[];
}): NamedExports {
    return ts.factory.updateNamedExports(node, elements);
}
export function createExportSpecifier({ isTypeOnly, propertyName, name }: {
    isTypeOnly: boolean;
    propertyName: string | Identifier | undefined;
    name: string | Identifier;
}): ExportSpecifier {
    return ts.factory.createExportSpecifier(isTypeOnly, propertyName, name);
}
export function updateExportSpecifier({ node, isTypeOnly, propertyName, name }: {
    node: ExportSpecifier;
    isTypeOnly: boolean;
    propertyName: Identifier | undefined;
    name: Identifier;
}): ExportSpecifier {
    return ts.factory.updateExportSpecifier(node, isTypeOnly, propertyName, name);
}
export function createExternalModuleReference({ expression }: {
    expression: Expression;
}): ExternalModuleReference {
    return ts.factory.createExternalModuleReference(expression);
}
export function updateExternalModuleReference({ node, expression }: {
    node: ExternalModuleReference;
    expression: Expression;
}): ExternalModuleReference {
    return ts.factory.updateExternalModuleReference(node, expression);
}
export function createJSDocAllType(): JSDocAllType {
    return ts.factory.createJSDocAllType();
}
export function createJSDocUnknownType(): JSDocUnknownType {
    return ts.factory.createJSDocUnknownType();
}
export function createJSDocNonNullableType({ type, postfix }: {
    type: TypeNode;
    postfix?: boolean;
}): JSDocNonNullableType {
    return ts.factory.createJSDocNonNullableType(type, postfix);
}
export function updateJSDocNonNullableType({ node, type }: {
    node: JSDocNonNullableType;
    type: TypeNode;
}): JSDocNonNullableType {
    return ts.factory.updateJSDocNonNullableType(node, type);
}
export function createJSDocNullableType({ type, postfix }: {
    type: TypeNode;
    postfix?: boolean;
}): JSDocNullableType {
    return ts.factory.createJSDocNullableType(type, postfix);
}
export function updateJSDocNullableType({ node, type }: {
    node: JSDocNullableType;
    type: TypeNode;
}): JSDocNullableType {
    return ts.factory.updateJSDocNullableType(node, type);
}
export function createJSDocOptionalType({ type }: {
    type: TypeNode;
}): JSDocOptionalType {
    return ts.factory.createJSDocOptionalType(type);
}
export function updateJSDocOptionalType({ node, type }: {
    node: JSDocOptionalType;
    type: TypeNode;
}): JSDocOptionalType {
    return ts.factory.updateJSDocOptionalType(node, type);
}
export function createJSDocFunctionType({ parameters, type }: {
    parameters: readonly ParameterDeclaration[];
    type: TypeNode | undefined;
}): JSDocFunctionType {
    return ts.factory.createJSDocFunctionType(parameters, type);
}
export function updateJSDocFunctionType({ node, parameters, type }: {
    node: JSDocFunctionType;
    parameters: readonly ParameterDeclaration[];
    type: TypeNode | undefined;
}): JSDocFunctionType {
    return ts.factory.updateJSDocFunctionType(node, parameters, type);
}
export function createJSDocVariadicType({ type }: {
    type: TypeNode;
}): JSDocVariadicType {
    return ts.factory.createJSDocVariadicType(type);
}
export function updateJSDocVariadicType({ node, type }: {
    node: JSDocVariadicType;
    type: TypeNode;
}): JSDocVariadicType {
    return ts.factory.updateJSDocVariadicType(node, type);
}
export function createJSDocNamepathType({ type }: {
    type: TypeNode;
}): JSDocNamepathType {
    return ts.factory.createJSDocNamepathType(type);
}
export function updateJSDocNamepathType({ node, type }: {
    node: JSDocNamepathType;
    type: TypeNode;
}): JSDocNamepathType {
    return ts.factory.updateJSDocNamepathType(node, type);
}
export function createJSDocTypeExpression({ type }: {
    type: TypeNode;
}): JSDocTypeExpression {
    return ts.factory.createJSDocTypeExpression(type);
}
export function updateJSDocTypeExpression({ node, type }: {
    node: JSDocTypeExpression;
    type: TypeNode;
}): JSDocTypeExpression {
    return ts.factory.updateJSDocTypeExpression(node, type);
}
export function createJSDocNameReference({ name }: {
    name: EntityName | JSDocMemberName;
}): JSDocNameReference {
    return ts.factory.createJSDocNameReference(name);
}
export function updateJSDocNameReference({ node, name }: {
    node: JSDocNameReference;
    name: EntityName | JSDocMemberName;
}): JSDocNameReference {
    return ts.factory.updateJSDocNameReference(node, name);
}
export function createJSDocMemberName({ left, right }: {
    left: EntityName | JSDocMemberName;
    right: Identifier;
}): JSDocMemberName {
    return ts.factory.createJSDocMemberName(left, right);
}
export function updateJSDocMemberName({ node, left, right }: {
    node: JSDocMemberName;
    left: EntityName | JSDocMemberName;
    right: Identifier;
}): JSDocMemberName {
    return ts.factory.updateJSDocMemberName(node, left, right);
}
export function createJSDocLink({ name, text }: {
    name: EntityName | JSDocMemberName | undefined;
    text: string;
}): JSDocLink {
    return ts.factory.createJSDocLink(name, text);
}
export function updateJSDocLink({ node, name, text }: {
    node: JSDocLink;
    name: EntityName | JSDocMemberName | undefined;
    text: string;
}): JSDocLink {
    return ts.factory.updateJSDocLink(node, name, text);
}
export function createJSDocLinkCode({ name, text }: {
    name: EntityName | JSDocMemberName | undefined;
    text: string;
}): JSDocLinkCode {
    return ts.factory.createJSDocLinkCode(name, text);
}
export function updateJSDocLinkCode({ node, name, text }: {
    node: JSDocLinkCode;
    name: EntityName | JSDocMemberName | undefined;
    text: string;
}): JSDocLinkCode {
    return ts.factory.updateJSDocLinkCode(node, name, text);
}
export function createJSDocLinkPlain({ name, text }: {
    name: EntityName | JSDocMemberName | undefined;
    text: string;
}): JSDocLinkPlain {
    return ts.factory.createJSDocLinkPlain(name, text);
}
export function updateJSDocLinkPlain({ node, name, text }: {
    node: JSDocLinkPlain;
    name: EntityName | JSDocMemberName | undefined;
    text: string;
}): JSDocLinkPlain {
    return ts.factory.updateJSDocLinkPlain(node, name, text);
}
export function createJSDocTypeLiteral({ jsDocPropertyTags, isArrayType }: {
    jsDocPropertyTags?: readonly JSDocPropertyLikeTag[];
    isArrayType?: boolean;
}): JSDocTypeLiteral {
    return ts.factory.createJSDocTypeLiteral(jsDocPropertyTags, isArrayType);
}
export function updateJSDocTypeLiteral({ node, jsDocPropertyTags, isArrayType }: {
    node: JSDocTypeLiteral;
    jsDocPropertyTags: readonly JSDocPropertyLikeTag[] | undefined;
    isArrayType: boolean | undefined;
}): JSDocTypeLiteral {
    return ts.factory.updateJSDocTypeLiteral(node, jsDocPropertyTags, isArrayType);
}
export function createJSDocSignature({ typeParameters, parameters, type }: {
    typeParameters: readonly JSDocTemplateTag[] | undefined;
    parameters: readonly JSDocParameterTag[];
    type?: JSDocReturnTag;
}): JSDocSignature {
    return ts.factory.createJSDocSignature(typeParameters, parameters, type);
}
export function updateJSDocSignature({ node, typeParameters, parameters, type }: {
    node: JSDocSignature;
    typeParameters: readonly JSDocTemplateTag[] | undefined;
    parameters: readonly JSDocParameterTag[];
    type: JSDocReturnTag | undefined;
}): JSDocSignature {
    return ts.factory.updateJSDocSignature(node, typeParameters, parameters, type);
}
export function createJSDocTemplateTag({ tagName, constraint, typeParameters, comment }: {
    tagName: Identifier | undefined;
    constraint: JSDocTypeExpression | undefined;
    typeParameters: readonly TypeParameterDeclaration[];
    comment?: string | NodeArray<JSDocComment>;
}): JSDocTemplateTag {
    return ts.factory.createJSDocTemplateTag(tagName, constraint, typeParameters, comment);
}
export function updateJSDocTemplateTag({ node, tagName, constraint, typeParameters, comment }: {
    node: JSDocTemplateTag;
    tagName: Identifier | undefined;
    constraint: JSDocTypeExpression | undefined;
    typeParameters: readonly TypeParameterDeclaration[];
    comment: string | NodeArray<JSDocComment> | undefined;
}): JSDocTemplateTag {
    return ts.factory.updateJSDocTemplateTag(node, tagName, constraint, typeParameters, comment);
}
export function createJSDocTypedefTag({ tagName, typeExpression, fullName, comment }: {
    tagName: Identifier | undefined;
    typeExpression?: JSDocTypeExpression | JSDocTypeLiteral;
    fullName?: Identifier | JSDocNamespaceDeclaration;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocTypedefTag {
    return ts.factory.createJSDocTypedefTag(tagName, typeExpression, fullName, comment);
}
export function updateJSDocTypedefTag({ node, tagName, typeExpression, fullName, comment }: {
    node: JSDocTypedefTag;
    tagName: Identifier | undefined;
    typeExpression: JSDocTypeExpression | JSDocTypeLiteral | undefined;
    fullName: Identifier | JSDocNamespaceDeclaration | undefined;
    comment: string | NodeArray<JSDocComment> | undefined;
}): JSDocTypedefTag {
    return ts.factory.updateJSDocTypedefTag(node, tagName, typeExpression, fullName, comment);
}
export function createJSDocParameterTag({ tagName, name, isBracketed, typeExpression, isNameFirst, comment }: {
    tagName: Identifier | undefined;
    name: EntityName;
    isBracketed: boolean;
    typeExpression?: JSDocTypeExpression;
    isNameFirst?: boolean;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocParameterTag {
    return ts.factory.createJSDocParameterTag(tagName, name, isBracketed, typeExpression, isNameFirst, comment);
}
export function updateJSDocParameterTag({ node, tagName, name, isBracketed, typeExpression, isNameFirst, comment }: {
    node: JSDocParameterTag;
    tagName: Identifier | undefined;
    name: EntityName;
    isBracketed: boolean;
    typeExpression: JSDocTypeExpression | undefined;
    isNameFirst: boolean;
    comment: string | NodeArray<JSDocComment> | undefined;
}): JSDocParameterTag {
    return ts.factory.updateJSDocParameterTag(node, tagName, name, isBracketed, typeExpression, isNameFirst, comment);
}
export function createJSDocPropertyTag({ tagName, name, isBracketed, typeExpression, isNameFirst, comment }: {
    tagName: Identifier | undefined;
    name: EntityName;
    isBracketed: boolean;
    typeExpression?: JSDocTypeExpression;
    isNameFirst?: boolean;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocPropertyTag {
    return ts.factory.createJSDocPropertyTag(tagName, name, isBracketed, typeExpression, isNameFirst, comment);
}
export function updateJSDocPropertyTag({ node, tagName, name, isBracketed, typeExpression, isNameFirst, comment }: {
    node: JSDocPropertyTag;
    tagName: Identifier | undefined;
    name: EntityName;
    isBracketed: boolean;
    typeExpression: JSDocTypeExpression | undefined;
    isNameFirst: boolean;
    comment: string | NodeArray<JSDocComment> | undefined;
}): JSDocPropertyTag {
    return ts.factory.updateJSDocPropertyTag(node, tagName, name, isBracketed, typeExpression, isNameFirst, comment);
}
export function createJSDocTypeTag({ tagName, typeExpression, comment }: {
    tagName: Identifier | undefined;
    typeExpression: JSDocTypeExpression;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocTypeTag {
    return ts.factory.createJSDocTypeTag(tagName, typeExpression, comment);
}
export function updateJSDocTypeTag({ node, tagName, typeExpression, comment }: {
    node: JSDocTypeTag;
    tagName: Identifier | undefined;
    typeExpression: JSDocTypeExpression;
    comment: string | NodeArray<JSDocComment> | undefined;
}): JSDocTypeTag {
    return ts.factory.updateJSDocTypeTag(node, tagName, typeExpression, comment);
}
export function createJSDocSeeTag({ tagName, nameExpression, comment }: {
    tagName: Identifier | undefined;
    nameExpression: JSDocNameReference | undefined;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocSeeTag {
    return ts.factory.createJSDocSeeTag(tagName, nameExpression, comment);
}
export function updateJSDocSeeTag({ node, tagName, nameExpression, comment }: {
    node: JSDocSeeTag;
    tagName: Identifier | undefined;
    nameExpression: JSDocNameReference | undefined;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocSeeTag {
    return ts.factory.updateJSDocSeeTag(node, tagName, nameExpression, comment);
}
export function createJSDocReturnTag({ tagName, typeExpression, comment }: {
    tagName: Identifier | undefined;
    typeExpression?: JSDocTypeExpression;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocReturnTag {
    return ts.factory.createJSDocReturnTag(tagName, typeExpression, comment);
}
export function updateJSDocReturnTag({ node, tagName, typeExpression, comment }: {
    node: JSDocReturnTag;
    tagName: Identifier | undefined;
    typeExpression: JSDocTypeExpression | undefined;
    comment: string | NodeArray<JSDocComment> | undefined;
}): JSDocReturnTag {
    return ts.factory.updateJSDocReturnTag(node, tagName, typeExpression, comment);
}
export function createJSDocThisTag({ tagName, typeExpression, comment }: {
    tagName: Identifier | undefined;
    typeExpression: JSDocTypeExpression;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocThisTag {
    return ts.factory.createJSDocThisTag(tagName, typeExpression, comment);
}
export function updateJSDocThisTag({ node, tagName, typeExpression, comment }: {
    node: JSDocThisTag;
    tagName: Identifier | undefined;
    typeExpression: JSDocTypeExpression | undefined;
    comment: string | NodeArray<JSDocComment> | undefined;
}): JSDocThisTag {
    return ts.factory.updateJSDocThisTag(node, tagName, typeExpression, comment);
}
export function createJSDocEnumTag({ tagName, typeExpression, comment }: {
    tagName: Identifier | undefined;
    typeExpression: JSDocTypeExpression;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocEnumTag {
    return ts.factory.createJSDocEnumTag(tagName, typeExpression, comment);
}
export function updateJSDocEnumTag({ node, tagName, typeExpression, comment }: {
    node: JSDocEnumTag;
    tagName: Identifier | undefined;
    typeExpression: JSDocTypeExpression;
    comment: string | NodeArray<JSDocComment> | undefined;
}): JSDocEnumTag {
    return ts.factory.updateJSDocEnumTag(node, tagName, typeExpression, comment);
}
export function createJSDocCallbackTag({ tagName, typeExpression, fullName, comment }: {
    tagName: Identifier | undefined;
    typeExpression: JSDocSignature;
    fullName?: Identifier | JSDocNamespaceDeclaration;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocCallbackTag {
    return ts.factory.createJSDocCallbackTag(tagName, typeExpression, fullName, comment);
}
export function updateJSDocCallbackTag({ node, tagName, typeExpression, fullName, comment }: {
    node: JSDocCallbackTag;
    tagName: Identifier | undefined;
    typeExpression: JSDocSignature;
    fullName: Identifier | JSDocNamespaceDeclaration | undefined;
    comment: string | NodeArray<JSDocComment> | undefined;
}): JSDocCallbackTag {
    return ts.factory.updateJSDocCallbackTag(node, tagName, typeExpression, fullName, comment);
}
export function createJSDocOverloadTag({ tagName, typeExpression, comment }: {
    tagName: Identifier | undefined;
    typeExpression: JSDocSignature;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocOverloadTag {
    return ts.factory.createJSDocOverloadTag(tagName, typeExpression, comment);
}
export function updateJSDocOverloadTag({ node, tagName, typeExpression, comment }: {
    node: JSDocOverloadTag;
    tagName: Identifier | undefined;
    typeExpression: JSDocSignature;
    comment: string | NodeArray<JSDocComment> | undefined;
}): JSDocOverloadTag {
    return ts.factory.updateJSDocOverloadTag(node, tagName, typeExpression, comment);
}
export function createJSDocAugmentsTag({ tagName, className, comment }: {
    tagName: Identifier | undefined;
    className: JSDocAugmentsTag["class"];
    comment?: string | NodeArray<JSDocComment>;
}): JSDocAugmentsTag {
    return ts.factory.createJSDocAugmentsTag(tagName, className, comment);
}
export function updateJSDocAugmentsTag({ node, tagName, className, comment }: {
    node: JSDocAugmentsTag;
    tagName: Identifier | undefined;
    className: JSDocAugmentsTag["class"];
    comment: string | NodeArray<JSDocComment> | undefined;
}): JSDocAugmentsTag {
    return ts.factory.updateJSDocAugmentsTag(node, tagName, className, comment);
}
export function createJSDocImplementsTag({ tagName, className, comment }: {
    tagName: Identifier | undefined;
    className: JSDocImplementsTag["class"];
    comment?: string | NodeArray<JSDocComment>;
}): JSDocImplementsTag {
    return ts.factory.createJSDocImplementsTag(tagName, className, comment);
}
export function updateJSDocImplementsTag({ node, tagName, className, comment }: {
    node: JSDocImplementsTag;
    tagName: Identifier | undefined;
    className: JSDocImplementsTag["class"];
    comment: string | NodeArray<JSDocComment> | undefined;
}): JSDocImplementsTag {
    return ts.factory.updateJSDocImplementsTag(node, tagName, className, comment);
}
export function createJSDocAuthorTag({ tagName, comment }: {
    tagName: Identifier | undefined;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocAuthorTag {
    return ts.factory.createJSDocAuthorTag(tagName, comment);
}
export function updateJSDocAuthorTag({ node, tagName, comment }: {
    node: JSDocAuthorTag;
    tagName: Identifier | undefined;
    comment: string | NodeArray<JSDocComment> | undefined;
}): JSDocAuthorTag {
    return ts.factory.updateJSDocAuthorTag(node, tagName, comment);
}
export function createJSDocClassTag({ tagName, comment }: {
    tagName: Identifier | undefined;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocClassTag {
    return ts.factory.createJSDocClassTag(tagName, comment);
}
export function updateJSDocClassTag({ node, tagName, comment }: {
    node: JSDocClassTag;
    tagName: Identifier | undefined;
    comment: string | NodeArray<JSDocComment> | undefined;
}): JSDocClassTag {
    return ts.factory.updateJSDocClassTag(node, tagName, comment);
}
export function createJSDocPublicTag({ tagName, comment }: {
    tagName: Identifier | undefined;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocPublicTag {
    return ts.factory.createJSDocPublicTag(tagName, comment);
}
export function updateJSDocPublicTag({ node, tagName, comment }: {
    node: JSDocPublicTag;
    tagName: Identifier | undefined;
    comment: string | NodeArray<JSDocComment> | undefined;
}): JSDocPublicTag {
    return ts.factory.updateJSDocPublicTag(node, tagName, comment);
}
export function createJSDocPrivateTag({ tagName, comment }: {
    tagName: Identifier | undefined;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocPrivateTag {
    return ts.factory.createJSDocPrivateTag(tagName, comment);
}
export function updateJSDocPrivateTag({ node, tagName, comment }: {
    node: JSDocPrivateTag;
    tagName: Identifier | undefined;
    comment: string | NodeArray<JSDocComment> | undefined;
}): JSDocPrivateTag {
    return ts.factory.updateJSDocPrivateTag(node, tagName, comment);
}
export function createJSDocProtectedTag({ tagName, comment }: {
    tagName: Identifier | undefined;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocProtectedTag {
    return ts.factory.createJSDocProtectedTag(tagName, comment);
}
export function updateJSDocProtectedTag({ node, tagName, comment }: {
    node: JSDocProtectedTag;
    tagName: Identifier | undefined;
    comment: string | NodeArray<JSDocComment> | undefined;
}): JSDocProtectedTag {
    return ts.factory.updateJSDocProtectedTag(node, tagName, comment);
}
export function createJSDocReadonlyTag({ tagName, comment }: {
    tagName: Identifier | undefined;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocReadonlyTag {
    return ts.factory.createJSDocReadonlyTag(tagName, comment);
}
export function updateJSDocReadonlyTag({ node, tagName, comment }: {
    node: JSDocReadonlyTag;
    tagName: Identifier | undefined;
    comment: string | NodeArray<JSDocComment> | undefined;
}): JSDocReadonlyTag {
    return ts.factory.updateJSDocReadonlyTag(node, tagName, comment);
}
export function createJSDocUnknownTag({ tagName, comment }: {
    tagName: Identifier;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocUnknownTag {
    return ts.factory.createJSDocUnknownTag(tagName, comment);
}
export function updateJSDocUnknownTag({ node, tagName, comment }: {
    node: JSDocUnknownTag;
    tagName: Identifier;
    comment: string | NodeArray<JSDocComment> | undefined;
}): JSDocUnknownTag {
    return ts.factory.updateJSDocUnknownTag(node, tagName, comment);
}
export function createJSDocDeprecatedTag({ tagName, comment }: {
    tagName: Identifier | undefined;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocDeprecatedTag {
    return ts.factory.createJSDocDeprecatedTag(tagName, comment);
}
export function updateJSDocDeprecatedTag({ node, tagName, comment }: {
    node: JSDocDeprecatedTag;
    tagName: Identifier | undefined;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocDeprecatedTag {
    return ts.factory.updateJSDocDeprecatedTag(node, tagName, comment);
}
export function createJSDocOverrideTag({ tagName, comment }: {
    tagName: Identifier | undefined;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocOverrideTag {
    return ts.factory.createJSDocOverrideTag(tagName, comment);
}
export function updateJSDocOverrideTag({ node, tagName, comment }: {
    node: JSDocOverrideTag;
    tagName: Identifier | undefined;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocOverrideTag {
    return ts.factory.updateJSDocOverrideTag(node, tagName, comment);
}
export function createJSDocThrowsTag({ tagName, typeExpression, comment }: {
    tagName: Identifier;
    typeExpression: JSDocTypeExpression | undefined;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocThrowsTag {
    return ts.factory.createJSDocThrowsTag(tagName, typeExpression, comment);
}
export function updateJSDocThrowsTag({ node, tagName, typeExpression, comment }: {
    node: JSDocThrowsTag;
    tagName: Identifier | undefined;
    typeExpression: JSDocTypeExpression | undefined;
    comment?: string | NodeArray<JSDocComment> | undefined;
}): JSDocThrowsTag {
    return ts.factory.updateJSDocThrowsTag(node, tagName, typeExpression, comment);
}
export function createJSDocSatisfiesTag({ tagName, typeExpression, comment }: {
    tagName: Identifier | undefined;
    typeExpression: JSDocTypeExpression;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocSatisfiesTag {
    return ts.factory.createJSDocSatisfiesTag(tagName, typeExpression, comment);
}
export function updateJSDocSatisfiesTag({ node, tagName, typeExpression, comment }: {
    node: JSDocSatisfiesTag;
    tagName: Identifier | undefined;
    typeExpression: JSDocTypeExpression;
    comment: string | NodeArray<JSDocComment> | undefined;
}): JSDocSatisfiesTag {
    return ts.factory.updateJSDocSatisfiesTag(node, tagName, typeExpression, comment);
}
export function createJSDocText({ text }: {
    text: string;
}): JSDocText {
    return ts.factory.createJSDocText(text);
}
export function updateJSDocText({ node, text }: {
    node: JSDocText;
    text: string;
}): JSDocText {
    return ts.factory.updateJSDocText(node, text);
}
export function createJSDocComment({ comment, tags }: {
    comment?: string | NodeArray<JSDocComment> | undefined;
    tags?: readonly JSDocTag[] | undefined;
}): JSDoc {
    return ts.factory.createJSDocComment(comment, tags);
}
export function updateJSDocComment({ node, comment, tags }: {
    node: JSDoc;
    comment: string | NodeArray<JSDocComment> | undefined;
    tags: readonly JSDocTag[] | undefined;
}): JSDoc {
    return ts.factory.updateJSDocComment(node, comment, tags);
}
export function createJsxElement({ openingElement, children, closingElement }: {
    openingElement: JsxOpeningElement;
    children: readonly JsxChild[];
    closingElement: JsxClosingElement;
}): JsxElement {
    return ts.factory.createJsxElement(openingElement, children, closingElement);
}
export function updateJsxElement({ node, openingElement, children, closingElement }: {
    node: JsxElement;
    openingElement: JsxOpeningElement;
    children: readonly JsxChild[];
    closingElement: JsxClosingElement;
}): JsxElement {
    return ts.factory.updateJsxElement(node, openingElement, children, closingElement);
}
export function createJsxSelfClosingElement({ tagName, typeArguments, attributes }: {
    tagName: JsxTagNameExpression;
    typeArguments: readonly TypeNode[] | undefined;
    attributes: JsxAttributes;
}): JsxSelfClosingElement {
    return ts.factory.createJsxSelfClosingElement(tagName, typeArguments, attributes);
}
export function updateJsxSelfClosingElement({ node, tagName, typeArguments, attributes }: {
    node: JsxSelfClosingElement;
    tagName: JsxTagNameExpression;
    typeArguments: readonly TypeNode[] | undefined;
    attributes: JsxAttributes;
}): JsxSelfClosingElement {
    return ts.factory.updateJsxSelfClosingElement(node, tagName, typeArguments, attributes);
}
export function createJsxOpeningElement({ tagName, typeArguments, attributes }: {
    tagName: JsxTagNameExpression;
    typeArguments: readonly TypeNode[] | undefined;
    attributes: JsxAttributes;
}): JsxOpeningElement {
    return ts.factory.createJsxOpeningElement(tagName, typeArguments, attributes);
}
export function updateJsxOpeningElement({ node, tagName, typeArguments, attributes }: {
    node: JsxOpeningElement;
    tagName: JsxTagNameExpression;
    typeArguments: readonly TypeNode[] | undefined;
    attributes: JsxAttributes;
}): JsxOpeningElement {
    return ts.factory.updateJsxOpeningElement(node, tagName, typeArguments, attributes);
}
export function createJsxClosingElement({ tagName }: {
    tagName: JsxTagNameExpression;
}): JsxClosingElement {
    return ts.factory.createJsxClosingElement(tagName);
}
export function updateJsxClosingElement({ node, tagName }: {
    node: JsxClosingElement;
    tagName: JsxTagNameExpression;
}): JsxClosingElement {
    return ts.factory.updateJsxClosingElement(node, tagName);
}
export function createJsxFragment({ openingFragment, children, closingFragment }: {
    openingFragment: JsxOpeningFragment;
    children: readonly JsxChild[];
    closingFragment: JsxClosingFragment;
}): JsxFragment {
    return ts.factory.createJsxFragment(openingFragment, children, closingFragment);
}
export function createJsxText({ text, containsOnlyTriviaWhiteSpaces }: {
    text: string;
    containsOnlyTriviaWhiteSpaces?: boolean;
}): JsxText {
    return ts.factory.createJsxText(text, containsOnlyTriviaWhiteSpaces);
}
export function updateJsxText({ node, text, containsOnlyTriviaWhiteSpaces }: {
    node: JsxText;
    text: string;
    containsOnlyTriviaWhiteSpaces?: boolean;
}): JsxText {
    return ts.factory.updateJsxText(node, text, containsOnlyTriviaWhiteSpaces);
}
export function createJsxOpeningFragment(): JsxOpeningFragment {
    return ts.factory.createJsxOpeningFragment();
}
export function createJsxJsxClosingFragment(): JsxClosingFragment {
    return ts.factory.createJsxJsxClosingFragment();
}
export function updateJsxFragment({ node, openingFragment, children, closingFragment }: {
    node: JsxFragment;
    openingFragment: JsxOpeningFragment;
    children: readonly JsxChild[];
    closingFragment: JsxClosingFragment;
}): JsxFragment {
    return ts.factory.updateJsxFragment(node, openingFragment, children, closingFragment);
}
export function createJsxAttribute({ name, initializer }: {
    name: JsxAttributeName;
    initializer: JsxAttributeValue | undefined;
}): JsxAttribute {
    return ts.factory.createJsxAttribute(name, initializer);
}
export function updateJsxAttribute({ node, name, initializer }: {
    node: JsxAttribute;
    name: JsxAttributeName;
    initializer: JsxAttributeValue | undefined;
}): JsxAttribute {
    return ts.factory.updateJsxAttribute(node, name, initializer);
}
export function createJsxAttributes({ properties }: {
    properties: readonly JsxAttributeLike[];
}): JsxAttributes {
    return ts.factory.createJsxAttributes(properties);
}
export function updateJsxAttributes({ node, properties }: {
    node: JsxAttributes;
    properties: readonly JsxAttributeLike[];
}): JsxAttributes {
    return ts.factory.updateJsxAttributes(node, properties);
}
export function createJsxSpreadAttribute({ expression }: {
    expression: Expression;
}): JsxSpreadAttribute {
    return ts.factory.createJsxSpreadAttribute(expression);
}
export function updateJsxSpreadAttribute({ node, expression }: {
    node: JsxSpreadAttribute;
    expression: Expression;
}): JsxSpreadAttribute {
    return ts.factory.updateJsxSpreadAttribute(node, expression);
}
export function createJsxExpression({ dotDotDotToken, expression }: {
    dotDotDotToken: DotDotDotToken | undefined;
    expression: Expression | undefined;
}): JsxExpression {
    return ts.factory.createJsxExpression(dotDotDotToken, expression);
}
export function updateJsxExpression({ node, expression }: {
    node: JsxExpression;
    expression: Expression | undefined;
}): JsxExpression {
    return ts.factory.updateJsxExpression(node, expression);
}
export function createJsxNamespacedName({ namespace, name }: {
    namespace: Identifier;
    name: Identifier;
}): JsxNamespacedName {
    return ts.factory.createJsxNamespacedName(namespace, name);
}
export function updateJsxNamespacedName({ node, namespace, name }: {
    node: JsxNamespacedName;
    namespace: Identifier;
    name: Identifier;
}): JsxNamespacedName {
    return ts.factory.updateJsxNamespacedName(node, namespace, name);
}
export function createCaseClause({ expression, statements }: {
    expression: Expression;
    statements: readonly Statement[];
}): CaseClause {
    return ts.factory.createCaseClause(expression, statements);
}
export function updateCaseClause({ node, expression, statements }: {
    node: CaseClause;
    expression: Expression;
    statements: readonly Statement[];
}): CaseClause {
    return ts.factory.updateCaseClause(node, expression, statements);
}
export function createDefaultClause({ statements }: {
    statements: readonly Statement[];
}): DefaultClause {
    return ts.factory.createDefaultClause(statements);
}
export function updateDefaultClause({ node, statements }: {
    node: DefaultClause;
    statements: readonly Statement[];
}): DefaultClause {
    return ts.factory.updateDefaultClause(node, statements);
}
export function createHeritageClause({ token, types }: {
    token: HeritageClause["token"];
    types: readonly ExpressionWithTypeArguments[];
}): HeritageClause {
    return ts.factory.createHeritageClause(token, types);
}
export function updateHeritageClause({ node, types }: {
    node: HeritageClause;
    types: readonly ExpressionWithTypeArguments[];
}): HeritageClause {
    return ts.factory.updateHeritageClause(node, types);
}
export function createCatchClause({ variableDeclaration, block }: {
    variableDeclaration: string | BindingName | VariableDeclaration | undefined;
    block: Block;
}): CatchClause {
    return ts.factory.createCatchClause(variableDeclaration, block);
}
export function updateCatchClause({ node, variableDeclaration, block }: {
    node: CatchClause;
    variableDeclaration: VariableDeclaration | undefined;
    block: Block;
}): CatchClause {
    return ts.factory.updateCatchClause(node, variableDeclaration, block);
}
export function createPropertyAssignment({ name, initializer }: {
    name: string | PropertyName;
    initializer: Expression;
}): PropertyAssignment {
    return ts.factory.createPropertyAssignment(name, initializer);
}
export function updatePropertyAssignment({ node, name, initializer }: {
    node: PropertyAssignment;
    name: PropertyName;
    initializer: Expression;
}): PropertyAssignment {
    return ts.factory.updatePropertyAssignment(node, name, initializer);
}
export function createShorthandPropertyAssignment({ name, objectAssignmentInitializer }: {
    name: string | Identifier;
    objectAssignmentInitializer?: Expression;
}): ShorthandPropertyAssignment {
    return ts.factory.createShorthandPropertyAssignment(name, objectAssignmentInitializer);
}
export function updateShorthandPropertyAssignment({ node, name, objectAssignmentInitializer }: {
    node: ShorthandPropertyAssignment;
    name: Identifier;
    objectAssignmentInitializer: Expression | undefined;
}): ShorthandPropertyAssignment {
    return ts.factory.updateShorthandPropertyAssignment(node, name, objectAssignmentInitializer);
}
export function createSpreadAssignment({ expression }: {
    expression: Expression;
}): SpreadAssignment {
    return ts.factory.createSpreadAssignment(expression);
}
export function updateSpreadAssignment({ node, expression }: {
    node: SpreadAssignment;
    expression: Expression;
}): SpreadAssignment {
    return ts.factory.updateSpreadAssignment(node, expression);
}
export function createEnumMember({ name, initializer }: {
    name: string | PropertyName;
    initializer?: Expression;
}): EnumMember {
    return ts.factory.createEnumMember(name, initializer);
}
export function updateEnumMember({ node, name, initializer }: {
    node: EnumMember;
    name: PropertyName;
    initializer: Expression | undefined;
}): EnumMember {
    return ts.factory.updateEnumMember(node, name, initializer);
}
export function createSourceFile({ statements, endOfFileToken, flags }: {
    statements: readonly Statement[];
    endOfFileToken: EndOfFileToken;
    flags: NodeFlags;
}): SourceFile {
    return ts.factory.createSourceFile(statements, endOfFileToken, flags);
}
export function updateSourceFile({ node, statements, isDeclarationFile, referencedFiles, typeReferences, hasNoDefaultLib, libReferences }: {
    node: SourceFile;
    statements: readonly Statement[];
    isDeclarationFile?: boolean;
    referencedFiles?: readonly FileReference[];
    typeReferences?: readonly FileReference[];
    hasNoDefaultLib?: boolean;
    libReferences?: readonly FileReference[];
}): SourceFile {
    return ts.factory.updateSourceFile(node, statements, isDeclarationFile, referencedFiles, typeReferences, hasNoDefaultLib, libReferences);
}
export function createNotEmittedStatement({ original }: {
    original: Node;
}): NotEmittedStatement {
    return ts.factory.createNotEmittedStatement(original);
}
export function createPartiallyEmittedExpression({ expression, original }: {
    expression: Expression;
    original?: Node;
}): PartiallyEmittedExpression {
    return ts.factory.createPartiallyEmittedExpression(expression, original);
}
export function updatePartiallyEmittedExpression({ node, expression }: {
    node: PartiallyEmittedExpression;
    expression: Expression;
}): PartiallyEmittedExpression {
    return ts.factory.updatePartiallyEmittedExpression(node, expression);
}
export function createCommaListExpression({ elements }: {
    elements: readonly Expression[];
}): CommaListExpression {
    return ts.factory.createCommaListExpression(elements);
}
export function updateCommaListExpression({ node, elements }: {
    node: CommaListExpression;
    elements: readonly Expression[];
}): CommaListExpression {
    return ts.factory.updateCommaListExpression(node, elements);
}
export function createBundle({ sourceFiles }: {
    sourceFiles: readonly SourceFile[];
}): Bundle;
export function createBundle({ sourceFiles, prepends }: {
    sourceFiles: readonly SourceFile[];
    prepends?: readonly (UnparsedSource | InputFiles)[];
}): Bundle;
export function createBundle({ sourceFiles, prepends }: {
    sourceFiles;
    prepends?;
}) {
    return ts.factory.createBundle(sourceFiles, prepends);
}
export function updateBundle({ node, sourceFiles }: {
    node: Bundle;
    sourceFiles: readonly SourceFile[];
}): Bundle;
export function updateBundle({ node, sourceFiles, prepends }: {
    node: Bundle;
    sourceFiles: readonly SourceFile[];
    prepends?: readonly (UnparsedSource | InputFiles)[];
}): Bundle;
export function updateBundle({ node, sourceFiles, prepends }: {
    node;
    sourceFiles;
    prepends?;
}) {
    return ts.factory.updateBundle(node, sourceFiles, prepends);
}
export function createComma({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression {
    return ts.factory.createComma(left, right);
}
export function createAssignment({ left, right }: {
    left: ObjectLiteralExpression | ArrayLiteralExpression;
    right: Expression;
}): DestructuringAssignment;
export function createAssignment({ left, right }: {
    left: Expression;
    right: Expression;
}): AssignmentExpression<EqualsToken>;
export function createAssignment({ left, right }: {
    left;
    right;
}) {
    return ts.factory.createAssignment(left, right);
}
export function createLogicalOr({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression {
    return ts.factory.createLogicalOr(left, right);
}
export function createLogicalAnd({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression {
    return ts.factory.createLogicalAnd(left, right);
}
export function createBitwiseOr({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression {
    return ts.factory.createBitwiseOr(left, right);
}
export function createBitwiseXor({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression {
    return ts.factory.createBitwiseXor(left, right);
}
export function createBitwiseAnd({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression {
    return ts.factory.createBitwiseAnd(left, right);
}
export function createStrictEquality({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression {
    return ts.factory.createStrictEquality(left, right);
}
export function createStrictInequality({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression {
    return ts.factory.createStrictInequality(left, right);
}
export function createEquality({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression {
    return ts.factory.createEquality(left, right);
}
export function createInequality({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression {
    return ts.factory.createInequality(left, right);
}
export function createLessThan({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression {
    return ts.factory.createLessThan(left, right);
}
export function createLessThanEquals({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression {
    return ts.factory.createLessThanEquals(left, right);
}
export function createGreaterThan({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression {
    return ts.factory.createGreaterThan(left, right);
}
export function createGreaterThanEquals({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression {
    return ts.factory.createGreaterThanEquals(left, right);
}
export function createLeftShift({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression {
    return ts.factory.createLeftShift(left, right);
}
export function createRightShift({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression {
    return ts.factory.createRightShift(left, right);
}
export function createUnsignedRightShift({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression {
    return ts.factory.createUnsignedRightShift(left, right);
}
export function createAdd({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression {
    return ts.factory.createAdd(left, right);
}
export function createSubtract({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression {
    return ts.factory.createSubtract(left, right);
}
export function createMultiply({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression {
    return ts.factory.createMultiply(left, right);
}
export function createDivide({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression {
    return ts.factory.createDivide(left, right);
}
export function createModulo({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression {
    return ts.factory.createModulo(left, right);
}
export function createExponent({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression {
    return ts.factory.createExponent(left, right);
}
export function createPrefixPlus({ operand }: {
    operand: Expression;
}): PrefixUnaryExpression {
    return ts.factory.createPrefixPlus(operand);
}
export function createPrefixMinus({ operand }: {
    operand: Expression;
}): PrefixUnaryExpression {
    return ts.factory.createPrefixMinus(operand);
}
export function createPrefixIncrement({ operand }: {
    operand: Expression;
}): PrefixUnaryExpression {
    return ts.factory.createPrefixIncrement(operand);
}
export function createPrefixDecrement({ operand }: {
    operand: Expression;
}): PrefixUnaryExpression {
    return ts.factory.createPrefixDecrement(operand);
}
export function createBitwiseNot({ operand }: {
    operand: Expression;
}): PrefixUnaryExpression {
    return ts.factory.createBitwiseNot(operand);
}
export function createLogicalNot({ operand }: {
    operand: Expression;
}): PrefixUnaryExpression {
    return ts.factory.createLogicalNot(operand);
}
export function createPostfixIncrement({ operand }: {
    operand: Expression;
}): PostfixUnaryExpression {
    return ts.factory.createPostfixIncrement(operand);
}
export function createPostfixDecrement({ operand }: {
    operand: Expression;
}): PostfixUnaryExpression {
    return ts.factory.createPostfixDecrement(operand);
}
export function createImmediatelyInvokedFunctionExpression({ statements }: {
    statements: readonly Statement[];
}): CallExpression;
export function createImmediatelyInvokedFunctionExpression({ statements, param, paramValue }: {
    statements: readonly Statement[];
    param: ParameterDeclaration;
    paramValue: Expression;
}): CallExpression;
export function createImmediatelyInvokedFunctionExpression({ statements, param, paramValue }: {
    statements;
    param;
    paramValue;
}) {
    return ts.factory.createImmediatelyInvokedFunctionExpression(statements, param, paramValue);
}
export function createImmediatelyInvokedArrowFunction({ statements }: {
    statements: readonly Statement[];
}): ImmediatelyInvokedArrowFunction;
export function createImmediatelyInvokedArrowFunction({ statements, param, paramValue }: {
    statements: readonly Statement[];
    param: ParameterDeclaration;
    paramValue: Expression;
}): ImmediatelyInvokedArrowFunction;
export function createImmediatelyInvokedArrowFunction({ statements, param, paramValue }: {
    statements;
    param;
    paramValue;
}) {
    return ts.factory.createImmediatelyInvokedArrowFunction(statements, param, paramValue);
}
export function createVoidZero(): VoidExpression {
    return ts.factory.createVoidZero();
}
export function createExportDefault({ expression }: {
    expression: Expression;
}): ExportAssignment {
    return ts.factory.createExportDefault(expression);
}
export function createExternalModuleExport({ exportName }: {
    exportName: Identifier;
}): ExportDeclaration {
    return ts.factory.createExternalModuleExport(exportName);
}
export function restoreOuterExpressions({ outerExpression, innerExpression, kinds }: {
    outerExpression: Expression | undefined;
    innerExpression: Expression;
    kinds?: OuterExpressionKinds;
}): Expression {
    return ts.factory.restoreOuterExpressions(outerExpression, innerExpression, kinds);
}
export function replaceModifiers<T extends HasModifiers>({ node, modifiers }: {
    node: T;
    modifiers: readonly Modifier[] | ModifierFlags | undefined;
}): T {
    return ts.factory.replaceModifiers<T>(node, modifiers);
}
export function replaceDecoratorsAndModifiers<T extends HasModifiers & HasDecorators>({ node, modifiers }: {
    node: T;
    modifiers: readonly ModifierLike[] | undefined;
}): T {
    return ts.factory.replaceDecoratorsAndModifiers<T>(node, modifiers);
}
export function replacePropertyName<T extends AccessorDeclaration | MethodDeclaration | MethodSignature | PropertyDeclaration | PropertySignature | PropertyAssignment>({ node, name }: {
    node: T;
    name: T["name"];
}): T {
    return ts.factory.replacePropertyName<T>(node, name);
}
