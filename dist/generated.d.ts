import { NodeArray, Node, NumericLiteral, TokenFlags, BigIntLiteral, PseudoBigInt, StringLiteral, PropertyNameLiteral, PrivateIdentifier, RegularExpressionLiteral, Identifier, GeneratedIdentifierFlags, SuperExpression, SyntaxKind, ThisExpression, NullLiteral, TrueLiteral, FalseLiteral, EndOfFileToken, Token, PunctuationToken, PunctuationSyntaxKind, KeywordTypeNode, KeywordTypeSyntaxKind, ModifierToken, ModifierSyntaxKind, KeywordToken, KeywordSyntaxKind, Modifier, ModifierFlags, QualifiedName, EntityName, ComputedPropertyName, Expression, TypeParameterDeclaration, TypeNode, ParameterDeclaration, ModifierLike, DotDotDotToken, BindingName, QuestionToken, Decorator, PropertySignature, PropertyName, PropertyDeclaration, ExclamationToken, MethodSignature, MethodDeclaration, AsteriskToken, Block, ConstructorDeclaration, GetAccessorDeclaration, SetAccessorDeclaration, CallSignatureDeclaration, ConstructSignatureDeclaration, IndexSignatureDeclaration, TemplateLiteralTypeSpan, TemplateMiddle, TemplateTail, ClassStaticBlockDeclaration, TypePredicateNode, AssertsKeyword, ThisTypeNode, TypeReferenceNode, FunctionTypeNode, ConstructorTypeNode, TypeQueryNode, TypeLiteralNode, TypeElement, ArrayTypeNode, TupleTypeNode, NamedTupleMember, OptionalTypeNode, RestTypeNode, UnionTypeNode, IntersectionTypeNode, ConditionalTypeNode, InferTypeNode, ImportTypeNode, ImportAttributes, ParenthesizedTypeNode, TypeOperatorNode, IndexedAccessTypeNode, MappedTypeNode, ReadonlyKeyword, PlusToken, MinusToken, LiteralTypeNode, TemplateLiteralTypeNode, TemplateHead, ObjectBindingPattern, BindingElement, ArrayBindingPattern, ArrayBindingElement, ArrayLiteralExpression, ObjectLiteralExpression, ObjectLiteralElementLike, PropertyAccessExpression, MemberName, PropertyAccessChain, QuestionDotToken, ElementAccessExpression, ElementAccessChain, CallExpression, CallChain, NewExpression, TaggedTemplateExpression, TemplateLiteral, TypeAssertion, ParenthesizedExpression, FunctionExpression, ArrowFunction, EqualsGreaterThanToken, ConciseBody, DeleteExpression, TypeOfExpression, VoidExpression, AwaitExpression, PrefixUnaryExpression, PrefixUnaryOperator, PostfixUnaryExpression, PostfixUnaryOperator, BinaryExpression, BinaryOperator, BinaryOperatorToken, ConditionalExpression, ColonToken, TemplateExpression, TemplateSpan, NoSubstitutionTemplateLiteral, YieldExpression, SpreadElement, ClassExpression, HeritageClause, ClassElement, OmittedExpression, ExpressionWithTypeArguments, AsExpression, NonNullExpression, NonNullChain, MetaProperty, SatisfiesExpression, SemicolonClassElement, Statement, VariableStatement, VariableDeclarationList, VariableDeclaration, EmptyStatement, ExpressionStatement, IfStatement, DoStatement, WhileStatement, ForStatement, ForInitializer, ForInStatement, ForOfStatement, AwaitKeyword, ContinueStatement, BreakStatement, ReturnStatement, WithStatement, SwitchStatement, CaseBlock, LabeledStatement, ThrowStatement, TryStatement, CatchClause, DebuggerStatement, NodeFlags, FunctionDeclaration, ClassDeclaration, InterfaceDeclaration, TypeAliasDeclaration, EnumDeclaration, EnumMember, ModuleDeclaration, ModuleName, ModuleBody, ModuleBlock, CaseOrDefaultClause, NamespaceExportDeclaration, ImportEqualsDeclaration, ModuleReference, ImportDeclaration, ImportClause, NamedImportBindings, AssertClause, AssertEntry, AssertionKey, ImportTypeAssertionContainer, ImportAttribute, ImportAttributeName, NamespaceImport, NamespaceExport, NamedImports, ImportSpecifier, ExportAssignment, ExportDeclaration, NamedExportBindings, NamedExports, ExportSpecifier, ExternalModuleReference, JSDocAllType, JSDocUnknownType, JSDocNonNullableType, JSDocNullableType, JSDocOptionalType, JSDocFunctionType, JSDocVariadicType, JSDocNamepathType, JSDocTypeExpression, JSDocNameReference, JSDocMemberName, JSDocLink, JSDocLinkCode, JSDocLinkPlain, JSDocTypeLiteral, JSDocPropertyLikeTag, JSDocSignature, JSDocTemplateTag, JSDocParameterTag, JSDocReturnTag, JSDocComment, JSDocTypedefTag, JSDocNamespaceDeclaration, JSDocPropertyTag, JSDocTypeTag, JSDocSeeTag, JSDocThisTag, JSDocEnumTag, JSDocCallbackTag, JSDocOverloadTag, JSDocAugmentsTag, JSDocImplementsTag, JSDocAuthorTag, JSDocClassTag, JSDocPublicTag, JSDocPrivateTag, JSDocProtectedTag, JSDocReadonlyTag, JSDocUnknownTag, JSDocDeprecatedTag, JSDocOverrideTag, JSDocThrowsTag, JSDocSatisfiesTag, JSDocText, JSDoc, JSDocTag, JsxElement, JsxOpeningElement, JsxChild, JsxClosingElement, JsxSelfClosingElement, JsxTagNameExpression, JsxAttributes, JsxFragment, JsxOpeningFragment, JsxClosingFragment, JsxText, JsxAttribute, JsxAttributeName, JsxAttributeValue, JsxAttributeLike, JsxSpreadAttribute, JsxExpression, JsxNamespacedName, CaseClause, DefaultClause, PropertyAssignment, ShorthandPropertyAssignment, SpreadAssignment, SourceFile, FileReference, NotEmittedStatement, PartiallyEmittedExpression, CommaListExpression, Bundle, UnparsedSource, InputFiles, DestructuringAssignment, EqualsToken, AssignmentExpression, ImmediatelyInvokedArrowFunction, OuterExpressionKinds, HasModifiers, HasDecorators, AccessorDeclaration } from "typescript";
export declare function createNodeArray<T extends Node>({ elements, hasTrailingComma }: {
    elements?: readonly T[];
    hasTrailingComma?: boolean;
}): NodeArray<T>;
export declare function createNumericLiteral({ value, numericLiteralFlags }: {
    value: string | number;
    numericLiteralFlags?: TokenFlags;
}): NumericLiteral;
export declare function createBigIntLiteral({ value }: {
    value: string | PseudoBigInt;
}): BigIntLiteral;
export declare function createStringLiteral({ text, isSingleQuote }: {
    text: string;
    isSingleQuote?: boolean;
}): StringLiteral;
export declare function createStringLiteralFromNode({ sourceNode, isSingleQuote }: {
    sourceNode: PropertyNameLiteral | PrivateIdentifier;
    isSingleQuote?: boolean;
}): StringLiteral;
export declare function createRegularExpressionLiteral({ text }: {
    text: string;
}): RegularExpressionLiteral;
export declare function createIdentifier({ text }: {
    text: string;
}): Identifier;
export declare function createTempVariable({ recordTempVariable, reservedInNestedScopes }: {
    recordTempVariable: ((node: Identifier) => void) | undefined;
    reservedInNestedScopes?: boolean;
}): Identifier;
export declare function createLoopVariable({ reservedInNestedScopes }: {
    reservedInNestedScopes?: boolean;
}): Identifier;
export declare function createUniqueName({ text, flags }: {
    text: string;
    flags?: GeneratedIdentifierFlags;
}): Identifier;
export declare function getGeneratedNameForNode({ node, flags }: {
    node: Node | undefined;
    flags?: GeneratedIdentifierFlags;
}): Identifier;
export declare function createPrivateIdentifier({ text }: {
    text: string;
}): PrivateIdentifier;
export declare function createUniquePrivateName({ text }: {
    text?: string;
}): PrivateIdentifier;
export declare function getGeneratedPrivateNameForNode({ node }: {
    node: Node;
}): PrivateIdentifier;
export declare function createToken({ token }: {
    token: SyntaxKind.SuperKeyword;
}): SuperExpression;
export declare function createToken({ token }: {
    token: SyntaxKind.ThisKeyword;
}): ThisExpression;
export declare function createToken({ token }: {
    token: SyntaxKind.NullKeyword;
}): NullLiteral;
export declare function createToken({ token }: {
    token: SyntaxKind.TrueKeyword;
}): TrueLiteral;
export declare function createToken({ token }: {
    token: SyntaxKind.FalseKeyword;
}): FalseLiteral;
export declare function createToken({ token }: {
    token: SyntaxKind.EndOfFileToken;
}): EndOfFileToken;
export declare function createToken({ token }: {
    token: SyntaxKind.Unknown;
}): Token<SyntaxKind.Unknown>;
export declare function createToken<TKind extends PunctuationSyntaxKind>({ token }: {
    token: TKind;
}): PunctuationToken<TKind>;
export declare function createToken<TKind extends KeywordTypeSyntaxKind>({ token }: {
    token: TKind;
}): KeywordTypeNode<TKind>;
export declare function createToken<TKind extends ModifierSyntaxKind>({ token }: {
    token: TKind;
}): ModifierToken<TKind>;
export declare function createToken<TKind extends KeywordSyntaxKind>({ token }: {
    token: TKind;
}): KeywordToken<TKind>;
export declare function createSuper(): SuperExpression;
export declare function createThis(): ThisExpression;
export declare function createNull(): NullLiteral;
export declare function createTrue(): TrueLiteral;
export declare function createFalse(): FalseLiteral;
export declare function createModifier<T extends ModifierSyntaxKind>({ kind }: {
    kind: T;
}): ModifierToken<T>;
export declare function createModifiersFromModifierFlags({ flags }: {
    flags: ModifierFlags;
}): Modifier[] | undefined;
export declare function createQualifiedName({ left, right }: {
    left: EntityName;
    right: string | Identifier;
}): QualifiedName;
export declare function updateQualifiedName({ node, left, right }: {
    node: QualifiedName;
    left: EntityName;
    right: Identifier;
}): QualifiedName;
export declare function createComputedPropertyName({ expression }: {
    expression: Expression;
}): ComputedPropertyName;
export declare function updateComputedPropertyName({ node, expression }: {
    node: ComputedPropertyName;
    expression: Expression;
}): ComputedPropertyName;
export declare function createTypeParameterDeclaration({ modifiers, name, constraint, defaultType }: {
    modifiers: readonly Modifier[] | undefined;
    name: string | Identifier;
    constraint?: TypeNode;
    defaultType?: TypeNode;
}): TypeParameterDeclaration;
export declare function updateTypeParameterDeclaration({ node, modifiers, name, constraint, defaultType }: {
    node: TypeParameterDeclaration;
    modifiers: readonly Modifier[] | undefined;
    name: Identifier;
    constraint: TypeNode | undefined;
    defaultType: TypeNode | undefined;
}): TypeParameterDeclaration;
export declare function createParameterDeclaration({ modifiers, dotDotDotToken, name, questionToken, type, initializer }: {
    modifiers: readonly ModifierLike[] | undefined;
    dotDotDotToken: DotDotDotToken | undefined;
    name: string | BindingName;
    questionToken?: QuestionToken;
    type?: TypeNode;
    initializer?: Expression;
}): ParameterDeclaration;
export declare function updateParameterDeclaration({ node, modifiers, dotDotDotToken, name, questionToken, type, initializer }: {
    node: ParameterDeclaration;
    modifiers: readonly ModifierLike[] | undefined;
    dotDotDotToken: DotDotDotToken | undefined;
    name: string | BindingName;
    questionToken: QuestionToken | undefined;
    type: TypeNode | undefined;
    initializer: Expression | undefined;
}): ParameterDeclaration;
export declare function createDecorator({ expression }: {
    expression: Expression;
}): Decorator;
export declare function updateDecorator({ node, expression }: {
    node: Decorator;
    expression: Expression;
}): Decorator;
export declare function createPropertySignature({ modifiers, name, questionToken, type }: {
    modifiers: readonly Modifier[] | undefined;
    name: PropertyName | string;
    questionToken: QuestionToken | undefined;
    type: TypeNode | undefined;
}): PropertySignature;
export declare function updatePropertySignature({ node, modifiers, name, questionToken, type }: {
    node: PropertySignature;
    modifiers: readonly Modifier[] | undefined;
    name: PropertyName;
    questionToken: QuestionToken | undefined;
    type: TypeNode | undefined;
}): PropertySignature;
export declare function createPropertyDeclaration({ modifiers, name, questionOrExclamationToken, type, initializer }: {
    modifiers: readonly ModifierLike[] | undefined;
    name: string | PropertyName;
    questionOrExclamationToken: QuestionToken | ExclamationToken | undefined;
    type: TypeNode | undefined;
    initializer: Expression | undefined;
}): PropertyDeclaration;
export declare function updatePropertyDeclaration({ node, modifiers, name, questionOrExclamationToken, type, initializer }: {
    node: PropertyDeclaration;
    modifiers: readonly ModifierLike[] | undefined;
    name: string | PropertyName;
    questionOrExclamationToken: QuestionToken | ExclamationToken | undefined;
    type: TypeNode | undefined;
    initializer: Expression | undefined;
}): PropertyDeclaration;
export declare function createMethodSignature({ modifiers, name, questionToken, typeParameters, parameters, type }: {
    modifiers: readonly Modifier[] | undefined;
    name: string | PropertyName;
    questionToken: QuestionToken | undefined;
    typeParameters: readonly TypeParameterDeclaration[] | undefined;
    parameters: readonly ParameterDeclaration[];
    type: TypeNode | undefined;
}): MethodSignature;
export declare function updateMethodSignature({ node, modifiers, name, questionToken, typeParameters, parameters, type }: {
    node: MethodSignature;
    modifiers: readonly Modifier[] | undefined;
    name: PropertyName;
    questionToken: QuestionToken | undefined;
    typeParameters: NodeArray<TypeParameterDeclaration> | undefined;
    parameters: NodeArray<ParameterDeclaration>;
    type: TypeNode | undefined;
}): MethodSignature;
export declare function createMethodDeclaration({ modifiers, asteriskToken, name, questionToken, typeParameters, parameters, type, body }: {
    modifiers: readonly ModifierLike[] | undefined;
    asteriskToken: AsteriskToken | undefined;
    name: string | PropertyName;
    questionToken: QuestionToken | undefined;
    typeParameters: readonly TypeParameterDeclaration[] | undefined;
    parameters: readonly ParameterDeclaration[];
    type: TypeNode | undefined;
    body: Block | undefined;
}): MethodDeclaration;
export declare function updateMethodDeclaration({ node, modifiers, asteriskToken, name, questionToken, typeParameters, parameters, type, body }: {
    node: MethodDeclaration;
    modifiers: readonly ModifierLike[] | undefined;
    asteriskToken: AsteriskToken | undefined;
    name: PropertyName;
    questionToken: QuestionToken | undefined;
    typeParameters: readonly TypeParameterDeclaration[] | undefined;
    parameters: readonly ParameterDeclaration[];
    type: TypeNode | undefined;
    body: Block | undefined;
}): MethodDeclaration;
export declare function createConstructorDeclaration({ modifiers, parameters, body }: {
    modifiers: readonly ModifierLike[] | undefined;
    parameters: readonly ParameterDeclaration[];
    body: Block | undefined;
}): ConstructorDeclaration;
export declare function updateConstructorDeclaration({ node, modifiers, parameters, body }: {
    node: ConstructorDeclaration;
    modifiers: readonly ModifierLike[] | undefined;
    parameters: readonly ParameterDeclaration[];
    body: Block | undefined;
}): ConstructorDeclaration;
export declare function createGetAccessorDeclaration({ modifiers, name, parameters, type, body }: {
    modifiers: readonly ModifierLike[] | undefined;
    name: string | PropertyName;
    parameters: readonly ParameterDeclaration[];
    type: TypeNode | undefined;
    body: Block | undefined;
}): GetAccessorDeclaration;
export declare function updateGetAccessorDeclaration({ node, modifiers, name, parameters, type, body }: {
    node: GetAccessorDeclaration;
    modifiers: readonly ModifierLike[] | undefined;
    name: PropertyName;
    parameters: readonly ParameterDeclaration[];
    type: TypeNode | undefined;
    body: Block | undefined;
}): GetAccessorDeclaration;
export declare function createSetAccessorDeclaration({ modifiers, name, parameters, body }: {
    modifiers: readonly ModifierLike[] | undefined;
    name: string | PropertyName;
    parameters: readonly ParameterDeclaration[];
    body: Block | undefined;
}): SetAccessorDeclaration;
export declare function updateSetAccessorDeclaration({ node, modifiers, name, parameters, body }: {
    node: SetAccessorDeclaration;
    modifiers: readonly ModifierLike[] | undefined;
    name: PropertyName;
    parameters: readonly ParameterDeclaration[];
    body: Block | undefined;
}): SetAccessorDeclaration;
export declare function createCallSignature({ typeParameters, parameters, type }: {
    typeParameters: readonly TypeParameterDeclaration[] | undefined;
    parameters: readonly ParameterDeclaration[];
    type: TypeNode | undefined;
}): CallSignatureDeclaration;
export declare function updateCallSignature({ node, typeParameters, parameters, type }: {
    node: CallSignatureDeclaration;
    typeParameters: NodeArray<TypeParameterDeclaration> | undefined;
    parameters: NodeArray<ParameterDeclaration>;
    type: TypeNode | undefined;
}): CallSignatureDeclaration;
export declare function createConstructSignature({ typeParameters, parameters, type }: {
    typeParameters: readonly TypeParameterDeclaration[] | undefined;
    parameters: readonly ParameterDeclaration[];
    type: TypeNode | undefined;
}): ConstructSignatureDeclaration;
export declare function updateConstructSignature({ node, typeParameters, parameters, type }: {
    node: ConstructSignatureDeclaration;
    typeParameters: NodeArray<TypeParameterDeclaration> | undefined;
    parameters: NodeArray<ParameterDeclaration>;
    type: TypeNode | undefined;
}): ConstructSignatureDeclaration;
export declare function createIndexSignature({ modifiers, parameters, type }: {
    modifiers: readonly ModifierLike[] | undefined;
    parameters: readonly ParameterDeclaration[];
    type: TypeNode;
}): IndexSignatureDeclaration;
export declare function updateIndexSignature({ node, modifiers, parameters, type }: {
    node: IndexSignatureDeclaration;
    modifiers: readonly ModifierLike[] | undefined;
    parameters: readonly ParameterDeclaration[];
    type: TypeNode;
}): IndexSignatureDeclaration;
export declare function createTemplateLiteralTypeSpan({ type, literal }: {
    type: TypeNode;
    literal: TemplateMiddle | TemplateTail;
}): TemplateLiteralTypeSpan;
export declare function updateTemplateLiteralTypeSpan({ node, type, literal }: {
    node: TemplateLiteralTypeSpan;
    type: TypeNode;
    literal: TemplateMiddle | TemplateTail;
}): TemplateLiteralTypeSpan;
export declare function createClassStaticBlockDeclaration({ body }: {
    body: Block;
}): ClassStaticBlockDeclaration;
export declare function updateClassStaticBlockDeclaration({ node, body }: {
    node: ClassStaticBlockDeclaration;
    body: Block;
}): ClassStaticBlockDeclaration;
export declare function createKeywordTypeNode<TKind extends KeywordTypeSyntaxKind>({ kind }: {
    kind: TKind;
}): KeywordTypeNode<TKind>;
export declare function createTypePredicateNode({ assertsModifier, parameterName, type }: {
    assertsModifier: AssertsKeyword | undefined;
    parameterName: Identifier | ThisTypeNode | string;
    type: TypeNode | undefined;
}): TypePredicateNode;
export declare function updateTypePredicateNode({ node, assertsModifier, parameterName, type }: {
    node: TypePredicateNode;
    assertsModifier: AssertsKeyword | undefined;
    parameterName: Identifier | ThisTypeNode;
    type: TypeNode | undefined;
}): TypePredicateNode;
export declare function createTypeReferenceNode({ typeName, typeArguments }: {
    typeName: string | EntityName;
    typeArguments?: readonly TypeNode[];
}): TypeReferenceNode;
export declare function updateTypeReferenceNode({ node, typeName, typeArguments }: {
    node: TypeReferenceNode;
    typeName: EntityName;
    typeArguments: NodeArray<TypeNode> | undefined;
}): TypeReferenceNode;
export declare function createFunctionTypeNode({ typeParameters, parameters, type }: {
    typeParameters: readonly TypeParameterDeclaration[] | undefined;
    parameters: readonly ParameterDeclaration[];
    type: TypeNode;
}): FunctionTypeNode;
export declare function updateFunctionTypeNode({ node, typeParameters, parameters, type }: {
    node: FunctionTypeNode;
    typeParameters: NodeArray<TypeParameterDeclaration> | undefined;
    parameters: NodeArray<ParameterDeclaration>;
    type: TypeNode;
}): FunctionTypeNode;
export declare function createConstructorTypeNode({ modifiers, typeParameters, parameters, type }: {
    modifiers: readonly Modifier[] | undefined;
    typeParameters: readonly TypeParameterDeclaration[] | undefined;
    parameters: readonly ParameterDeclaration[];
    type: TypeNode;
}): ConstructorTypeNode;
export declare function updateConstructorTypeNode({ node, modifiers, typeParameters, parameters, type }: {
    node: ConstructorTypeNode;
    modifiers: readonly Modifier[] | undefined;
    typeParameters: NodeArray<TypeParameterDeclaration> | undefined;
    parameters: NodeArray<ParameterDeclaration>;
    type: TypeNode;
}): ConstructorTypeNode;
export declare function createTypeQueryNode({ exprName, typeArguments }: {
    exprName: EntityName;
    typeArguments?: readonly TypeNode[];
}): TypeQueryNode;
export declare function updateTypeQueryNode({ node, exprName, typeArguments }: {
    node: TypeQueryNode;
    exprName: EntityName;
    typeArguments?: readonly TypeNode[];
}): TypeQueryNode;
export declare function createTypeLiteralNode({ members }: {
    members: readonly TypeElement[] | undefined;
}): TypeLiteralNode;
export declare function updateTypeLiteralNode({ node, members }: {
    node: TypeLiteralNode;
    members: NodeArray<TypeElement>;
}): TypeLiteralNode;
export declare function createArrayTypeNode({ elementType }: {
    elementType: TypeNode;
}): ArrayTypeNode;
export declare function updateArrayTypeNode({ node, elementType }: {
    node: ArrayTypeNode;
    elementType: TypeNode;
}): ArrayTypeNode;
export declare function createTupleTypeNode({ elements }: {
    elements: readonly (TypeNode | NamedTupleMember)[];
}): TupleTypeNode;
export declare function updateTupleTypeNode({ node, elements }: {
    node: TupleTypeNode;
    elements: readonly (TypeNode | NamedTupleMember)[];
}): TupleTypeNode;
export declare function createNamedTupleMember({ dotDotDotToken, name, questionToken, type }: {
    dotDotDotToken: DotDotDotToken | undefined;
    name: Identifier;
    questionToken: QuestionToken | undefined;
    type: TypeNode;
}): NamedTupleMember;
export declare function updateNamedTupleMember({ node, dotDotDotToken, name, questionToken, type }: {
    node: NamedTupleMember;
    dotDotDotToken: DotDotDotToken | undefined;
    name: Identifier;
    questionToken: QuestionToken | undefined;
    type: TypeNode;
}): NamedTupleMember;
export declare function createOptionalTypeNode({ type }: {
    type: TypeNode;
}): OptionalTypeNode;
export declare function updateOptionalTypeNode({ node, type }: {
    node: OptionalTypeNode;
    type: TypeNode;
}): OptionalTypeNode;
export declare function createRestTypeNode({ type }: {
    type: TypeNode;
}): RestTypeNode;
export declare function updateRestTypeNode({ node, type }: {
    node: RestTypeNode;
    type: TypeNode;
}): RestTypeNode;
export declare function createUnionTypeNode({ types }: {
    types: readonly TypeNode[];
}): UnionTypeNode;
export declare function updateUnionTypeNode({ node, types }: {
    node: UnionTypeNode;
    types: NodeArray<TypeNode>;
}): UnionTypeNode;
export declare function createIntersectionTypeNode({ types }: {
    types: readonly TypeNode[];
}): IntersectionTypeNode;
export declare function updateIntersectionTypeNode({ node, types }: {
    node: IntersectionTypeNode;
    types: NodeArray<TypeNode>;
}): IntersectionTypeNode;
export declare function createConditionalTypeNode({ checkType, extendsType, trueType, falseType }: {
    checkType: TypeNode;
    extendsType: TypeNode;
    trueType: TypeNode;
    falseType: TypeNode;
}): ConditionalTypeNode;
export declare function updateConditionalTypeNode({ node, checkType, extendsType, trueType, falseType }: {
    node: ConditionalTypeNode;
    checkType: TypeNode;
    extendsType: TypeNode;
    trueType: TypeNode;
    falseType: TypeNode;
}): ConditionalTypeNode;
export declare function createInferTypeNode({ typeParameter }: {
    typeParameter: TypeParameterDeclaration;
}): InferTypeNode;
export declare function updateInferTypeNode({ node, typeParameter }: {
    node: InferTypeNode;
    typeParameter: TypeParameterDeclaration;
}): InferTypeNode;
export declare function createImportTypeNode({ argument, attributes, qualifier, typeArguments, isTypeOf }: {
    argument: TypeNode;
    attributes?: ImportAttributes;
    qualifier?: EntityName;
    typeArguments?: readonly TypeNode[];
    isTypeOf?: boolean;
}): ImportTypeNode;
export declare function updateImportTypeNode({ node, argument, attributes, qualifier, typeArguments, isTypeOf }: {
    node: ImportTypeNode;
    argument: TypeNode;
    attributes: ImportAttributes | undefined;
    qualifier: EntityName | undefined;
    typeArguments: readonly TypeNode[] | undefined;
    isTypeOf?: boolean;
}): ImportTypeNode;
export declare function createParenthesizedType({ type }: {
    type: TypeNode;
}): ParenthesizedTypeNode;
export declare function updateParenthesizedType({ node, type }: {
    node: ParenthesizedTypeNode;
    type: TypeNode;
}): ParenthesizedTypeNode;
export declare function createThisTypeNode(): ThisTypeNode;
export declare function createTypeOperatorNode({ operator, type }: {
    operator: SyntaxKind.KeyOfKeyword | SyntaxKind.UniqueKeyword | SyntaxKind.ReadonlyKeyword;
    type: TypeNode;
}): TypeOperatorNode;
export declare function updateTypeOperatorNode({ node, type }: {
    node: TypeOperatorNode;
    type: TypeNode;
}): TypeOperatorNode;
export declare function createIndexedAccessTypeNode({ objectType, indexType }: {
    objectType: TypeNode;
    indexType: TypeNode;
}): IndexedAccessTypeNode;
export declare function updateIndexedAccessTypeNode({ node, objectType, indexType }: {
    node: IndexedAccessTypeNode;
    objectType: TypeNode;
    indexType: TypeNode;
}): IndexedAccessTypeNode;
export declare function createMappedTypeNode({ readonlyToken, typeParameter, nameType, questionToken, type, members }: {
    readonlyToken: ReadonlyKeyword | PlusToken | MinusToken | undefined;
    typeParameter: TypeParameterDeclaration;
    nameType: TypeNode | undefined;
    questionToken: QuestionToken | PlusToken | MinusToken | undefined;
    type: TypeNode | undefined;
    members: NodeArray<TypeElement> | undefined;
}): MappedTypeNode;
export declare function updateMappedTypeNode({ node, readonlyToken, typeParameter, nameType, questionToken, type, members }: {
    node: MappedTypeNode;
    readonlyToken: ReadonlyKeyword | PlusToken | MinusToken | undefined;
    typeParameter: TypeParameterDeclaration;
    nameType: TypeNode | undefined;
    questionToken: QuestionToken | PlusToken | MinusToken | undefined;
    type: TypeNode | undefined;
    members: NodeArray<TypeElement> | undefined;
}): MappedTypeNode;
export declare function createLiteralTypeNode({ literal }: {
    literal: LiteralTypeNode["literal"];
}): LiteralTypeNode;
export declare function updateLiteralTypeNode({ node, literal }: {
    node: LiteralTypeNode;
    literal: LiteralTypeNode["literal"];
}): LiteralTypeNode;
export declare function createTemplateLiteralType({ head, templateSpans }: {
    head: TemplateHead;
    templateSpans: readonly TemplateLiteralTypeSpan[];
}): TemplateLiteralTypeNode;
export declare function updateTemplateLiteralType({ node, head, templateSpans }: {
    node: TemplateLiteralTypeNode;
    head: TemplateHead;
    templateSpans: readonly TemplateLiteralTypeSpan[];
}): TemplateLiteralTypeNode;
export declare function createObjectBindingPattern({ elements }: {
    elements: readonly BindingElement[];
}): ObjectBindingPattern;
export declare function updateObjectBindingPattern({ node, elements }: {
    node: ObjectBindingPattern;
    elements: readonly BindingElement[];
}): ObjectBindingPattern;
export declare function createArrayBindingPattern({ elements }: {
    elements: readonly ArrayBindingElement[];
}): ArrayBindingPattern;
export declare function updateArrayBindingPattern({ node, elements }: {
    node: ArrayBindingPattern;
    elements: readonly ArrayBindingElement[];
}): ArrayBindingPattern;
export declare function createBindingElement({ dotDotDotToken, propertyName, name, initializer }: {
    dotDotDotToken: DotDotDotToken | undefined;
    propertyName: string | PropertyName | undefined;
    name: string | BindingName;
    initializer?: Expression;
}): BindingElement;
export declare function updateBindingElement({ node, dotDotDotToken, propertyName, name, initializer }: {
    node: BindingElement;
    dotDotDotToken: DotDotDotToken | undefined;
    propertyName: PropertyName | undefined;
    name: BindingName;
    initializer: Expression | undefined;
}): BindingElement;
export declare function createArrayLiteralExpression({ elements, multiLine }: {
    elements?: readonly Expression[];
    multiLine?: boolean;
}): ArrayLiteralExpression;
export declare function updateArrayLiteralExpression({ node, elements }: {
    node: ArrayLiteralExpression;
    elements: readonly Expression[];
}): ArrayLiteralExpression;
export declare function createObjectLiteralExpression({ properties, multiLine }: {
    properties?: readonly ObjectLiteralElementLike[];
    multiLine?: boolean;
}): ObjectLiteralExpression;
export declare function updateObjectLiteralExpression({ node, properties }: {
    node: ObjectLiteralExpression;
    properties: readonly ObjectLiteralElementLike[];
}): ObjectLiteralExpression;
export declare function createPropertyAccessExpression({ expression, name }: {
    expression: Expression;
    name: string | MemberName;
}): PropertyAccessExpression;
export declare function updatePropertyAccessExpression({ node, expression, name }: {
    node: PropertyAccessExpression;
    expression: Expression;
    name: MemberName;
}): PropertyAccessExpression;
export declare function createPropertyAccessChain({ expression, questionDotToken, name }: {
    expression: Expression;
    questionDotToken: QuestionDotToken | undefined;
    name: string | MemberName;
}): PropertyAccessChain;
export declare function updatePropertyAccessChain({ node, expression, questionDotToken, name }: {
    node: PropertyAccessChain;
    expression: Expression;
    questionDotToken: QuestionDotToken | undefined;
    name: MemberName;
}): PropertyAccessChain;
export declare function createElementAccessExpression({ expression, index }: {
    expression: Expression;
    index: number | Expression;
}): ElementAccessExpression;
export declare function updateElementAccessExpression({ node, expression, argumentExpression }: {
    node: ElementAccessExpression;
    expression: Expression;
    argumentExpression: Expression;
}): ElementAccessExpression;
export declare function createElementAccessChain({ expression, questionDotToken, index }: {
    expression: Expression;
    questionDotToken: QuestionDotToken | undefined;
    index: number | Expression;
}): ElementAccessChain;
export declare function updateElementAccessChain({ node, expression, questionDotToken, argumentExpression }: {
    node: ElementAccessChain;
    expression: Expression;
    questionDotToken: QuestionDotToken | undefined;
    argumentExpression: Expression;
}): ElementAccessChain;
export declare function createCallExpression({ expression, typeArguments, argumentsArray }: {
    expression: Expression;
    typeArguments: readonly TypeNode[] | undefined;
    argumentsArray: readonly Expression[] | undefined;
}): CallExpression;
export declare function updateCallExpression({ node, expression, typeArguments, argumentsArray }: {
    node: CallExpression;
    expression: Expression;
    typeArguments: readonly TypeNode[] | undefined;
    argumentsArray: readonly Expression[];
}): CallExpression;
export declare function createCallChain({ expression, questionDotToken, typeArguments, argumentsArray }: {
    expression: Expression;
    questionDotToken: QuestionDotToken | undefined;
    typeArguments: readonly TypeNode[] | undefined;
    argumentsArray: readonly Expression[] | undefined;
}): CallChain;
export declare function updateCallChain({ node, expression, questionDotToken, typeArguments, argumentsArray }: {
    node: CallChain;
    expression: Expression;
    questionDotToken: QuestionDotToken | undefined;
    typeArguments: readonly TypeNode[] | undefined;
    argumentsArray: readonly Expression[];
}): CallChain;
export declare function createNewExpression({ expression, typeArguments, argumentsArray }: {
    expression: Expression;
    typeArguments: readonly TypeNode[] | undefined;
    argumentsArray: readonly Expression[] | undefined;
}): NewExpression;
export declare function updateNewExpression({ node, expression, typeArguments, argumentsArray }: {
    node: NewExpression;
    expression: Expression;
    typeArguments: readonly TypeNode[] | undefined;
    argumentsArray: readonly Expression[] | undefined;
}): NewExpression;
export declare function createTaggedTemplateExpression({ tag, typeArguments, template }: {
    tag: Expression;
    typeArguments: readonly TypeNode[] | undefined;
    template: TemplateLiteral;
}): TaggedTemplateExpression;
export declare function updateTaggedTemplateExpression({ node, tag, typeArguments, template }: {
    node: TaggedTemplateExpression;
    tag: Expression;
    typeArguments: readonly TypeNode[] | undefined;
    template: TemplateLiteral;
}): TaggedTemplateExpression;
export declare function createTypeAssertion({ type, expression }: {
    type: TypeNode;
    expression: Expression;
}): TypeAssertion;
export declare function updateTypeAssertion({ node, type, expression }: {
    node: TypeAssertion;
    type: TypeNode;
    expression: Expression;
}): TypeAssertion;
export declare function createParenthesizedExpression({ expression }: {
    expression: Expression;
}): ParenthesizedExpression;
export declare function updateParenthesizedExpression({ node, expression }: {
    node: ParenthesizedExpression;
    expression: Expression;
}): ParenthesizedExpression;
export declare function createFunctionExpression({ modifiers, asteriskToken, name, typeParameters, parameters, type, body }: {
    modifiers: readonly Modifier[] | undefined;
    asteriskToken: AsteriskToken | undefined;
    name: string | Identifier | undefined;
    typeParameters: readonly TypeParameterDeclaration[] | undefined;
    parameters: readonly ParameterDeclaration[] | undefined;
    type: TypeNode | undefined;
    body: Block;
}): FunctionExpression;
export declare function updateFunctionExpression({ node, modifiers, asteriskToken, name, typeParameters, parameters, type, body }: {
    node: FunctionExpression;
    modifiers: readonly Modifier[] | undefined;
    asteriskToken: AsteriskToken | undefined;
    name: Identifier | undefined;
    typeParameters: readonly TypeParameterDeclaration[] | undefined;
    parameters: readonly ParameterDeclaration[];
    type: TypeNode | undefined;
    body: Block;
}): FunctionExpression;
export declare function createArrowFunction({ modifiers, typeParameters, parameters, type, equalsGreaterThanToken, body }: {
    modifiers: readonly Modifier[] | undefined;
    typeParameters: readonly TypeParameterDeclaration[] | undefined;
    parameters: readonly ParameterDeclaration[];
    type: TypeNode | undefined;
    equalsGreaterThanToken: EqualsGreaterThanToken | undefined;
    body: ConciseBody;
}): ArrowFunction;
export declare function updateArrowFunction({ node, modifiers, typeParameters, parameters, type, equalsGreaterThanToken, body }: {
    node: ArrowFunction;
    modifiers: readonly Modifier[] | undefined;
    typeParameters: readonly TypeParameterDeclaration[] | undefined;
    parameters: readonly ParameterDeclaration[];
    type: TypeNode | undefined;
    equalsGreaterThanToken: EqualsGreaterThanToken;
    body: ConciseBody;
}): ArrowFunction;
export declare function createDeleteExpression({ expression }: {
    expression: Expression;
}): DeleteExpression;
export declare function updateDeleteExpression({ node, expression }: {
    node: DeleteExpression;
    expression: Expression;
}): DeleteExpression;
export declare function createTypeOfExpression({ expression }: {
    expression: Expression;
}): TypeOfExpression;
export declare function updateTypeOfExpression({ node, expression }: {
    node: TypeOfExpression;
    expression: Expression;
}): TypeOfExpression;
export declare function createVoidExpression({ expression }: {
    expression: Expression;
}): VoidExpression;
export declare function updateVoidExpression({ node, expression }: {
    node: VoidExpression;
    expression: Expression;
}): VoidExpression;
export declare function createAwaitExpression({ expression }: {
    expression: Expression;
}): AwaitExpression;
export declare function updateAwaitExpression({ node, expression }: {
    node: AwaitExpression;
    expression: Expression;
}): AwaitExpression;
export declare function createPrefixUnaryExpression({ operator, operand }: {
    operator: PrefixUnaryOperator;
    operand: Expression;
}): PrefixUnaryExpression;
export declare function updatePrefixUnaryExpression({ node, operand }: {
    node: PrefixUnaryExpression;
    operand: Expression;
}): PrefixUnaryExpression;
export declare function createPostfixUnaryExpression({ operand, operator }: {
    operand: Expression;
    operator: PostfixUnaryOperator;
}): PostfixUnaryExpression;
export declare function updatePostfixUnaryExpression({ node, operand }: {
    node: PostfixUnaryExpression;
    operand: Expression;
}): PostfixUnaryExpression;
export declare function createBinaryExpression({ left, operator, right }: {
    left: Expression;
    operator: BinaryOperator | BinaryOperatorToken;
    right: Expression;
}): BinaryExpression;
export declare function updateBinaryExpression({ node, left, operator, right }: {
    node: BinaryExpression;
    left: Expression;
    operator: BinaryOperator | BinaryOperatorToken;
    right: Expression;
}): BinaryExpression;
export declare function createConditionalExpression({ condition, questionToken, whenTrue, colonToken, whenFalse }: {
    condition: Expression;
    questionToken: QuestionToken | undefined;
    whenTrue: Expression;
    colonToken: ColonToken | undefined;
    whenFalse: Expression;
}): ConditionalExpression;
export declare function updateConditionalExpression({ node, condition, questionToken, whenTrue, colonToken, whenFalse }: {
    node: ConditionalExpression;
    condition: Expression;
    questionToken: QuestionToken;
    whenTrue: Expression;
    colonToken: ColonToken;
    whenFalse: Expression;
}): ConditionalExpression;
export declare function createTemplateExpression({ head, templateSpans }: {
    head: TemplateHead;
    templateSpans: readonly TemplateSpan[];
}): TemplateExpression;
export declare function updateTemplateExpression({ node, head, templateSpans }: {
    node: TemplateExpression;
    head: TemplateHead;
    templateSpans: readonly TemplateSpan[];
}): TemplateExpression;
export declare function createTemplateHead({ text, rawText, templateFlags }: {
    text: string;
    rawText?: string;
    templateFlags?: TokenFlags;
}): TemplateHead;
export declare function createTemplateHead({ text, rawText, templateFlags }: {
    text: string | undefined;
    rawText: string;
    templateFlags?: TokenFlags;
}): TemplateHead;
export declare function createTemplateMiddle({ text, rawText, templateFlags }: {
    text: string;
    rawText?: string;
    templateFlags?: TokenFlags;
}): TemplateMiddle;
export declare function createTemplateMiddle({ text, rawText, templateFlags }: {
    text: string | undefined;
    rawText: string;
    templateFlags?: TokenFlags;
}): TemplateMiddle;
export declare function createTemplateTail({ text, rawText, templateFlags }: {
    text: string;
    rawText?: string;
    templateFlags?: TokenFlags;
}): TemplateTail;
export declare function createTemplateTail({ text, rawText, templateFlags }: {
    text: string | undefined;
    rawText: string;
    templateFlags?: TokenFlags;
}): TemplateTail;
export declare function createNoSubstitutionTemplateLiteral({ text, rawText }: {
    text: string;
    rawText?: string;
}): NoSubstitutionTemplateLiteral;
export declare function createNoSubstitutionTemplateLiteral({ text, rawText }: {
    text: string | undefined;
    rawText: string;
}): NoSubstitutionTemplateLiteral;
export declare function createYieldExpression({ asteriskToken, expression }: {
    asteriskToken: AsteriskToken;
    expression: Expression;
}): YieldExpression;
export declare function createYieldExpression({ asteriskToken, expression }: {
    asteriskToken: undefined;
    expression: Expression | undefined;
}): YieldExpression;
export declare function updateYieldExpression({ node, asteriskToken, expression }: {
    node: YieldExpression;
    asteriskToken: AsteriskToken | undefined;
    expression: Expression | undefined;
}): YieldExpression;
export declare function createSpreadElement({ expression }: {
    expression: Expression;
}): SpreadElement;
export declare function updateSpreadElement({ node, expression }: {
    node: SpreadElement;
    expression: Expression;
}): SpreadElement;
export declare function createClassExpression({ modifiers, name, typeParameters, heritageClauses, members }: {
    modifiers: readonly ModifierLike[] | undefined;
    name: string | Identifier | undefined;
    typeParameters: readonly TypeParameterDeclaration[] | undefined;
    heritageClauses: readonly HeritageClause[] | undefined;
    members: readonly ClassElement[];
}): ClassExpression;
export declare function updateClassExpression({ node, modifiers, name, typeParameters, heritageClauses, members }: {
    node: ClassExpression;
    modifiers: readonly ModifierLike[] | undefined;
    name: Identifier | undefined;
    typeParameters: readonly TypeParameterDeclaration[] | undefined;
    heritageClauses: readonly HeritageClause[] | undefined;
    members: readonly ClassElement[];
}): ClassExpression;
export declare function createOmittedExpression(): OmittedExpression;
export declare function createExpressionWithTypeArguments({ expression, typeArguments }: {
    expression: Expression;
    typeArguments: readonly TypeNode[] | undefined;
}): ExpressionWithTypeArguments;
export declare function updateExpressionWithTypeArguments({ node, expression, typeArguments }: {
    node: ExpressionWithTypeArguments;
    expression: Expression;
    typeArguments: readonly TypeNode[] | undefined;
}): ExpressionWithTypeArguments;
export declare function createAsExpression({ expression, type }: {
    expression: Expression;
    type: TypeNode;
}): AsExpression;
export declare function updateAsExpression({ node, expression, type }: {
    node: AsExpression;
    expression: Expression;
    type: TypeNode;
}): AsExpression;
export declare function createNonNullExpression({ expression }: {
    expression: Expression;
}): NonNullExpression;
export declare function updateNonNullExpression({ node, expression }: {
    node: NonNullExpression;
    expression: Expression;
}): NonNullExpression;
export declare function createNonNullChain({ expression }: {
    expression: Expression;
}): NonNullChain;
export declare function updateNonNullChain({ node, expression }: {
    node: NonNullChain;
    expression: Expression;
}): NonNullChain;
export declare function createMetaProperty({ keywordToken, name }: {
    keywordToken: MetaProperty["keywordToken"];
    name: Identifier;
}): MetaProperty;
export declare function updateMetaProperty({ node, name }: {
    node: MetaProperty;
    name: Identifier;
}): MetaProperty;
export declare function createSatisfiesExpression({ expression, type }: {
    expression: Expression;
    type: TypeNode;
}): SatisfiesExpression;
export declare function updateSatisfiesExpression({ node, expression, type }: {
    node: SatisfiesExpression;
    expression: Expression;
    type: TypeNode;
}): SatisfiesExpression;
export declare function createTemplateSpan({ expression, literal }: {
    expression: Expression;
    literal: TemplateMiddle | TemplateTail;
}): TemplateSpan;
export declare function updateTemplateSpan({ node, expression, literal }: {
    node: TemplateSpan;
    expression: Expression;
    literal: TemplateMiddle | TemplateTail;
}): TemplateSpan;
export declare function createSemicolonClassElement(): SemicolonClassElement;
export declare function createBlock({ statements, multiLine }: {
    statements: readonly Statement[];
    multiLine?: boolean;
}): Block;
export declare function updateBlock({ node, statements }: {
    node: Block;
    statements: readonly Statement[];
}): Block;
export declare function createVariableStatement({ modifiers, declarationList }: {
    modifiers: readonly ModifierLike[] | undefined;
    declarationList: VariableDeclarationList | readonly VariableDeclaration[];
}): VariableStatement;
export declare function updateVariableStatement({ node, modifiers, declarationList }: {
    node: VariableStatement;
    modifiers: readonly ModifierLike[] | undefined;
    declarationList: VariableDeclarationList;
}): VariableStatement;
export declare function createEmptyStatement(): EmptyStatement;
export declare function createExpressionStatement({ expression }: {
    expression: Expression;
}): ExpressionStatement;
export declare function updateExpressionStatement({ node, expression }: {
    node: ExpressionStatement;
    expression: Expression;
}): ExpressionStatement;
export declare function createIfStatement({ expression, thenStatement, elseStatement }: {
    expression: Expression;
    thenStatement: Statement;
    elseStatement?: Statement;
}): IfStatement;
export declare function updateIfStatement({ node, expression, thenStatement, elseStatement }: {
    node: IfStatement;
    expression: Expression;
    thenStatement: Statement;
    elseStatement: Statement | undefined;
}): IfStatement;
export declare function createDoStatement({ statement, expression }: {
    statement: Statement;
    expression: Expression;
}): DoStatement;
export declare function updateDoStatement({ node, statement, expression }: {
    node: DoStatement;
    statement: Statement;
    expression: Expression;
}): DoStatement;
export declare function createWhileStatement({ expression, statement }: {
    expression: Expression;
    statement: Statement;
}): WhileStatement;
export declare function updateWhileStatement({ node, expression, statement }: {
    node: WhileStatement;
    expression: Expression;
    statement: Statement;
}): WhileStatement;
export declare function createForStatement({ initializer, condition, incrementor, statement }: {
    initializer: ForInitializer | undefined;
    condition: Expression | undefined;
    incrementor: Expression | undefined;
    statement: Statement;
}): ForStatement;
export declare function updateForStatement({ node, initializer, condition, incrementor, statement }: {
    node: ForStatement;
    initializer: ForInitializer | undefined;
    condition: Expression | undefined;
    incrementor: Expression | undefined;
    statement: Statement;
}): ForStatement;
export declare function createForInStatement({ initializer, expression, statement }: {
    initializer: ForInitializer;
    expression: Expression;
    statement: Statement;
}): ForInStatement;
export declare function updateForInStatement({ node, initializer, expression, statement }: {
    node: ForInStatement;
    initializer: ForInitializer;
    expression: Expression;
    statement: Statement;
}): ForInStatement;
export declare function createForOfStatement({ awaitModifier, initializer, expression, statement }: {
    awaitModifier: AwaitKeyword | undefined;
    initializer: ForInitializer;
    expression: Expression;
    statement: Statement;
}): ForOfStatement;
export declare function updateForOfStatement({ node, awaitModifier, initializer, expression, statement }: {
    node: ForOfStatement;
    awaitModifier: AwaitKeyword | undefined;
    initializer: ForInitializer;
    expression: Expression;
    statement: Statement;
}): ForOfStatement;
export declare function createContinueStatement({ label }: {
    label?: string | Identifier;
}): ContinueStatement;
export declare function updateContinueStatement({ node, label }: {
    node: ContinueStatement;
    label: Identifier | undefined;
}): ContinueStatement;
export declare function createBreakStatement({ label }: {
    label?: string | Identifier;
}): BreakStatement;
export declare function updateBreakStatement({ node, label }: {
    node: BreakStatement;
    label: Identifier | undefined;
}): BreakStatement;
export declare function createReturnStatement({ expression }: {
    expression?: Expression;
}): ReturnStatement;
export declare function updateReturnStatement({ node, expression }: {
    node: ReturnStatement;
    expression: Expression | undefined;
}): ReturnStatement;
export declare function createWithStatement({ expression, statement }: {
    expression: Expression;
    statement: Statement;
}): WithStatement;
export declare function updateWithStatement({ node, expression, statement }: {
    node: WithStatement;
    expression: Expression;
    statement: Statement;
}): WithStatement;
export declare function createSwitchStatement({ expression, caseBlock }: {
    expression: Expression;
    caseBlock: CaseBlock;
}): SwitchStatement;
export declare function updateSwitchStatement({ node, expression, caseBlock }: {
    node: SwitchStatement;
    expression: Expression;
    caseBlock: CaseBlock;
}): SwitchStatement;
export declare function createLabeledStatement({ label, statement }: {
    label: string | Identifier;
    statement: Statement;
}): LabeledStatement;
export declare function updateLabeledStatement({ node, label, statement }: {
    node: LabeledStatement;
    label: Identifier;
    statement: Statement;
}): LabeledStatement;
export declare function createThrowStatement({ expression }: {
    expression: Expression;
}): ThrowStatement;
export declare function updateThrowStatement({ node, expression }: {
    node: ThrowStatement;
    expression: Expression;
}): ThrowStatement;
export declare function createTryStatement({ tryBlock, catchClause, finallyBlock }: {
    tryBlock: Block;
    catchClause: CatchClause | undefined;
    finallyBlock: Block | undefined;
}): TryStatement;
export declare function updateTryStatement({ node, tryBlock, catchClause, finallyBlock }: {
    node: TryStatement;
    tryBlock: Block;
    catchClause: CatchClause | undefined;
    finallyBlock: Block | undefined;
}): TryStatement;
export declare function createDebuggerStatement(): DebuggerStatement;
export declare function createVariableDeclaration({ name, exclamationToken, type, initializer }: {
    name: string | BindingName;
    exclamationToken?: ExclamationToken;
    type?: TypeNode;
    initializer?: Expression;
}): VariableDeclaration;
export declare function updateVariableDeclaration({ node, name, exclamationToken, type, initializer }: {
    node: VariableDeclaration;
    name: BindingName;
    exclamationToken: ExclamationToken | undefined;
    type: TypeNode | undefined;
    initializer: Expression | undefined;
}): VariableDeclaration;
export declare function createVariableDeclarationList({ declarations, flags }: {
    declarations: readonly VariableDeclaration[];
    flags?: NodeFlags;
}): VariableDeclarationList;
export declare function updateVariableDeclarationList({ node, declarations }: {
    node: VariableDeclarationList;
    declarations: readonly VariableDeclaration[];
}): VariableDeclarationList;
export declare function createFunctionDeclaration({ modifiers, asteriskToken, name, typeParameters, parameters, type, body }: {
    modifiers: readonly ModifierLike[] | undefined;
    asteriskToken: AsteriskToken | undefined;
    name: string | Identifier | undefined;
    typeParameters: readonly TypeParameterDeclaration[] | undefined;
    parameters: readonly ParameterDeclaration[];
    type: TypeNode | undefined;
    body: Block | undefined;
}): FunctionDeclaration;
export declare function updateFunctionDeclaration({ node, modifiers, asteriskToken, name, typeParameters, parameters, type, body }: {
    node: FunctionDeclaration;
    modifiers: readonly ModifierLike[] | undefined;
    asteriskToken: AsteriskToken | undefined;
    name: Identifier | undefined;
    typeParameters: readonly TypeParameterDeclaration[] | undefined;
    parameters: readonly ParameterDeclaration[];
    type: TypeNode | undefined;
    body: Block | undefined;
}): FunctionDeclaration;
export declare function createClassDeclaration({ modifiers, name, typeParameters, heritageClauses, members }: {
    modifiers: readonly ModifierLike[] | undefined;
    name: string | Identifier | undefined;
    typeParameters: readonly TypeParameterDeclaration[] | undefined;
    heritageClauses: readonly HeritageClause[] | undefined;
    members: readonly ClassElement[];
}): ClassDeclaration;
export declare function updateClassDeclaration({ node, modifiers, name, typeParameters, heritageClauses, members }: {
    node: ClassDeclaration;
    modifiers: readonly ModifierLike[] | undefined;
    name: Identifier | undefined;
    typeParameters: readonly TypeParameterDeclaration[] | undefined;
    heritageClauses: readonly HeritageClause[] | undefined;
    members: readonly ClassElement[];
}): ClassDeclaration;
export declare function createInterfaceDeclaration({ modifiers, name, typeParameters, heritageClauses, members }: {
    modifiers: readonly ModifierLike[] | undefined;
    name: string | Identifier;
    typeParameters: readonly TypeParameterDeclaration[] | undefined;
    heritageClauses: readonly HeritageClause[] | undefined;
    members: readonly TypeElement[];
}): InterfaceDeclaration;
export declare function updateInterfaceDeclaration({ node, modifiers, name, typeParameters, heritageClauses, members }: {
    node: InterfaceDeclaration;
    modifiers: readonly ModifierLike[] | undefined;
    name: Identifier;
    typeParameters: readonly TypeParameterDeclaration[] | undefined;
    heritageClauses: readonly HeritageClause[] | undefined;
    members: readonly TypeElement[];
}): InterfaceDeclaration;
export declare function createTypeAliasDeclaration({ modifiers, name, typeParameters, type }: {
    modifiers: readonly ModifierLike[] | undefined;
    name: string | Identifier;
    typeParameters: readonly TypeParameterDeclaration[] | undefined;
    type: TypeNode;
}): TypeAliasDeclaration;
export declare function updateTypeAliasDeclaration({ node, modifiers, name, typeParameters, type }: {
    node: TypeAliasDeclaration;
    modifiers: readonly ModifierLike[] | undefined;
    name: Identifier;
    typeParameters: readonly TypeParameterDeclaration[] | undefined;
    type: TypeNode;
}): TypeAliasDeclaration;
export declare function createEnumDeclaration({ modifiers, name, members }: {
    modifiers: readonly ModifierLike[] | undefined;
    name: string | Identifier;
    members: readonly EnumMember[];
}): EnumDeclaration;
export declare function updateEnumDeclaration({ node, modifiers, name, members }: {
    node: EnumDeclaration;
    modifiers: readonly ModifierLike[] | undefined;
    name: Identifier;
    members: readonly EnumMember[];
}): EnumDeclaration;
export declare function createModuleDeclaration({ modifiers, name, body, flags }: {
    modifiers: readonly ModifierLike[] | undefined;
    name: ModuleName;
    body: ModuleBody | undefined;
    flags?: NodeFlags;
}): ModuleDeclaration;
export declare function updateModuleDeclaration({ node, modifiers, name, body }: {
    node: ModuleDeclaration;
    modifiers: readonly ModifierLike[] | undefined;
    name: ModuleName;
    body: ModuleBody | undefined;
}): ModuleDeclaration;
export declare function createModuleBlock({ statements }: {
    statements: readonly Statement[];
}): ModuleBlock;
export declare function updateModuleBlock({ node, statements }: {
    node: ModuleBlock;
    statements: readonly Statement[];
}): ModuleBlock;
export declare function createCaseBlock({ clauses }: {
    clauses: readonly CaseOrDefaultClause[];
}): CaseBlock;
export declare function updateCaseBlock({ node, clauses }: {
    node: CaseBlock;
    clauses: readonly CaseOrDefaultClause[];
}): CaseBlock;
export declare function createNamespaceExportDeclaration({ name }: {
    name: string | Identifier;
}): NamespaceExportDeclaration;
export declare function updateNamespaceExportDeclaration({ node, name }: {
    node: NamespaceExportDeclaration;
    name: Identifier;
}): NamespaceExportDeclaration;
export declare function createImportEqualsDeclaration({ modifiers, isTypeOnly, name, moduleReference }: {
    modifiers: readonly ModifierLike[] | undefined;
    isTypeOnly: boolean;
    name: string | Identifier;
    moduleReference: ModuleReference;
}): ImportEqualsDeclaration;
export declare function updateImportEqualsDeclaration({ node, modifiers, isTypeOnly, name, moduleReference }: {
    node: ImportEqualsDeclaration;
    modifiers: readonly ModifierLike[] | undefined;
    isTypeOnly: boolean;
    name: Identifier;
    moduleReference: ModuleReference;
}): ImportEqualsDeclaration;
export declare function createImportDeclaration({ modifiers, importClause, moduleSpecifier, attributes }: {
    modifiers: readonly ModifierLike[] | undefined;
    importClause: ImportClause | undefined;
    moduleSpecifier: Expression;
    attributes?: ImportAttributes;
}): ImportDeclaration;
export declare function updateImportDeclaration({ node, modifiers, importClause, moduleSpecifier, attributes }: {
    node: ImportDeclaration;
    modifiers: readonly ModifierLike[] | undefined;
    importClause: ImportClause | undefined;
    moduleSpecifier: Expression;
    attributes: ImportAttributes | undefined;
}): ImportDeclaration;
export declare function createImportClause({ isTypeOnly, name, namedBindings }: {
    isTypeOnly: boolean;
    name: Identifier | undefined;
    namedBindings: NamedImportBindings | undefined;
}): ImportClause;
export declare function updateImportClause({ node, isTypeOnly, name, namedBindings }: {
    node: ImportClause;
    isTypeOnly: boolean;
    name: Identifier | undefined;
    namedBindings: NamedImportBindings | undefined;
}): ImportClause;
export declare function createAssertClause({ elements, multiLine }: {
    elements: NodeArray<AssertEntry>;
    multiLine?: boolean;
}): AssertClause;
export declare function updateAssertClause({ node, elements, multiLine }: {
    node: AssertClause;
    elements: NodeArray<AssertEntry>;
    multiLine?: boolean;
}): AssertClause;
export declare function createAssertEntry({ name, value }: {
    name: AssertionKey;
    value: Expression;
}): AssertEntry;
export declare function updateAssertEntry({ node, name, value }: {
    node: AssertEntry;
    name: AssertionKey;
    value: Expression;
}): AssertEntry;
export declare function createImportTypeAssertionContainer({ clause, multiLine }: {
    clause: AssertClause;
    multiLine?: boolean;
}): ImportTypeAssertionContainer;
export declare function updateImportTypeAssertionContainer({ node, clause, multiLine }: {
    node: ImportTypeAssertionContainer;
    clause: AssertClause;
    multiLine?: boolean;
}): ImportTypeAssertionContainer;
export declare function createImportAttributes({ elements, multiLine }: {
    elements: NodeArray<ImportAttribute>;
    multiLine?: boolean;
}): ImportAttributes;
export declare function updateImportAttributes({ node, elements, multiLine }: {
    node: ImportAttributes;
    elements: NodeArray<ImportAttribute>;
    multiLine?: boolean;
}): ImportAttributes;
export declare function createImportAttribute({ name, value }: {
    name: ImportAttributeName;
    value: Expression;
}): ImportAttribute;
export declare function updateImportAttribute({ node, name, value }: {
    node: ImportAttribute;
    name: ImportAttributeName;
    value: Expression;
}): ImportAttribute;
export declare function createNamespaceImport({ name }: {
    name: Identifier;
}): NamespaceImport;
export declare function updateNamespaceImport({ node, name }: {
    node: NamespaceImport;
    name: Identifier;
}): NamespaceImport;
export declare function createNamespaceExport({ name }: {
    name: Identifier;
}): NamespaceExport;
export declare function updateNamespaceExport({ node, name }: {
    node: NamespaceExport;
    name: Identifier;
}): NamespaceExport;
export declare function createNamedImports({ elements }: {
    elements: readonly ImportSpecifier[];
}): NamedImports;
export declare function updateNamedImports({ node, elements }: {
    node: NamedImports;
    elements: readonly ImportSpecifier[];
}): NamedImports;
export declare function createImportSpecifier({ isTypeOnly, propertyName, name }: {
    isTypeOnly: boolean;
    propertyName: Identifier | undefined;
    name: Identifier;
}): ImportSpecifier;
export declare function updateImportSpecifier({ node, isTypeOnly, propertyName, name }: {
    node: ImportSpecifier;
    isTypeOnly: boolean;
    propertyName: Identifier | undefined;
    name: Identifier;
}): ImportSpecifier;
export declare function createExportAssignment({ modifiers, isExportEquals, expression }: {
    modifiers: readonly ModifierLike[] | undefined;
    isExportEquals: boolean | undefined;
    expression: Expression;
}): ExportAssignment;
export declare function updateExportAssignment({ node, modifiers, expression }: {
    node: ExportAssignment;
    modifiers: readonly ModifierLike[] | undefined;
    expression: Expression;
}): ExportAssignment;
export declare function createExportDeclaration({ modifiers, isTypeOnly, exportClause, moduleSpecifier, attributes }: {
    modifiers: readonly ModifierLike[] | undefined;
    isTypeOnly: boolean;
    exportClause: NamedExportBindings | undefined;
    moduleSpecifier?: Expression;
    attributes?: ImportAttributes;
}): ExportDeclaration;
export declare function updateExportDeclaration({ node, modifiers, isTypeOnly, exportClause, moduleSpecifier, attributes }: {
    node: ExportDeclaration;
    modifiers: readonly ModifierLike[] | undefined;
    isTypeOnly: boolean;
    exportClause: NamedExportBindings | undefined;
    moduleSpecifier: Expression | undefined;
    attributes: ImportAttributes | undefined;
}): ExportDeclaration;
export declare function createNamedExports({ elements }: {
    elements: readonly ExportSpecifier[];
}): NamedExports;
export declare function updateNamedExports({ node, elements }: {
    node: NamedExports;
    elements: readonly ExportSpecifier[];
}): NamedExports;
export declare function createExportSpecifier({ isTypeOnly, propertyName, name }: {
    isTypeOnly: boolean;
    propertyName: string | Identifier | undefined;
    name: string | Identifier;
}): ExportSpecifier;
export declare function updateExportSpecifier({ node, isTypeOnly, propertyName, name }: {
    node: ExportSpecifier;
    isTypeOnly: boolean;
    propertyName: Identifier | undefined;
    name: Identifier;
}): ExportSpecifier;
export declare function createExternalModuleReference({ expression }: {
    expression: Expression;
}): ExternalModuleReference;
export declare function updateExternalModuleReference({ node, expression }: {
    node: ExternalModuleReference;
    expression: Expression;
}): ExternalModuleReference;
export declare function createJSDocAllType(): JSDocAllType;
export declare function createJSDocUnknownType(): JSDocUnknownType;
export declare function createJSDocNonNullableType({ type, postfix }: {
    type: TypeNode;
    postfix?: boolean;
}): JSDocNonNullableType;
export declare function updateJSDocNonNullableType({ node, type }: {
    node: JSDocNonNullableType;
    type: TypeNode;
}): JSDocNonNullableType;
export declare function createJSDocNullableType({ type, postfix }: {
    type: TypeNode;
    postfix?: boolean;
}): JSDocNullableType;
export declare function updateJSDocNullableType({ node, type }: {
    node: JSDocNullableType;
    type: TypeNode;
}): JSDocNullableType;
export declare function createJSDocOptionalType({ type }: {
    type: TypeNode;
}): JSDocOptionalType;
export declare function updateJSDocOptionalType({ node, type }: {
    node: JSDocOptionalType;
    type: TypeNode;
}): JSDocOptionalType;
export declare function createJSDocFunctionType({ parameters, type }: {
    parameters: readonly ParameterDeclaration[];
    type: TypeNode | undefined;
}): JSDocFunctionType;
export declare function updateJSDocFunctionType({ node, parameters, type }: {
    node: JSDocFunctionType;
    parameters: readonly ParameterDeclaration[];
    type: TypeNode | undefined;
}): JSDocFunctionType;
export declare function createJSDocVariadicType({ type }: {
    type: TypeNode;
}): JSDocVariadicType;
export declare function updateJSDocVariadicType({ node, type }: {
    node: JSDocVariadicType;
    type: TypeNode;
}): JSDocVariadicType;
export declare function createJSDocNamepathType({ type }: {
    type: TypeNode;
}): JSDocNamepathType;
export declare function updateJSDocNamepathType({ node, type }: {
    node: JSDocNamepathType;
    type: TypeNode;
}): JSDocNamepathType;
export declare function createJSDocTypeExpression({ type }: {
    type: TypeNode;
}): JSDocTypeExpression;
export declare function updateJSDocTypeExpression({ node, type }: {
    node: JSDocTypeExpression;
    type: TypeNode;
}): JSDocTypeExpression;
export declare function createJSDocNameReference({ name }: {
    name: EntityName | JSDocMemberName;
}): JSDocNameReference;
export declare function updateJSDocNameReference({ node, name }: {
    node: JSDocNameReference;
    name: EntityName | JSDocMemberName;
}): JSDocNameReference;
export declare function createJSDocMemberName({ left, right }: {
    left: EntityName | JSDocMemberName;
    right: Identifier;
}): JSDocMemberName;
export declare function updateJSDocMemberName({ node, left, right }: {
    node: JSDocMemberName;
    left: EntityName | JSDocMemberName;
    right: Identifier;
}): JSDocMemberName;
export declare function createJSDocLink({ name, text }: {
    name: EntityName | JSDocMemberName | undefined;
    text: string;
}): JSDocLink;
export declare function updateJSDocLink({ node, name, text }: {
    node: JSDocLink;
    name: EntityName | JSDocMemberName | undefined;
    text: string;
}): JSDocLink;
export declare function createJSDocLinkCode({ name, text }: {
    name: EntityName | JSDocMemberName | undefined;
    text: string;
}): JSDocLinkCode;
export declare function updateJSDocLinkCode({ node, name, text }: {
    node: JSDocLinkCode;
    name: EntityName | JSDocMemberName | undefined;
    text: string;
}): JSDocLinkCode;
export declare function createJSDocLinkPlain({ name, text }: {
    name: EntityName | JSDocMemberName | undefined;
    text: string;
}): JSDocLinkPlain;
export declare function updateJSDocLinkPlain({ node, name, text }: {
    node: JSDocLinkPlain;
    name: EntityName | JSDocMemberName | undefined;
    text: string;
}): JSDocLinkPlain;
export declare function createJSDocTypeLiteral({ jsDocPropertyTags, isArrayType }: {
    jsDocPropertyTags?: readonly JSDocPropertyLikeTag[];
    isArrayType?: boolean;
}): JSDocTypeLiteral;
export declare function updateJSDocTypeLiteral({ node, jsDocPropertyTags, isArrayType }: {
    node: JSDocTypeLiteral;
    jsDocPropertyTags: readonly JSDocPropertyLikeTag[] | undefined;
    isArrayType: boolean | undefined;
}): JSDocTypeLiteral;
export declare function createJSDocSignature({ typeParameters, parameters, type }: {
    typeParameters: readonly JSDocTemplateTag[] | undefined;
    parameters: readonly JSDocParameterTag[];
    type?: JSDocReturnTag;
}): JSDocSignature;
export declare function updateJSDocSignature({ node, typeParameters, parameters, type }: {
    node: JSDocSignature;
    typeParameters: readonly JSDocTemplateTag[] | undefined;
    parameters: readonly JSDocParameterTag[];
    type: JSDocReturnTag | undefined;
}): JSDocSignature;
export declare function createJSDocTemplateTag({ tagName, constraint, typeParameters, comment }: {
    tagName: Identifier | undefined;
    constraint: JSDocTypeExpression | undefined;
    typeParameters: readonly TypeParameterDeclaration[];
    comment?: string | NodeArray<JSDocComment>;
}): JSDocTemplateTag;
export declare function updateJSDocTemplateTag({ node, tagName, constraint, typeParameters, comment }: {
    node: JSDocTemplateTag;
    tagName: Identifier | undefined;
    constraint: JSDocTypeExpression | undefined;
    typeParameters: readonly TypeParameterDeclaration[];
    comment: string | NodeArray<JSDocComment> | undefined;
}): JSDocTemplateTag;
export declare function createJSDocTypedefTag({ tagName, typeExpression, fullName, comment }: {
    tagName: Identifier | undefined;
    typeExpression?: JSDocTypeExpression | JSDocTypeLiteral;
    fullName?: Identifier | JSDocNamespaceDeclaration;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocTypedefTag;
export declare function updateJSDocTypedefTag({ node, tagName, typeExpression, fullName, comment }: {
    node: JSDocTypedefTag;
    tagName: Identifier | undefined;
    typeExpression: JSDocTypeExpression | JSDocTypeLiteral | undefined;
    fullName: Identifier | JSDocNamespaceDeclaration | undefined;
    comment: string | NodeArray<JSDocComment> | undefined;
}): JSDocTypedefTag;
export declare function createJSDocParameterTag({ tagName, name, isBracketed, typeExpression, isNameFirst, comment }: {
    tagName: Identifier | undefined;
    name: EntityName;
    isBracketed: boolean;
    typeExpression?: JSDocTypeExpression;
    isNameFirst?: boolean;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocParameterTag;
export declare function updateJSDocParameterTag({ node, tagName, name, isBracketed, typeExpression, isNameFirst, comment }: {
    node: JSDocParameterTag;
    tagName: Identifier | undefined;
    name: EntityName;
    isBracketed: boolean;
    typeExpression: JSDocTypeExpression | undefined;
    isNameFirst: boolean;
    comment: string | NodeArray<JSDocComment> | undefined;
}): JSDocParameterTag;
export declare function createJSDocPropertyTag({ tagName, name, isBracketed, typeExpression, isNameFirst, comment }: {
    tagName: Identifier | undefined;
    name: EntityName;
    isBracketed: boolean;
    typeExpression?: JSDocTypeExpression;
    isNameFirst?: boolean;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocPropertyTag;
export declare function updateJSDocPropertyTag({ node, tagName, name, isBracketed, typeExpression, isNameFirst, comment }: {
    node: JSDocPropertyTag;
    tagName: Identifier | undefined;
    name: EntityName;
    isBracketed: boolean;
    typeExpression: JSDocTypeExpression | undefined;
    isNameFirst: boolean;
    comment: string | NodeArray<JSDocComment> | undefined;
}): JSDocPropertyTag;
export declare function createJSDocTypeTag({ tagName, typeExpression, comment }: {
    tagName: Identifier | undefined;
    typeExpression: JSDocTypeExpression;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocTypeTag;
export declare function updateJSDocTypeTag({ node, tagName, typeExpression, comment }: {
    node: JSDocTypeTag;
    tagName: Identifier | undefined;
    typeExpression: JSDocTypeExpression;
    comment: string | NodeArray<JSDocComment> | undefined;
}): JSDocTypeTag;
export declare function createJSDocSeeTag({ tagName, nameExpression, comment }: {
    tagName: Identifier | undefined;
    nameExpression: JSDocNameReference | undefined;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocSeeTag;
export declare function updateJSDocSeeTag({ node, tagName, nameExpression, comment }: {
    node: JSDocSeeTag;
    tagName: Identifier | undefined;
    nameExpression: JSDocNameReference | undefined;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocSeeTag;
export declare function createJSDocReturnTag({ tagName, typeExpression, comment }: {
    tagName: Identifier | undefined;
    typeExpression?: JSDocTypeExpression;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocReturnTag;
export declare function updateJSDocReturnTag({ node, tagName, typeExpression, comment }: {
    node: JSDocReturnTag;
    tagName: Identifier | undefined;
    typeExpression: JSDocTypeExpression | undefined;
    comment: string | NodeArray<JSDocComment> | undefined;
}): JSDocReturnTag;
export declare function createJSDocThisTag({ tagName, typeExpression, comment }: {
    tagName: Identifier | undefined;
    typeExpression: JSDocTypeExpression;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocThisTag;
export declare function updateJSDocThisTag({ node, tagName, typeExpression, comment }: {
    node: JSDocThisTag;
    tagName: Identifier | undefined;
    typeExpression: JSDocTypeExpression | undefined;
    comment: string | NodeArray<JSDocComment> | undefined;
}): JSDocThisTag;
export declare function createJSDocEnumTag({ tagName, typeExpression, comment }: {
    tagName: Identifier | undefined;
    typeExpression: JSDocTypeExpression;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocEnumTag;
export declare function updateJSDocEnumTag({ node, tagName, typeExpression, comment }: {
    node: JSDocEnumTag;
    tagName: Identifier | undefined;
    typeExpression: JSDocTypeExpression;
    comment: string | NodeArray<JSDocComment> | undefined;
}): JSDocEnumTag;
export declare function createJSDocCallbackTag({ tagName, typeExpression, fullName, comment }: {
    tagName: Identifier | undefined;
    typeExpression: JSDocSignature;
    fullName?: Identifier | JSDocNamespaceDeclaration;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocCallbackTag;
export declare function updateJSDocCallbackTag({ node, tagName, typeExpression, fullName, comment }: {
    node: JSDocCallbackTag;
    tagName: Identifier | undefined;
    typeExpression: JSDocSignature;
    fullName: Identifier | JSDocNamespaceDeclaration | undefined;
    comment: string | NodeArray<JSDocComment> | undefined;
}): JSDocCallbackTag;
export declare function createJSDocOverloadTag({ tagName, typeExpression, comment }: {
    tagName: Identifier | undefined;
    typeExpression: JSDocSignature;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocOverloadTag;
export declare function updateJSDocOverloadTag({ node, tagName, typeExpression, comment }: {
    node: JSDocOverloadTag;
    tagName: Identifier | undefined;
    typeExpression: JSDocSignature;
    comment: string | NodeArray<JSDocComment> | undefined;
}): JSDocOverloadTag;
export declare function createJSDocAugmentsTag({ tagName, className, comment }: {
    tagName: Identifier | undefined;
    className: JSDocAugmentsTag["class"];
    comment?: string | NodeArray<JSDocComment>;
}): JSDocAugmentsTag;
export declare function updateJSDocAugmentsTag({ node, tagName, className, comment }: {
    node: JSDocAugmentsTag;
    tagName: Identifier | undefined;
    className: JSDocAugmentsTag["class"];
    comment: string | NodeArray<JSDocComment> | undefined;
}): JSDocAugmentsTag;
export declare function createJSDocImplementsTag({ tagName, className, comment }: {
    tagName: Identifier | undefined;
    className: JSDocImplementsTag["class"];
    comment?: string | NodeArray<JSDocComment>;
}): JSDocImplementsTag;
export declare function updateJSDocImplementsTag({ node, tagName, className, comment }: {
    node: JSDocImplementsTag;
    tagName: Identifier | undefined;
    className: JSDocImplementsTag["class"];
    comment: string | NodeArray<JSDocComment> | undefined;
}): JSDocImplementsTag;
export declare function createJSDocAuthorTag({ tagName, comment }: {
    tagName: Identifier | undefined;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocAuthorTag;
export declare function updateJSDocAuthorTag({ node, tagName, comment }: {
    node: JSDocAuthorTag;
    tagName: Identifier | undefined;
    comment: string | NodeArray<JSDocComment> | undefined;
}): JSDocAuthorTag;
export declare function createJSDocClassTag({ tagName, comment }: {
    tagName: Identifier | undefined;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocClassTag;
export declare function updateJSDocClassTag({ node, tagName, comment }: {
    node: JSDocClassTag;
    tagName: Identifier | undefined;
    comment: string | NodeArray<JSDocComment> | undefined;
}): JSDocClassTag;
export declare function createJSDocPublicTag({ tagName, comment }: {
    tagName: Identifier | undefined;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocPublicTag;
export declare function updateJSDocPublicTag({ node, tagName, comment }: {
    node: JSDocPublicTag;
    tagName: Identifier | undefined;
    comment: string | NodeArray<JSDocComment> | undefined;
}): JSDocPublicTag;
export declare function createJSDocPrivateTag({ tagName, comment }: {
    tagName: Identifier | undefined;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocPrivateTag;
export declare function updateJSDocPrivateTag({ node, tagName, comment }: {
    node: JSDocPrivateTag;
    tagName: Identifier | undefined;
    comment: string | NodeArray<JSDocComment> | undefined;
}): JSDocPrivateTag;
export declare function createJSDocProtectedTag({ tagName, comment }: {
    tagName: Identifier | undefined;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocProtectedTag;
export declare function updateJSDocProtectedTag({ node, tagName, comment }: {
    node: JSDocProtectedTag;
    tagName: Identifier | undefined;
    comment: string | NodeArray<JSDocComment> | undefined;
}): JSDocProtectedTag;
export declare function createJSDocReadonlyTag({ tagName, comment }: {
    tagName: Identifier | undefined;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocReadonlyTag;
export declare function updateJSDocReadonlyTag({ node, tagName, comment }: {
    node: JSDocReadonlyTag;
    tagName: Identifier | undefined;
    comment: string | NodeArray<JSDocComment> | undefined;
}): JSDocReadonlyTag;
export declare function createJSDocUnknownTag({ tagName, comment }: {
    tagName: Identifier;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocUnknownTag;
export declare function updateJSDocUnknownTag({ node, tagName, comment }: {
    node: JSDocUnknownTag;
    tagName: Identifier;
    comment: string | NodeArray<JSDocComment> | undefined;
}): JSDocUnknownTag;
export declare function createJSDocDeprecatedTag({ tagName, comment }: {
    tagName: Identifier | undefined;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocDeprecatedTag;
export declare function updateJSDocDeprecatedTag({ node, tagName, comment }: {
    node: JSDocDeprecatedTag;
    tagName: Identifier | undefined;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocDeprecatedTag;
export declare function createJSDocOverrideTag({ tagName, comment }: {
    tagName: Identifier | undefined;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocOverrideTag;
export declare function updateJSDocOverrideTag({ node, tagName, comment }: {
    node: JSDocOverrideTag;
    tagName: Identifier | undefined;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocOverrideTag;
export declare function createJSDocThrowsTag({ tagName, typeExpression, comment }: {
    tagName: Identifier;
    typeExpression: JSDocTypeExpression | undefined;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocThrowsTag;
export declare function updateJSDocThrowsTag({ node, tagName, typeExpression, comment }: {
    node: JSDocThrowsTag;
    tagName: Identifier | undefined;
    typeExpression: JSDocTypeExpression | undefined;
    comment?: string | NodeArray<JSDocComment> | undefined;
}): JSDocThrowsTag;
export declare function createJSDocSatisfiesTag({ tagName, typeExpression, comment }: {
    tagName: Identifier | undefined;
    typeExpression: JSDocTypeExpression;
    comment?: string | NodeArray<JSDocComment>;
}): JSDocSatisfiesTag;
export declare function updateJSDocSatisfiesTag({ node, tagName, typeExpression, comment }: {
    node: JSDocSatisfiesTag;
    tagName: Identifier | undefined;
    typeExpression: JSDocTypeExpression;
    comment: string | NodeArray<JSDocComment> | undefined;
}): JSDocSatisfiesTag;
export declare function createJSDocText({ text }: {
    text: string;
}): JSDocText;
export declare function updateJSDocText({ node, text }: {
    node: JSDocText;
    text: string;
}): JSDocText;
export declare function createJSDocComment({ comment, tags }: {
    comment?: string | NodeArray<JSDocComment> | undefined;
    tags?: readonly JSDocTag[] | undefined;
}): JSDoc;
export declare function updateJSDocComment({ node, comment, tags }: {
    node: JSDoc;
    comment: string | NodeArray<JSDocComment> | undefined;
    tags: readonly JSDocTag[] | undefined;
}): JSDoc;
export declare function createJsxElement({ openingElement, children, closingElement }: {
    openingElement: JsxOpeningElement;
    children: readonly JsxChild[];
    closingElement: JsxClosingElement;
}): JsxElement;
export declare function updateJsxElement({ node, openingElement, children, closingElement }: {
    node: JsxElement;
    openingElement: JsxOpeningElement;
    children: readonly JsxChild[];
    closingElement: JsxClosingElement;
}): JsxElement;
export declare function createJsxSelfClosingElement({ tagName, typeArguments, attributes }: {
    tagName: JsxTagNameExpression;
    typeArguments: readonly TypeNode[] | undefined;
    attributes: JsxAttributes;
}): JsxSelfClosingElement;
export declare function updateJsxSelfClosingElement({ node, tagName, typeArguments, attributes }: {
    node: JsxSelfClosingElement;
    tagName: JsxTagNameExpression;
    typeArguments: readonly TypeNode[] | undefined;
    attributes: JsxAttributes;
}): JsxSelfClosingElement;
export declare function createJsxOpeningElement({ tagName, typeArguments, attributes }: {
    tagName: JsxTagNameExpression;
    typeArguments: readonly TypeNode[] | undefined;
    attributes: JsxAttributes;
}): JsxOpeningElement;
export declare function updateJsxOpeningElement({ node, tagName, typeArguments, attributes }: {
    node: JsxOpeningElement;
    tagName: JsxTagNameExpression;
    typeArguments: readonly TypeNode[] | undefined;
    attributes: JsxAttributes;
}): JsxOpeningElement;
export declare function createJsxClosingElement({ tagName }: {
    tagName: JsxTagNameExpression;
}): JsxClosingElement;
export declare function updateJsxClosingElement({ node, tagName }: {
    node: JsxClosingElement;
    tagName: JsxTagNameExpression;
}): JsxClosingElement;
export declare function createJsxFragment({ openingFragment, children, closingFragment }: {
    openingFragment: JsxOpeningFragment;
    children: readonly JsxChild[];
    closingFragment: JsxClosingFragment;
}): JsxFragment;
export declare function createJsxText({ text, containsOnlyTriviaWhiteSpaces }: {
    text: string;
    containsOnlyTriviaWhiteSpaces?: boolean;
}): JsxText;
export declare function updateJsxText({ node, text, containsOnlyTriviaWhiteSpaces }: {
    node: JsxText;
    text: string;
    containsOnlyTriviaWhiteSpaces?: boolean;
}): JsxText;
export declare function createJsxOpeningFragment(): JsxOpeningFragment;
export declare function createJsxJsxClosingFragment(): JsxClosingFragment;
export declare function updateJsxFragment({ node, openingFragment, children, closingFragment }: {
    node: JsxFragment;
    openingFragment: JsxOpeningFragment;
    children: readonly JsxChild[];
    closingFragment: JsxClosingFragment;
}): JsxFragment;
export declare function createJsxAttribute({ name, initializer }: {
    name: JsxAttributeName;
    initializer: JsxAttributeValue | undefined;
}): JsxAttribute;
export declare function updateJsxAttribute({ node, name, initializer }: {
    node: JsxAttribute;
    name: JsxAttributeName;
    initializer: JsxAttributeValue | undefined;
}): JsxAttribute;
export declare function createJsxAttributes({ properties }: {
    properties: readonly JsxAttributeLike[];
}): JsxAttributes;
export declare function updateJsxAttributes({ node, properties }: {
    node: JsxAttributes;
    properties: readonly JsxAttributeLike[];
}): JsxAttributes;
export declare function createJsxSpreadAttribute({ expression }: {
    expression: Expression;
}): JsxSpreadAttribute;
export declare function updateJsxSpreadAttribute({ node, expression }: {
    node: JsxSpreadAttribute;
    expression: Expression;
}): JsxSpreadAttribute;
export declare function createJsxExpression({ dotDotDotToken, expression }: {
    dotDotDotToken: DotDotDotToken | undefined;
    expression: Expression | undefined;
}): JsxExpression;
export declare function updateJsxExpression({ node, expression }: {
    node: JsxExpression;
    expression: Expression | undefined;
}): JsxExpression;
export declare function createJsxNamespacedName({ namespace, name }: {
    namespace: Identifier;
    name: Identifier;
}): JsxNamespacedName;
export declare function updateJsxNamespacedName({ node, namespace, name }: {
    node: JsxNamespacedName;
    namespace: Identifier;
    name: Identifier;
}): JsxNamespacedName;
export declare function createCaseClause({ expression, statements }: {
    expression: Expression;
    statements: readonly Statement[];
}): CaseClause;
export declare function updateCaseClause({ node, expression, statements }: {
    node: CaseClause;
    expression: Expression;
    statements: readonly Statement[];
}): CaseClause;
export declare function createDefaultClause({ statements }: {
    statements: readonly Statement[];
}): DefaultClause;
export declare function updateDefaultClause({ node, statements }: {
    node: DefaultClause;
    statements: readonly Statement[];
}): DefaultClause;
export declare function createHeritageClause({ token, types }: {
    token: HeritageClause["token"];
    types: readonly ExpressionWithTypeArguments[];
}): HeritageClause;
export declare function updateHeritageClause({ node, types }: {
    node: HeritageClause;
    types: readonly ExpressionWithTypeArguments[];
}): HeritageClause;
export declare function createCatchClause({ variableDeclaration, block }: {
    variableDeclaration: string | BindingName | VariableDeclaration | undefined;
    block: Block;
}): CatchClause;
export declare function updateCatchClause({ node, variableDeclaration, block }: {
    node: CatchClause;
    variableDeclaration: VariableDeclaration | undefined;
    block: Block;
}): CatchClause;
export declare function createPropertyAssignment({ name, initializer }: {
    name: string | PropertyName;
    initializer: Expression;
}): PropertyAssignment;
export declare function updatePropertyAssignment({ node, name, initializer }: {
    node: PropertyAssignment;
    name: PropertyName;
    initializer: Expression;
}): PropertyAssignment;
export declare function createShorthandPropertyAssignment({ name, objectAssignmentInitializer }: {
    name: string | Identifier;
    objectAssignmentInitializer?: Expression;
}): ShorthandPropertyAssignment;
export declare function updateShorthandPropertyAssignment({ node, name, objectAssignmentInitializer }: {
    node: ShorthandPropertyAssignment;
    name: Identifier;
    objectAssignmentInitializer: Expression | undefined;
}): ShorthandPropertyAssignment;
export declare function createSpreadAssignment({ expression }: {
    expression: Expression;
}): SpreadAssignment;
export declare function updateSpreadAssignment({ node, expression }: {
    node: SpreadAssignment;
    expression: Expression;
}): SpreadAssignment;
export declare function createEnumMember({ name, initializer }: {
    name: string | PropertyName;
    initializer?: Expression;
}): EnumMember;
export declare function updateEnumMember({ node, name, initializer }: {
    node: EnumMember;
    name: PropertyName;
    initializer: Expression | undefined;
}): EnumMember;
export declare function createSourceFile({ statements, endOfFileToken, flags }: {
    statements: readonly Statement[];
    endOfFileToken: EndOfFileToken;
    flags: NodeFlags;
}): SourceFile;
export declare function updateSourceFile({ node, statements, isDeclarationFile, referencedFiles, typeReferences, hasNoDefaultLib, libReferences }: {
    node: SourceFile;
    statements: readonly Statement[];
    isDeclarationFile?: boolean;
    referencedFiles?: readonly FileReference[];
    typeReferences?: readonly FileReference[];
    hasNoDefaultLib?: boolean;
    libReferences?: readonly FileReference[];
}): SourceFile;
export declare function createNotEmittedStatement({ original }: {
    original: Node;
}): NotEmittedStatement;
export declare function createPartiallyEmittedExpression({ expression, original }: {
    expression: Expression;
    original?: Node;
}): PartiallyEmittedExpression;
export declare function updatePartiallyEmittedExpression({ node, expression }: {
    node: PartiallyEmittedExpression;
    expression: Expression;
}): PartiallyEmittedExpression;
export declare function createCommaListExpression({ elements }: {
    elements: readonly Expression[];
}): CommaListExpression;
export declare function updateCommaListExpression({ node, elements }: {
    node: CommaListExpression;
    elements: readonly Expression[];
}): CommaListExpression;
export declare function createBundle({ sourceFiles }: {
    sourceFiles: readonly SourceFile[];
}): Bundle;
export declare function createBundle({ sourceFiles, prepends }: {
    sourceFiles: readonly SourceFile[];
    prepends?: readonly (UnparsedSource | InputFiles)[];
}): Bundle;
export declare function updateBundle({ node, sourceFiles }: {
    node: Bundle;
    sourceFiles: readonly SourceFile[];
}): Bundle;
export declare function updateBundle({ node, sourceFiles, prepends }: {
    node: Bundle;
    sourceFiles: readonly SourceFile[];
    prepends?: readonly (UnparsedSource | InputFiles)[];
}): Bundle;
export declare function createComma({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression;
export declare function createAssignment({ left, right }: {
    left: ObjectLiteralExpression | ArrayLiteralExpression;
    right: Expression;
}): DestructuringAssignment;
export declare function createAssignment({ left, right }: {
    left: Expression;
    right: Expression;
}): AssignmentExpression<EqualsToken>;
export declare function createLogicalOr({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression;
export declare function createLogicalAnd({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression;
export declare function createBitwiseOr({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression;
export declare function createBitwiseXor({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression;
export declare function createBitwiseAnd({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression;
export declare function createStrictEquality({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression;
export declare function createStrictInequality({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression;
export declare function createEquality({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression;
export declare function createInequality({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression;
export declare function createLessThan({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression;
export declare function createLessThanEquals({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression;
export declare function createGreaterThan({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression;
export declare function createGreaterThanEquals({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression;
export declare function createLeftShift({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression;
export declare function createRightShift({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression;
export declare function createUnsignedRightShift({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression;
export declare function createAdd({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression;
export declare function createSubtract({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression;
export declare function createMultiply({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression;
export declare function createDivide({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression;
export declare function createModulo({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression;
export declare function createExponent({ left, right }: {
    left: Expression;
    right: Expression;
}): BinaryExpression;
export declare function createPrefixPlus({ operand }: {
    operand: Expression;
}): PrefixUnaryExpression;
export declare function createPrefixMinus({ operand }: {
    operand: Expression;
}): PrefixUnaryExpression;
export declare function createPrefixIncrement({ operand }: {
    operand: Expression;
}): PrefixUnaryExpression;
export declare function createPrefixDecrement({ operand }: {
    operand: Expression;
}): PrefixUnaryExpression;
export declare function createBitwiseNot({ operand }: {
    operand: Expression;
}): PrefixUnaryExpression;
export declare function createLogicalNot({ operand }: {
    operand: Expression;
}): PrefixUnaryExpression;
export declare function createPostfixIncrement({ operand }: {
    operand: Expression;
}): PostfixUnaryExpression;
export declare function createPostfixDecrement({ operand }: {
    operand: Expression;
}): PostfixUnaryExpression;
export declare function createImmediatelyInvokedFunctionExpression({ statements }: {
    statements: readonly Statement[];
}): CallExpression;
export declare function createImmediatelyInvokedFunctionExpression({ statements, param, paramValue }: {
    statements: readonly Statement[];
    param: ParameterDeclaration;
    paramValue: Expression;
}): CallExpression;
export declare function createImmediatelyInvokedArrowFunction({ statements }: {
    statements: readonly Statement[];
}): ImmediatelyInvokedArrowFunction;
export declare function createImmediatelyInvokedArrowFunction({ statements, param, paramValue }: {
    statements: readonly Statement[];
    param: ParameterDeclaration;
    paramValue: Expression;
}): ImmediatelyInvokedArrowFunction;
export declare function createVoidZero(): VoidExpression;
export declare function createExportDefault({ expression }: {
    expression: Expression;
}): ExportAssignment;
export declare function createExternalModuleExport({ exportName }: {
    exportName: Identifier;
}): ExportDeclaration;
export declare function restoreOuterExpressions({ outerExpression, innerExpression, kinds }: {
    outerExpression: Expression | undefined;
    innerExpression: Expression;
    kinds?: OuterExpressionKinds;
}): Expression;
export declare function replaceModifiers<T extends HasModifiers>({ node, modifiers }: {
    node: T;
    modifiers: readonly Modifier[] | ModifierFlags | undefined;
}): T;
export declare function replaceDecoratorsAndModifiers<T extends HasModifiers & HasDecorators>({ node, modifiers }: {
    node: T;
    modifiers: readonly ModifierLike[] | undefined;
}): T;
export declare function replacePropertyName<T extends AccessorDeclaration | MethodDeclaration | MethodSignature | PropertyDeclaration | PropertySignature | PropertyAssignment>({ node, name }: {
    node: T;
    name: T["name"];
}): T;
