/*
    This code is automayicly generated, do not edit by hand.
    Generated at: 2024-06-25 11:11:18.398
    Generated for: typescript@5.5.2
*/
import ts from "typescript";
;
export function createNodeArray(o) {
    return ts.factory.createNodeArray(o.elements, o.hasTrailingComma);
}
export function createNumericLiteral(o) {
    return ts.factory.createNumericLiteral(o.value, o.numericLiteralFlags);
}
export function createBigIntLiteral(o) {
    return ts.factory.createBigIntLiteral(o.value);
}
export function createStringLiteral(o) {
    return ts.factory.createStringLiteral(o.text, o.isSingleQuote);
}
export function createStringLiteralFromNode(o) {
    return ts.factory.createStringLiteralFromNode(o.sourceNode, o.isSingleQuote);
}
export function createRegularExpressionLiteral(o) {
    return ts.factory.createRegularExpressionLiteral(o.text);
}
export function createIdentifier(o) {
    return ts.factory.createIdentifier(o.text);
}
export function createTempVariable(o) {
    return ts.factory.createTempVariable(o.recordTempVariable, o.reservedInNestedScopes);
}
export function createLoopVariable(o) {
    return ts.factory.createLoopVariable(o.reservedInNestedScopes);
}
export function createUniqueName(o) {
    return ts.factory.createUniqueName(o.text, o.flags);
}
export function getGeneratedNameForNode(o) {
    return ts.factory.getGeneratedNameForNode(o.node, o.flags);
}
export function createPrivateIdentifier(o) {
    return ts.factory.createPrivateIdentifier(o.text);
}
export function createUniquePrivateName(o) {
    return ts.factory.createUniquePrivateName(o.text);
}
export function getGeneratedPrivateNameForNode(o) {
    return ts.factory.getGeneratedPrivateNameForNode(o.node);
}
export function createToken(o) {
    return ts.factory.createToken(o.token);
}
export function createSuper() {
    return ts.factory.createSuper();
}
export function createThis() {
    return ts.factory.createThis();
}
export function createNull() {
    return ts.factory.createNull();
}
export function createTrue() {
    return ts.factory.createTrue();
}
export function createFalse() {
    return ts.factory.createFalse();
}
export function createModifier(o) {
    return ts.factory.createModifier(o.kind);
}
export function createModifiersFromModifierFlags(o) {
    return ts.factory.createModifiersFromModifierFlags(o.flags);
}
export function createQualifiedName(o) {
    return ts.factory.createQualifiedName(o.left, o.right);
}
export function updateQualifiedName(o) {
    return ts.factory.updateQualifiedName(o.node, o.left, o.right);
}
export function createComputedPropertyName(o) {
    return ts.factory.createComputedPropertyName(o.expression);
}
export function updateComputedPropertyName(o) {
    return ts.factory.updateComputedPropertyName(o.node, o.expression);
}
export function createTypeParameterDeclaration(o) {
    return ts.factory.createTypeParameterDeclaration(o.modifiers, o.name, o.constraint, o.defaultType);
}
export function updateTypeParameterDeclaration(o) {
    return ts.factory.updateTypeParameterDeclaration(o.node, o.modifiers, o.name, o.constraint, o.defaultType);
}
export function createParameterDeclaration(o) {
    return ts.factory.createParameterDeclaration(o.modifiers, o.dotDotDotToken, o.name, o.questionToken, o.type, o.initializer);
}
export function updateParameterDeclaration(o) {
    return ts.factory.updateParameterDeclaration(o.node, o.modifiers, o.dotDotDotToken, o.name, o.questionToken, o.type, o.initializer);
}
export function createDecorator(o) {
    return ts.factory.createDecorator(o.expression);
}
export function updateDecorator(o) {
    return ts.factory.updateDecorator(o.node, o.expression);
}
export function createPropertySignature(o) {
    return ts.factory.createPropertySignature(o.modifiers, o.name, o.questionToken, o.type);
}
export function updatePropertySignature(o) {
    return ts.factory.updatePropertySignature(o.node, o.modifiers, o.name, o.questionToken, o.type);
}
export function createPropertyDeclaration(o) {
    return ts.factory.createPropertyDeclaration(o.modifiers, o.name, o.questionOrExclamationToken, o.type, o.initializer);
}
export function updatePropertyDeclaration(o) {
    return ts.factory.updatePropertyDeclaration(o.node, o.modifiers, o.name, o.questionOrExclamationToken, o.type, o.initializer);
}
export function createMethodSignature(o) {
    return ts.factory.createMethodSignature(o.modifiers, o.name, o.questionToken, o.typeParameters, o.parameters, o.type);
}
export function updateMethodSignature(o) {
    return ts.factory.updateMethodSignature(o.node, o.modifiers, o.name, o.questionToken, o.typeParameters, o.parameters, o.type);
}
export function createMethodDeclaration(o) {
    return ts.factory.createMethodDeclaration(o.modifiers, o.asteriskToken, o.name, o.questionToken, o.typeParameters, o.parameters, o.type, o.body);
}
export function updateMethodDeclaration(o) {
    return ts.factory.updateMethodDeclaration(o.node, o.modifiers, o.asteriskToken, o.name, o.questionToken, o.typeParameters, o.parameters, o.type, o.body);
}
export function createConstructorDeclaration(o) {
    return ts.factory.createConstructorDeclaration(o.modifiers, o.parameters, o.body);
}
export function updateConstructorDeclaration(o) {
    return ts.factory.updateConstructorDeclaration(o.node, o.modifiers, o.parameters, o.body);
}
export function createGetAccessorDeclaration(o) {
    return ts.factory.createGetAccessorDeclaration(o.modifiers, o.name, o.parameters, o.type, o.body);
}
export function updateGetAccessorDeclaration(o) {
    return ts.factory.updateGetAccessorDeclaration(o.node, o.modifiers, o.name, o.parameters, o.type, o.body);
}
export function createSetAccessorDeclaration(o) {
    return ts.factory.createSetAccessorDeclaration(o.modifiers, o.name, o.parameters, o.body);
}
export function updateSetAccessorDeclaration(o) {
    return ts.factory.updateSetAccessorDeclaration(o.node, o.modifiers, o.name, o.parameters, o.body);
}
export function createCallSignature(o) {
    return ts.factory.createCallSignature(o.typeParameters, o.parameters, o.type);
}
export function updateCallSignature(o) {
    return ts.factory.updateCallSignature(o.node, o.typeParameters, o.parameters, o.type);
}
export function createConstructSignature(o) {
    return ts.factory.createConstructSignature(o.typeParameters, o.parameters, o.type);
}
export function updateConstructSignature(o) {
    return ts.factory.updateConstructSignature(o.node, o.typeParameters, o.parameters, o.type);
}
export function createIndexSignature(o) {
    return ts.factory.createIndexSignature(o.modifiers, o.parameters, o.type);
}
export function updateIndexSignature(o) {
    return ts.factory.updateIndexSignature(o.node, o.modifiers, o.parameters, o.type);
}
export function createTemplateLiteralTypeSpan(o) {
    return ts.factory.createTemplateLiteralTypeSpan(o.type, o.literal);
}
export function updateTemplateLiteralTypeSpan(o) {
    return ts.factory.updateTemplateLiteralTypeSpan(o.node, o.type, o.literal);
}
export function createClassStaticBlockDeclaration(o) {
    return ts.factory.createClassStaticBlockDeclaration(o.body);
}
export function updateClassStaticBlockDeclaration(o) {
    return ts.factory.updateClassStaticBlockDeclaration(o.node, o.body);
}
export function createKeywordTypeNode(o) {
    return ts.factory.createKeywordTypeNode(o.kind);
}
export function createTypePredicateNode(o) {
    return ts.factory.createTypePredicateNode(o.assertsModifier, o.parameterName, o.type);
}
export function updateTypePredicateNode(o) {
    return ts.factory.updateTypePredicateNode(o.node, o.assertsModifier, o.parameterName, o.type);
}
export function createTypeReferenceNode(o) {
    return ts.factory.createTypeReferenceNode(o.typeName, o.typeArguments);
}
export function updateTypeReferenceNode(o) {
    return ts.factory.updateTypeReferenceNode(o.node, o.typeName, o.typeArguments);
}
export function createFunctionTypeNode(o) {
    return ts.factory.createFunctionTypeNode(o.typeParameters, o.parameters, o.type);
}
export function updateFunctionTypeNode(o) {
    return ts.factory.updateFunctionTypeNode(o.node, o.typeParameters, o.parameters, o.type);
}
export function createConstructorTypeNode(o) {
    return ts.factory.createConstructorTypeNode(o.modifiers, o.typeParameters, o.parameters, o.type);
}
export function updateConstructorTypeNode(o) {
    return ts.factory.updateConstructorTypeNode(o.node, o.modifiers, o.typeParameters, o.parameters, o.type);
}
export function createTypeQueryNode(o) {
    return ts.factory.createTypeQueryNode(o.exprName, o.typeArguments);
}
export function updateTypeQueryNode(o) {
    return ts.factory.updateTypeQueryNode(o.node, o.exprName, o.typeArguments);
}
export function createTypeLiteralNode(o) {
    return ts.factory.createTypeLiteralNode(o.members);
}
export function updateTypeLiteralNode(o) {
    return ts.factory.updateTypeLiteralNode(o.node, o.members);
}
export function createArrayTypeNode(o) {
    return ts.factory.createArrayTypeNode(o.elementType);
}
export function updateArrayTypeNode(o) {
    return ts.factory.updateArrayTypeNode(o.node, o.elementType);
}
export function createTupleTypeNode(o) {
    return ts.factory.createTupleTypeNode(o.elements);
}
export function updateTupleTypeNode(o) {
    return ts.factory.updateTupleTypeNode(o.node, o.elements);
}
export function createNamedTupleMember(o) {
    return ts.factory.createNamedTupleMember(o.dotDotDotToken, o.name, o.questionToken, o.type);
}
export function updateNamedTupleMember(o) {
    return ts.factory.updateNamedTupleMember(o.node, o.dotDotDotToken, o.name, o.questionToken, o.type);
}
export function createOptionalTypeNode(o) {
    return ts.factory.createOptionalTypeNode(o.type);
}
export function updateOptionalTypeNode(o) {
    return ts.factory.updateOptionalTypeNode(o.node, o.type);
}
export function createRestTypeNode(o) {
    return ts.factory.createRestTypeNode(o.type);
}
export function updateRestTypeNode(o) {
    return ts.factory.updateRestTypeNode(o.node, o.type);
}
export function createUnionTypeNode(o) {
    return ts.factory.createUnionTypeNode(o.types);
}
export function updateUnionTypeNode(o) {
    return ts.factory.updateUnionTypeNode(o.node, o.types);
}
export function createIntersectionTypeNode(o) {
    return ts.factory.createIntersectionTypeNode(o.types);
}
export function updateIntersectionTypeNode(o) {
    return ts.factory.updateIntersectionTypeNode(o.node, o.types);
}
export function createConditionalTypeNode(o) {
    return ts.factory.createConditionalTypeNode(o.checkType, o.extendsType, o.trueType, o.falseType);
}
export function updateConditionalTypeNode(o) {
    return ts.factory.updateConditionalTypeNode(o.node, o.checkType, o.extendsType, o.trueType, o.falseType);
}
export function createInferTypeNode(o) {
    return ts.factory.createInferTypeNode(o.typeParameter);
}
export function updateInferTypeNode(o) {
    return ts.factory.updateInferTypeNode(o.node, o.typeParameter);
}
export function createImportTypeNode(o) {
    return ts.factory.createImportTypeNode(o.argument, o.attributes, o.qualifier, o.typeArguments, o.isTypeOf);
}
export function updateImportTypeNode(o) {
    return ts.factory.updateImportTypeNode(o.node, o.argument, o.attributes, o.qualifier, o.typeArguments, o.isTypeOf);
}
export function createParenthesizedType(o) {
    return ts.factory.createParenthesizedType(o.type);
}
export function updateParenthesizedType(o) {
    return ts.factory.updateParenthesizedType(o.node, o.type);
}
export function createThisTypeNode() {
    return ts.factory.createThisTypeNode();
}
export function createTypeOperatorNode(o) {
    return ts.factory.createTypeOperatorNode(o.operator, o.type);
}
export function updateTypeOperatorNode(o) {
    return ts.factory.updateTypeOperatorNode(o.node, o.type);
}
export function createIndexedAccessTypeNode(o) {
    return ts.factory.createIndexedAccessTypeNode(o.objectType, o.indexType);
}
export function updateIndexedAccessTypeNode(o) {
    return ts.factory.updateIndexedAccessTypeNode(o.node, o.objectType, o.indexType);
}
export function createMappedTypeNode(o) {
    return ts.factory.createMappedTypeNode(o.readonlyToken, o.typeParameter, o.nameType, o.questionToken, o.type, o.members);
}
export function updateMappedTypeNode(o) {
    return ts.factory.updateMappedTypeNode(o.node, o.readonlyToken, o.typeParameter, o.nameType, o.questionToken, o.type, o.members);
}
export function createLiteralTypeNode(o) {
    return ts.factory.createLiteralTypeNode(o.literal);
}
export function updateLiteralTypeNode(o) {
    return ts.factory.updateLiteralTypeNode(o.node, o.literal);
}
export function createTemplateLiteralType(o) {
    return ts.factory.createTemplateLiteralType(o.head, o.templateSpans);
}
export function updateTemplateLiteralType(o) {
    return ts.factory.updateTemplateLiteralType(o.node, o.head, o.templateSpans);
}
export function createObjectBindingPattern(o) {
    return ts.factory.createObjectBindingPattern(o.elements);
}
export function updateObjectBindingPattern(o) {
    return ts.factory.updateObjectBindingPattern(o.node, o.elements);
}
export function createArrayBindingPattern(o) {
    return ts.factory.createArrayBindingPattern(o.elements);
}
export function updateArrayBindingPattern(o) {
    return ts.factory.updateArrayBindingPattern(o.node, o.elements);
}
export function createBindingElement(o) {
    return ts.factory.createBindingElement(o.dotDotDotToken, o.propertyName, o.name, o.initializer);
}
export function updateBindingElement(o) {
    return ts.factory.updateBindingElement(o.node, o.dotDotDotToken, o.propertyName, o.name, o.initializer);
}
export function createArrayLiteralExpression(o) {
    return ts.factory.createArrayLiteralExpression(o.elements, o.multiLine);
}
export function updateArrayLiteralExpression(o) {
    return ts.factory.updateArrayLiteralExpression(o.node, o.elements);
}
export function createObjectLiteralExpression(o) {
    return ts.factory.createObjectLiteralExpression(o.properties, o.multiLine);
}
export function updateObjectLiteralExpression(o) {
    return ts.factory.updateObjectLiteralExpression(o.node, o.properties);
}
export function createPropertyAccessExpression(o) {
    return ts.factory.createPropertyAccessExpression(o.expression, o.name);
}
export function updatePropertyAccessExpression(o) {
    return ts.factory.updatePropertyAccessExpression(o.node, o.expression, o.name);
}
export function createPropertyAccessChain(o) {
    return ts.factory.createPropertyAccessChain(o.expression, o.questionDotToken, o.name);
}
export function updatePropertyAccessChain(o) {
    return ts.factory.updatePropertyAccessChain(o.node, o.expression, o.questionDotToken, o.name);
}
export function createElementAccessExpression(o) {
    return ts.factory.createElementAccessExpression(o.expression, o.index);
}
export function updateElementAccessExpression(o) {
    return ts.factory.updateElementAccessExpression(o.node, o.expression, o.argumentExpression);
}
export function createElementAccessChain(o) {
    return ts.factory.createElementAccessChain(o.expression, o.questionDotToken, o.index);
}
export function updateElementAccessChain(o) {
    return ts.factory.updateElementAccessChain(o.node, o.expression, o.questionDotToken, o.argumentExpression);
}
export function createCallExpression(o) {
    return ts.factory.createCallExpression(o.expression, o.typeArguments, o.argumentsArray);
}
export function updateCallExpression(o) {
    return ts.factory.updateCallExpression(o.node, o.expression, o.typeArguments, o.argumentsArray);
}
export function createCallChain(o) {
    return ts.factory.createCallChain(o.expression, o.questionDotToken, o.typeArguments, o.argumentsArray);
}
export function updateCallChain(o) {
    return ts.factory.updateCallChain(o.node, o.expression, o.questionDotToken, o.typeArguments, o.argumentsArray);
}
export function createNewExpression(o) {
    return ts.factory.createNewExpression(o.expression, o.typeArguments, o.argumentsArray);
}
export function updateNewExpression(o) {
    return ts.factory.updateNewExpression(o.node, o.expression, o.typeArguments, o.argumentsArray);
}
export function createTaggedTemplateExpression(o) {
    return ts.factory.createTaggedTemplateExpression(o.tag, o.typeArguments, o.template);
}
export function updateTaggedTemplateExpression(o) {
    return ts.factory.updateTaggedTemplateExpression(o.node, o.tag, o.typeArguments, o.template);
}
export function createTypeAssertion(o) {
    return ts.factory.createTypeAssertion(o.type, o.expression);
}
export function updateTypeAssertion(o) {
    return ts.factory.updateTypeAssertion(o.node, o.type, o.expression);
}
export function createParenthesizedExpression(o) {
    return ts.factory.createParenthesizedExpression(o.expression);
}
export function updateParenthesizedExpression(o) {
    return ts.factory.updateParenthesizedExpression(o.node, o.expression);
}
export function createFunctionExpression(o) {
    return ts.factory.createFunctionExpression(o.modifiers, o.asteriskToken, o.name, o.typeParameters, o.parameters, o.type, o.body);
}
export function updateFunctionExpression(o) {
    return ts.factory.updateFunctionExpression(o.node, o.modifiers, o.asteriskToken, o.name, o.typeParameters, o.parameters, o.type, o.body);
}
export function createArrowFunction(o) {
    return ts.factory.createArrowFunction(o.modifiers, o.typeParameters, o.parameters, o.type, o.equalsGreaterThanToken, o.body);
}
export function updateArrowFunction(o) {
    return ts.factory.updateArrowFunction(o.node, o.modifiers, o.typeParameters, o.parameters, o.type, o.equalsGreaterThanToken, o.body);
}
export function createDeleteExpression(o) {
    return ts.factory.createDeleteExpression(o.expression);
}
export function updateDeleteExpression(o) {
    return ts.factory.updateDeleteExpression(o.node, o.expression);
}
export function createTypeOfExpression(o) {
    return ts.factory.createTypeOfExpression(o.expression);
}
export function updateTypeOfExpression(o) {
    return ts.factory.updateTypeOfExpression(o.node, o.expression);
}
export function createVoidExpression(o) {
    return ts.factory.createVoidExpression(o.expression);
}
export function updateVoidExpression(o) {
    return ts.factory.updateVoidExpression(o.node, o.expression);
}
export function createAwaitExpression(o) {
    return ts.factory.createAwaitExpression(o.expression);
}
export function updateAwaitExpression(o) {
    return ts.factory.updateAwaitExpression(o.node, o.expression);
}
export function createPrefixUnaryExpression(o) {
    return ts.factory.createPrefixUnaryExpression(o.operator, o.operand);
}
export function updatePrefixUnaryExpression(o) {
    return ts.factory.updatePrefixUnaryExpression(o.node, o.operand);
}
export function createPostfixUnaryExpression(o) {
    return ts.factory.createPostfixUnaryExpression(o.operand, o.operator);
}
export function updatePostfixUnaryExpression(o) {
    return ts.factory.updatePostfixUnaryExpression(o.node, o.operand);
}
export function createBinaryExpression(o) {
    return ts.factory.createBinaryExpression(o.left, o.operator, o.right);
}
export function updateBinaryExpression(o) {
    return ts.factory.updateBinaryExpression(o.node, o.left, o.operator, o.right);
}
export function createConditionalExpression(o) {
    return ts.factory.createConditionalExpression(o.condition, o.questionToken, o.whenTrue, o.colonToken, o.whenFalse);
}
export function updateConditionalExpression(o) {
    return ts.factory.updateConditionalExpression(o.node, o.condition, o.questionToken, o.whenTrue, o.colonToken, o.whenFalse);
}
export function createTemplateExpression(o) {
    return ts.factory.createTemplateExpression(o.head, o.templateSpans);
}
export function updateTemplateExpression(o) {
    return ts.factory.updateTemplateExpression(o.node, o.head, o.templateSpans);
}
export function createTemplateHead(o) {
    return ts.factory.createTemplateHead(o.text, o.rawText, o.templateFlags);
}
export function createTemplateMiddle(o) {
    return ts.factory.createTemplateMiddle(o.text, o.rawText, o.templateFlags);
}
export function createTemplateTail(o) {
    return ts.factory.createTemplateTail(o.text, o.rawText, o.templateFlags);
}
export function createNoSubstitutionTemplateLiteral(o) {
    return ts.factory.createNoSubstitutionTemplateLiteral(o.text, o.rawText);
}
export function createYieldExpression(o) {
    return ts.factory.createYieldExpression(o.asteriskToken, o.expression);
}
export function updateYieldExpression(o) {
    return ts.factory.updateYieldExpression(o.node, o.asteriskToken, o.expression);
}
export function createSpreadElement(o) {
    return ts.factory.createSpreadElement(o.expression);
}
export function updateSpreadElement(o) {
    return ts.factory.updateSpreadElement(o.node, o.expression);
}
export function createClassExpression(o) {
    return ts.factory.createClassExpression(o.modifiers, o.name, o.typeParameters, o.heritageClauses, o.members);
}
export function updateClassExpression(o) {
    return ts.factory.updateClassExpression(o.node, o.modifiers, o.name, o.typeParameters, o.heritageClauses, o.members);
}
export function createOmittedExpression() {
    return ts.factory.createOmittedExpression();
}
export function createExpressionWithTypeArguments(o) {
    return ts.factory.createExpressionWithTypeArguments(o.expression, o.typeArguments);
}
export function updateExpressionWithTypeArguments(o) {
    return ts.factory.updateExpressionWithTypeArguments(o.node, o.expression, o.typeArguments);
}
export function createAsExpression(o) {
    return ts.factory.createAsExpression(o.expression, o.type);
}
export function updateAsExpression(o) {
    return ts.factory.updateAsExpression(o.node, o.expression, o.type);
}
export function createNonNullExpression(o) {
    return ts.factory.createNonNullExpression(o.expression);
}
export function updateNonNullExpression(o) {
    return ts.factory.updateNonNullExpression(o.node, o.expression);
}
export function createNonNullChain(o) {
    return ts.factory.createNonNullChain(o.expression);
}
export function updateNonNullChain(o) {
    return ts.factory.updateNonNullChain(o.node, o.expression);
}
export function createMetaProperty(o) {
    return ts.factory.createMetaProperty(o.keywordToken, o.name);
}
export function updateMetaProperty(o) {
    return ts.factory.updateMetaProperty(o.node, o.name);
}
export function createSatisfiesExpression(o) {
    return ts.factory.createSatisfiesExpression(o.expression, o.type);
}
export function updateSatisfiesExpression(o) {
    return ts.factory.updateSatisfiesExpression(o.node, o.expression, o.type);
}
export function createTemplateSpan(o) {
    return ts.factory.createTemplateSpan(o.expression, o.literal);
}
export function updateTemplateSpan(o) {
    return ts.factory.updateTemplateSpan(o.node, o.expression, o.literal);
}
export function createSemicolonClassElement() {
    return ts.factory.createSemicolonClassElement();
}
export function createBlock(o) {
    return ts.factory.createBlock(o.statements, o.multiLine);
}
export function updateBlock(o) {
    return ts.factory.updateBlock(o.node, o.statements);
}
export function createVariableStatement(o) {
    return ts.factory.createVariableStatement(o.modifiers, o.declarationList);
}
export function updateVariableStatement(o) {
    return ts.factory.updateVariableStatement(o.node, o.modifiers, o.declarationList);
}
export function createEmptyStatement() {
    return ts.factory.createEmptyStatement();
}
export function createExpressionStatement(o) {
    return ts.factory.createExpressionStatement(o.expression);
}
export function updateExpressionStatement(o) {
    return ts.factory.updateExpressionStatement(o.node, o.expression);
}
export function createIfStatement(o) {
    return ts.factory.createIfStatement(o.expression, o.thenStatement, o.elseStatement);
}
export function updateIfStatement(o) {
    return ts.factory.updateIfStatement(o.node, o.expression, o.thenStatement, o.elseStatement);
}
export function createDoStatement(o) {
    return ts.factory.createDoStatement(o.statement, o.expression);
}
export function updateDoStatement(o) {
    return ts.factory.updateDoStatement(o.node, o.statement, o.expression);
}
export function createWhileStatement(o) {
    return ts.factory.createWhileStatement(o.expression, o.statement);
}
export function updateWhileStatement(o) {
    return ts.factory.updateWhileStatement(o.node, o.expression, o.statement);
}
export function createForStatement(o) {
    return ts.factory.createForStatement(o.initializer, o.condition, o.incrementor, o.statement);
}
export function updateForStatement(o) {
    return ts.factory.updateForStatement(o.node, o.initializer, o.condition, o.incrementor, o.statement);
}
export function createForInStatement(o) {
    return ts.factory.createForInStatement(o.initializer, o.expression, o.statement);
}
export function updateForInStatement(o) {
    return ts.factory.updateForInStatement(o.node, o.initializer, o.expression, o.statement);
}
export function createForOfStatement(o) {
    return ts.factory.createForOfStatement(o.awaitModifier, o.initializer, o.expression, o.statement);
}
export function updateForOfStatement(o) {
    return ts.factory.updateForOfStatement(o.node, o.awaitModifier, o.initializer, o.expression, o.statement);
}
export function createContinueStatement(o) {
    return ts.factory.createContinueStatement(o.label);
}
export function updateContinueStatement(o) {
    return ts.factory.updateContinueStatement(o.node, o.label);
}
export function createBreakStatement(o) {
    return ts.factory.createBreakStatement(o.label);
}
export function updateBreakStatement(o) {
    return ts.factory.updateBreakStatement(o.node, o.label);
}
export function createReturnStatement(o) {
    return ts.factory.createReturnStatement(o.expression);
}
export function updateReturnStatement(o) {
    return ts.factory.updateReturnStatement(o.node, o.expression);
}
export function createWithStatement(o) {
    return ts.factory.createWithStatement(o.expression, o.statement);
}
export function updateWithStatement(o) {
    return ts.factory.updateWithStatement(o.node, o.expression, o.statement);
}
export function createSwitchStatement(o) {
    return ts.factory.createSwitchStatement(o.expression, o.caseBlock);
}
export function updateSwitchStatement(o) {
    return ts.factory.updateSwitchStatement(o.node, o.expression, o.caseBlock);
}
export function createLabeledStatement(o) {
    return ts.factory.createLabeledStatement(o.label, o.statement);
}
export function updateLabeledStatement(o) {
    return ts.factory.updateLabeledStatement(o.node, o.label, o.statement);
}
export function createThrowStatement(o) {
    return ts.factory.createThrowStatement(o.expression);
}
export function updateThrowStatement(o) {
    return ts.factory.updateThrowStatement(o.node, o.expression);
}
export function createTryStatement(o) {
    return ts.factory.createTryStatement(o.tryBlock, o.catchClause, o.finallyBlock);
}
export function updateTryStatement(o) {
    return ts.factory.updateTryStatement(o.node, o.tryBlock, o.catchClause, o.finallyBlock);
}
export function createDebuggerStatement() {
    return ts.factory.createDebuggerStatement();
}
export function createVariableDeclaration(o) {
    return ts.factory.createVariableDeclaration(o.name, o.exclamationToken, o.type, o.initializer);
}
export function updateVariableDeclaration(o) {
    return ts.factory.updateVariableDeclaration(o.node, o.name, o.exclamationToken, o.type, o.initializer);
}
export function createVariableDeclarationList(o) {
    return ts.factory.createVariableDeclarationList(o.declarations, o.flags);
}
export function updateVariableDeclarationList(o) {
    return ts.factory.updateVariableDeclarationList(o.node, o.declarations);
}
export function createFunctionDeclaration(o) {
    return ts.factory.createFunctionDeclaration(o.modifiers, o.asteriskToken, o.name, o.typeParameters, o.parameters, o.type, o.body);
}
export function updateFunctionDeclaration(o) {
    return ts.factory.updateFunctionDeclaration(o.node, o.modifiers, o.asteriskToken, o.name, o.typeParameters, o.parameters, o.type, o.body);
}
export function createClassDeclaration(o) {
    return ts.factory.createClassDeclaration(o.modifiers, o.name, o.typeParameters, o.heritageClauses, o.members);
}
export function updateClassDeclaration(o) {
    return ts.factory.updateClassDeclaration(o.node, o.modifiers, o.name, o.typeParameters, o.heritageClauses, o.members);
}
export function createInterfaceDeclaration(o) {
    return ts.factory.createInterfaceDeclaration(o.modifiers, o.name, o.typeParameters, o.heritageClauses, o.members);
}
export function updateInterfaceDeclaration(o) {
    return ts.factory.updateInterfaceDeclaration(o.node, o.modifiers, o.name, o.typeParameters, o.heritageClauses, o.members);
}
export function createTypeAliasDeclaration(o) {
    return ts.factory.createTypeAliasDeclaration(o.modifiers, o.name, o.typeParameters, o.type);
}
export function updateTypeAliasDeclaration(o) {
    return ts.factory.updateTypeAliasDeclaration(o.node, o.modifiers, o.name, o.typeParameters, o.type);
}
export function createEnumDeclaration(o) {
    return ts.factory.createEnumDeclaration(o.modifiers, o.name, o.members);
}
export function updateEnumDeclaration(o) {
    return ts.factory.updateEnumDeclaration(o.node, o.modifiers, o.name, o.members);
}
export function createModuleDeclaration(o) {
    return ts.factory.createModuleDeclaration(o.modifiers, o.name, o.body, o.flags);
}
export function updateModuleDeclaration(o) {
    return ts.factory.updateModuleDeclaration(o.node, o.modifiers, o.name, o.body);
}
export function createModuleBlock(o) {
    return ts.factory.createModuleBlock(o.statements);
}
export function updateModuleBlock(o) {
    return ts.factory.updateModuleBlock(o.node, o.statements);
}
export function createCaseBlock(o) {
    return ts.factory.createCaseBlock(o.clauses);
}
export function updateCaseBlock(o) {
    return ts.factory.updateCaseBlock(o.node, o.clauses);
}
export function createNamespaceExportDeclaration(o) {
    return ts.factory.createNamespaceExportDeclaration(o.name);
}
export function updateNamespaceExportDeclaration(o) {
    return ts.factory.updateNamespaceExportDeclaration(o.node, o.name);
}
export function createImportEqualsDeclaration(o) {
    return ts.factory.createImportEqualsDeclaration(o.modifiers, o.isTypeOnly, o.name, o.moduleReference);
}
export function updateImportEqualsDeclaration(o) {
    return ts.factory.updateImportEqualsDeclaration(o.node, o.modifiers, o.isTypeOnly, o.name, o.moduleReference);
}
export function createImportDeclaration(o) {
    return ts.factory.createImportDeclaration(o.modifiers, o.importClause, o.moduleSpecifier, o.attributes);
}
export function updateImportDeclaration(o) {
    return ts.factory.updateImportDeclaration(o.node, o.modifiers, o.importClause, o.moduleSpecifier, o.attributes);
}
export function createImportClause(o) {
    return ts.factory.createImportClause(o.isTypeOnly, o.name, o.namedBindings);
}
export function updateImportClause(o) {
    return ts.factory.updateImportClause(o.node, o.isTypeOnly, o.name, o.namedBindings);
}
export function createAssertClause(o) {
    return ts.factory.createAssertClause(o.elements, o.multiLine);
}
export function updateAssertClause(o) {
    return ts.factory.updateAssertClause(o.node, o.elements, o.multiLine);
}
export function createAssertEntry(o) {
    return ts.factory.createAssertEntry(o.name, o.value);
}
export function updateAssertEntry(o) {
    return ts.factory.updateAssertEntry(o.node, o.name, o.value);
}
export function createImportTypeAssertionContainer(o) {
    return ts.factory.createImportTypeAssertionContainer(o.clause, o.multiLine);
}
export function updateImportTypeAssertionContainer(o) {
    return ts.factory.updateImportTypeAssertionContainer(o.node, o.clause, o.multiLine);
}
export function createImportAttributes(o) {
    return ts.factory.createImportAttributes(o.elements, o.multiLine);
}
export function updateImportAttributes(o) {
    return ts.factory.updateImportAttributes(o.node, o.elements, o.multiLine);
}
export function createImportAttribute(o) {
    return ts.factory.createImportAttribute(o.name, o.value);
}
export function updateImportAttribute(o) {
    return ts.factory.updateImportAttribute(o.node, o.name, o.value);
}
export function createNamespaceImport(o) {
    return ts.factory.createNamespaceImport(o.name);
}
export function updateNamespaceImport(o) {
    return ts.factory.updateNamespaceImport(o.node, o.name);
}
export function createNamespaceExport(o) {
    return ts.factory.createNamespaceExport(o.name);
}
export function updateNamespaceExport(o) {
    return ts.factory.updateNamespaceExport(o.node, o.name);
}
export function createNamedImports(o) {
    return ts.factory.createNamedImports(o.elements);
}
export function updateNamedImports(o) {
    return ts.factory.updateNamedImports(o.node, o.elements);
}
export function createImportSpecifier(o) {
    return ts.factory.createImportSpecifier(o.isTypeOnly, o.propertyName, o.name);
}
export function updateImportSpecifier(o) {
    return ts.factory.updateImportSpecifier(o.node, o.isTypeOnly, o.propertyName, o.name);
}
export function createExportAssignment(o) {
    return ts.factory.createExportAssignment(o.modifiers, o.isExportEquals, o.expression);
}
export function updateExportAssignment(o) {
    return ts.factory.updateExportAssignment(o.node, o.modifiers, o.expression);
}
export function createExportDeclaration(o) {
    return ts.factory.createExportDeclaration(o.modifiers, o.isTypeOnly, o.exportClause, o.moduleSpecifier, o.attributes);
}
export function updateExportDeclaration(o) {
    return ts.factory.updateExportDeclaration(o.node, o.modifiers, o.isTypeOnly, o.exportClause, o.moduleSpecifier, o.attributes);
}
export function createNamedExports(o) {
    return ts.factory.createNamedExports(o.elements);
}
export function updateNamedExports(o) {
    return ts.factory.updateNamedExports(o.node, o.elements);
}
export function createExportSpecifier(o) {
    return ts.factory.createExportSpecifier(o.isTypeOnly, o.propertyName, o.name);
}
export function updateExportSpecifier(o) {
    return ts.factory.updateExportSpecifier(o.node, o.isTypeOnly, o.propertyName, o.name);
}
export function createExternalModuleReference(o) {
    return ts.factory.createExternalModuleReference(o.expression);
}
export function updateExternalModuleReference(o) {
    return ts.factory.updateExternalModuleReference(o.node, o.expression);
}
export function createJSDocAllType() {
    return ts.factory.createJSDocAllType();
}
export function createJSDocUnknownType() {
    return ts.factory.createJSDocUnknownType();
}
export function createJSDocNonNullableType(o) {
    return ts.factory.createJSDocNonNullableType(o.type, o.postfix);
}
export function updateJSDocNonNullableType(o) {
    return ts.factory.updateJSDocNonNullableType(o.node, o.type);
}
export function createJSDocNullableType(o) {
    return ts.factory.createJSDocNullableType(o.type, o.postfix);
}
export function updateJSDocNullableType(o) {
    return ts.factory.updateJSDocNullableType(o.node, o.type);
}
export function createJSDocOptionalType(o) {
    return ts.factory.createJSDocOptionalType(o.type);
}
export function updateJSDocOptionalType(o) {
    return ts.factory.updateJSDocOptionalType(o.node, o.type);
}
export function createJSDocFunctionType(o) {
    return ts.factory.createJSDocFunctionType(o.parameters, o.type);
}
export function updateJSDocFunctionType(o) {
    return ts.factory.updateJSDocFunctionType(o.node, o.parameters, o.type);
}
export function createJSDocVariadicType(o) {
    return ts.factory.createJSDocVariadicType(o.type);
}
export function updateJSDocVariadicType(o) {
    return ts.factory.updateJSDocVariadicType(o.node, o.type);
}
export function createJSDocNamepathType(o) {
    return ts.factory.createJSDocNamepathType(o.type);
}
export function updateJSDocNamepathType(o) {
    return ts.factory.updateJSDocNamepathType(o.node, o.type);
}
export function createJSDocTypeExpression(o) {
    return ts.factory.createJSDocTypeExpression(o.type);
}
export function updateJSDocTypeExpression(o) {
    return ts.factory.updateJSDocTypeExpression(o.node, o.type);
}
export function createJSDocNameReference(o) {
    return ts.factory.createJSDocNameReference(o.name);
}
export function updateJSDocNameReference(o) {
    return ts.factory.updateJSDocNameReference(o.node, o.name);
}
export function createJSDocMemberName(o) {
    return ts.factory.createJSDocMemberName(o.left, o.right);
}
export function updateJSDocMemberName(o) {
    return ts.factory.updateJSDocMemberName(o.node, o.left, o.right);
}
export function createJSDocLink(o) {
    return ts.factory.createJSDocLink(o.name, o.text);
}
export function updateJSDocLink(o) {
    return ts.factory.updateJSDocLink(o.node, o.name, o.text);
}
export function createJSDocLinkCode(o) {
    return ts.factory.createJSDocLinkCode(o.name, o.text);
}
export function updateJSDocLinkCode(o) {
    return ts.factory.updateJSDocLinkCode(o.node, o.name, o.text);
}
export function createJSDocLinkPlain(o) {
    return ts.factory.createJSDocLinkPlain(o.name, o.text);
}
export function updateJSDocLinkPlain(o) {
    return ts.factory.updateJSDocLinkPlain(o.node, o.name, o.text);
}
export function createJSDocTypeLiteral(o) {
    return ts.factory.createJSDocTypeLiteral(o.jsDocPropertyTags, o.isArrayType);
}
export function updateJSDocTypeLiteral(o) {
    return ts.factory.updateJSDocTypeLiteral(o.node, o.jsDocPropertyTags, o.isArrayType);
}
export function createJSDocSignature(o) {
    return ts.factory.createJSDocSignature(o.typeParameters, o.parameters, o.type);
}
export function updateJSDocSignature(o) {
    return ts.factory.updateJSDocSignature(o.node, o.typeParameters, o.parameters, o.type);
}
export function createJSDocTemplateTag(o) {
    return ts.factory.createJSDocTemplateTag(o.tagName, o.constraint, o.typeParameters, o.comment);
}
export function updateJSDocTemplateTag(o) {
    return ts.factory.updateJSDocTemplateTag(o.node, o.tagName, o.constraint, o.typeParameters, o.comment);
}
export function createJSDocTypedefTag(o) {
    return ts.factory.createJSDocTypedefTag(o.tagName, o.typeExpression, o.fullName, o.comment);
}
export function updateJSDocTypedefTag(o) {
    return ts.factory.updateJSDocTypedefTag(o.node, o.tagName, o.typeExpression, o.fullName, o.comment);
}
export function createJSDocParameterTag(o) {
    return ts.factory.createJSDocParameterTag(o.tagName, o.name, o.isBracketed, o.typeExpression, o.isNameFirst, o.comment);
}
export function updateJSDocParameterTag(o) {
    return ts.factory.updateJSDocParameterTag(o.node, o.tagName, o.name, o.isBracketed, o.typeExpression, o.isNameFirst, o.comment);
}
export function createJSDocPropertyTag(o) {
    return ts.factory.createJSDocPropertyTag(o.tagName, o.name, o.isBracketed, o.typeExpression, o.isNameFirst, o.comment);
}
export function updateJSDocPropertyTag(o) {
    return ts.factory.updateJSDocPropertyTag(o.node, o.tagName, o.name, o.isBracketed, o.typeExpression, o.isNameFirst, o.comment);
}
export function createJSDocTypeTag(o) {
    return ts.factory.createJSDocTypeTag(o.tagName, o.typeExpression, o.comment);
}
export function updateJSDocTypeTag(o) {
    return ts.factory.updateJSDocTypeTag(o.node, o.tagName, o.typeExpression, o.comment);
}
export function createJSDocSeeTag(o) {
    return ts.factory.createJSDocSeeTag(o.tagName, o.nameExpression, o.comment);
}
export function updateJSDocSeeTag(o) {
    return ts.factory.updateJSDocSeeTag(o.node, o.tagName, o.nameExpression, o.comment);
}
export function createJSDocReturnTag(o) {
    return ts.factory.createJSDocReturnTag(o.tagName, o.typeExpression, o.comment);
}
export function updateJSDocReturnTag(o) {
    return ts.factory.updateJSDocReturnTag(o.node, o.tagName, o.typeExpression, o.comment);
}
export function createJSDocThisTag(o) {
    return ts.factory.createJSDocThisTag(o.tagName, o.typeExpression, o.comment);
}
export function updateJSDocThisTag(o) {
    return ts.factory.updateJSDocThisTag(o.node, o.tagName, o.typeExpression, o.comment);
}
export function createJSDocEnumTag(o) {
    return ts.factory.createJSDocEnumTag(o.tagName, o.typeExpression, o.comment);
}
export function updateJSDocEnumTag(o) {
    return ts.factory.updateJSDocEnumTag(o.node, o.tagName, o.typeExpression, o.comment);
}
export function createJSDocCallbackTag(o) {
    return ts.factory.createJSDocCallbackTag(o.tagName, o.typeExpression, o.fullName, o.comment);
}
export function updateJSDocCallbackTag(o) {
    return ts.factory.updateJSDocCallbackTag(o.node, o.tagName, o.typeExpression, o.fullName, o.comment);
}
export function createJSDocOverloadTag(o) {
    return ts.factory.createJSDocOverloadTag(o.tagName, o.typeExpression, o.comment);
}
export function updateJSDocOverloadTag(o) {
    return ts.factory.updateJSDocOverloadTag(o.node, o.tagName, o.typeExpression, o.comment);
}
export function createJSDocAugmentsTag(o) {
    return ts.factory.createJSDocAugmentsTag(o.tagName, o.className, o.comment);
}
export function updateJSDocAugmentsTag(o) {
    return ts.factory.updateJSDocAugmentsTag(o.node, o.tagName, o.className, o.comment);
}
export function createJSDocImplementsTag(o) {
    return ts.factory.createJSDocImplementsTag(o.tagName, o.className, o.comment);
}
export function updateJSDocImplementsTag(o) {
    return ts.factory.updateJSDocImplementsTag(o.node, o.tagName, o.className, o.comment);
}
export function createJSDocAuthorTag(o) {
    return ts.factory.createJSDocAuthorTag(o.tagName, o.comment);
}
export function updateJSDocAuthorTag(o) {
    return ts.factory.updateJSDocAuthorTag(o.node, o.tagName, o.comment);
}
export function createJSDocClassTag(o) {
    return ts.factory.createJSDocClassTag(o.tagName, o.comment);
}
export function updateJSDocClassTag(o) {
    return ts.factory.updateJSDocClassTag(o.node, o.tagName, o.comment);
}
export function createJSDocPublicTag(o) {
    return ts.factory.createJSDocPublicTag(o.tagName, o.comment);
}
export function updateJSDocPublicTag(o) {
    return ts.factory.updateJSDocPublicTag(o.node, o.tagName, o.comment);
}
export function createJSDocPrivateTag(o) {
    return ts.factory.createJSDocPrivateTag(o.tagName, o.comment);
}
export function updateJSDocPrivateTag(o) {
    return ts.factory.updateJSDocPrivateTag(o.node, o.tagName, o.comment);
}
export function createJSDocProtectedTag(o) {
    return ts.factory.createJSDocProtectedTag(o.tagName, o.comment);
}
export function updateJSDocProtectedTag(o) {
    return ts.factory.updateJSDocProtectedTag(o.node, o.tagName, o.comment);
}
export function createJSDocReadonlyTag(o) {
    return ts.factory.createJSDocReadonlyTag(o.tagName, o.comment);
}
export function updateJSDocReadonlyTag(o) {
    return ts.factory.updateJSDocReadonlyTag(o.node, o.tagName, o.comment);
}
export function createJSDocUnknownTag(o) {
    return ts.factory.createJSDocUnknownTag(o.tagName, o.comment);
}
export function updateJSDocUnknownTag(o) {
    return ts.factory.updateJSDocUnknownTag(o.node, o.tagName, o.comment);
}
export function createJSDocDeprecatedTag(o) {
    return ts.factory.createJSDocDeprecatedTag(o.tagName, o.comment);
}
export function updateJSDocDeprecatedTag(o) {
    return ts.factory.updateJSDocDeprecatedTag(o.node, o.tagName, o.comment);
}
export function createJSDocOverrideTag(o) {
    return ts.factory.createJSDocOverrideTag(o.tagName, o.comment);
}
export function updateJSDocOverrideTag(o) {
    return ts.factory.updateJSDocOverrideTag(o.node, o.tagName, o.comment);
}
export function createJSDocThrowsTag(o) {
    return ts.factory.createJSDocThrowsTag(o.tagName, o.typeExpression, o.comment);
}
export function updateJSDocThrowsTag(o) {
    return ts.factory.updateJSDocThrowsTag(o.node, o.tagName, o.typeExpression, o.comment);
}
export function createJSDocSatisfiesTag(o) {
    return ts.factory.createJSDocSatisfiesTag(o.tagName, o.typeExpression, o.comment);
}
export function updateJSDocSatisfiesTag(o) {
    return ts.factory.updateJSDocSatisfiesTag(o.node, o.tagName, o.typeExpression, o.comment);
}
export function createJSDocImportTag(o) {
    return ts.factory.createJSDocImportTag(o.tagName, o.importClause, o.moduleSpecifier, o.attributes, o.comment);
}
export function updateJSDocImportTag(o) {
    return ts.factory.updateJSDocImportTag(o.node, o.tagName, o.importClause, o.moduleSpecifier, o.attributes, o.comment);
}
export function createJSDocText(o) {
    return ts.factory.createJSDocText(o.text);
}
export function updateJSDocText(o) {
    return ts.factory.updateJSDocText(o.node, o.text);
}
export function createJSDocComment(o) {
    return ts.factory.createJSDocComment(o.comment, o.tags);
}
export function updateJSDocComment(o) {
    return ts.factory.updateJSDocComment(o.node, o.comment, o.tags);
}
export function createJsxElement(o) {
    return ts.factory.createJsxElement(o.openingElement, o.children, o.closingElement);
}
export function updateJsxElement(o) {
    return ts.factory.updateJsxElement(o.node, o.openingElement, o.children, o.closingElement);
}
export function createJsxSelfClosingElement(o) {
    return ts.factory.createJsxSelfClosingElement(o.tagName, o.typeArguments, o.attributes);
}
export function updateJsxSelfClosingElement(o) {
    return ts.factory.updateJsxSelfClosingElement(o.node, o.tagName, o.typeArguments, o.attributes);
}
export function createJsxOpeningElement(o) {
    return ts.factory.createJsxOpeningElement(o.tagName, o.typeArguments, o.attributes);
}
export function updateJsxOpeningElement(o) {
    return ts.factory.updateJsxOpeningElement(o.node, o.tagName, o.typeArguments, o.attributes);
}
export function createJsxClosingElement(o) {
    return ts.factory.createJsxClosingElement(o.tagName);
}
export function updateJsxClosingElement(o) {
    return ts.factory.updateJsxClosingElement(o.node, o.tagName);
}
export function createJsxFragment(o) {
    return ts.factory.createJsxFragment(o.openingFragment, o.children, o.closingFragment);
}
export function createJsxText(o) {
    return ts.factory.createJsxText(o.text, o.containsOnlyTriviaWhiteSpaces);
}
export function updateJsxText(o) {
    return ts.factory.updateJsxText(o.node, o.text, o.containsOnlyTriviaWhiteSpaces);
}
export function createJsxOpeningFragment() {
    return ts.factory.createJsxOpeningFragment();
}
export function createJsxJsxClosingFragment() {
    return ts.factory.createJsxJsxClosingFragment();
}
export function updateJsxFragment(o) {
    return ts.factory.updateJsxFragment(o.node, o.openingFragment, o.children, o.closingFragment);
}
export function createJsxAttribute(o) {
    return ts.factory.createJsxAttribute(o.name, o.initializer);
}
export function updateJsxAttribute(o) {
    return ts.factory.updateJsxAttribute(o.node, o.name, o.initializer);
}
export function createJsxAttributes(o) {
    return ts.factory.createJsxAttributes(o.properties);
}
export function updateJsxAttributes(o) {
    return ts.factory.updateJsxAttributes(o.node, o.properties);
}
export function createJsxSpreadAttribute(o) {
    return ts.factory.createJsxSpreadAttribute(o.expression);
}
export function updateJsxSpreadAttribute(o) {
    return ts.factory.updateJsxSpreadAttribute(o.node, o.expression);
}
export function createJsxExpression(o) {
    return ts.factory.createJsxExpression(o.dotDotDotToken, o.expression);
}
export function updateJsxExpression(o) {
    return ts.factory.updateJsxExpression(o.node, o.expression);
}
export function createJsxNamespacedName(o) {
    return ts.factory.createJsxNamespacedName(o.namespace, o.name);
}
export function updateJsxNamespacedName(o) {
    return ts.factory.updateJsxNamespacedName(o.node, o.namespace, o.name);
}
export function createCaseClause(o) {
    return ts.factory.createCaseClause(o.expression, o.statements);
}
export function updateCaseClause(o) {
    return ts.factory.updateCaseClause(o.node, o.expression, o.statements);
}
export function createDefaultClause(o) {
    return ts.factory.createDefaultClause(o.statements);
}
export function updateDefaultClause(o) {
    return ts.factory.updateDefaultClause(o.node, o.statements);
}
export function createHeritageClause(o) {
    return ts.factory.createHeritageClause(o.token, o.types);
}
export function updateHeritageClause(o) {
    return ts.factory.updateHeritageClause(o.node, o.types);
}
export function createCatchClause(o) {
    return ts.factory.createCatchClause(o.variableDeclaration, o.block);
}
export function updateCatchClause(o) {
    return ts.factory.updateCatchClause(o.node, o.variableDeclaration, o.block);
}
export function createPropertyAssignment(o) {
    return ts.factory.createPropertyAssignment(o.name, o.initializer);
}
export function updatePropertyAssignment(o) {
    return ts.factory.updatePropertyAssignment(o.node, o.name, o.initializer);
}
export function createShorthandPropertyAssignment(o) {
    return ts.factory.createShorthandPropertyAssignment(o.name, o.objectAssignmentInitializer);
}
export function updateShorthandPropertyAssignment(o) {
    return ts.factory.updateShorthandPropertyAssignment(o.node, o.name, o.objectAssignmentInitializer);
}
export function createSpreadAssignment(o) {
    return ts.factory.createSpreadAssignment(o.expression);
}
export function updateSpreadAssignment(o) {
    return ts.factory.updateSpreadAssignment(o.node, o.expression);
}
export function createEnumMember(o) {
    return ts.factory.createEnumMember(o.name, o.initializer);
}
export function updateEnumMember(o) {
    return ts.factory.updateEnumMember(o.node, o.name, o.initializer);
}
export function createSourceFile(o) {
    return ts.factory.createSourceFile(o.statements, o.endOfFileToken, o.flags);
}
export function updateSourceFile(o) {
    return ts.factory.updateSourceFile(o.node, o.statements, o.isDeclarationFile, o.referencedFiles, o.typeReferences, o.hasNoDefaultLib, o.libReferences);
}
export function createNotEmittedStatement(o) {
    return ts.factory.createNotEmittedStatement(o.original);
}
export function createPartiallyEmittedExpression(o) {
    return ts.factory.createPartiallyEmittedExpression(o.expression, o.original);
}
export function updatePartiallyEmittedExpression(o) {
    return ts.factory.updatePartiallyEmittedExpression(o.node, o.expression);
}
export function createCommaListExpression(o) {
    return ts.factory.createCommaListExpression(o.elements);
}
export function updateCommaListExpression(o) {
    return ts.factory.updateCommaListExpression(o.node, o.elements);
}
export function createBundle(o) {
    return ts.factory.createBundle(o.sourceFiles);
}
export function updateBundle(o) {
    return ts.factory.updateBundle(o.node, o.sourceFiles);
}
export function createComma(o) {
    return ts.factory.createComma(o.left, o.right);
}
export function createAssignment(o) {
    return ts.factory.createAssignment(o.left, o.right);
}
export function createLogicalOr(o) {
    return ts.factory.createLogicalOr(o.left, o.right);
}
export function createLogicalAnd(o) {
    return ts.factory.createLogicalAnd(o.left, o.right);
}
export function createBitwiseOr(o) {
    return ts.factory.createBitwiseOr(o.left, o.right);
}
export function createBitwiseXor(o) {
    return ts.factory.createBitwiseXor(o.left, o.right);
}
export function createBitwiseAnd(o) {
    return ts.factory.createBitwiseAnd(o.left, o.right);
}
export function createStrictEquality(o) {
    return ts.factory.createStrictEquality(o.left, o.right);
}
export function createStrictInequality(o) {
    return ts.factory.createStrictInequality(o.left, o.right);
}
export function createEquality(o) {
    return ts.factory.createEquality(o.left, o.right);
}
export function createInequality(o) {
    return ts.factory.createInequality(o.left, o.right);
}
export function createLessThan(o) {
    return ts.factory.createLessThan(o.left, o.right);
}
export function createLessThanEquals(o) {
    return ts.factory.createLessThanEquals(o.left, o.right);
}
export function createGreaterThan(o) {
    return ts.factory.createGreaterThan(o.left, o.right);
}
export function createGreaterThanEquals(o) {
    return ts.factory.createGreaterThanEquals(o.left, o.right);
}
export function createLeftShift(o) {
    return ts.factory.createLeftShift(o.left, o.right);
}
export function createRightShift(o) {
    return ts.factory.createRightShift(o.left, o.right);
}
export function createUnsignedRightShift(o) {
    return ts.factory.createUnsignedRightShift(o.left, o.right);
}
export function createAdd(o) {
    return ts.factory.createAdd(o.left, o.right);
}
export function createSubtract(o) {
    return ts.factory.createSubtract(o.left, o.right);
}
export function createMultiply(o) {
    return ts.factory.createMultiply(o.left, o.right);
}
export function createDivide(o) {
    return ts.factory.createDivide(o.left, o.right);
}
export function createModulo(o) {
    return ts.factory.createModulo(o.left, o.right);
}
export function createExponent(o) {
    return ts.factory.createExponent(o.left, o.right);
}
export function createPrefixPlus(o) {
    return ts.factory.createPrefixPlus(o.operand);
}
export function createPrefixMinus(o) {
    return ts.factory.createPrefixMinus(o.operand);
}
export function createPrefixIncrement(o) {
    return ts.factory.createPrefixIncrement(o.operand);
}
export function createPrefixDecrement(o) {
    return ts.factory.createPrefixDecrement(o.operand);
}
export function createBitwiseNot(o) {
    return ts.factory.createBitwiseNot(o.operand);
}
export function createLogicalNot(o) {
    return ts.factory.createLogicalNot(o.operand);
}
export function createPostfixIncrement(o) {
    return ts.factory.createPostfixIncrement(o.operand);
}
export function createPostfixDecrement(o) {
    return ts.factory.createPostfixDecrement(o.operand);
}
export function createImmediatelyInvokedFunctionExpression(o) {
    return ts.factory.createImmediatelyInvokedFunctionExpression(o.statements, o.param, o.paramValue);
}
export function createImmediatelyInvokedArrowFunction(o) {
    return ts.factory.createImmediatelyInvokedArrowFunction(o.statements, o.param, o.paramValue);
}
export function createVoidZero() {
    return ts.factory.createVoidZero();
}
export function createExportDefault(o) {
    return ts.factory.createExportDefault(o.expression);
}
export function createExternalModuleExport(o) {
    return ts.factory.createExternalModuleExport(o.exportName);
}
export function restoreOuterExpressions(o) {
    return ts.factory.restoreOuterExpressions(o.outerExpression, o.innerExpression, o.kinds);
}
export function replaceModifiers(o) {
    return ts.factory.replaceModifiers(o.node, o.modifiers);
}
export function replaceDecoratorsAndModifiers(o) {
    return ts.factory.replaceDecoratorsAndModifiers(o.node, o.modifiers);
}
export function replacePropertyName(o) {
    return ts.factory.replacePropertyName(o.node, o.name);
}
//# sourceMappingURL=generated.js.map