/*
    This code is automayicly generated, do not edit by hand.
    Generated at: 2024-06-15 11:16:50.533
    Generated for: typescript@5.4.5
*/
import ts, { NodeArray, Node, NumericLiteral, TokenFlags, BigIntLiteral, PseudoBigInt, StringLiteral, PropertyNameLiteral, PrivateIdentifier, RegularExpressionLiteral, Identifier, GeneratedIdentifierFlags, SuperExpression, SyntaxKind, ThisExpression, NullLiteral, TrueLiteral, FalseLiteral, EndOfFileToken, Token, PunctuationToken, PunctuationSyntaxKind, KeywordTypeNode, KeywordTypeSyntaxKind, ModifierToken, ModifierSyntaxKind, KeywordToken, KeywordSyntaxKind, Modifier, ModifierFlags, QualifiedName, EntityName, ComputedPropertyName, Expression, TypeParameterDeclaration, TypeNode, ParameterDeclaration, ModifierLike, DotDotDotToken, BindingName, QuestionToken, Decorator, PropertySignature, PropertyName, PropertyDeclaration, ExclamationToken, MethodSignature, MethodDeclaration, AsteriskToken, Block, ConstructorDeclaration, GetAccessorDeclaration, SetAccessorDeclaration, CallSignatureDeclaration, ConstructSignatureDeclaration, IndexSignatureDeclaration, TemplateLiteralTypeSpan, TemplateMiddle, TemplateTail, ClassStaticBlockDeclaration, TypePredicateNode, AssertsKeyword, ThisTypeNode, TypeReferenceNode, FunctionTypeNode, ConstructorTypeNode, TypeQueryNode, TypeLiteralNode, TypeElement, ArrayTypeNode, TupleTypeNode, NamedTupleMember, OptionalTypeNode, RestTypeNode, UnionTypeNode, IntersectionTypeNode, ConditionalTypeNode, InferTypeNode, ImportTypeNode, ImportAttributes, ParenthesizedTypeNode, TypeOperatorNode, IndexedAccessTypeNode, MappedTypeNode, ReadonlyKeyword, PlusToken, MinusToken, LiteralTypeNode, TemplateLiteralTypeNode, TemplateHead, ObjectBindingPattern, BindingElement, ArrayBindingPattern, ArrayBindingElement, ArrayLiteralExpression, ObjectLiteralExpression, ObjectLiteralElementLike, PropertyAccessExpression, MemberName, PropertyAccessChain, QuestionDotToken, ElementAccessExpression, ElementAccessChain, CallExpression, CallChain, NewExpression, TaggedTemplateExpression, TemplateLiteral, TypeAssertion, ParenthesizedExpression, FunctionExpression, ArrowFunction, EqualsGreaterThanToken, ConciseBody, DeleteExpression, TypeOfExpression, VoidExpression, AwaitExpression, PrefixUnaryExpression, PrefixUnaryOperator, PostfixUnaryExpression, PostfixUnaryOperator, BinaryExpression, BinaryOperator, BinaryOperatorToken, ConditionalExpression, ColonToken, TemplateExpression, TemplateSpan, NoSubstitutionTemplateLiteral, YieldExpression, SpreadElement, ClassExpression, HeritageClause, ClassElement, OmittedExpression, ExpressionWithTypeArguments, AsExpression, NonNullExpression, NonNullChain, MetaProperty, SatisfiesExpression, SemicolonClassElement, Statement, VariableStatement, VariableDeclarationList, VariableDeclaration, EmptyStatement, ExpressionStatement, IfStatement, DoStatement, WhileStatement, ForStatement, ForInitializer, ForInStatement, ForOfStatement, AwaitKeyword, ContinueStatement, BreakStatement, ReturnStatement, WithStatement, SwitchStatement, CaseBlock, LabeledStatement, ThrowStatement, TryStatement, CatchClause, DebuggerStatement, NodeFlags, FunctionDeclaration, ClassDeclaration, InterfaceDeclaration, TypeAliasDeclaration, EnumDeclaration, EnumMember, ModuleDeclaration, ModuleName, ModuleBody, ModuleBlock, CaseOrDefaultClause, NamespaceExportDeclaration, ImportEqualsDeclaration, ModuleReference, ImportDeclaration, ImportClause, NamedImportBindings, AssertClause, AssertEntry, AssertionKey, ImportTypeAssertionContainer, ImportAttribute, ImportAttributeName, NamespaceImport, NamespaceExport, NamedImports, ImportSpecifier, ExportAssignment, ExportDeclaration, NamedExportBindings, NamedExports, ExportSpecifier, ExternalModuleReference, JSDocAllType, JSDocUnknownType, JSDocNonNullableType, JSDocNullableType, JSDocOptionalType, JSDocFunctionType, JSDocVariadicType, JSDocNamepathType, JSDocTypeExpression, JSDocNameReference, JSDocMemberName, JSDocLink, JSDocLinkCode, JSDocLinkPlain, JSDocTypeLiteral, JSDocPropertyLikeTag, JSDocSignature, JSDocTemplateTag, JSDocParameterTag, JSDocReturnTag, JSDocComment, JSDocTypedefTag, JSDocNamespaceDeclaration, JSDocPropertyTag, JSDocTypeTag, JSDocSeeTag, JSDocThisTag, JSDocEnumTag, JSDocCallbackTag, JSDocOverloadTag, JSDocAugmentsTag, JSDocImplementsTag, JSDocAuthorTag, JSDocClassTag, JSDocPublicTag, JSDocPrivateTag, JSDocProtectedTag, JSDocReadonlyTag, JSDocUnknownTag, JSDocDeprecatedTag, JSDocOverrideTag, JSDocThrowsTag, JSDocSatisfiesTag, JSDocText, JSDoc, JSDocTag, JsxElement, JsxOpeningElement, JsxChild, JsxClosingElement, JsxSelfClosingElement, JsxTagNameExpression, JsxAttributes, JsxFragment, JsxOpeningFragment, JsxClosingFragment, JsxText, JsxAttribute, JsxAttributeName, JsxAttributeValue, JsxAttributeLike, JsxSpreadAttribute, JsxExpression, JsxNamespacedName, CaseClause, DefaultClause, PropertyAssignment, ShorthandPropertyAssignment, SpreadAssignment, SourceFile, FileReference, NotEmittedStatement, PartiallyEmittedExpression, CommaListExpression, Bundle, UnparsedSource, InputFiles, DestructuringAssignment, EqualsToken, AssignmentExpression, ImmediatelyInvokedArrowFunction, OuterExpressionKinds, HasModifiers, HasDecorators, AccessorDeclaration } from "typescript";
;
export function createNodeArray<T extends Node>({ elements, hasTrailingComma }: {
    elements?: readonly T[];
    hasTrailingComma?: boolean;
}): NodeArray<T>;
export function createNodeArray(o) {
    return ts.factory.createNodeArray(o.elements, o.hasTrailingComma);
}
export function createNumericLiteral({ value, numericLiteralFlags }: {
    value: string | number;
    numericLiteralFlags?: TokenFlags;
}): NumericLiteral;
export function createNumericLiteral(o) {
    return ts.factory.createNumericLiteral(o.value, o.numericLiteralFlags);
}
export function createBigIntLiteral({ value }: {
    value: string | PseudoBigInt;
}): BigIntLiteral;
export function createBigIntLiteral(o) {
    return ts.factory.createBigIntLiteral(o.value);
}
export function createStringLiteral({ text, isSingleQuote }: {
    text: string;
    isSingleQuote?: boolean;
}): StringLiteral;
export function createStringLiteral(o) {
    return ts.factory.createStringLiteral(o.text, o.isSingleQuote);
}
export function createStringLiteralFromNode({ sourceNode, isSingleQuote }: {
    sourceNode: PropertyNameLiteral | PrivateIdentifier;
    isSingleQuote?: boolean;
}): StringLiteral;
export function createStringLiteralFromNode(o) {
    return ts.factory.createStringLiteralFromNode(o.sourceNode, o.isSingleQuote);
}
export function createRegularExpressionLiteral({ text }: {
    text: string;
}): RegularExpressionLiteral;
export function createRegularExpressionLiteral(o) {
    return ts.factory.createRegularExpressionLiteral(o.text);
}
export function createIdentifier({ text }: {
    text: string;
}): Identifier;
export function createIdentifier(o) {
    return ts.factory.createIdentifier(o.text);
}
export function createTempVariable({ recordTempVariable, reservedInNestedScopes }: {
    recordTempVariable?: ((node: Identifier) => void) | undefined;
    reservedInNestedScopes?: boolean;
}): Identifier;
export function createTempVariable(o) {
    return ts.factory.createTempVariable(o.recordTempVariable, o.reservedInNestedScopes);
}
export function createLoopVariable({ reservedInNestedScopes }: {
    reservedInNestedScopes?: boolean;
}): Identifier;
export function createLoopVariable(o) {
    return ts.factory.createLoopVariable(o.reservedInNestedScopes);
}
export function createUniqueName({ text, flags }: {
    text: string;
    flags?: GeneratedIdentifierFlags;
}): Identifier;
export function createUniqueName(o) {
    return ts.factory.createUniqueName(o.text, o.flags);
}
export function getGeneratedNameForNode({ node, flags }: {
    node?: Node | undefined;
    flags?: GeneratedIdentifierFlags;
}): Identifier;
export function getGeneratedNameForNode(o) {
    return ts.factory.getGeneratedNameForNode(o.node, o.flags);
}
export function createPrivateIdentifier({ text }: {
    text: string;
}): PrivateIdentifier;
export function createPrivateIdentifier(o) {
    return ts.factory.createPrivateIdentifier(o.text);
}
export function createUniquePrivateName({ text }: {
    text?: string;
}): PrivateIdentifier;
export function createUniquePrivateName(o) {
    return ts.factory.createUniquePrivateName(o.text);
}
export function getGeneratedPrivateNameForNode({ node }: {
    node: Node;
}): PrivateIdentifier;
export function getGeneratedPrivateNameForNode(o) {
    return ts.factory.getGeneratedPrivateNameForNode(o.node);
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
export function createToken(o) {
    return ts.factory.createToken(o.token);
}
export function createSuper(): SuperExpression;
export function createSuper() {
    return ts.factory.createSuper();
}
export function createThis(): ThisExpression;
export function createThis() {
    return ts.factory.createThis();
}
export function createNull(): NullLiteral;
export function createNull() {
    return ts.factory.createNull();
}
export function createTrue(): TrueLiteral;
export function createTrue() {
    return ts.factory.createTrue();
}
export function createFalse(): FalseLiteral;
export function createFalse() {
    return ts.factory.createFalse();
}
export function createModifier<T extends ModifierSyntaxKind>({ kind }: {
    kind: T;
}): ModifierToken<T>;
export function createModifier(o) {
    return ts.factory.createModifier(o.kind);
}
export function createModifiersFromModifierFlags({ flags }: {
    flags: ModifierFlags;
}): Modifier[] | undefined;
export function createModifiersFromModifierFlags(o) {
    return ts.factory.createModifiersFromModifierFlags(o.flags);
}
export function createQualifiedName({ left, right }: {
    left: EntityName;
    right: string | Identifier;
}): QualifiedName;
export function createQualifiedName(o) {
    return ts.factory.createQualifiedName(o.left, o.right);
}
export function updateQualifiedName({ node, left, right }: {
    node: QualifiedName;
    left: EntityName;
    right: Identifier;
}): QualifiedName;
export function updateQualifiedName(o) {
    return ts.factory.updateQualifiedName(o.node, o.left, o.right);
}
export function createComputedPropertyName({ expression }: {
    expression: Expression;
}): ComputedPropertyName;
export function createComputedPropertyName(o) {
    return ts.factory.createComputedPropertyName(o.expression);
}
export function updateComputedPropertyName({ node, expression }: {
    node: ComputedPropertyName;
    expression: Expression;
}): ComputedPropertyName;
export function updateComputedPropertyName(o) {
    return ts.factory.updateComputedPropertyName(o.node, o.expression);
}
export function createTypeParameterDeclaration({ modifiers, name, constraint, defaultType }: {
    modifiers?: readonly Modifier[] | undefined;
    name: string | Identifier;
    constraint?: TypeNode;
    defaultType?: TypeNode;
}): TypeParameterDeclaration;
export function createTypeParameterDeclaration(o) {
    return ts.factory.createTypeParameterDeclaration(o.modifiers, o.name, o.constraint, o.defaultType);
}
export function updateTypeParameterDeclaration({ node, modifiers, name, constraint, defaultType }: {
    node: TypeParameterDeclaration;
    modifiers?: readonly Modifier[] | undefined;
    name: Identifier;
    constraint?: TypeNode | undefined;
    defaultType?: TypeNode | undefined;
}): TypeParameterDeclaration;
export function updateTypeParameterDeclaration(o) {
    return ts.factory.updateTypeParameterDeclaration(o.node, o.modifiers, o.name, o.constraint, o.defaultType);
}
export function createParameterDeclaration({ modifiers, dotDotDotToken, name, questionToken, type, initializer }: {
    modifiers?: readonly ModifierLike[] | undefined;
    dotDotDotToken?: DotDotDotToken | undefined;
    name: string | BindingName;
    questionToken?: QuestionToken;
    type?: TypeNode;
    initializer?: Expression;
}): ParameterDeclaration;
export function createParameterDeclaration(o) {
    return ts.factory.createParameterDeclaration(o.modifiers, o.dotDotDotToken, o.name, o.questionToken, o.type, o.initializer);
}
export function updateParameterDeclaration({ node, modifiers, dotDotDotToken, name, questionToken, type, initializer }: {
    node: ParameterDeclaration;
    modifiers?: readonly ModifierLike[] | undefined;
    dotDotDotToken?: DotDotDotToken | undefined;
    name: string | BindingName;
    questionToken?: QuestionToken | undefined;
    type?: TypeNode | undefined;
    initializer?: Expression | undefined;
}): ParameterDeclaration;
export function updateParameterDeclaration(o) {
    return ts.factory.updateParameterDeclaration(o.node, o.modifiers, o.dotDotDotToken, o.name, o.questionToken, o.type, o.initializer);
}
export function createDecorator({ expression }: {
    expression: Expression;
}): Decorator;
export function createDecorator(o) {
    return ts.factory.createDecorator(o.expression);
}
export function updateDecorator({ node, expression }: {
    node: Decorator;
    expression: Expression;
}): Decorator;
export function updateDecorator(o) {
    return ts.factory.updateDecorator(o.node, o.expression);
}
export function createPropertySignature({ modifiers, name, questionToken, type }: {
    modifiers?: readonly Modifier[] | undefined;
    name: PropertyName | string;
    questionToken?: QuestionToken | undefined;
    type?: TypeNode | undefined;
}): PropertySignature;
export function createPropertySignature(o) {
    return ts.factory.createPropertySignature(o.modifiers, o.name, o.questionToken, o.type);
}
export function updatePropertySignature({ node, modifiers, name, questionToken, type }: {
    node: PropertySignature;
    modifiers?: readonly Modifier[] | undefined;
    name: PropertyName;
    questionToken?: QuestionToken | undefined;
    type?: TypeNode | undefined;
}): PropertySignature;
export function updatePropertySignature(o) {
    return ts.factory.updatePropertySignature(o.node, o.modifiers, o.name, o.questionToken, o.type);
}
export function createPropertyDeclaration({ modifiers, name, questionOrExclamationToken, type, initializer }: {
    modifiers?: readonly ModifierLike[] | undefined;
    name: string | PropertyName;
    questionOrExclamationToken?: QuestionToken | ExclamationToken | undefined;
    type?: TypeNode | undefined;
    initializer?: Expression | undefined;
}): PropertyDeclaration;
export function createPropertyDeclaration(o) {
    return ts.factory.createPropertyDeclaration(o.modifiers, o.name, o.questionOrExclamationToken, o.type, o.initializer);
}
export function updatePropertyDeclaration({ node, modifiers, name, questionOrExclamationToken, type, initializer }: {
    node: PropertyDeclaration;
    modifiers?: readonly ModifierLike[] | undefined;
    name: string | PropertyName;
    questionOrExclamationToken?: QuestionToken | ExclamationToken | undefined;
    type?: TypeNode | undefined;
    initializer?: Expression | undefined;
}): PropertyDeclaration;
export function updatePropertyDeclaration(o) {
    return ts.factory.updatePropertyDeclaration(o.node, o.modifiers, o.name, o.questionOrExclamationToken, o.type, o.initializer);
}
export function createMethodSignature({ modifiers, name, questionToken, typeParameters, parameters, type }: {
    modifiers?: readonly Modifier[] | undefined;
    name: string | PropertyName;
    questionToken?: QuestionToken | undefined;
    typeParameters?: readonly TypeParameterDeclaration[] | undefined;
    parameters: readonly ParameterDeclaration[];
    type?: TypeNode | undefined;
}): MethodSignature;
export function createMethodSignature(o) {
    return ts.factory.createMethodSignature(o.modifiers, o.name, o.questionToken, o.typeParameters, o.parameters, o.type);
}
export function updateMethodSignature({ node, modifiers, name, questionToken, typeParameters, parameters, type }: {
    node: MethodSignature;
    modifiers?: readonly Modifier[] | undefined;
    name: PropertyName;
    questionToken?: QuestionToken | undefined;
    typeParameters?: NodeArray<TypeParameterDeclaration> | undefined;
    parameters: NodeArray<ParameterDeclaration>;
    type?: TypeNode | undefined;
}): MethodSignature;
export function updateMethodSignature(o) {
    return ts.factory.updateMethodSignature(o.node, o.modifiers, o.name, o.questionToken, o.typeParameters, o.parameters, o.type);
}
export function createMethodDeclaration({ modifiers, asteriskToken, name, questionToken, typeParameters, parameters, type, body }: {
    modifiers?: readonly ModifierLike[] | undefined;
    asteriskToken?: AsteriskToken | undefined;
    name: string | PropertyName;
    questionToken?: QuestionToken | undefined;
    typeParameters?: readonly TypeParameterDeclaration[] | undefined;
    parameters: readonly ParameterDeclaration[];
    type?: TypeNode | undefined;
    body?: Block | undefined;
}): MethodDeclaration;
export function createMethodDeclaration(o) {
    return ts.factory.createMethodDeclaration(o.modifiers, o.asteriskToken, o.name, o.questionToken, o.typeParameters, o.parameters, o.type, o.body);
}
export function updateMethodDeclaration({ node, modifiers, asteriskToken, name, questionToken, typeParameters, parameters, type, body }: {
    node: MethodDeclaration;
    modifiers?: readonly ModifierLike[] | undefined;
    asteriskToken?: AsteriskToken | undefined;
    name: PropertyName;
    questionToken?: QuestionToken | undefined;
    typeParameters?: readonly TypeParameterDeclaration[] | undefined;
    parameters: readonly ParameterDeclaration[];
    type?: TypeNode | undefined;
    body?: Block | undefined;
}): MethodDeclaration;
export function updateMethodDeclaration(o) {
    return ts.factory.updateMethodDeclaration(o.node, o.modifiers, o.asteriskToken, o.name, o.questionToken, o.typeParameters, o.parameters, o.type, o.body);
}
export function createConstructorDeclaration({ modifiers, parameters, body }: {
    modifiers?: readonly ModifierLike[] | undefined;
    parameters: readonly ParameterDeclaration[];
    body?: Block | undefined;
}): ConstructorDeclaration;
export function createConstructorDeclaration(o) {
    return ts.factory.createConstructorDeclaration(o.modifiers, o.parameters, o.body);
}
export function updateConstructorDeclaration({ node, modifiers, parameters, body }: {
    node: ConstructorDeclaration;
    modifiers?: readonly ModifierLike[] | undefined;
    parameters: readonly ParameterDeclaration[];
    body?: Block | undefined;
}): ConstructorDeclaration;
export function updateConstructorDeclaration(o) {
    return ts.factory.updateConstructorDeclaration(o.node, o.modifiers, o.parameters, o.body);
}
export function createGetAccessorDeclaration({ modifiers, name, parameters, type, body }: {
    modifiers?: readonly ModifierLike[] | undefined;
    name: string | PropertyName;
    parameters: readonly ParameterDeclaration[];
    type?: TypeNode | undefined;
    body?: Block | undefined;
}): GetAccessorDeclaration;
export function createGetAccessorDeclaration(o) {
    return ts.factory.createGetAccessorDeclaration(o.modifiers, o.name, o.parameters, o.type, o.body);
}
export function updateGetAccessorDeclaration({ node, modifiers, name, parameters, type, body }: {
    node: GetAccessorDeclaration;
    modifiers?: readonly ModifierLike[] | undefined;
    name: PropertyName;
    parameters: readonly ParameterDeclaration[];
    type?: TypeNode | undefined;
    body?: Block | undefined;
}): GetAccessorDeclaration;
export function updateGetAccessorDeclaration(o) {
    return ts.factory.updateGetAccessorDeclaration(o.node, o.modifiers, o.name, o.parameters, o.type, o.body);
}
export function createSetAccessorDeclaration({ modifiers, name, parameters, body }: {
    modifiers?: readonly ModifierLike[] | undefined;
    name: string | PropertyName;
    parameters: readonly ParameterDeclaration[];
    body?: Block | undefined;
}): SetAccessorDeclaration;
export function createSetAccessorDeclaration(o) {
    return ts.factory.createSetAccessorDeclaration(o.modifiers, o.name, o.parameters, o.body);
}
export function updateSetAccessorDeclaration({ node, modifiers, name, parameters, body }: {
    node: SetAccessorDeclaration;
    modifiers?: readonly ModifierLike[] | undefined;
    name: PropertyName;
    parameters: readonly ParameterDeclaration[];
    body?: Block | undefined;
}): SetAccessorDeclaration;
export function updateSetAccessorDeclaration(o) {
    return ts.factory.updateSetAccessorDeclaration(o.node, o.modifiers, o.name, o.parameters, o.body);
}
export function createCallSignature({ typeParameters, parameters, type }: {
    typeParameters?: readonly TypeParameterDeclaration[] | undefined;
    parameters: readonly ParameterDeclaration[];
    type?: TypeNode | undefined;
}): CallSignatureDeclaration;
export function createCallSignature(o) {
    return ts.factory.createCallSignature(o.typeParameters, o.parameters, o.type);
}
export function updateCallSignature({ node, typeParameters, parameters, type }: {
    node: CallSignatureDeclaration;
    typeParameters?: NodeArray<TypeParameterDeclaration> | undefined;
    parameters: NodeArray<ParameterDeclaration>;
    type?: TypeNode | undefined;
}): CallSignatureDeclaration;
export function updateCallSignature(o) {
    return ts.factory.updateCallSignature(o.node, o.typeParameters, o.parameters, o.type);
}
export function createConstructSignature({ typeParameters, parameters, type }: {
    typeParameters?: readonly TypeParameterDeclaration[] | undefined;
    parameters: readonly ParameterDeclaration[];
    type?: TypeNode | undefined;
}): ConstructSignatureDeclaration;
export function createConstructSignature(o) {
    return ts.factory.createConstructSignature(o.typeParameters, o.parameters, o.type);
}
export function updateConstructSignature({ node, typeParameters, parameters, type }: {
    node: ConstructSignatureDeclaration;
    typeParameters?: NodeArray<TypeParameterDeclaration> | undefined;
    parameters: NodeArray<ParameterDeclaration>;
    type?: TypeNode | undefined;
}): ConstructSignatureDeclaration;
export function updateConstructSignature(o) {
    return ts.factory.updateConstructSignature(o.node, o.typeParameters, o.parameters, o.type);
}
export function createIndexSignature({ modifiers, parameters, type }: {
    modifiers?: readonly ModifierLike[] | undefined;
    parameters: readonly ParameterDeclaration[];
    type: TypeNode;
}): IndexSignatureDeclaration;
export function createIndexSignature(o) {
    return ts.factory.createIndexSignature(o.modifiers, o.parameters, o.type);
}
export function updateIndexSignature({ node, modifiers, parameters, type }: {
    node: IndexSignatureDeclaration;
    modifiers?: readonly ModifierLike[] | undefined;
    parameters: readonly ParameterDeclaration[];
    type: TypeNode;
}): IndexSignatureDeclaration;
export function updateIndexSignature(o) {
    return ts.factory.updateIndexSignature(o.node, o.modifiers, o.parameters, o.type);
}
export function createTemplateLiteralTypeSpan({ type, literal }: {
    type: TypeNode;
    literal: TemplateMiddle | TemplateTail;
}): TemplateLiteralTypeSpan;
export function createTemplateLiteralTypeSpan(o) {
    return ts.factory.createTemplateLiteralTypeSpan(o.type, o.literal);
}
export function updateTemplateLiteralTypeSpan({ node, type, literal }: {
    node: TemplateLiteralTypeSpan;
    type: TypeNode;
    literal: TemplateMiddle | TemplateTail;
}): TemplateLiteralTypeSpan;
export function updateTemplateLiteralTypeSpan(o) {
    return ts.factory.updateTemplateLiteralTypeSpan(o.node, o.type, o.literal);
}
export function createClassStaticBlockDeclaration({ body }: {
    body: Block;
}): ClassStaticBlockDeclaration;
export function createClassStaticBlockDeclaration(o) {
    return ts.factory.createClassStaticBlockDeclaration(o.body);
}
export function updateClassStaticBlockDeclaration({ node, body }: {
    node: ClassStaticBlockDeclaration;
    body: Block;
}): ClassStaticBlockDeclaration;
export function updateClassStaticBlockDeclaration(o) {
    return ts.factory.updateClassStaticBlockDeclaration(o.node, o.body);
}
export function createKeywordTypeNode<TKind extends KeywordTypeSyntaxKind>({ kind }: {
    kind: TKind;
}): KeywordTypeNode<TKind>;
export function createKeywordTypeNode(o) {
    return ts.factory.createKeywordTypeNode(o.kind);
}
export function createTypePredicateNode({ assertsModifier, parameterName, type }: {
    assertsModifier?: AssertsKeyword | undefined;
    parameterName: Identifier | ThisTypeNode | string;
    type?: TypeNode | undefined;
}): TypePredicateNode;
export function createTypePredicateNode(o) {
    return ts.factory.createTypePredicateNode(o.assertsModifier, o.parameterName, o.type);
}
export function updateTypePredicateNode({ node, assertsModifier, parameterName, type }: {
    node: TypePredicateNode;
    assertsModifier?: AssertsKeyword | undefined;
    parameterName: Identifier | ThisTypeNode;
    type?: TypeNode | undefined;
}): TypePredicateNode;
export function updateTypePredicateNode(o) {
    return ts.factory.updateTypePredicateNode(o.node, o.assertsModifier, o.parameterName, o.type);
}
export function createTypeReferenceNode({ typeName, typeArguments }: {
    typeName: string | EntityName;
    typeArguments?: readonly TypeNode[];
}): TypeReferenceNode;
export function createTypeReferenceNode(o) {
    return ts.factory.createTypeReferenceNode(o.typeName, o.typeArguments);
}
export function updateTypeReferenceNode({ node, typeName, typeArguments }: {
    node: TypeReferenceNode;
    typeName: EntityName;
    typeArguments?: NodeArray<TypeNode> | undefined;
}): TypeReferenceNode;
export function updateTypeReferenceNode(o) {
    return ts.factory.updateTypeReferenceNode(o.node, o.typeName, o.typeArguments);
}
export function createFunctionTypeNode({ typeParameters, parameters, type }: {
    typeParameters?: readonly TypeParameterDeclaration[] | undefined;
    parameters: readonly ParameterDeclaration[];
    type: TypeNode;
}): FunctionTypeNode;
export function createFunctionTypeNode(o) {
    return ts.factory.createFunctionTypeNode(o.typeParameters, o.parameters, o.type);
}
export function updateFunctionTypeNode({ node, typeParameters, parameters, type }: {
    node: FunctionTypeNode;
    typeParameters?: NodeArray<TypeParameterDeclaration> | undefined;
    parameters: NodeArray<ParameterDeclaration>;
    type: TypeNode;
}): FunctionTypeNode;
export function updateFunctionTypeNode(o) {
    return ts.factory.updateFunctionTypeNode(o.node, o.typeParameters, o.parameters, o.type);
}
export function createConstructorTypeNode({ modifiers, typeParameters, parameters, type }: {
    modifiers?: readonly Modifier[] | undefined;
    typeParameters?: readonly TypeParameterDeclaration[] | undefined;
    parameters: readonly ParameterDeclaration[];
    type: TypeNode;
}): ConstructorTypeNode;
export function createConstructorTypeNode(o) {
    return ts.factory.createConstructorTypeNode(o.modifiers, o.typeParameters, o.parameters, o.type);
}
export function updateConstructorTypeNode({ node, modifiers, typeParameters, parameters, type }: {
    node: ConstructorTypeNode;
    modifiers?: readonly Modifier[] | undefined;
    typeParameters?: NodeArray<TypeParameterDeclaration> | undefined;
    parameters: NodeArray<ParameterDeclaration>;
    type: TypeNode;
}): ConstructorTypeNode;
export function updateConstructorTypeNode(o) {
    return ts.factory.updateConstructorTypeNode(o.node, o.modifiers, o.typeParameters, o.parameters, o.type);
}
export function createTypeQueryNode({ exprName, typeArguments }: {
    exprName: EntityName;
    typeArguments?: readonly TypeNode[];
}): TypeQueryNode;
export function createTypeQueryNode(o) {
    return ts.factory.createTypeQueryNode(o.exprName, o.typeArguments);
}
export function updateTypeQueryNode({ node, exprName, typeArguments }: {
    node: TypeQueryNode;
    exprName: EntityName;
    typeArguments?: readonly TypeNode[];
}): TypeQueryNode;
export function updateTypeQueryNode(o) {
    return ts.factory.updateTypeQueryNode(o.node, o.exprName, o.typeArguments);
}
export function createTypeLiteralNode({ members }: {
    members?: readonly TypeElement[] | undefined;
}): TypeLiteralNode;
export function createTypeLiteralNode(o) {
    return ts.factory.createTypeLiteralNode(o.members);
}
export function updateTypeLiteralNode({ node, members }: {
    node: TypeLiteralNode;
    members: NodeArray<TypeElement>;
}): TypeLiteralNode;
export function updateTypeLiteralNode(o) {
    return ts.factory.updateTypeLiteralNode(o.node, o.members);
}
export function createArrayTypeNode({ elementType }: {
    elementType: TypeNode;
}): ArrayTypeNode;
export function createArrayTypeNode(o) {
    return ts.factory.createArrayTypeNode(o.elementType);
}
export function updateArrayTypeNode({ node, elementType }: {
    node: ArrayTypeNode;
    elementType: TypeNode;
}): ArrayTypeNode;
export function updateArrayTypeNode(o) {
    return ts.factory.updateArrayTypeNode(o.node, o.elementType);
}
export function createTupleTypeNode({ elements }: {
    elements: readonly (TypeNode | NamedTupleMember)[];
}): TupleTypeNode;
export function createTupleTypeNode(o) {
    return ts.factory.createTupleTypeNode(o.elements);
}
export function updateTupleTypeNode({ node, elements }: {
    node: TupleTypeNode;
    elements: readonly (TypeNode | NamedTupleMember)[];
}): TupleTypeNode;
export function updateTupleTypeNode(o) {
    return ts.factory.updateTupleTypeNode(o.node, o.elements);
}
export function createNamedTupleMember({ dotDotDotToken, name, questionToken, type }: {
    dotDotDotToken?: DotDotDotToken | undefined;
    name: Identifier;
    questionToken?: QuestionToken | undefined;
    type: TypeNode;
}): NamedTupleMember;
export function createNamedTupleMember(o) {
    return ts.factory.createNamedTupleMember(o.dotDotDotToken, o.name, o.questionToken, o.type);
}
export function updateNamedTupleMember({ node, dotDotDotToken, name, questionToken, type }: {
    node: NamedTupleMember;
    dotDotDotToken?: DotDotDotToken | undefined;
    name: Identifier;
    questionToken?: QuestionToken | undefined;
    type: TypeNode;
}): NamedTupleMember;
export function updateNamedTupleMember(o) {
    return ts.factory.updateNamedTupleMember(o.node, o.dotDotDotToken, o.name, o.questionToken, o.type);
}
export function createOptionalTypeNode({ type }: {
    type: TypeNode;
}): OptionalTypeNode;
export function createOptionalTypeNode(o) {
    return ts.factory.createOptionalTypeNode(o.type);
}
export function updateOptionalTypeNode({ node, type }: {
    node: OptionalTypeNode;
    type: TypeNode;
}): OptionalTypeNode;
export function updateOptionalTypeNode(o) {
    return ts.factory.updateOptionalTypeNode(o.node, o.type);
}
export function createRestTypeNode({ type }: {
    type: TypeNode;
}): RestTypeNode;
export function createRestTypeNode(o) {
    return ts.factory.createRestTypeNode(o.type);
}
export function updateRestTypeNode({ node, type }: {
    node: RestTypeNode;
    type: TypeNode;
}): RestTypeNode;
export function updateRestTypeNode(o) {
    return ts.factory.updateRestTypeNode(o.node, o.type);
}
export function createUnionTypeNode({ types }: {
    types: readonly TypeNode[];
}): UnionTypeNode;
export function createUnionTypeNode(o) {
    return ts.factory.createUnionTypeNode(o.types);
}
export function updateUnionTypeNode({ node, types }: {
    node: UnionTypeNode;
    types: NodeArray<TypeNode>;
}): UnionTypeNode;
export function updateUnionTypeNode(o) {
    return ts.factory.updateUnionTypeNode(o.node, o.types);
}
export function createIntersectionTypeNode({ types }: {
    types: readonly TypeNode[];
}): IntersectionTypeNode;
export function createIntersectionTypeNode(o) {
    return ts.factory.createIntersectionTypeNode(o.types);
}
export function updateIntersectionTypeNode({ node, types }: {
    node: IntersectionTypeNode;
    types: NodeArray<TypeNode>;
}): IntersectionTypeNode;
export function updateIntersectionTypeNode(o) {
    return ts.factory.updateIntersectionTypeNode(o.node, o.types);
}
export function createConditionalTypeNode({ checkType, extendsType, trueType, falseType }: {
    checkType: TypeNode;
    extendsType: TypeNode;
    trueType: TypeNode;
    falseType: TypeNode;
}): ConditionalTypeNode;
export function createConditionalTypeNode(o) {
    return ts.factory.createConditionalTypeNode(o.checkType, o.extendsType, o.trueType, o.falseType);
}
export function updateConditionalTypeNode({ node, checkType, extendsType, trueType, falseType }: {
    node: ConditionalTypeNode;
    checkType: TypeNode;
    extendsType: TypeNode;
    trueType: TypeNode;
    falseType: TypeNode;
}): ConditionalTypeNode;
export function updateConditionalTypeNode(o) {
    return ts.factory.updateConditionalTypeNode(o.node, o.checkType, o.extendsType, o.trueType, o.falseType);
}
export function createInferTypeNode({ typeParameter }: {
    typeParameter: TypeParameterDeclaration;
}): InferTypeNode;
export function createInferTypeNode(o) {
    return ts.factory.createInferTypeNode(o.typeParameter);
}
export function updateInferTypeNode({ node, typeParameter }: {
    node: InferTypeNode;
    typeParameter: TypeParameterDeclaration;
}): InferTypeNode;
export function updateInferTypeNode(o) {
    return ts.factory.updateInferTypeNode(o.node, o.typeParameter);
}
export function createImportTypeNode({ argument, attributes, qualifier, typeArguments, isTypeOf }: {
    argument: TypeNode;
    attributes?: ImportAttributes;
    qualifier?: EntityName;
    typeArguments?: readonly TypeNode[];
    isTypeOf?: boolean;
}): ImportTypeNode;
export function createImportTypeNode(o) {
    return ts.factory.createImportTypeNode(o.argument, o.attributes, o.qualifier, o.typeArguments, o.isTypeOf);
}
export function updateImportTypeNode({ node, argument, attributes, qualifier, typeArguments, isTypeOf }: {
    node: ImportTypeNode;
    argument: TypeNode;
    attributes?: ImportAttributes | undefined;
    qualifier?: EntityName | undefined;
    typeArguments?: readonly TypeNode[] | undefined;
    isTypeOf?: boolean;
}): ImportTypeNode;
export function updateImportTypeNode(o) {
    return ts.factory.updateImportTypeNode(o.node, o.argument, o.attributes, o.qualifier, o.typeArguments, o.isTypeOf);
}
export function createParenthesizedType({ type }: {
    type: TypeNode;
}): ParenthesizedTypeNode;
export function createParenthesizedType(o) {
    return ts.factory.createParenthesizedType(o.type);
}
export function updateParenthesizedType({ node, type }: {
    node: ParenthesizedTypeNode;
    type: TypeNode;
}): ParenthesizedTypeNode;
export function updateParenthesizedType(o) {
    return ts.factory.updateParenthesizedType(o.node, o.type);
}
export function createThisTypeNode(): ThisTypeNode;
export function createThisTypeNode() {
    return ts.factory.createThisTypeNode();
}
export function createTypeOperatorNode({ operator, type }: {
    operator: SyntaxKind.KeyOfKeyword | SyntaxKind.UniqueKeyword | SyntaxKind.ReadonlyKeyword;
    type: TypeNode;
}): TypeOperatorNode;
export function createTypeOperatorNode(o) {
    return ts.factory.createTypeOperatorNode(o.operator, o.type);
}
export function updateTypeOperatorNode({ node, type }: {
    node: TypeOperatorNode;
    type: TypeNode;
}): TypeOperatorNode;
export function updateTypeOperatorNode(o) {
    return ts.factory.updateTypeOperatorNode(o.node, o.type);
}
export function createIndexedAccessTypeNode({ objectType, indexType }: {
    objectType: TypeNode;
    indexType: TypeNode;
}): IndexedAccessTypeNode;
export function createIndexedAccessTypeNode(o) {
    return ts.factory.createIndexedAccessTypeNode(o.objectType, o.indexType);
}
export function updateIndexedAccessTypeNode({ node, objectType, indexType }: {
    node: IndexedAccessTypeNode;
    objectType: TypeNode;
    indexType: TypeNode;
}): IndexedAccessTypeNode;
export function updateIndexedAccessTypeNode(o) {
    return ts.factory.updateIndexedAccessTypeNode(o.node, o.objectType, o.indexType);
}
export function createMappedTypeNode({ readonlyToken, typeParameter, nameType, questionToken, type, members }: {
    readonlyToken?: ReadonlyKeyword | PlusToken | MinusToken | undefined;
    typeParameter: TypeParameterDeclaration;
    nameType?: TypeNode | undefined;
    questionToken?: QuestionToken | PlusToken | MinusToken | undefined;
    type?: TypeNode | undefined;
    members?: NodeArray<TypeElement> | undefined;
}): MappedTypeNode;
export function createMappedTypeNode(o) {
    return ts.factory.createMappedTypeNode(o.readonlyToken, o.typeParameter, o.nameType, o.questionToken, o.type, o.members);
}
export function updateMappedTypeNode({ node, readonlyToken, typeParameter, nameType, questionToken, type, members }: {
    node: MappedTypeNode;
    readonlyToken?: ReadonlyKeyword | PlusToken | MinusToken | undefined;
    typeParameter: TypeParameterDeclaration;
    nameType?: TypeNode | undefined;
    questionToken?: QuestionToken | PlusToken | MinusToken | undefined;
    type?: TypeNode | undefined;
    members?: NodeArray<TypeElement> | undefined;
}): MappedTypeNode;
export function updateMappedTypeNode(o) {
    return ts.factory.updateMappedTypeNode(o.node, o.readonlyToken, o.typeParameter, o.nameType, o.questionToken, o.type, o.members);
}
export function createLiteralTypeNode({ literal }: {
    literal: LiteralTypeNode["literal"];
}): LiteralTypeNode;
export function createLiteralTypeNode(o) {
    return ts.factory.createLiteralTypeNode(o.literal);
}
export function updateLiteralTypeNode({ node, literal }: {
    node: LiteralTypeNode;
    literal: LiteralTypeNode["literal"];
}): LiteralTypeNode;
export function updateLiteralTypeNode(o) {
    return ts.factory.updateLiteralTypeNode(o.node, o.literal);
}
export function createTemplateLiteralType({ head, templateSpans }: {
    head: TemplateHead;
    templateSpans: readonly TemplateLiteralTypeSpan[];
}): TemplateLiteralTypeNode;
export function createTemplateLiteralType(o) {
    return ts.factory.createTemplateLiteralType(o.head, o.templateSpans);
}
export function updateTemplateLiteralType({ node, head, templateSpans }: {
    node: TemplateLiteralTypeNode;
    head: TemplateHead;
    templateSpans: readonly TemplateLiteralTypeSpan[];
}): TemplateLiteralTypeNode;
export function updateTemplateLiteralType(o) {
    return ts.factory.updateTemplateLiteralType(o.node, o.head, o.templateSpans);
}
export function createObjectBindingPattern({ elements }: {
    elements: readonly BindingElement[];
}): ObjectBindingPattern;
export function createObjectBindingPattern(o) {
    return ts.factory.createObjectBindingPattern(o.elements);
}
export function updateObjectBindingPattern({ node, elements }: {
    node: ObjectBindingPattern;
    elements: readonly BindingElement[];
}): ObjectBindingPattern;
export function updateObjectBindingPattern(o) {
    return ts.factory.updateObjectBindingPattern(o.node, o.elements);
}
export function createArrayBindingPattern({ elements }: {
    elements: readonly ArrayBindingElement[];
}): ArrayBindingPattern;
export function createArrayBindingPattern(o) {
    return ts.factory.createArrayBindingPattern(o.elements);
}
export function updateArrayBindingPattern({ node, elements }: {
    node: ArrayBindingPattern;
    elements: readonly ArrayBindingElement[];
}): ArrayBindingPattern;
export function updateArrayBindingPattern(o) {
    return ts.factory.updateArrayBindingPattern(o.node, o.elements);
}
export function createBindingElement({ dotDotDotToken, propertyName, name, initializer }: {
    dotDotDotToken?: DotDotDotToken | undefined;
    propertyName?: string | PropertyName | undefined;
    name: string | BindingName;
    initializer?: Expression;
}): BindingElement;
export function createBindingElement(o) {
    return ts.factory.createBindingElement(o.dotDotDotToken, o.propertyName, o.name, o.initializer);
}
export function updateBindingElement({ node, dotDotDotToken, propertyName, name, initializer }: {
    node: BindingElement;
    dotDotDotToken?: DotDotDotToken | undefined;
    propertyName?: PropertyName | undefined;
    name: BindingName;
    initializer?: Expression | undefined;
}): BindingElement;
export function updateBindingElement(o) {
    return ts.factory.updateBindingElement(o.node, o.dotDotDotToken, o.propertyName, o.name, o.initializer);
}
export function createArrayLiteralExpression({ elements, multiLine }: {
    elements?: readonly Expression[];
    multiLine?: boolean;
}): ArrayLiteralExpression;
export function createArrayLiteralExpression(o) {
    return ts.factory.createArrayLiteralExpression(o.elements, o.multiLine);
}
export function updateArrayLiteralExpression({ node, elements }: {
    node: ArrayLiteralExpression;
    elements: readonly Expression[];
}): ArrayLiteralExpression;
export function updateArrayLiteralExpression(o) {
    return ts.factory.updateArrayLiteralExpression(o.node, o.elements);
}
export function createObjectLiteralExpression({ properties, multiLine }: {
    properties?: readonly ObjectLiteralElementLike[];
    multiLine?: boolean;
}): ObjectLiteralExpression;
export function createObjectLiteralExpression(o) {
    return ts.factory.createObjectLiteralExpression(o.properties, o.multiLine);
}
export function updateObjectLiteralExpression({ node, properties }: {
    node: ObjectLiteralExpression;
    properties: readonly ObjectLiteralElementLike[];
}): ObjectLiteralExpression;
export function updateObjectLiteralExpression(o) {
    return ts.factory.updateObjectLiteralExpression(o.node, o.properties);
}
export function createPropertyAccessExpression({ expression, name }: {
    expression: Expression;
    name: string | MemberName;
}): PropertyAccessExpression;
export function createPropertyAccessExpression(o) {
    return ts.factory.createPropertyAccessExpression(o.expression, o.name);
}
export function updatePropertyAccessExpression({ node, expression, name }: {
    node: PropertyAccessExpression;
    expression: Expression;
    name: MemberName;
}): PropertyAccessExpression;
export function updatePropertyAccessExpression(o) {
    return ts.factory.updatePropertyAccessExpression(o.node, o.expression, o.name);
}
export function createPropertyAccessChain({ expression, questionDotToken, name }: {
    expression: Expression;
    questionDotToken?: QuestionDotToken | undefined;
    name: string | MemberName;
}): PropertyAccessChain;
export function createPropertyAccessChain(o) {
    return ts.factory.createPropertyAccessChain(o.expression, o.questionDotToken, o.name);
}
export function updatePropertyAccessChain({ node, expression, questionDotToken, name }: {
    node: PropertyAccessChain;
    expression: Expression;
    questionDotToken?: QuestionDotToken | undefined;
    name: MemberName;
}): PropertyAccessChain;
export function updatePropertyAccessChain(o) {
    return ts.factory.updatePropertyAccessChain(o.node, o.expression, o.questionDotToken, o.name);
}
export function createElementAccessExpression({ expression, index }: {
    expression: Expression;
    index: number | Expression;
}): ElementAccessExpression;
export function createElementAccessExpression(o) {
    return ts.factory.createElementAccessExpression(o.expression, o.index);
}
export function updateElementAccessExpression({ node, expression, argumentExpression }: {
    node: ElementAccessExpression;
    expression: Expression;
    argumentExpression: Expression;
}): ElementAccessExpression;
export function updateElementAccessExpression(o) {
    return ts.factory.updateElementAccessExpression(o.node, o.expression, o.argumentExpression);
}
export function createElementAccessChain({ expression, questionDotToken, index }: {
    expression: Expression;
    questionDotToken?: QuestionDotToken | undefined;
    index: number | Expression;
}): ElementAccessChain;
export function createElementAccessChain(o) {
    return ts.factory.createElementAccessChain(o.expression, o.questionDotToken, o.index);
}
export function updateElementAccessChain({ node, expression, questionDotToken, argumentExpression }: {
    node: ElementAccessChain;
    expression: Expression;
    questionDotToken?: QuestionDotToken | undefined;
    argumentExpression: Expression;
}): ElementAccessChain;
export function updateElementAccessChain(o) {
    return ts.factory.updateElementAccessChain(o.node, o.expression, o.questionDotToken, o.argumentExpression);
}
export function createCallExpression({ expression, typeArguments, argumentsArray }: {
    expression: Expression;
    typeArguments?: readonly TypeNode[] | undefined;
    argumentsArray?: readonly Expression[] | undefined;
}): CallExpression;
export function createCallExpression(o) {
    return ts.factory.createCallExpression(o.expression, o.typeArguments, o.argumentsArray);
}
export function updateCallExpression({ node, expression, typeArguments, argumentsArray }: {
    node: CallExpression;
    expression: Expression;
    typeArguments?: readonly TypeNode[] | undefined;
    argumentsArray: readonly Expression[];
}): CallExpression;
export function updateCallExpression(o) {
    return ts.factory.updateCallExpression(o.node, o.expression, o.typeArguments, o.argumentsArray);
}
export function createCallChain({ expression, questionDotToken, typeArguments, argumentsArray }: {
    expression: Expression;
    questionDotToken?: QuestionDotToken | undefined;
    typeArguments?: readonly TypeNode[] | undefined;
    argumentsArray?: readonly Expression[] | undefined;
}): CallChain;
export function createCallChain(o) {
    return ts.factory.createCallChain(o.expression, o.questionDotToken, o.typeArguments, o.argumentsArray);
}
export function updateCallChain({ node, expression, questionDotToken, typeArguments, argumentsArray }: {
    node: CallChain;
    expression: Expression;
    questionDotToken?: QuestionDotToken | undefined;
    typeArguments?: readonly TypeNode[] | undefined;
    argumentsArray: readonly Expression[];
}): CallChain;
export function updateCallChain(o) {
    return ts.factory.updateCallChain(o.node, o.expression, o.questionDotToken, o.typeArguments, o.argumentsArray);
}
export function createNewExpression({ expression, typeArguments, argumentsArray }: {
    expression: Expression;
    typeArguments?: readonly TypeNode[] | undefined;
    argumentsArray?: readonly Expression[] | undefined;
}): NewExpression;
export function createNewExpression(o) {
    return ts.factory.createNewExpression(o.expression, o.typeArguments, o.argumentsArray);
}
export function updateNewExpression({ node, expression, typeArguments, argumentsArray }: {
    node: NewExpression;
    expression: Expression;
    typeArguments?: readonly TypeNode[] | undefined;
    argumentsArray?: readonly Expression[] | undefined;
}): NewExpression;
export function updateNewExpression(o) {
    return ts.factory.updateNewExpression(o.node, o.expression, o.typeArguments, o.argumentsArray);
}
export function createTaggedTemplateExpression({ tag, typeArguments, template }: {
    tag: Expression;
    typeArguments?: readonly TypeNode[] | undefined;
    template: TemplateLiteral;
}): TaggedTemplateExpression;
export function createTaggedTemplateExpression(o) {
    return ts.factory.createTaggedTemplateExpression(o.tag, o.typeArguments, o.template);
}
export function updateTaggedTemplateExpression({ node, tag, typeArguments, template }: {
    node: TaggedTemplateExpression;
    tag: Expression;
    typeArguments?: readonly TypeNode[] | undefined;
    template: TemplateLiteral;
}): TaggedTemplateExpression;
export function updateTaggedTemplateExpression(o) {
    return ts.factory.updateTaggedTemplateExpression(o.node, o.tag, o.typeArguments, o.template);
}
export function createTypeAssertion({ type, expression }: {
    type: TypeNode;
    expression: Expression;
}): TypeAssertion;
export function createTypeAssertion(o) {
    return ts.factory.createTypeAssertion(o.type, o.expression);
}
export function updateTypeAssertion({ node, type, expression }: {
    node: TypeAssertion;
    type: TypeNode;
    expression: Expression;
}): TypeAssertion;
export function updateTypeAssertion(o) {
    return ts.factory.updateTypeAssertion(o.node, o.type, o.expression);
}
export function createParenthesizedExpression({ expression }: {
    expression: Expression;
}): ParenthesizedExpression;
export function createParenthesizedExpression(o) {
    return ts.factory.createParenthesizedExpression(o.expression);
}
export function updateParenthesizedExpression({ node, expression }: {
    node: ParenthesizedExpression;
    expression: Expression;
}): ParenthesizedExpression;
export function updateParenthesizedExpression(o) {
    return ts.factory.updateParenthesizedExpression(o.node, o.expression);
}
export function createFunctionExpression({ modifiers, asteriskToken, name, typeParameters, parameters, type, body }: {
    modifiers?: readonly Modifier[] | undefined;
    asteriskToken?: AsteriskToken | undefined;
    name?: string | Identifier | undefined;
    typeParameters?: readonly TypeParameterDeclaration[] | undefined;
    parameters?: readonly ParameterDeclaration[] | undefined;
    type?: TypeNode | undefined;
    body: Block;
}): FunctionExpression;
export function createFunctionExpression(o) {
    return ts.factory.createFunctionExpression(o.modifiers, o.asteriskToken, o.name, o.typeParameters, o.parameters, o.type, o.body);
}
export function updateFunctionExpression({ node, modifiers, asteriskToken, name, typeParameters, parameters, type, body }: {
    node: FunctionExpression;
    modifiers?: readonly Modifier[] | undefined;
    asteriskToken?: AsteriskToken | undefined;
    name?: Identifier | undefined;
    typeParameters?: readonly TypeParameterDeclaration[] | undefined;
    parameters: readonly ParameterDeclaration[];
    type?: TypeNode | undefined;
    body: Block;
}): FunctionExpression;
export function updateFunctionExpression(o) {
    return ts.factory.updateFunctionExpression(o.node, o.modifiers, o.asteriskToken, o.name, o.typeParameters, o.parameters, o.type, o.body);
}
export function createArrowFunction({ modifiers, typeParameters, parameters, type, equalsGreaterThanToken, body }: {
    modifiers?: readonly Modifier[] | undefined;
    typeParameters?: readonly TypeParameterDeclaration[] | undefined;
    parameters: readonly ParameterDeclaration[];
    type?: TypeNode | undefined;
    equalsGreaterThanToken?: EqualsGreaterThanToken | undefined;
    body: ConciseBody;
}): ArrowFunction;
export function createArrowFunction(o) {
    return ts.factory.createArrowFunction(o.modifiers, o.typeParameters, o.parameters, o.type, o.equalsGreaterThanToken, o.body);
}
export function updateArrowFunction({ node, modifiers, typeParameters, parameters, type, equalsGreaterThanToken, body }: {
    node: ArrowFunction;
    modifiers?: readonly Modifier[] | undefined;
    typeParameters?: readonly TypeParameterDeclaration[] | undefined;
    parameters: readonly ParameterDeclaration[];
    type?: TypeNode | undefined;
    equalsGreaterThanToken: EqualsGreaterThanToken;
    body: ConciseBody;
}): ArrowFunction;
export function updateArrowFunction(o) {
    return ts.factory.updateArrowFunction(o.node, o.modifiers, o.typeParameters, o.parameters, o.type, o.equalsGreaterThanToken, o.body);
}
export function createDeleteExpression({ expression }: {
    expression: Expression;
}): DeleteExpression;
export function createDeleteExpression(o) {
    return ts.factory.createDeleteExpression(o.expression);
}
export function updateDeleteExpression({ node, expression }: {
    node: DeleteExpression;
    expression: Expression;
}): DeleteExpression;
export function updateDeleteExpression(o) {
    return ts.factory.updateDeleteExpression(o.node, o.expression);
}
export function createTypeOfExpression({ expression }: {
    expression: Expression;
}): TypeOfExpression;
export function createTypeOfExpression(o) {
    return ts.factory.createTypeOfExpression(o.expression);
}
export function updateTypeOfExpression({ node, expression }: {
    node: TypeOfExpression;
    expression: Expression;
}): TypeOfExpression;
export function updateTypeOfExpression(o) {
    return ts.factory.updateTypeOfExpression(o.node, o.expression);
}
export function createVoidExpression({ expression }: {
    expression: Expression;
}): VoidExpression;
export function createVoidExpression(o) {
    return ts.factory.createVoidExpression(o.expression);
}
export function updateVoidExpression({ node, expression }: {
    node: VoidExpression;
    expression: Expression;
}): VoidExpression;
export function updateVoidExpression(o) {
    return ts.factory.updateVoidExpression(o.node, o.expression);
}
export function createAwaitExpression({ expression }: {
    expression: Expression;
}): AwaitExpression;
export function createAwaitExpression(o) {
    return ts.factory.createAwaitExpression(o.expression);
}
export function updateAwaitExpression({ node, expression }: {
    node: AwaitExpression;
    expression: Expression;
}): AwaitExpression;
export function updateAwaitExpression(o) {
    return ts.factory.updateAwaitExpression(o.node, o.expression);
}
export function createPrefixUnaryExpression({ operator, operand }: {
    operator: PrefixUnaryOperator;
    operand: Expression;
}): PrefixUnaryExpression;
export function createPrefixUnaryExpression(o) {
    return ts.factory.createPrefixUnaryExpression(o.operator, o.operand);
}
export function updatePrefixUnaryExpression({ node, operand }: {
    node: PrefixUnaryExpression;
    operand: Expression;
}): PrefixUnaryExpression;
export function updatePrefixUnaryExpression(o) {
    return ts.factory.updatePrefixUnaryExpression(o.node, o.operand);
}
export function createPostfixUnaryExpression({ operand, operator }: {
    operand: Expression;
    operator: PostfixUnaryOperator;
}): PostfixUnaryExpression;
export function createPostfixUnaryExpression(o) {
    return ts.factory.createPostfixUnaryExpression(o.operand, o.operator);
}
export function updatePostfixUnaryExpression({ node, operand }: {
    node: PostfixUnaryExpression;
    operand: Expression;
}): PostfixUnaryExpression;
export function updatePostfixUnaryExpression(o) {
    return ts.factory.updatePostfixUnaryExpression(o.node, o.operand);
}
export function createBinaryExpression({ left, operator, right }: {
    left: Expression;
    operator: BinaryOperator | BinaryOperatorToken;
    right: Expression;
}): BinaryExpression;
export function createBinaryExpression(o) {
    return ts.factory.createBinaryExpression(o.left, o.operator, o.right);
}
export function updateBinaryExpression({ node, left, operator, right }: {
    node: BinaryExpression;
    left: Expression;
    operator: BinaryOperator | BinaryOperatorToken;
    right: Expression;
}): BinaryExpression;
export function updateBinaryExpression(o) {
    return ts.factory.updateBinaryExpression(o.node, o.left, o.operator, o.right);
}
export function createConditionalExpression({ condition, questionToken, whenTrue, colonToken, whenFalse }: {
    condition: Expression;
    questionToken?: QuestionToken | undefined;
    whenTrue: Expression;
    colonToken?: ColonToken | undefined;
    whenFalse: Expression;
}): ConditionalExpression;
export function createConditionalExpression(o) {
    return ts.factory.createConditionalExpression(o.condition, o.questionToken, o.whenTrue, o.colonToken, o.whenFalse);
}
export function updateConditionalExpression({ node, condition, questionToken, whenTrue, colonToken, whenFalse }: {
    node: ConditionalExpression;
    condition: Expression;
    questionToken: QuestionToken;
    whenTrue: Expression;
    colonToken: ColonToken;
    whenFalse: Expression;
}): ConditionalExpression;
export function updateConditionalExpression(o) {
    return ts.factory.updateConditionalExpression(o.node, o.condition, o.questionToken, o.whenTrue, o.colonToken, o.whenFalse);
}
export function createTemplateExpression({ head, templateSpans }: {
    head: TemplateHead;
    templateSpans: readonly TemplateSpan[];
}): TemplateExpression;
export function createTemplateExpression(o) {
    return ts.factory.createTemplateExpression(o.head, o.templateSpans);
}
export function updateTemplateExpression({ node, head, templateSpans }: {
    node: TemplateExpression;
    head: TemplateHead;
    templateSpans: readonly TemplateSpan[];
}): TemplateExpression;
export function updateTemplateExpression(o) {
    return ts.factory.updateTemplateExpression(o.node, o.head, o.templateSpans);
}
export function createTemplateHead({ text, rawText, templateFlags }: {
    text: string;
    rawText?: string;
    templateFlags?: TokenFlags;
}): TemplateHead;
export function createTemplateHead({ text, rawText, templateFlags }: {
    text?: string | undefined;
    rawText: string;
    templateFlags?: TokenFlags;
}): TemplateHead;
export function createTemplateHead(o) {
    return ts.factory.createTemplateHead(o.text, o.rawText, o.templateFlags);
}
export function createTemplateMiddle({ text, rawText, templateFlags }: {
    text: string;
    rawText?: string;
    templateFlags?: TokenFlags;
}): TemplateMiddle;
export function createTemplateMiddle({ text, rawText, templateFlags }: {
    text?: string | undefined;
    rawText: string;
    templateFlags?: TokenFlags;
}): TemplateMiddle;
export function createTemplateMiddle(o) {
    return ts.factory.createTemplateMiddle(o.text, o.rawText, o.templateFlags);
}
export function createTemplateTail({ text, rawText, templateFlags }: {
    text: string;
    rawText?: string;
    templateFlags?: TokenFlags;
}): TemplateTail;
export function createTemplateTail({ text, rawText, templateFlags }: {
    text?: string | undefined;
    rawText: string;
    templateFlags?: TokenFlags;
}): TemplateTail;
export function createTemplateTail(o) {
    return ts.factory.createTemplateTail(o.text, o.rawText, o.templateFlags);
}
export function createNoSubstitutionTemplateLiteral({ text, rawText }: {
    text: string;
    rawText?: string;
}): NoSubstitutionTemplateLiteral;
export function createNoSubstitutionTemplateLiteral({ text, rawText }: {
    text?: string | undefined;
    rawText: string;
}): NoSubstitutionTemplateLiteral;
export function createNoSubstitutionTemplateLiteral(o) {
    return ts.factory.createNoSubstitutionTemplateLiteral(o.text, o.rawText);
}
export function createYieldExpression({ asteriskToken, expression }: {
    asteriskToken: AsteriskToken;
    expression: Expression;
}): YieldExpression;
export function createYieldExpression({ asteriskToken, expression }: {
    asteriskToken: undefined;
    expression?: Expression | undefined;
}): YieldExpression;
export function createYieldExpression(o) {
    return ts.factory.createYieldExpression(o.asteriskToken, o.expression);
}
export function updateYieldExpression({ node, asteriskToken, expression }: {
    node: YieldExpression;
    asteriskToken?: AsteriskToken | undefined;
    expression?: Expression | undefined;
}): YieldExpression;
export function updateYieldExpression(o) {
    return ts.factory.updateYieldExpression(o.node, o.asteriskToken, o.expression);
}
export function createSpreadElement({ expression }: {
    expression: Expression;
}): SpreadElement;
export function createSpreadElement(o) {
    return ts.factory.createSpreadElement(o.expression);
}
export function updateSpreadElement({ node, expression }: {
    node: SpreadElement;
    expression: Expression;
}): SpreadElement;
export function updateSpreadElement(o) {
    return ts.factory.updateSpreadElement(o.node, o.expression);
}
export function createClassExpression({ modifiers, name, typeParameters, heritageClauses, members }: {
    modifiers?: readonly ModifierLike[] | undefined;
    name?: string | Identifier | undefined;
    typeParameters?: readonly TypeParameterDeclaration[] | undefined;
    heritageClauses?: readonly HeritageClause[] | undefined;
    members: readonly ClassElement[];
}): ClassExpression;
export function createClassExpression(o) {
    return ts.factory.createClassExpression(o.modifiers, o.name, o.typeParameters, o.heritageClauses, o.members);
}
export function updateClassExpression({ node, modifiers, name, typeParameters, heritageClauses, members }: {
    node: ClassExpression;
    modifiers?: readonly ModifierLike[] | undefined;
    name?: Identifier | undefined;
    typeParameters?: readonly TypeParameterDeclaration[] | undefined;
    heritageClauses?: readonly HeritageClause[] | undefined;
    members: readonly ClassElement[];
}): ClassExpression;
export function updateClassExpression(o) {
    return ts.factory.updateClassExpression(o.node, o.modifiers, o.name, o.typeParameters, o.heritageClauses, o.members);
}
export function createOmittedExpression(): OmittedExpression;
export function createOmittedExpression() {
    return ts.factory.createOmittedExpression();
}
export function createExpressionWithTypeArguments({ expression, typeArguments }: {
    expression: Expression;
    typeArguments?: readonly TypeNode[] | undefined;
}): ExpressionWithTypeArguments;
export function createExpressionWithTypeArguments(o) {
    return ts.factory.createExpressionWithTypeArguments(o.expression, o.typeArguments);
}
export function updateExpressionWithTypeArguments({ node, expression, typeArguments }: {
    node: ExpressionWithTypeArguments;
    expression: Expression;
    typeArguments?: readonly TypeNode[] | undefined;
}): ExpressionWithTypeArguments;
export function updateExpressionWithTypeArguments(o) {
    return ts.factory.updateExpressionWithTypeArguments(o.node, o.expression, o.typeArguments);
}
export function createAsExpression({ expression, type }: {
    expression: Expression;
    type: TypeNode;
}): AsExpression;
export function createAsExpression(o) {
    return ts.factory.createAsExpression(o.expression, o.type);
}
export function updateAsExpression({ node, expression, type }: {
    node: AsExpression;
    expression: Expression;
    type: TypeNode;
}): AsExpression;
export function updateAsExpression(o) {
    return ts.factory.updateAsExpression(o.node, o.expression, o.type);
}
export function createNonNullExpression({ expression }: {
    expression: Expression;
}): NonNullExpression;
export function createNonNullExpression(o) {
    return ts.factory.createNonNullExpression(o.expression);
}
export function updateNonNullExpression({ node, expression }: {
    node: NonNullExpression;
    expression: Expression;
}): NonNullExpression;
export function updateNonNullExpression(o) {
    return ts.factory.updateNonNullExpression(o.node, o.expression);
}
export function createNonNullChain({ expression }: {
    expression: Expression;
}): NonNullChain;
export function createNonNullChain(o) {
    return ts.factory.createNonNullChain(o.expression);
}
export function updateNonNullChain({ node, expression }: {
    node: NonNullChain;
    expression: Expression;
}): NonNullChain;
export function updateNonNullChain(o) {
    return ts.factory.updateNonNullChain(o.node, o.expression);
}
export function createMetaProperty({ keywordToken, name }: {
    keywordToken: MetaProperty["keywordToken"];
    name: Identifier;
}): MetaProperty;
export function createMetaProperty(o) {
    return ts.factory.createMetaProperty(o.keywordToken, o.name);
}
export function updateMetaProperty({ node, name }: {
    node: MetaProperty;
    name: Identifier;
}): MetaProperty;
export function updateMetaProperty(o) {
    return ts.factory.updateMetaProperty(o.node, o.name);
}
export function createSatisfiesExpression({ expression, type }: {
    expression: Expression;
    type: TypeNode;
}): SatisfiesExpression;
export function createSatisfiesExpression(o) {
    return ts.factory.createSatisfiesExpression(o.expression, o.type);
}
export function updateSatisfiesExpression({ node, expression, type }: {
    node: SatisfiesExpression;
    expression: Expression;
    type: TypeNode;
}): SatisfiesExpression;
export function updateSatisfiesExpression(o) {
    return ts.factory.updateSatisfiesExpression(o.node, o.expression, o.type);
}
export function createTemplateSpan({ expression, literal }: {
    expression: Expression;
    literal: TemplateMiddle | TemplateTail;
}): TemplateSpan;
export function createTemplateSpan(o) {
    return ts.factory.createTemplateSpan(o.expression, o.literal);
}
export function updateTemplateSpan({ node, expression, literal }: {
    node: TemplateSpan;
    expression: Expression;
    literal: TemplateMiddle | TemplateTail;
}): TemplateSpan;
export function updateTemplateSpan(o) {
    return ts.factory.updateTemplateSpan(o.node, o.expression, o.literal);
}
export function createSemicolonClassElement(): SemicolonClassElement;
export function createSemicolonClassElement() {
    return ts.factory.createSemicolonClassElement();
}
export function createBlock({ statements, multiLine }: {
    statements: readonly Statement[];
    multiLine?: boolean;
}): Block;
export function createBlock(o) {
    return ts.factory.createBlock(o.statements, o.multiLine);
}
export function updateBlock({ node, statements }: {
    node: Block;
    statements: readonly Statement[];
}): Block;
export function updateBlock(o) {
    return ts.factory.updateBlock(o.node, o.statements);
}
export function createVariableStatement({ modifiers, declarationList }: {
    modifiers?: readonly ModifierLike[] | undefined;
    declarationList: VariableDeclarationList | readonly VariableDeclaration[];
}): VariableStatement;
export function createVariableStatement(o) {
    return ts.factory.createVariableStatement(o.modifiers, o.declarationList);
}
export function updateVariableStatement({ node, modifiers, declarationList }: {
    node: VariableStatement;
    modifiers?: readonly ModifierLike[] | undefined;
    declarationList: VariableDeclarationList;
}): VariableStatement;
export function updateVariableStatement(o) {
    return ts.factory.updateVariableStatement(o.node, o.modifiers, o.declarationList);
}
export function createEmptyStatement(): EmptyStatement;
export function createEmptyStatement() {
    return ts.factory.createEmptyStatement();
}
export function createExpressionStatement({ expression }: {
    expression: Expression;
}): ExpressionStatement;
export function createExpressionStatement(o) {
    return ts.factory.createExpressionStatement(o.expression);
}
export function updateExpressionStatement({ node, expression }: {
    node: ExpressionStatement;
    expression: Expression;
}): ExpressionStatement;
export function updateExpressionStatement(o) {
    return ts.factory.updateExpressionStatement(o.node, o.expression);
}
export function createIfStatement({ expression, thenStatement, elseStatement }: {
    expression: Expression;
    thenStatement: Statement;
    elseStatement?: Statement;
}): IfStatement;
export function createIfStatement(o) {
    return ts.factory.createIfStatement(o.expression, o.thenStatement, o.elseStatement);
}
export function updateIfStatement({ node, expression, thenStatement, elseStatement }: {
    node: IfStatement;
    expression: Expression;
    thenStatement: Statement;
    elseStatement?: Statement | undefined;
}): IfStatement;
export function updateIfStatement(o) {
    return ts.factory.updateIfStatement(o.node, o.expression, o.thenStatement, o.elseStatement);
}
export function createDoStatement({ statement, expression }: {
    statement: Statement;
    expression: Expression;
}): DoStatement;
export function createDoStatement(o) {
    return ts.factory.createDoStatement(o.statement, o.expression);
}
export function updateDoStatement({ node, statement, expression }: {
    node: DoStatement;
    statement: Statement;
    expression: Expression;
}): DoStatement;
export function updateDoStatement(o) {
    return ts.factory.updateDoStatement(o.node, o.statement, o.expression);
}
export function createWhileStatement({ expression, statement }: {
    expression: Expression;
    statement: Statement;
}): WhileStatement;
export function createWhileStatement(o) {
    return ts.factory.createWhileStatement(o.expression, o.statement);
}
export function updateWhileStatement({ node, expression, statement }: {
    node: WhileStatement;
    expression: Expression;
    statement: Statement;
}): WhileStatement;
export function updateWhileStatement(o) {
    return ts.factory.updateWhileStatement(o.node, o.expression, o.statement);
}
export function createForStatement({ initializer, condition, incrementor, statement }: {
    initializer?: ForInitializer | undefined;
    condition?: Expression | undefined;
    incrementor?: Expression | undefined;
    statement: Statement;
}): ForStatement;
export function createForStatement(o) {
    return ts.factory.createForStatement(o.initializer, o.condition, o.incrementor, o.statement);
}
export function updateForStatement({ node, initializer, condition, incrementor, statement }: {
    node: ForStatement;
    initializer?: ForInitializer | undefined;
    condition?: Expression | undefined;
    incrementor?: Expression | undefined;
    statement: Statement;
}): ForStatement;
export function updateForStatement(o) {
    return ts.factory.updateForStatement(o.node, o.initializer, o.condition, o.incrementor, o.statement);
}
export function createForInStatement({ initializer, expression, statement }: {
    initializer: ForInitializer;
    expression: Expression;
    statement: Statement;
}): ForInStatement;
export function createForInStatement(o) {
    return ts.factory.createForInStatement(o.initializer, o.expression, o.statement);
}
export function updateForInStatement({ node, initializer, expression, statement }: {
    node: ForInStatement;
    initializer: ForInitializer;
    expression: Expression;
    statement: Statement;
}): ForInStatement;
export function updateForInStatement(o) {
    return ts.factory.updateForInStatement(o.node, o.initializer, o.expression, o.statement);
}
export function createForOfStatement({ awaitModifier, initializer, expression, statement }: {
    awaitModifier?: AwaitKeyword | undefined;
    initializer: ForInitializer;
    expression: Expression;
    statement: Statement;
}): ForOfStatement;
export function createForOfStatement(o) {
    return ts.factory.createForOfStatement(o.awaitModifier, o.initializer, o.expression, o.statement);
}
export function updateForOfStatement({ node, awaitModifier, initializer, expression, statement }: {
    node: ForOfStatement;
    awaitModifier?: AwaitKeyword | undefined;
    initializer: ForInitializer;
    expression: Expression;
    statement: Statement;
}): ForOfStatement;
export function updateForOfStatement(o) {
    return ts.factory.updateForOfStatement(o.node, o.awaitModifier, o.initializer, o.expression, o.statement);
}
export function createContinueStatement({ label }: {
    label?: string | Identifier;
}): ContinueStatement;
export function createContinueStatement(o) {
    return ts.factory.createContinueStatement(o.label);
}
export function updateContinueStatement({ node, label }: {
    node: ContinueStatement;
    label?: Identifier | undefined;
}): ContinueStatement;
export function updateContinueStatement(o) {
    return ts.factory.updateContinueStatement(o.node, o.label);
}
export function createBreakStatement({ label }: {
    label?: string | Identifier;
}): BreakStatement;
export function createBreakStatement(o) {
    return ts.factory.createBreakStatement(o.label);
}
export function updateBreakStatement({ node, label }: {
    node: BreakStatement;
    label?: Identifier | undefined;
}): BreakStatement;
export function updateBreakStatement(o) {
    return ts.factory.updateBreakStatement(o.node, o.label);
}
export function createReturnStatement({ expression }: {
    expression?: Expression;
}): ReturnStatement;
export function createReturnStatement(o) {
    return ts.factory.createReturnStatement(o.expression);
}
export function updateReturnStatement({ node, expression }: {
    node: ReturnStatement;
    expression?: Expression | undefined;
}): ReturnStatement;
export function updateReturnStatement(o) {
    return ts.factory.updateReturnStatement(o.node, o.expression);
}
export function createWithStatement({ expression, statement }: {
    expression: Expression;
    statement: Statement;
}): WithStatement;
export function createWithStatement(o) {
    return ts.factory.createWithStatement(o.expression, o.statement);
}
export function updateWithStatement({ node, expression, statement }: {
    node: WithStatement;
    expression: Expression;
    statement: Statement;
}): WithStatement;
export function updateWithStatement(o) {
    return ts.factory.updateWithStatement(o.node, o.expression, o.statement);
}
export function createSwitchStatement({ expression, caseBlock }: {
    expression: Expression;
    caseBlock: CaseBlock;
}): SwitchStatement;
export function createSwitchStatement(o) {
    return ts.factory.createSwitchStatement(o.expression, o.caseBlock);
}
export function updateSwitchStatement({ node, expression, caseBlock }: {
    node: SwitchStatement;
    expression: Expression;
    caseBlock: CaseBlock;
}): SwitchStatement;
export function updateSwitchStatement(o) {
    return ts.factory.updateSwitchStatement(o.node, o.expression, o.caseBlock);
}
export function createLabeledStatement({ label, statement }: {
    label: string | Identifier;
    statement: Statement;
}): LabeledStatement;
export function createLabeledStatement(o) {
    return ts.factory.createLabeledStatement(o.label, o.statement);
}
export function updateLabeledStatement({ node, label, statement }: {
    node: LabeledStatement;
    label: Identifier;
    statement: Statement;
}): LabeledStatement;
export function updateLabeledStatement(o) {
    return ts.factory.updateLabeledStatement(o.node, o.label, o.statement);
}
export function createThrowStatement({ expression }: {
    expression: Expression;
}): ThrowStatement;
export function createThrowStatement(o) {
    return ts.factory.createThrowStatement(o.expression);
}
export function updateThrowStatement({ node, expression }: {
    node: ThrowStatement;
    expression: Expression;
}): ThrowStatement;
export function updateThrowStatement(o) {
    return ts.factory.updateThrowStatement(o.node, o.expression);
}
export function createTryStatement({ tryBlock, catchClause, finallyBlock }: {
    tryBlock: Block;
    catchClause?: CatchClause | undefined;
    finallyBlock?: Block | undefined;
}): TryStatement;
export function createTryStatement(o) {
    return ts.factory.createTryStatement(o.tryBlock, o.catchClause, o.finallyBlock);
}
export function updateTryStatement({ node, tryBlock, catchClause, finallyBlock }: {
    node: TryStatement;
    tryBlock: Block;
    catchClause?: CatchClause | undefined;
    finallyBlock?: Block | undefined;
}): TryStatement;
export function updateTryStatement(o) {
    return ts.factory.updateTryStatement(o.node, o.tryBlock, o.catchClause, o.finallyBlock);
}
export function createDebuggerStatement(): DebuggerStatement;
export function createDebuggerStatement() {
    return ts.factory.createDebuggerStatement();
}
export function createVariableDeclaration({ name, exclamationToken, type, initializer }: {
    name: string | BindingName;
    exclamationToken?: ExclamationToken;
    type?: TypeNode;
    initializer?: Expression;
}): VariableDeclaration;
export function createVariableDeclaration(o) {
    return ts.factory.createVariableDeclaration(o.name, o.exclamationToken, o.type, o.initializer);
}
export function updateVariableDeclaration({ node, name, exclamationToken, type, initializer }: {
    node: VariableDeclaration;
    name: BindingName;
    exclamationToken?: ExclamationToken | undefined;
    type?: TypeNode | undefined;
    initializer?: Expression | undefined;
}): VariableDeclaration;
export function updateVariableDeclaration(o) {
    return ts.factory.updateVariableDeclaration(o.node, o.name, o.exclamationToken, o.type, o.initializer);
}
export function createVariableDeclarationList({ declarations, flags }: {
    declarations: readonly VariableDeclaration[];
    flags?: NodeFlags;
}): VariableDeclarationList;
export function createVariableDeclarationList(o) {
    return ts.factory.createVariableDeclarationList(o.declarations, o.flags);
}
export function updateVariableDeclarationList({ node, declarations }: {
    node: VariableDeclarationList;
    declarations: readonly VariableDeclaration[];
}): VariableDeclarationList;
export function updateVariableDeclarationList(o) {
    return ts.factory.updateVariableDeclarationList(o.node, o.declarations);
}
export function createFunctionDeclaration({ modifiers, asteriskToken, name, typeParameters, parameters, type, body }: {
    modifiers?: readonly ModifierLike[] | undefined;
    asteriskToken?: AsteriskToken | undefined;
    name?: string | Identifier | undefined;
    typeParameters?: readonly TypeParameterDeclaration[] | undefined;
    parameters: readonly ParameterDeclaration[];
    type?: TypeNode | undefined;
    body?: Block | undefined;
}): FunctionDeclaration;
export function createFunctionDeclaration(o) {
    return ts.factory.createFunctionDeclaration(o.modifiers, o.asteriskToken, o.name, o.typeParameters, o.parameters, o.type, o.body);
}
export function updateFunctionDeclaration({ node, modifiers, asteriskToken, name, typeParameters, parameters, type, body }: {
    node: FunctionDeclaration;
    modifiers?: readonly ModifierLike[] | undefined;
    asteriskToken?: AsteriskToken | undefined;
    name?: Identifier | undefined;
    typeParameters?: readonly TypeParameterDeclaration[] | undefined;
    parameters: readonly ParameterDeclaration[];
    type?: TypeNode | undefined;
    body?: Block | undefined;
}): FunctionDeclaration;
export function updateFunctionDeclaration(o) {
    return ts.factory.updateFunctionDeclaration(o.node, o.modifiers, o.asteriskToken, o.name, o.typeParameters, o.parameters, o.type, o.body);
}
export function createClassDeclaration({ modifiers, name, typeParameters, heritageClauses, members }: {
    modifiers?: readonly ModifierLike[] | undefined;
    name?: string | Identifier | undefined;
    typeParameters?: readonly TypeParameterDeclaration[] | undefined;
    heritageClauses?: readonly HeritageClause[] | undefined;
    members: readonly ClassElement[];
}): ClassDeclaration;
export function createClassDeclaration(o) {
    return ts.factory.createClassDeclaration(o.modifiers, o.name, o.typeParameters, o.heritageClauses, o.members);
}
export function updateClassDeclaration({ node, modifiers, name, typeParameters, heritageClauses, members }: {
    node: ClassDeclaration;
    modifiers?: readonly ModifierLike[] | undefined;
    name?: Identifier | undefined;
    typeParameters?: readonly TypeParameterDeclaration[] | undefined;
    heritageClauses?: readonly HeritageClause[] | undefined;
    members: readonly ClassElement[];
}): ClassDeclaration;
export function updateClassDeclaration(o) {
    return ts.factory.updateClassDeclaration(o.node, o.modifiers, o.name, o.typeParameters, o.heritageClauses, o.members);
}
export function createInterfaceDeclaration({ modifiers, name, typeParameters, heritageClauses, members }: {
    modifiers?: readonly ModifierLike[] | undefined;
    name: string | Identifier;
    typeParameters?: readonly TypeParameterDeclaration[] | undefined;
    heritageClauses?: readonly HeritageClause[] | undefined;
    members: readonly TypeElement[];
}): InterfaceDeclaration;
export function createInterfaceDeclaration(o) {
    return ts.factory.createInterfaceDeclaration(o.modifiers, o.name, o.typeParameters, o.heritageClauses, o.members);
}
export function updateInterfaceDeclaration({ node, modifiers, name, typeParameters, heritageClauses, members }: {
    node: InterfaceDeclaration;
    modifiers?: readonly ModifierLike[] | undefined;
    name: Identifier;
    typeParameters?: readonly TypeParameterDeclaration[] | undefined;
    heritageClauses?: readonly HeritageClause[] | undefined;
    members: readonly TypeElement[];
}): InterfaceDeclaration;
export function updateInterfaceDeclaration(o) {
    return ts.factory.updateInterfaceDeclaration(o.node, o.modifiers, o.name, o.typeParameters, o.heritageClauses, o.members);
}
export function createTypeAliasDeclaration({ modifiers, name, typeParameters, type }: {
    modifiers?: readonly ModifierLike[] | undefined;
    name: string | Identifier;
    typeParameters?: readonly TypeParameterDeclaration[] | undefined;
    type: TypeNode;
}): TypeAliasDeclaration;
export function createTypeAliasDeclaration(o) {
    return ts.factory.createTypeAliasDeclaration(o.modifiers, o.name, o.typeParameters, o.type);
}
export function updateTypeAliasDeclaration({ node, modifiers, name, typeParameters, type }: {
    node: TypeAliasDeclaration;
    modifiers?: readonly ModifierLike[] | undefined;
    name: Identifier;
    typeParameters?: readonly TypeParameterDeclaration[] | undefined;
    type: TypeNode;
}): TypeAliasDeclaration;
export function updateTypeAliasDeclaration(o) {
    return ts.factory.updateTypeAliasDeclaration(o.node, o.modifiers, o.name, o.typeParameters, o.type);
}
export function createEnumDeclaration({ modifiers, name, members }: {
    modifiers?: readonly ModifierLike[] | undefined;
    name: string | Identifier;
    members: readonly EnumMember[];
}): EnumDeclaration;
export function createEnumDeclaration(o) {
    return ts.factory.createEnumDeclaration(o.modifiers, o.name, o.members);
}
export function updateEnumDeclaration({ node, modifiers, name, members }: {
    node: EnumDeclaration;
    modifiers?: readonly ModifierLike[] | undefined;
    name: Identifier;
    members: readonly EnumMember[];
}): EnumDeclaration;
export function updateEnumDeclaration(o) {
    return ts.factory.updateEnumDeclaration(o.node, o.modifiers, o.name, o.members);
}
export function createModuleDeclaration({ modifiers, name, body, flags }: {
    modifiers?: readonly ModifierLike[] | undefined;
    name: ModuleName;
    body?: ModuleBody | undefined;
    flags?: NodeFlags;
}): ModuleDeclaration;
export function createModuleDeclaration(o) {
    return ts.factory.createModuleDeclaration(o.modifiers, o.name, o.body, o.flags);
}
export function updateModuleDeclaration({ node, modifiers, name, body }: {
    node: ModuleDeclaration;
    modifiers?: readonly ModifierLike[] | undefined;
    name: ModuleName;
    body?: ModuleBody | undefined;
}): ModuleDeclaration;
export function updateModuleDeclaration(o) {
    return ts.factory.updateModuleDeclaration(o.node, o.modifiers, o.name, o.body);
}
export function createModuleBlock({ statements }: {
    statements: readonly Statement[];
}): ModuleBlock;
export function createModuleBlock(o) {
    return ts.factory.createModuleBlock(o.statements);
}
export function updateModuleBlock({ node, statements }: {
    node: ModuleBlock;
    statements: readonly Statement[];
}): ModuleBlock;
export function updateModuleBlock(o) {
    return ts.factory.updateModuleBlock(o.node, o.statements);
}
export function createCaseBlock({ clauses }: {
    clauses: readonly CaseOrDefaultClause[];
}): CaseBlock;
export function createCaseBlock(o) {
    return ts.factory.createCaseBlock(o.clauses);
}
export function updateCaseBlock({ node, clauses }: {
    node: CaseBlock;
    clauses: readonly CaseOrDefaultClause[];
}): CaseBlock;
export function updateCaseBlock(o) {
    return ts.factory.updateCaseBlock(o.node, o.clauses);
}
export function createNamespaceExportDeclaration({ name }: {
    name: string | Identifier;
}): NamespaceExportDeclaration;
export function createNamespaceExportDeclaration(o) {
    return ts.factory.createNamespaceExportDeclaration(o.name);
}
export function updateNamespaceExportDeclaration({ node, name }: {
    node: NamespaceExportDeclaration;
    name: Identifier;
}): NamespaceExportDeclaration;
export function updateNamespaceExportDeclaration(o) {
    return ts.factory.updateNamespaceExportDeclaration(o.node, o.name);
}
export function createImportEqualsDeclaration({ modifiers, isTypeOnly, name, moduleReference }: {
    modifiers?: readonly ModifierLike[] | undefined;
    isTypeOnly: boolean;
    name: string | Identifier;
    moduleReference: ModuleReference;
}): ImportEqualsDeclaration;
export function createImportEqualsDeclaration(o) {
    return ts.factory.createImportEqualsDeclaration(o.modifiers, o.isTypeOnly, o.name, o.moduleReference);
}
export function updateImportEqualsDeclaration({ node, modifiers, isTypeOnly, name, moduleReference }: {
    node: ImportEqualsDeclaration;
    modifiers?: readonly ModifierLike[] | undefined;
    isTypeOnly: boolean;
    name: Identifier;
    moduleReference: ModuleReference;
}): ImportEqualsDeclaration;
export function updateImportEqualsDeclaration(o) {
    return ts.factory.updateImportEqualsDeclaration(o.node, o.modifiers, o.isTypeOnly, o.name, o.moduleReference);
}
export function createImportDeclaration({ modifiers, importClause, moduleSpecifier, attributes }: {
    modifiers?: readonly ModifierLike[] | undefined;
    importClause?: ImportClause | undefined;
    moduleSpecifier: Expression;
    attributes?: ImportAttributes;
}): ImportDeclaration;
export function createImportDeclaration(o) {
    return ts.factory.createImportDeclaration(o.modifiers, o.importClause, o.moduleSpecifier, o.attributes);
}
export function updateImportDeclaration({ node, modifiers, importClause, moduleSpecifier, attributes }: {
    node: ImportDeclaration;
    modifiers?: readonly ModifierLike[] | undefined;
    importClause?: ImportClause | undefined;
    moduleSpecifier: Expression;
    attributes?: ImportAttributes | undefined;
}): ImportDeclaration;
export function updateImportDeclaration(o) {
    return ts.factory.updateImportDeclaration(o.node, o.modifiers, o.importClause, o.moduleSpecifier, o.attributes);
}
export function createImportClause({ isTypeOnly, name, namedBindings }: {
    isTypeOnly: boolean;
    name?: Identifier | undefined;
    namedBindings?: NamedImportBindings | undefined;
}): ImportClause;
export function createImportClause(o) {
    return ts.factory.createImportClause(o.isTypeOnly, o.name, o.namedBindings);
}
export function updateImportClause({ node, isTypeOnly, name, namedBindings }: {
    node: ImportClause;
    isTypeOnly: boolean;
    name?: Identifier | undefined;
    namedBindings?: NamedImportBindings | undefined;
}): ImportClause;
export function updateImportClause(o) {
    return ts.factory.updateImportClause(o.node, o.isTypeOnly, o.name, o.namedBindings);
}
export function createAssertClause({ elements, multiLine }: {
    elements: NodeArray<AssertEntry>;
    multiLine?: boolean;
}): AssertClause;
export function createAssertClause(o) {
    return ts.factory.createAssertClause(o.elements, o.multiLine);
}
export function updateAssertClause({ node, elements, multiLine }: {
    node: AssertClause;
    elements: NodeArray<AssertEntry>;
    multiLine?: boolean;
}): AssertClause;
export function updateAssertClause(o) {
    return ts.factory.updateAssertClause(o.node, o.elements, o.multiLine);
}
export function createAssertEntry({ name, value }: {
    name: AssertionKey;
    value: Expression;
}): AssertEntry;
export function createAssertEntry(o) {
    return ts.factory.createAssertEntry(o.name, o.value);
}
export function updateAssertEntry({ node, name, value }: {
    node: AssertEntry;
    name: AssertionKey;
    value: Expression;
}): AssertEntry;
export function updateAssertEntry(o) {
    return ts.factory.updateAssertEntry(o.node, o.name, o.value);
}
export function createImportTypeAssertionContainer({ clause, multiLine }: {
    clause: AssertClause;
    multiLine?: boolean;
}): ImportTypeAssertionContainer;
export function createImportTypeAssertionContainer(o) {
    return ts.factory.createImportTypeAssertionContainer(o.clause, o.multiLine);
}
export function updateImportTypeAssertionContainer({ node, clause, multiLine }: {
    node: ImportTypeAssertionContainer;
    clause: AssertClause;
    multiLine?: boolean;
}): ImportTypeAssertionContainer;
export function updateImportTypeAssertionContainer(o) {
    return ts.factory.updateImportTypeAssertionContainer(o.node, o.clause, o.multiLine);
}
export function createImportAttributes({ elements, multiLine }: {
    elements: NodeArray<ImportAttribute>;
    multiLine?: boolean;
}): ImportAttributes;
export function createImportAttributes(o) {
    return ts.factory.createImportAttributes(o.elements, o.multiLine);
}
export function updateImportAttributes({ node, elements, multiLine }: {
    node: ImportAttributes;
    elements: NodeArray<ImportAttribute>;
    multiLine?: boolean;
}): ImportAttributes;
export function updateImportAttributes(o) {
    return ts.factory.updateImportAttributes(o.node, o.elements, o.multiLine);
}
export function createImportAttribute({ name, value }: {
    name: ImportAttributeName;
    value: Expression;
}): ImportAttribute;
export function createImportAttribute(o) {
    return ts.factory.createImportAttribute(o.name, o.value);
}
export function updateImportAttribute({ node, name, value }: {
    node: ImportAttribute;
    name: ImportAttributeName;
    value: Expression;
}): ImportAttribute;
export function updateImportAttribute(o) {
    return ts.factory.updateImportAttribute(o.node, o.name, o.value);
}
export function createNamespaceImport({ name }: {
    name: Identifier;
}): NamespaceImport;
export function createNamespaceImport(o) {
    return ts.factory.createNamespaceImport(o.name);
}
export function updateNamespaceImport({ node, name }: {
    node: NamespaceImport;
    name: Identifier;
}): NamespaceImport;
export function updateNamespaceImport(o) {
    return ts.factory.updateNamespaceImport(o.node, o.name);
}
export function createNamespaceExport({ name }: {
    name: Identifier;
}): NamespaceExport;
export function createNamespaceExport(o) {
    return ts.factory.createNamespaceExport(o.name);
}
export function updateNamespaceExport({ node, name }: {
    node: NamespaceExport;
    name: Identifier;
}): NamespaceExport;
export function updateNamespaceExport(o) {
    return ts.factory.updateNamespaceExport(o.node, o.name);
}
export function createNamedImports({ elements }: {
    elements: readonly ImportSpecifier[];
}): NamedImports;
export function createNamedImports(o) {
    return ts.factory.createNamedImports(o.elements);
}
export function updateNamedImports({ node, elements }: {
    node: NamedImports;
    elements: readonly ImportSpecifier[];
}): NamedImports;
export function updateNamedImports(o) {
    return ts.factory.updateNamedImports(o.node, o.elements);
}
export function createImportSpecifier({ isTypeOnly, propertyName, name }: {
    isTypeOnly: boolean;
    propertyName?: Identifier | undefined;
    name: Identifier;
}): ImportSpecifier;
export function createImportSpecifier(o) {
    return ts.factory.createImportSpecifier(o.isTypeOnly, o.propertyName, o.name);
}
export function updateImportSpecifier({ node, isTypeOnly, propertyName, name }: {
    node: ImportSpecifier;
    isTypeOnly: boolean;
    propertyName?: Identifier | undefined;
    name: Identifier;
}): ImportSpecifier;
export function updateImportSpecifier(o) {
    return ts.factory.updateImportSpecifier(o.node, o.isTypeOnly, o.propertyName, o.name);
}
export function createExportAssignment({ modifiers, isExportEquals, expression }: {
    modifiers?: readonly ModifierLike[] | undefined;
    isExportEquals?: boolean | undefined;
    expression: Expression;
}): ExportAssignment;
export function createExportAssignment(o) {
    return ts.factory.createExportAssignment(o.modifiers, o.isExportEquals, o.expression);
}
export function updateExportAssignment({ node, modifiers, expression }: {
    node: ExportAssignment;
    modifiers?: readonly ModifierLike[] | undefined;
    expression: Expression;
}): ExportAssignment;
export function updateExportAssignment(o) {
    return ts.factory.updateExportAssignment(o.node, o.modifiers, o.expression);
}
export function createExportDeclaration({ modifiers, isTypeOnly, exportClause, moduleSpecifier, attributes }: {
    modifiers?: readonly ModifierLike[] | undefined;
    isTypeOnly: boolean;
    exportClause?: NamedExportBindings | undefined;
    moduleSpecifier?: Expression;
    attributes?: ImportAttributes;
}): ExportDeclaration;
export function createExportDeclaration(o) {
    return ts.factory.createExportDeclaration(o.modifiers, o.isTypeOnly, o.exportClause, o.moduleSpecifier, o.attributes);
}
export function updateExportDeclaration({ node, modifiers, isTypeOnly, exportClause, moduleSpecifier, attributes }: {
    node: ExportDeclaration;
    modifiers?: readonly ModifierLike[] | undefined;
    isTypeOnly: boolean;
    exportClause?: NamedExportBindings | undefined;
    moduleSpecifier?: Expression | undefined;
    attributes?: ImportAttributes | undefined;
}): ExportDeclaration;
export function updateExportDeclaration(o) {
    return ts.factory.updateExportDeclaration(o.node, o.modifiers, o.isTypeOnly, o.exportClause, o.moduleSpecifier, o.attributes);
}
export function createNamedExports({ elements }: {
    elements: readonly ExportSpecifier[];
}): NamedExports;
export function createNamedExports(o) {
    return ts.factory.createNamedExports(o.elements);
}
export function updateNamedExports({ node, elements }: {
    node: NamedExports;
    elements: readonly ExportSpecifier[];
}): NamedExports;
export function updateNamedExports(o) {
    return ts.factory.updateNamedExports(o.node, o.elements);
}
export function createExportSpecifier({ isTypeOnly, propertyName, name }: {
    isTypeOnly: boolean;
    propertyName?: string | Identifier | undefined;
    name: string | Identifier;
}): ExportSpecifier;
export function createExportSpecifier(o) {
    return ts.factory.createExportSpecifier(o.isTypeOnly, o.propertyName, o.name);
}
export function updateExportSpecifier({ node, isTypeOnly, propertyName, name }: {
    node: ExportSpecifier;
    isTypeOnly: boolean;
    propertyName?: Identifier | undefined;
    name: Identifier;
}): ExportSpecifier;
export function updateExportSpecifier(o) {
    return ts.factory.updateExportSpecifier(o.node, o.isTypeOnly, o.propertyName, o.name);
}
export function createExternalModuleReference({ expression }: {
    expression: Expression;
}): ExternalModuleReference;
export function createExternalModuleReference(o) {
    return ts.factory.createExternalModuleReference(o.expression);
}
export function updateExternalModuleReference({ node, expression }: {
    node: ExternalModuleReference;
    expression: Expression;
}): ExternalModuleReference;
export function updateExternalModuleReference(o) {
    return ts.factory.updateExternalModuleReference(o.node, o.expression);
}
export function createJSDocAllType(): JSDocAllType;
export function createJSDocAllType() {
    return ts.factory.createJSDocAllType();
}
export function createJSDocUnknownType(): JSDocUnknownType;
export function createJSDocUnknownType() {
    return ts.factory.createJSDocUnknownType();
}
export function createJSDocNonNullableType({ type, postfix }: {
    type: TypeNode;
    postfix?: boolean;
}): JSDocNonNullableType;
export function createJSDocNonNullableType(o) {
    return ts.factory.createJSDocNonNullableType(o.type, o.postfix);
}
export function updateJSDocNonNullableType({ node, type }: {
    node: JSDocNonNullableType;
    type: TypeNode;
}): JSDocNonNullableType;
export function updateJSDocNonNullableType(o) {
    return ts.factory.updateJSDocNonNullableType(o.node, o.type);
}
export function createJSDocNullableType({ type, postfix }: {
    type: TypeNode;
    postfix?: boolean;
}): JSDocNullableType;
export function createJSDocNullableType(o) {
    return ts.factory.createJSDocNullableType(o.type, o.postfix);
}
export function updateJSDocNullableType({ node, type }: {
    node: JSDocNullableType;
    type: TypeNode;
}): JSDocNullableType;
export function updateJSDocNullableType(o) {
    return ts.factory.updateJSDocNullableType(o.node, o.type);
}
export function createJSDocOptionalType({ type }: {
    type: TypeNode;
}): JSDocOptionalType;
export function createJSDocOptionalType(o) {
    return ts.factory.createJSDocOptionalType(o.type);
}
export function updateJSDocOptionalType({ node, type }: {
    node: JSDocOptionalType;
    type: TypeNode;
}): JSDocOptionalType;
export function updateJSDocOptionalType(o) {
    return ts.factory.updateJSDocOptionalType(o.node, o.type);
}
export function createJSDocFunctionType({ parameters, type }: {
    parameters: readonly ParameterDeclaration[];
    type?: TypeNode | undefined;
}): JSDocFunctionType;
export function createJSDocFunctionType(o) {
    return ts.factory.createJSDocFunctionType(o.parameters, o.type);
}
export function updateJSDocFunctionType({ node, parameters, type }: {
    node: JSDocFunctionType;
    parameters: readonly ParameterDeclaration[];
    type?: TypeNode | undefined;
}): JSDocFunctionType;
export function updateJSDocFunctionType(o) {
    return ts.factory.updateJSDocFunctionType(o.node, o.parameters, o.type);
}
export function createJSDocVariadicType({ type }: {
    type: TypeNode;
}): JSDocVariadicType;
export function createJSDocVariadicType(o) {
    return ts.factory.createJSDocVariadicType(o.type);
}
export function updateJSDocVariadicType({ node, type }: {
    node: JSDocVariadicType;
    type: TypeNode;
}): JSDocVariadicType;
export function updateJSDocVariadicType(o) {
    return ts.factory.updateJSDocVariadicType(o.node, o.type);
}
export function createJSDocNamepathType({ type }: {
    type: TypeNode;
}): JSDocNamepathType;
export function createJSDocNamepathType(o) {
    return ts.factory.createJSDocNamepathType(o.type);
}
export function updateJSDocNamepathType({ node, type }: {
    node: JSDocNamepathType;
    type: TypeNode;
}): JSDocNamepathType;
export function updateJSDocNamepathType(o) {
    return ts.factory.updateJSDocNamepathType(o.node, o.type);
}
export function createJSDocTypeExpression({ type }: {
    type: TypeNode;
}): JSDocTypeExpression;
export function createJSDocTypeExpression(o) {
    return ts.factory.createJSDocTypeExpression(o.type);
}
export function updateJSDocTypeExpression({ node, type }: {
    node: JSDocTypeExpression;
    type: TypeNode;
}): JSDocTypeExpression;
export function updateJSDocTypeExpression(o) {
    return ts.factory.updateJSDocTypeExpression(o.node, o.type);
}
export function createJSDocNameReference({ name }: {
    name: EntityName | JSDocMemberName;
}): JSDocNameReference;
export function createJSDocNameReference(o) {
    return ts.factory.createJSDocNameReference(o.name);
}
export function updateJSDocNameReference({ node, name }: {
    node: JSDocNameReference;
    name: EntityName | JSDocMemberName;
}): JSDocNameReference;
export function updateJSDocNameReference(o) {
    return ts.factory.updateJSDocNameReference(o.node, o.name);
}
export function createJSDocMemberName({ left, right }: {
    left: EntityName | JSDocMemberName;
    right: Identifier;
}): JSDocMemberName;
export function createJSDocMemberName(o) {
    return ts.factory.createJSDocMemberName(o.left, o.right);
}
export function updateJSDocMemberName({ node, left, right }: {
    node: JSDocMemberName;
    left: EntityName | JSDocMemberName;
    right: Identifier;
}): JSDocMemberName;
export function updateJSDocMemberName(o) {
    return ts.factory.updateJSDocMemberName(o.node, o.left, o.right);
}
export function createJSDocLink({ name, text }: {
    name?: EntityName | JSDocMemberName | undefined;
    text: string;
}): JSDocLink;
export function createJSDocLink(o) {
    return ts.factory.createJSDocLink(o.name, o.text);
}
export function updateJSDocLink({ node, name, text }: {
    node: JSDocLink;
    name?: EntityName | JSDocMemberName | undefined;
    text: string;
}): JSDocLink;
export function updateJSDocLink(o) {
    return ts.factory.updateJSDocLink(o.node, o.name, o.text);
}
export function createJSDocLinkCode({ name, text }: {
    name?: EntityName | JSDocMemberName | undefined;
    text: string;
}): JSDocLinkCode;
export function createJSDocLinkCode(o) {
    return ts.factory.createJSDocLinkCode(o.name, o.text);
}
export function updateJSDocLinkCode({ node, name, text }: {
    node: JSDocLinkCode;
    name?: EntityName | JSDocMemberName | undefined;
    text: string;
}): JSDocLinkCode;
export function updateJSDocLinkCode(o) {
    return ts.factory.updateJSDocLinkCode(o.node, o.name, o.text);
}
export function createJSDocLinkPlain({ name, text }: {
    name?: EntityName | JSDocMemberName | undefined;
    text: string;
}): JSDocLinkPlain;
export function createJSDocLinkPlain(o) {
    return ts.factory.createJSDocLinkPlain(o.name, o.text);
}
export function updateJSDocLinkPlain({ node, name, text }: {
    node: JSDocLinkPlain;
    name?: EntityName | JSDocMemberName | undefined;
    text: string;
}): JSDocLinkPlain;
export function updateJSDocLinkPlain(o) {
    return ts.factory.updateJSDocLinkPlain(o.node, o.name, o.text);
}
export function createJSDocTypeLiteral({ jsDocPropertyTags, isArrayType }: {
    jsDocPropertyTags?: readonly JSDocPropertyLikeTag[];
    isArrayType?: boolean;
}): JSDocTypeLiteral;
export function createJSDocTypeLiteral(o) {
    return ts.factory.createJSDocTypeLiteral(o.jsDocPropertyTags, o.isArrayType);
}
export function updateJSDocTypeLiteral({ node, jsDocPropertyTags, isArrayType }: {
    node: JSDocTypeLiteral;
    jsDocPropertyTags?: readonly JSDocPropertyLikeTag[] | undefined;
    isArrayType?: boolean | undefined;
}): JSDocTypeLiteral;
export function updateJSDocTypeLiteral(o) {
    return ts.factory.updateJSDocTypeLiteral(o.node, o.jsDocPropertyTags, o.isArrayType);
}
export function createJSDocSignature({ typeParameters, parameters, type }: {
    typeParameters?: readonly JSDocTemplateTag[] | undefined;
    parameters: readonly JSDocParameterTag[];
    type?: JSDocReturnTag;
}): JSDocSignature;
export function createJSDocSignature(o) {
    return ts.factory.createJSDocSignature(o.typeParameters, o.parameters, o.type);
}
export function updateJSDocSignature({ node, typeParameters, parameters, type }: {
    node: JSDocSignature;
    typeParameters?: readonly JSDocTemplateTag[] | undefined;
    parameters: readonly JSDocParameterTag[];
    type?: JSDocReturnTag | undefined;
}): JSDocSignature;
export function updateJSDocSignature(o) {
    return ts.factory.updateJSDocSignature(o.node, o.typeParameters, o.parameters, o.type);
}
export function createJSDocTemplateTag({ tagName, constraint, typeParameters, comment }: {
    tagName?: Identifier | undefined;
    constraint?: JSDocTypeExpression | undefined;
    typeParameters: readonly TypeParameterDeclaration[];
    comment?: string | NodeArray<JSDocComment>;
}): JSDocTemplateTag;
export function createJSDocTemplateTag(o) {
    return ts.factory.createJSDocTemplateTag(o.tagName, o.constraint, o.typeParameters, o.comment);
}
export function updateJSDocTemplateTag({ node, tagName, constraint, typeParameters, comment }: {
    node: JSDocTemplateTag;
    tagName?: Identifier | undefined;
    constraint?: JSDocTypeExpression | undefined;
    typeParameters: readonly TypeParameterDeclaration[];
    comment?: string | NodeArray<JSDocComment> | undefined;
}): JSDocTemplateTag;
export function updateJSDocTemplateTag(o) {
    return ts.factory.updateJSDocTemplateTag(o.node, o.tagName, o.constraint, o.typeParameters, o.comment);
}
export function createJSDocTypedefTag({ tagName, typeExpression, fullName, comment }: {
    tagName?: Identifier | undefined;
    typeExpression?: JSDocTypeExpression | JSDocTypeLiteral;
    fullName?: Identifier | JSDocNamespaceDeclaration;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocTypedefTag;
export function createJSDocTypedefTag(o) {
    return ts.factory.createJSDocTypedefTag(o.tagName, o.typeExpression, o.fullName, o.comment);
}
export function updateJSDocTypedefTag({ node, tagName, typeExpression, fullName, comment }: {
    node: JSDocTypedefTag;
    tagName?: Identifier | undefined;
    typeExpression?: JSDocTypeExpression | JSDocTypeLiteral | undefined;
    fullName?: Identifier | JSDocNamespaceDeclaration | undefined;
    comment?: string | NodeArray<JSDocComment> | undefined;
}): JSDocTypedefTag;
export function updateJSDocTypedefTag(o) {
    return ts.factory.updateJSDocTypedefTag(o.node, o.tagName, o.typeExpression, o.fullName, o.comment);
}
export function createJSDocParameterTag({ tagName, name, isBracketed, typeExpression, isNameFirst, comment }: {
    tagName?: Identifier | undefined;
    name: EntityName;
    isBracketed: boolean;
    typeExpression?: JSDocTypeExpression;
    isNameFirst?: boolean;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocParameterTag;
export function createJSDocParameterTag(o) {
    return ts.factory.createJSDocParameterTag(o.tagName, o.name, o.isBracketed, o.typeExpression, o.isNameFirst, o.comment);
}
export function updateJSDocParameterTag({ node, tagName, name, isBracketed, typeExpression, isNameFirst, comment }: {
    node: JSDocParameterTag;
    tagName?: Identifier | undefined;
    name: EntityName;
    isBracketed: boolean;
    typeExpression?: JSDocTypeExpression | undefined;
    isNameFirst: boolean;
    comment?: string | NodeArray<JSDocComment> | undefined;
}): JSDocParameterTag;
export function updateJSDocParameterTag(o) {
    return ts.factory.updateJSDocParameterTag(o.node, o.tagName, o.name, o.isBracketed, o.typeExpression, o.isNameFirst, o.comment);
}
export function createJSDocPropertyTag({ tagName, name, isBracketed, typeExpression, isNameFirst, comment }: {
    tagName?: Identifier | undefined;
    name: EntityName;
    isBracketed: boolean;
    typeExpression?: JSDocTypeExpression;
    isNameFirst?: boolean;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocPropertyTag;
export function createJSDocPropertyTag(o) {
    return ts.factory.createJSDocPropertyTag(o.tagName, o.name, o.isBracketed, o.typeExpression, o.isNameFirst, o.comment);
}
export function updateJSDocPropertyTag({ node, tagName, name, isBracketed, typeExpression, isNameFirst, comment }: {
    node: JSDocPropertyTag;
    tagName?: Identifier | undefined;
    name: EntityName;
    isBracketed: boolean;
    typeExpression?: JSDocTypeExpression | undefined;
    isNameFirst: boolean;
    comment?: string | NodeArray<JSDocComment> | undefined;
}): JSDocPropertyTag;
export function updateJSDocPropertyTag(o) {
    return ts.factory.updateJSDocPropertyTag(o.node, o.tagName, o.name, o.isBracketed, o.typeExpression, o.isNameFirst, o.comment);
}
export function createJSDocTypeTag({ tagName, typeExpression, comment }: {
    tagName?: Identifier | undefined;
    typeExpression: JSDocTypeExpression;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocTypeTag;
export function createJSDocTypeTag(o) {
    return ts.factory.createJSDocTypeTag(o.tagName, o.typeExpression, o.comment);
}
export function updateJSDocTypeTag({ node, tagName, typeExpression, comment }: {
    node: JSDocTypeTag;
    tagName?: Identifier | undefined;
    typeExpression: JSDocTypeExpression;
    comment?: string | NodeArray<JSDocComment> | undefined;
}): JSDocTypeTag;
export function updateJSDocTypeTag(o) {
    return ts.factory.updateJSDocTypeTag(o.node, o.tagName, o.typeExpression, o.comment);
}
export function createJSDocSeeTag({ tagName, nameExpression, comment }: {
    tagName?: Identifier | undefined;
    nameExpression?: JSDocNameReference | undefined;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocSeeTag;
export function createJSDocSeeTag(o) {
    return ts.factory.createJSDocSeeTag(o.tagName, o.nameExpression, o.comment);
}
export function updateJSDocSeeTag({ node, tagName, nameExpression, comment }: {
    node: JSDocSeeTag;
    tagName?: Identifier | undefined;
    nameExpression?: JSDocNameReference | undefined;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocSeeTag;
export function updateJSDocSeeTag(o) {
    return ts.factory.updateJSDocSeeTag(o.node, o.tagName, o.nameExpression, o.comment);
}
export function createJSDocReturnTag({ tagName, typeExpression, comment }: {
    tagName?: Identifier | undefined;
    typeExpression?: JSDocTypeExpression;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocReturnTag;
export function createJSDocReturnTag(o) {
    return ts.factory.createJSDocReturnTag(o.tagName, o.typeExpression, o.comment);
}
export function updateJSDocReturnTag({ node, tagName, typeExpression, comment }: {
    node: JSDocReturnTag;
    tagName?: Identifier | undefined;
    typeExpression?: JSDocTypeExpression | undefined;
    comment?: string | NodeArray<JSDocComment> | undefined;
}): JSDocReturnTag;
export function updateJSDocReturnTag(o) {
    return ts.factory.updateJSDocReturnTag(o.node, o.tagName, o.typeExpression, o.comment);
}
export function createJSDocThisTag({ tagName, typeExpression, comment }: {
    tagName?: Identifier | undefined;
    typeExpression: JSDocTypeExpression;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocThisTag;
export function createJSDocThisTag(o) {
    return ts.factory.createJSDocThisTag(o.tagName, o.typeExpression, o.comment);
}
export function updateJSDocThisTag({ node, tagName, typeExpression, comment }: {
    node: JSDocThisTag;
    tagName?: Identifier | undefined;
    typeExpression?: JSDocTypeExpression | undefined;
    comment?: string | NodeArray<JSDocComment> | undefined;
}): JSDocThisTag;
export function updateJSDocThisTag(o) {
    return ts.factory.updateJSDocThisTag(o.node, o.tagName, o.typeExpression, o.comment);
}
export function createJSDocEnumTag({ tagName, typeExpression, comment }: {
    tagName?: Identifier | undefined;
    typeExpression: JSDocTypeExpression;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocEnumTag;
export function createJSDocEnumTag(o) {
    return ts.factory.createJSDocEnumTag(o.tagName, o.typeExpression, o.comment);
}
export function updateJSDocEnumTag({ node, tagName, typeExpression, comment }: {
    node: JSDocEnumTag;
    tagName?: Identifier | undefined;
    typeExpression: JSDocTypeExpression;
    comment?: string | NodeArray<JSDocComment> | undefined;
}): JSDocEnumTag;
export function updateJSDocEnumTag(o) {
    return ts.factory.updateJSDocEnumTag(o.node, o.tagName, o.typeExpression, o.comment);
}
export function createJSDocCallbackTag({ tagName, typeExpression, fullName, comment }: {
    tagName?: Identifier | undefined;
    typeExpression: JSDocSignature;
    fullName?: Identifier | JSDocNamespaceDeclaration;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocCallbackTag;
export function createJSDocCallbackTag(o) {
    return ts.factory.createJSDocCallbackTag(o.tagName, o.typeExpression, o.fullName, o.comment);
}
export function updateJSDocCallbackTag({ node, tagName, typeExpression, fullName, comment }: {
    node: JSDocCallbackTag;
    tagName?: Identifier | undefined;
    typeExpression: JSDocSignature;
    fullName?: Identifier | JSDocNamespaceDeclaration | undefined;
    comment?: string | NodeArray<JSDocComment> | undefined;
}): JSDocCallbackTag;
export function updateJSDocCallbackTag(o) {
    return ts.factory.updateJSDocCallbackTag(o.node, o.tagName, o.typeExpression, o.fullName, o.comment);
}
export function createJSDocOverloadTag({ tagName, typeExpression, comment }: {
    tagName?: Identifier | undefined;
    typeExpression: JSDocSignature;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocOverloadTag;
export function createJSDocOverloadTag(o) {
    return ts.factory.createJSDocOverloadTag(o.tagName, o.typeExpression, o.comment);
}
export function updateJSDocOverloadTag({ node, tagName, typeExpression, comment }: {
    node: JSDocOverloadTag;
    tagName?: Identifier | undefined;
    typeExpression: JSDocSignature;
    comment?: string | NodeArray<JSDocComment> | undefined;
}): JSDocOverloadTag;
export function updateJSDocOverloadTag(o) {
    return ts.factory.updateJSDocOverloadTag(o.node, o.tagName, o.typeExpression, o.comment);
}
export function createJSDocAugmentsTag({ tagName, className, comment }: {
    tagName?: Identifier | undefined;
    className: JSDocAugmentsTag["class"];
    comment?: string | NodeArray<JSDocComment>;
}): JSDocAugmentsTag;
export function createJSDocAugmentsTag(o) {
    return ts.factory.createJSDocAugmentsTag(o.tagName, o.className, o.comment);
}
export function updateJSDocAugmentsTag({ node, tagName, className, comment }: {
    node: JSDocAugmentsTag;
    tagName?: Identifier | undefined;
    className: JSDocAugmentsTag["class"];
    comment?: string | NodeArray<JSDocComment> | undefined;
}): JSDocAugmentsTag;
export function updateJSDocAugmentsTag(o) {
    return ts.factory.updateJSDocAugmentsTag(o.node, o.tagName, o.className, o.comment);
}
export function createJSDocImplementsTag({ tagName, className, comment }: {
    tagName?: Identifier | undefined;
    className: JSDocImplementsTag["class"];
    comment?: string | NodeArray<JSDocComment>;
}): JSDocImplementsTag;
export function createJSDocImplementsTag(o) {
    return ts.factory.createJSDocImplementsTag(o.tagName, o.className, o.comment);
}
export function updateJSDocImplementsTag({ node, tagName, className, comment }: {
    node: JSDocImplementsTag;
    tagName?: Identifier | undefined;
    className: JSDocImplementsTag["class"];
    comment?: string | NodeArray<JSDocComment> | undefined;
}): JSDocImplementsTag;
export function updateJSDocImplementsTag(o) {
    return ts.factory.updateJSDocImplementsTag(o.node, o.tagName, o.className, o.comment);
}
export function createJSDocAuthorTag({ tagName, comment }: {
    tagName?: Identifier | undefined;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocAuthorTag;
export function createJSDocAuthorTag(o) {
    return ts.factory.createJSDocAuthorTag(o.tagName, o.comment);
}
export function updateJSDocAuthorTag({ node, tagName, comment }: {
    node: JSDocAuthorTag;
    tagName?: Identifier | undefined;
    comment?: string | NodeArray<JSDocComment> | undefined;
}): JSDocAuthorTag;
export function updateJSDocAuthorTag(o) {
    return ts.factory.updateJSDocAuthorTag(o.node, o.tagName, o.comment);
}
export function createJSDocClassTag({ tagName, comment }: {
    tagName?: Identifier | undefined;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocClassTag;
export function createJSDocClassTag(o) {
    return ts.factory.createJSDocClassTag(o.tagName, o.comment);
}
export function updateJSDocClassTag({ node, tagName, comment }: {
    node: JSDocClassTag;
    tagName?: Identifier | undefined;
    comment?: string | NodeArray<JSDocComment> | undefined;
}): JSDocClassTag;
export function updateJSDocClassTag(o) {
    return ts.factory.updateJSDocClassTag(o.node, o.tagName, o.comment);
}
export function createJSDocPublicTag({ tagName, comment }: {
    tagName?: Identifier | undefined;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocPublicTag;
export function createJSDocPublicTag(o) {
    return ts.factory.createJSDocPublicTag(o.tagName, o.comment);
}
export function updateJSDocPublicTag({ node, tagName, comment }: {
    node: JSDocPublicTag;
    tagName?: Identifier | undefined;
    comment?: string | NodeArray<JSDocComment> | undefined;
}): JSDocPublicTag;
export function updateJSDocPublicTag(o) {
    return ts.factory.updateJSDocPublicTag(o.node, o.tagName, o.comment);
}
export function createJSDocPrivateTag({ tagName, comment }: {
    tagName?: Identifier | undefined;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocPrivateTag;
export function createJSDocPrivateTag(o) {
    return ts.factory.createJSDocPrivateTag(o.tagName, o.comment);
}
export function updateJSDocPrivateTag({ node, tagName, comment }: {
    node: JSDocPrivateTag;
    tagName?: Identifier | undefined;
    comment?: string | NodeArray<JSDocComment> | undefined;
}): JSDocPrivateTag;
export function updateJSDocPrivateTag(o) {
    return ts.factory.updateJSDocPrivateTag(o.node, o.tagName, o.comment);
}
export function createJSDocProtectedTag({ tagName, comment }: {
    tagName?: Identifier | undefined;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocProtectedTag;
export function createJSDocProtectedTag(o) {
    return ts.factory.createJSDocProtectedTag(o.tagName, o.comment);
}
export function updateJSDocProtectedTag({ node, tagName, comment }: {
    node: JSDocProtectedTag;
    tagName?: Identifier | undefined;
    comment?: string | NodeArray<JSDocComment> | undefined;
}): JSDocProtectedTag;
export function updateJSDocProtectedTag(o) {
    return ts.factory.updateJSDocProtectedTag(o.node, o.tagName, o.comment);
}
export function createJSDocReadonlyTag({ tagName, comment }: {
    tagName?: Identifier | undefined;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocReadonlyTag;
export function createJSDocReadonlyTag(o) {
    return ts.factory.createJSDocReadonlyTag(o.tagName, o.comment);
}
export function updateJSDocReadonlyTag({ node, tagName, comment }: {
    node: JSDocReadonlyTag;
    tagName?: Identifier | undefined;
    comment?: string | NodeArray<JSDocComment> | undefined;
}): JSDocReadonlyTag;
export function updateJSDocReadonlyTag(o) {
    return ts.factory.updateJSDocReadonlyTag(o.node, o.tagName, o.comment);
}
export function createJSDocUnknownTag({ tagName, comment }: {
    tagName: Identifier;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocUnknownTag;
export function createJSDocUnknownTag(o) {
    return ts.factory.createJSDocUnknownTag(o.tagName, o.comment);
}
export function updateJSDocUnknownTag({ node, tagName, comment }: {
    node: JSDocUnknownTag;
    tagName: Identifier;
    comment?: string | NodeArray<JSDocComment> | undefined;
}): JSDocUnknownTag;
export function updateJSDocUnknownTag(o) {
    return ts.factory.updateJSDocUnknownTag(o.node, o.tagName, o.comment);
}
export function createJSDocDeprecatedTag({ tagName, comment }: {
    tagName?: Identifier | undefined;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocDeprecatedTag;
export function createJSDocDeprecatedTag(o) {
    return ts.factory.createJSDocDeprecatedTag(o.tagName, o.comment);
}
export function updateJSDocDeprecatedTag({ node, tagName, comment }: {
    node: JSDocDeprecatedTag;
    tagName?: Identifier | undefined;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocDeprecatedTag;
export function updateJSDocDeprecatedTag(o) {
    return ts.factory.updateJSDocDeprecatedTag(o.node, o.tagName, o.comment);
}
export function createJSDocOverrideTag({ tagName, comment }: {
    tagName?: Identifier | undefined;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocOverrideTag;
export function createJSDocOverrideTag(o) {
    return ts.factory.createJSDocOverrideTag(o.tagName, o.comment);
}
export function updateJSDocOverrideTag({ node, tagName, comment }: {
    node: JSDocOverrideTag;
    tagName?: Identifier | undefined;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocOverrideTag;
export function updateJSDocOverrideTag(o) {
    return ts.factory.updateJSDocOverrideTag(o.node, o.tagName, o.comment);
}
export function createJSDocThrowsTag({ tagName, typeExpression, comment }: {
    tagName: Identifier;
    typeExpression?: JSDocTypeExpression | undefined;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocThrowsTag;
export function createJSDocThrowsTag(o) {
    return ts.factory.createJSDocThrowsTag(o.tagName, o.typeExpression, o.comment);
}
export function updateJSDocThrowsTag({ node, tagName, typeExpression, comment }: {
    node: JSDocThrowsTag;
    tagName?: Identifier | undefined;
    typeExpression?: JSDocTypeExpression | undefined;
    comment?: string | NodeArray<JSDocComment> | undefined;
}): JSDocThrowsTag;
export function updateJSDocThrowsTag(o) {
    return ts.factory.updateJSDocThrowsTag(o.node, o.tagName, o.typeExpression, o.comment);
}
export function createJSDocSatisfiesTag({ tagName, typeExpression, comment }: {
    tagName?: Identifier | undefined;
    typeExpression: JSDocTypeExpression;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocSatisfiesTag;
export function createJSDocSatisfiesTag(o) {
    return ts.factory.createJSDocSatisfiesTag(o.tagName, o.typeExpression, o.comment);
}
export function updateJSDocSatisfiesTag({ node, tagName, typeExpression, comment }: {
    node: JSDocSatisfiesTag;
    tagName?: Identifier | undefined;
    typeExpression: JSDocTypeExpression;
    comment?: string | NodeArray<JSDocComment> | undefined;
}): JSDocSatisfiesTag;
export function updateJSDocSatisfiesTag(o) {
    return ts.factory.updateJSDocSatisfiesTag(o.node, o.tagName, o.typeExpression, o.comment);
}
export function createJSDocText({ text }: {
    text: string;
}): JSDocText;
export function createJSDocText(o) {
    return ts.factory.createJSDocText(o.text);
}
export function updateJSDocText({ node, text }: {
    node: JSDocText;
    text: string;
}): JSDocText;
export function updateJSDocText(o) {
    return ts.factory.updateJSDocText(o.node, o.text);
}
export function createJSDocComment({ comment, tags }: {
    comment?: string | NodeArray<JSDocComment> | undefined;
    tags?: readonly JSDocTag[] | undefined;
}): JSDoc;
export function createJSDocComment(o) {
    return ts.factory.createJSDocComment(o.comment, o.tags);
}
export function updateJSDocComment({ node, comment, tags }: {
    node: JSDoc;
    comment?: string | NodeArray<JSDocComment> | undefined;
    tags?: readonly JSDocTag[] | undefined;
}): JSDoc;
export function updateJSDocComment(o) {
    return ts.factory.updateJSDocComment(o.node, o.comment, o.tags);
}
export function createJsxElement({ openingElement, children, closingElement }: {
    openingElement: JsxOpeningElement;
    children: readonly JsxChild[];
    closingElement: JsxClosingElement;
}): JsxElement;
export function createJsxElement(o) {
    return ts.factory.createJsxElement(o.openingElement, o.children, o.closingElement);
}
export function updateJsxElement({ node, openingElement, children, closingElement }: {
    node: JsxElement;
    openingElement: JsxOpeningElement;
    children: readonly JsxChild[];
    closingElement: JsxClosingElement;
}): JsxElement;
export function updateJsxElement(o) {
    return ts.factory.updateJsxElement(o.node, o.openingElement, o.children, o.closingElement);
}
export function createJsxSelfClosingElement({ tagName, typeArguments, attributes }: {
    tagName: JsxTagNameExpression;
    typeArguments?: readonly TypeNode[] | undefined;
    attributes: JsxAttributes;
}): JsxSelfClosingElement;
export function createJsxSelfClosingElement(o) {
    return ts.factory.createJsxSelfClosingElement(o.tagName, o.typeArguments, o.attributes);
}
export function updateJsxSelfClosingElement({ node, tagName, typeArguments, attributes }: {
    node: JsxSelfClosingElement;
    tagName: JsxTagNameExpression;
    typeArguments?: readonly TypeNode[] | undefined;
    attributes: JsxAttributes;
}): JsxSelfClosingElement;
export function updateJsxSelfClosingElement(o) {
    return ts.factory.updateJsxSelfClosingElement(o.node, o.tagName, o.typeArguments, o.attributes);
}
export function createJsxOpeningElement({ tagName, typeArguments, attributes }: {
    tagName: JsxTagNameExpression;
    typeArguments?: readonly TypeNode[] | undefined;
    attributes: JsxAttributes;
}): JsxOpeningElement;
export function createJsxOpeningElement(o) {
    return ts.factory.createJsxOpeningElement(o.tagName, o.typeArguments, o.attributes);
}
export function updateJsxOpeningElement({ node, tagName, typeArguments, attributes }: {
    node: JsxOpeningElement;
    tagName: JsxTagNameExpression;
    typeArguments?: readonly TypeNode[] | undefined;
    attributes: JsxAttributes;
}): JsxOpeningElement;
export function updateJsxOpeningElement(o) {
    return ts.factory.updateJsxOpeningElement(o.node, o.tagName, o.typeArguments, o.attributes);
}
export function createJsxClosingElement({ tagName }: {
    tagName: JsxTagNameExpression;
}): JsxClosingElement;
export function createJsxClosingElement(o) {
    return ts.factory.createJsxClosingElement(o.tagName);
}
export function updateJsxClosingElement({ node, tagName }: {
    node: JsxClosingElement;
    tagName: JsxTagNameExpression;
}): JsxClosingElement;
export function updateJsxClosingElement(o) {
    return ts.factory.updateJsxClosingElement(o.node, o.tagName);
}
export function createJsxFragment({ openingFragment, children, closingFragment }: {
    openingFragment: JsxOpeningFragment;
    children: readonly JsxChild[];
    closingFragment: JsxClosingFragment;
}): JsxFragment;
export function createJsxFragment(o) {
    return ts.factory.createJsxFragment(o.openingFragment, o.children, o.closingFragment);
}
export function createJsxText({ text, containsOnlyTriviaWhiteSpaces }: {
    text: string;
    containsOnlyTriviaWhiteSpaces?: boolean;
}): JsxText;
export function createJsxText(o) {
    return ts.factory.createJsxText(o.text, o.containsOnlyTriviaWhiteSpaces);
}
export function updateJsxText({ node, text, containsOnlyTriviaWhiteSpaces }: {
    node: JsxText;
    text: string;
    containsOnlyTriviaWhiteSpaces?: boolean;
}): JsxText;
export function updateJsxText(o) {
    return ts.factory.updateJsxText(o.node, o.text, o.containsOnlyTriviaWhiteSpaces);
}
export function createJsxOpeningFragment(): JsxOpeningFragment;
export function createJsxOpeningFragment() {
    return ts.factory.createJsxOpeningFragment();
}
export function createJsxJsxClosingFragment(): JsxClosingFragment;
export function createJsxJsxClosingFragment() {
    return ts.factory.createJsxJsxClosingFragment();
}
export function updateJsxFragment({ node, openingFragment, children, closingFragment }: {
    node: JsxFragment;
    openingFragment: JsxOpeningFragment;
    children: readonly JsxChild[];
    closingFragment: JsxClosingFragment;
}): JsxFragment;
export function updateJsxFragment(o) {
    return ts.factory.updateJsxFragment(o.node, o.openingFragment, o.children, o.closingFragment);
}
export function createJsxAttribute({ name, initializer }: {
    name: JsxAttributeName;
    initializer?: JsxAttributeValue | undefined;
}): JsxAttribute;
export function createJsxAttribute(o) {
    return ts.factory.createJsxAttribute(o.name, o.initializer);
}
export function updateJsxAttribute({ node, name, initializer }: {
    node: JsxAttribute;
    name: JsxAttributeName;
    initializer?: JsxAttributeValue | undefined;
}): JsxAttribute;
export function updateJsxAttribute(o) {
    return ts.factory.updateJsxAttribute(o.node, o.name, o.initializer);
}
export function createJsxAttributes({ properties }: {
    properties: readonly JsxAttributeLike[];
}): JsxAttributes;
export function createJsxAttributes(o) {
    return ts.factory.createJsxAttributes(o.properties);
}
export function updateJsxAttributes({ node, properties }: {
    node: JsxAttributes;
    properties: readonly JsxAttributeLike[];
}): JsxAttributes;
export function updateJsxAttributes(o) {
    return ts.factory.updateJsxAttributes(o.node, o.properties);
}
export function createJsxSpreadAttribute({ expression }: {
    expression: Expression;
}): JsxSpreadAttribute;
export function createJsxSpreadAttribute(o) {
    return ts.factory.createJsxSpreadAttribute(o.expression);
}
export function updateJsxSpreadAttribute({ node, expression }: {
    node: JsxSpreadAttribute;
    expression: Expression;
}): JsxSpreadAttribute;
export function updateJsxSpreadAttribute(o) {
    return ts.factory.updateJsxSpreadAttribute(o.node, o.expression);
}
export function createJsxExpression({ dotDotDotToken, expression }: {
    dotDotDotToken?: DotDotDotToken | undefined;
    expression?: Expression | undefined;
}): JsxExpression;
export function createJsxExpression(o) {
    return ts.factory.createJsxExpression(o.dotDotDotToken, o.expression);
}
export function updateJsxExpression({ node, expression }: {
    node: JsxExpression;
    expression?: Expression | undefined;
}): JsxExpression;
export function updateJsxExpression(o) {
    return ts.factory.updateJsxExpression(o.node, o.expression);
}
export function createJsxNamespacedName({ namespace, name }: {
    namespace: Identifier;
    name: Identifier;
}): JsxNamespacedName;
export function createJsxNamespacedName(o) {
    return ts.factory.createJsxNamespacedName(o.namespace, o.name);
}
export function updateJsxNamespacedName({ node, namespace, name }: {
    node: JsxNamespacedName;
    namespace: Identifier;
    name: Identifier;
}): JsxNamespacedName;
export function updateJsxNamespacedName(o) {
    return ts.factory.updateJsxNamespacedName(o.node, o.namespace, o.name);
}
export function createCaseClause({ expression, statements }: {
    expression: Expression;
    statements: readonly Statement[];
}): CaseClause;
export function createCaseClause(o) {
    return ts.factory.createCaseClause(o.expression, o.statements);
}
export function updateCaseClause({ node, expression, statements }: {
    node: CaseClause;
    expression: Expression;
    statements: readonly Statement[];
}): CaseClause;
export function updateCaseClause(o) {
    return ts.factory.updateCaseClause(o.node, o.expression, o.statements);
}
export function createDefaultClause({ statements }: {
    statements: readonly Statement[];
}): DefaultClause;
export function createDefaultClause(o) {
    return ts.factory.createDefaultClause(o.statements);
}
export function updateDefaultClause({ node, statements }: {
    node: DefaultClause;
    statements: readonly Statement[];
}): DefaultClause;
export function updateDefaultClause(o) {
    return ts.factory.updateDefaultClause(o.node, o.statements);
}
export function createHeritageClause({ token, types }: {
    token: HeritageClause["token"];
    types: readonly ExpressionWithTypeArguments[];
}): HeritageClause;
export function createHeritageClause(o) {
    return ts.factory.createHeritageClause(o.token, o.types);
}
export function updateHeritageClause({ node, types }: {
    node: HeritageClause;
    types: readonly ExpressionWithTypeArguments[];
}): HeritageClause;
export function updateHeritageClause(o) {
    return ts.factory.updateHeritageClause(o.node, o.types);
}
export function createCatchClause({ variableDeclaration, block }: {
    variableDeclaration?: string | BindingName | VariableDeclaration | undefined;
    block: Block;
}): CatchClause;
export function createCatchClause(o) {
    return ts.factory.createCatchClause(o.variableDeclaration, o.block);
}
export function updateCatchClause({ node, variableDeclaration, block }: {
    node: CatchClause;
    variableDeclaration?: VariableDeclaration | undefined;
    block: Block;
}): CatchClause;
export function updateCatchClause(o) {
    return ts.factory.updateCatchClause(o.node, o.variableDeclaration, o.block);
}
export function createPropertyAssignment({ name, initializer }: {
    name: string | PropertyName;
    initializer: Expression;
}): PropertyAssignment;
export function createPropertyAssignment(o) {
    return ts.factory.createPropertyAssignment(o.name, o.initializer);
}
export function updatePropertyAssignment({ node, name, initializer }: {
    node: PropertyAssignment;
    name: PropertyName;
    initializer: Expression;
}): PropertyAssignment;
export function updatePropertyAssignment(o) {
    return ts.factory.updatePropertyAssignment(o.node, o.name, o.initializer);
}
export function createShorthandPropertyAssignment({ name, objectAssignmentInitializer }: {
    name: string | Identifier;
    objectAssignmentInitializer?: Expression;
}): ShorthandPropertyAssignment;
export function createShorthandPropertyAssignment(o) {
    return ts.factory.createShorthandPropertyAssignment(o.name, o.objectAssignmentInitializer);
}
export function updateShorthandPropertyAssignment({ node, name, objectAssignmentInitializer }: {
    node: ShorthandPropertyAssignment;
    name: Identifier;
    objectAssignmentInitializer?: Expression | undefined;
}): ShorthandPropertyAssignment;
export function updateShorthandPropertyAssignment(o) {
    return ts.factory.updateShorthandPropertyAssignment(o.node, o.name, o.objectAssignmentInitializer);
}
export function createSpreadAssignment({ expression }: {
    expression: Expression;
}): SpreadAssignment;
export function createSpreadAssignment(o) {
    return ts.factory.createSpreadAssignment(o.expression);
}
export function updateSpreadAssignment({ node, expression }: {
    node: SpreadAssignment;
    expression: Expression;
}): SpreadAssignment;
export function updateSpreadAssignment(o) {
    return ts.factory.updateSpreadAssignment(o.node, o.expression);
}
export function createEnumMember({ name, initializer }: {
    name: string | PropertyName;
    initializer?: Expression;
}): EnumMember;
export function createEnumMember(o) {
    return ts.factory.createEnumMember(o.name, o.initializer);
}
export function updateEnumMember({ node, name, initializer }: {
    node: EnumMember;
    name: PropertyName;
    initializer?: Expression | undefined;
}): EnumMember;
export function updateEnumMember(o) {
    return ts.factory.updateEnumMember(o.node, o.name, o.initializer);
}
export function createSourceFile({ statements, endOfFileToken, flags }: {
    statements: readonly Statement[];
    endOfFileToken: EndOfFileToken;
    flags: NodeFlags;
}): SourceFile;
export function createSourceFile(o) {
    return ts.factory.createSourceFile(o.statements, o.endOfFileToken, o.flags);
}
export function updateSourceFile({ node, statements, isDeclarationFile, referencedFiles, typeReferences, hasNoDefaultLib, libReferences }: {
    node: SourceFile;
    statements: readonly Statement[];
    isDeclarationFile?: boolean;
    referencedFiles?: readonly FileReference[];
    typeReferences?: readonly FileReference[];
    hasNoDefaultLib?: boolean;
    libReferences?: readonly FileReference[];
}): SourceFile;
export function updateSourceFile(o) {
    return ts.factory.updateSourceFile(o.node, o.statements, o.isDeclarationFile, o.referencedFiles, o.typeReferences, o.hasNoDefaultLib, o.libReferences);
}
export function createNotEmittedStatement({ original }: {
    original: Node;
}): NotEmittedStatement;
export function createNotEmittedStatement(o) {
    return ts.factory.createNotEmittedStatement(o.original);
}
export function createPartiallyEmittedExpression({ expression, original }: {
    expression: Expression;
    original?: Node;
}): PartiallyEmittedExpression;
export function createPartiallyEmittedExpression(o) {
    return ts.factory.createPartiallyEmittedExpression(o.expression, o.original);
}
export function updatePartiallyEmittedExpression({ node, expression }: {
    node: PartiallyEmittedExpression;
    expression: Expression;
}): PartiallyEmittedExpression;
export function updatePartiallyEmittedExpression(o) {
    return ts.factory.updatePartiallyEmittedExpression(o.node, o.expression);
}
export function createCommaListExpression({ elements }: {
    elements: readonly Expression[];
}): CommaListExpression;
export function createCommaListExpression(o) {
    return ts.factory.createCommaListExpression(o.elements);
}
export function updateCommaListExpression({ node, elements }: {
    node: CommaListExpression;
    elements: readonly Expression[];
}): CommaListExpression;
export function updateCommaListExpression(o) {
    return ts.factory.updateCommaListExpression(o.node, o.elements);
}
export function createBundle({ sourceFiles }: {
    sourceFiles: readonly SourceFile[];
}): Bundle;
export function createBundle({ sourceFiles, prepends }: {
    sourceFiles: readonly SourceFile[];
    prepends?: readonly (UnparsedSource | InputFiles)[];
}): Bundle;
export function createBundle(o) {
    return ts.factory.createBundle(o.sourceFiles, o.prepends);
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
export function updateBundle(o) {
    return ts.factory.updateBundle(o.node, o.sourceFiles, o.prepends);
}
export function createComma({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression;
export function createComma(o) {
    return ts.factory.createComma(o.left, o.right);
}
export function createAssignment({ left, right }: {
    left: ObjectLiteralExpression | ArrayLiteralExpression;
    right: Expression;
}): DestructuringAssignment;
export function createAssignment({ left, right }: {
    left: Expression;
    right: Expression;
}): AssignmentExpression<EqualsToken>;
export function createAssignment(o) {
    return ts.factory.createAssignment(o.left, o.right);
}
export function createLogicalOr({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression;
export function createLogicalOr(o) {
    return ts.factory.createLogicalOr(o.left, o.right);
}
export function createLogicalAnd({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression;
export function createLogicalAnd(o) {
    return ts.factory.createLogicalAnd(o.left, o.right);
}
export function createBitwiseOr({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression;
export function createBitwiseOr(o) {
    return ts.factory.createBitwiseOr(o.left, o.right);
}
export function createBitwiseXor({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression;
export function createBitwiseXor(o) {
    return ts.factory.createBitwiseXor(o.left, o.right);
}
export function createBitwiseAnd({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression;
export function createBitwiseAnd(o) {
    return ts.factory.createBitwiseAnd(o.left, o.right);
}
export function createStrictEquality({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression;
export function createStrictEquality(o) {
    return ts.factory.createStrictEquality(o.left, o.right);
}
export function createStrictInequality({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression;
export function createStrictInequality(o) {
    return ts.factory.createStrictInequality(o.left, o.right);
}
export function createEquality({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression;
export function createEquality(o) {
    return ts.factory.createEquality(o.left, o.right);
}
export function createInequality({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression;
export function createInequality(o) {
    return ts.factory.createInequality(o.left, o.right);
}
export function createLessThan({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression;
export function createLessThan(o) {
    return ts.factory.createLessThan(o.left, o.right);
}
export function createLessThanEquals({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression;
export function createLessThanEquals(o) {
    return ts.factory.createLessThanEquals(o.left, o.right);
}
export function createGreaterThan({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression;
export function createGreaterThan(o) {
    return ts.factory.createGreaterThan(o.left, o.right);
}
export function createGreaterThanEquals({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression;
export function createGreaterThanEquals(o) {
    return ts.factory.createGreaterThanEquals(o.left, o.right);
}
export function createLeftShift({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression;
export function createLeftShift(o) {
    return ts.factory.createLeftShift(o.left, o.right);
}
export function createRightShift({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression;
export function createRightShift(o) {
    return ts.factory.createRightShift(o.left, o.right);
}
export function createUnsignedRightShift({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression;
export function createUnsignedRightShift(o) {
    return ts.factory.createUnsignedRightShift(o.left, o.right);
}
export function createAdd({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression;
export function createAdd(o) {
    return ts.factory.createAdd(o.left, o.right);
}
export function createSubtract({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression;
export function createSubtract(o) {
    return ts.factory.createSubtract(o.left, o.right);
}
export function createMultiply({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression;
export function createMultiply(o) {
    return ts.factory.createMultiply(o.left, o.right);
}
export function createDivide({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression;
export function createDivide(o) {
    return ts.factory.createDivide(o.left, o.right);
}
export function createModulo({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression;
export function createModulo(o) {
    return ts.factory.createModulo(o.left, o.right);
}
export function createExponent({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression;
export function createExponent(o) {
    return ts.factory.createExponent(o.left, o.right);
}
export function createPrefixPlus({ operand }: {
    operand: Expression;
}): PrefixUnaryExpression;
export function createPrefixPlus(o) {
    return ts.factory.createPrefixPlus(o.operand);
}
export function createPrefixMinus({ operand }: {
    operand: Expression;
}): PrefixUnaryExpression;
export function createPrefixMinus(o) {
    return ts.factory.createPrefixMinus(o.operand);
}
export function createPrefixIncrement({ operand }: {
    operand: Expression;
}): PrefixUnaryExpression;
export function createPrefixIncrement(o) {
    return ts.factory.createPrefixIncrement(o.operand);
}
export function createPrefixDecrement({ operand }: {
    operand: Expression;
}): PrefixUnaryExpression;
export function createPrefixDecrement(o) {
    return ts.factory.createPrefixDecrement(o.operand);
}
export function createBitwiseNot({ operand }: {
    operand: Expression;
}): PrefixUnaryExpression;
export function createBitwiseNot(o) {
    return ts.factory.createBitwiseNot(o.operand);
}
export function createLogicalNot({ operand }: {
    operand: Expression;
}): PrefixUnaryExpression;
export function createLogicalNot(o) {
    return ts.factory.createLogicalNot(o.operand);
}
export function createPostfixIncrement({ operand }: {
    operand: Expression;
}): PostfixUnaryExpression;
export function createPostfixIncrement(o) {
    return ts.factory.createPostfixIncrement(o.operand);
}
export function createPostfixDecrement({ operand }: {
    operand: Expression;
}): PostfixUnaryExpression;
export function createPostfixDecrement(o) {
    return ts.factory.createPostfixDecrement(o.operand);
}
export function createImmediatelyInvokedFunctionExpression({ statements }: {
    statements: readonly Statement[];
}): CallExpression;
export function createImmediatelyInvokedFunctionExpression({ statements, param, paramValue }: {
    statements: readonly Statement[];
    param: ParameterDeclaration;
    paramValue: Expression;
}): CallExpression;
export function createImmediatelyInvokedFunctionExpression(o) {
    return ts.factory.createImmediatelyInvokedFunctionExpression(o.statements, o.param, o.paramValue);
}
export function createImmediatelyInvokedArrowFunction({ statements }: {
    statements: readonly Statement[];
}): ImmediatelyInvokedArrowFunction;
export function createImmediatelyInvokedArrowFunction({ statements, param, paramValue }: {
    statements: readonly Statement[];
    param: ParameterDeclaration;
    paramValue: Expression;
}): ImmediatelyInvokedArrowFunction;
export function createImmediatelyInvokedArrowFunction(o) {
    return ts.factory.createImmediatelyInvokedArrowFunction(o.statements, o.param, o.paramValue);
}
export function createVoidZero(): VoidExpression;
export function createVoidZero() {
    return ts.factory.createVoidZero();
}
export function createExportDefault({ expression }: {
    expression: Expression;
}): ExportAssignment;
export function createExportDefault(o) {
    return ts.factory.createExportDefault(o.expression);
}
export function createExternalModuleExport({ exportName }: {
    exportName: Identifier;
}): ExportDeclaration;
export function createExternalModuleExport(o) {
    return ts.factory.createExternalModuleExport(o.exportName);
}
export function restoreOuterExpressions({ outerExpression, innerExpression, kinds }: {
    outerExpression?: Expression | undefined;
    innerExpression: Expression;
    kinds?: OuterExpressionKinds;
}): Expression;
export function restoreOuterExpressions(o) {
    return ts.factory.restoreOuterExpressions(o.outerExpression, o.innerExpression, o.kinds);
}
export function replaceModifiers<T extends HasModifiers>({ node, modifiers }: {
    node: T;
    modifiers?: readonly Modifier[] | ModifierFlags | undefined;
}): T;
export function replaceModifiers(o) {
    return ts.factory.replaceModifiers(o.node, o.modifiers);
}
export function replaceDecoratorsAndModifiers<T extends HasModifiers & HasDecorators>({ node, modifiers }: {
    node: T;
    modifiers?: readonly ModifierLike[] | undefined;
}): T;
export function replaceDecoratorsAndModifiers(o) {
    return ts.factory.replaceDecoratorsAndModifiers(o.node, o.modifiers);
}
export function replacePropertyName<T extends AccessorDeclaration | MethodDeclaration | MethodSignature | PropertyDeclaration | PropertySignature | PropertyAssignment>({ node, name }: {
    node: T;
    name: T["name"];
}): T;
export function replacePropertyName(o) {
    return ts.factory.replacePropertyName(o.node, o.name);
}
