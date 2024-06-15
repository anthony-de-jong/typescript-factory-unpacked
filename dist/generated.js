/*
    This code is automayicly generated, do not edit by hand.
    Generated at: 2024-06-15 08:06:47.403
    Generated for: typescript@5.4.5
*/
import ts from "typescript";
;
export function createNodeArray({ elements, hasTrailingComma }) {
    return ts.factory.createNodeArray(elements, hasTrailingComma);
}
export function createNumericLiteral({ value, numericLiteralFlags }) {
    return ts.factory.createNumericLiteral(value, numericLiteralFlags);
}
export function createBigIntLiteral({ value }) {
    return ts.factory.createBigIntLiteral(value);
}
export function createStringLiteral({ text, isSingleQuote }) {
    return ts.factory.createStringLiteral(text, isSingleQuote);
}
export function createStringLiteralFromNode({ sourceNode, isSingleQuote }) {
    return ts.factory.createStringLiteralFromNode(sourceNode, isSingleQuote);
}
export function createRegularExpressionLiteral({ text }) {
    return ts.factory.createRegularExpressionLiteral(text);
}
export function createIdentifier({ text }) {
    return ts.factory.createIdentifier(text);
}
export function createTempVariable({ recordTempVariable, reservedInNestedScopes }) {
    return ts.factory.createTempVariable(recordTempVariable, reservedInNestedScopes);
}
export function createLoopVariable({ reservedInNestedScopes }) {
    return ts.factory.createLoopVariable(reservedInNestedScopes);
}
export function createUniqueName({ text, flags }) {
    return ts.factory.createUniqueName(text, flags);
}
export function getGeneratedNameForNode({ node, flags }) {
    return ts.factory.getGeneratedNameForNode(node, flags);
}
export function createPrivateIdentifier({ text }) {
    return ts.factory.createPrivateIdentifier(text);
}
export function createUniquePrivateName({ text }) {
    return ts.factory.createUniquePrivateName(text);
}
export function getGeneratedPrivateNameForNode({ node }) {
    return ts.factory.getGeneratedPrivateNameForNode(node);
}
export function createToken({ token }) {
    return ts.factory.createToken(token);
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
export function createModifier({ kind }) {
    return ts.factory.createModifier(kind);
}
export function createModifiersFromModifierFlags({ flags }) {
    return ts.factory.createModifiersFromModifierFlags(flags);
}
export function createQualifiedName({ left, right }) {
    return ts.factory.createQualifiedName(left, right);
}
export function updateQualifiedName({ node, left, right }) {
    return ts.factory.updateQualifiedName(node, left, right);
}
export function createComputedPropertyName({ expression }) {
    return ts.factory.createComputedPropertyName(expression);
}
export function updateComputedPropertyName({ node, expression }) {
    return ts.factory.updateComputedPropertyName(node, expression);
}
export function createTypeParameterDeclaration({ modifiers, name, constraint, defaultType }) {
    return ts.factory.createTypeParameterDeclaration(modifiers, name, constraint, defaultType);
}
export function updateTypeParameterDeclaration({ node, modifiers, name, constraint, defaultType }) {
    return ts.factory.updateTypeParameterDeclaration(node, modifiers, name, constraint, defaultType);
}
export function createParameterDeclaration({ modifiers, dotDotDotToken, name, questionToken, type, initializer }) {
    return ts.factory.createParameterDeclaration(modifiers, dotDotDotToken, name, questionToken, type, initializer);
}
export function updateParameterDeclaration({ node, modifiers, dotDotDotToken, name, questionToken, type, initializer }) {
    return ts.factory.updateParameterDeclaration(node, modifiers, dotDotDotToken, name, questionToken, type, initializer);
}
export function createDecorator({ expression }) {
    return ts.factory.createDecorator(expression);
}
export function updateDecorator({ node, expression }) {
    return ts.factory.updateDecorator(node, expression);
}
export function createPropertySignature({ modifiers, name, questionToken, type }) {
    return ts.factory.createPropertySignature(modifiers, name, questionToken, type);
}
export function updatePropertySignature({ node, modifiers, name, questionToken, type }) {
    return ts.factory.updatePropertySignature(node, modifiers, name, questionToken, type);
}
export function createPropertyDeclaration({ modifiers, name, questionOrExclamationToken, type, initializer }) {
    return ts.factory.createPropertyDeclaration(modifiers, name, questionOrExclamationToken, type, initializer);
}
export function updatePropertyDeclaration({ node, modifiers, name, questionOrExclamationToken, type, initializer }) {
    return ts.factory.updatePropertyDeclaration(node, modifiers, name, questionOrExclamationToken, type, initializer);
}
export function createMethodSignature({ modifiers, name, questionToken, typeParameters, parameters, type }) {
    return ts.factory.createMethodSignature(modifiers, name, questionToken, typeParameters, parameters, type);
}
export function updateMethodSignature({ node, modifiers, name, questionToken, typeParameters, parameters, type }) {
    return ts.factory.updateMethodSignature(node, modifiers, name, questionToken, typeParameters, parameters, type);
}
export function createMethodDeclaration({ modifiers, asteriskToken, name, questionToken, typeParameters, parameters, type, body }) {
    return ts.factory.createMethodDeclaration(modifiers, asteriskToken, name, questionToken, typeParameters, parameters, type, body);
}
export function updateMethodDeclaration({ node, modifiers, asteriskToken, name, questionToken, typeParameters, parameters, type, body }) {
    return ts.factory.updateMethodDeclaration(node, modifiers, asteriskToken, name, questionToken, typeParameters, parameters, type, body);
}
export function createConstructorDeclaration({ modifiers, parameters, body }) {
    return ts.factory.createConstructorDeclaration(modifiers, parameters, body);
}
export function updateConstructorDeclaration({ node, modifiers, parameters, body }) {
    return ts.factory.updateConstructorDeclaration(node, modifiers, parameters, body);
}
export function createGetAccessorDeclaration({ modifiers, name, parameters, type, body }) {
    return ts.factory.createGetAccessorDeclaration(modifiers, name, parameters, type, body);
}
export function updateGetAccessorDeclaration({ node, modifiers, name, parameters, type, body }) {
    return ts.factory.updateGetAccessorDeclaration(node, modifiers, name, parameters, type, body);
}
export function createSetAccessorDeclaration({ modifiers, name, parameters, body }) {
    return ts.factory.createSetAccessorDeclaration(modifiers, name, parameters, body);
}
export function updateSetAccessorDeclaration({ node, modifiers, name, parameters, body }) {
    return ts.factory.updateSetAccessorDeclaration(node, modifiers, name, parameters, body);
}
export function createCallSignature({ typeParameters, parameters, type }) {
    return ts.factory.createCallSignature(typeParameters, parameters, type);
}
export function updateCallSignature({ node, typeParameters, parameters, type }) {
    return ts.factory.updateCallSignature(node, typeParameters, parameters, type);
}
export function createConstructSignature({ typeParameters, parameters, type }) {
    return ts.factory.createConstructSignature(typeParameters, parameters, type);
}
export function updateConstructSignature({ node, typeParameters, parameters, type }) {
    return ts.factory.updateConstructSignature(node, typeParameters, parameters, type);
}
export function createIndexSignature({ modifiers, parameters, type }) {
    return ts.factory.createIndexSignature(modifiers, parameters, type);
}
export function updateIndexSignature({ node, modifiers, parameters, type }) {
    return ts.factory.updateIndexSignature(node, modifiers, parameters, type);
}
export function createTemplateLiteralTypeSpan({ type, literal }) {
    return ts.factory.createTemplateLiteralTypeSpan(type, literal);
}
export function updateTemplateLiteralTypeSpan({ node, type, literal }) {
    return ts.factory.updateTemplateLiteralTypeSpan(node, type, literal);
}
export function createClassStaticBlockDeclaration({ body }) {
    return ts.factory.createClassStaticBlockDeclaration(body);
}
export function updateClassStaticBlockDeclaration({ node, body }) {
    return ts.factory.updateClassStaticBlockDeclaration(node, body);
}
export function createKeywordTypeNode({ kind }) {
    return ts.factory.createKeywordTypeNode(kind);
}
export function createTypePredicateNode({ assertsModifier, parameterName, type }) {
    return ts.factory.createTypePredicateNode(assertsModifier, parameterName, type);
}
export function updateTypePredicateNode({ node, assertsModifier, parameterName, type }) {
    return ts.factory.updateTypePredicateNode(node, assertsModifier, parameterName, type);
}
export function createTypeReferenceNode({ typeName, typeArguments }) {
    return ts.factory.createTypeReferenceNode(typeName, typeArguments);
}
export function updateTypeReferenceNode({ node, typeName, typeArguments }) {
    return ts.factory.updateTypeReferenceNode(node, typeName, typeArguments);
}
export function createFunctionTypeNode({ typeParameters, parameters, type }) {
    return ts.factory.createFunctionTypeNode(typeParameters, parameters, type);
}
export function updateFunctionTypeNode({ node, typeParameters, parameters, type }) {
    return ts.factory.updateFunctionTypeNode(node, typeParameters, parameters, type);
}
export function createConstructorTypeNode({ modifiers, typeParameters, parameters, type }) {
    return ts.factory.createConstructorTypeNode(modifiers, typeParameters, parameters, type);
}
export function updateConstructorTypeNode({ node, modifiers, typeParameters, parameters, type }) {
    return ts.factory.updateConstructorTypeNode(node, modifiers, typeParameters, parameters, type);
}
export function createTypeQueryNode({ exprName, typeArguments }) {
    return ts.factory.createTypeQueryNode(exprName, typeArguments);
}
export function updateTypeQueryNode({ node, exprName, typeArguments }) {
    return ts.factory.updateTypeQueryNode(node, exprName, typeArguments);
}
export function createTypeLiteralNode({ members }) {
    return ts.factory.createTypeLiteralNode(members);
}
export function updateTypeLiteralNode({ node, members }) {
    return ts.factory.updateTypeLiteralNode(node, members);
}
export function createArrayTypeNode({ elementType }) {
    return ts.factory.createArrayTypeNode(elementType);
}
export function updateArrayTypeNode({ node, elementType }) {
    return ts.factory.updateArrayTypeNode(node, elementType);
}
export function createTupleTypeNode({ elements }) {
    return ts.factory.createTupleTypeNode(elements);
}
export function updateTupleTypeNode({ node, elements }) {
    return ts.factory.updateTupleTypeNode(node, elements);
}
export function createNamedTupleMember({ dotDotDotToken, name, questionToken, type }) {
    return ts.factory.createNamedTupleMember(dotDotDotToken, name, questionToken, type);
}
export function updateNamedTupleMember({ node, dotDotDotToken, name, questionToken, type }) {
    return ts.factory.updateNamedTupleMember(node, dotDotDotToken, name, questionToken, type);
}
export function createOptionalTypeNode({ type }) {
    return ts.factory.createOptionalTypeNode(type);
}
export function updateOptionalTypeNode({ node, type }) {
    return ts.factory.updateOptionalTypeNode(node, type);
}
export function createRestTypeNode({ type }) {
    return ts.factory.createRestTypeNode(type);
}
export function updateRestTypeNode({ node, type }) {
    return ts.factory.updateRestTypeNode(node, type);
}
export function createUnionTypeNode({ types }) {
    return ts.factory.createUnionTypeNode(types);
}
export function updateUnionTypeNode({ node, types }) {
    return ts.factory.updateUnionTypeNode(node, types);
}
export function createIntersectionTypeNode({ types }) {
    return ts.factory.createIntersectionTypeNode(types);
}
export function updateIntersectionTypeNode({ node, types }) {
    return ts.factory.updateIntersectionTypeNode(node, types);
}
export function createConditionalTypeNode({ checkType, extendsType, trueType, falseType }) {
    return ts.factory.createConditionalTypeNode(checkType, extendsType, trueType, falseType);
}
export function updateConditionalTypeNode({ node, checkType, extendsType, trueType, falseType }) {
    return ts.factory.updateConditionalTypeNode(node, checkType, extendsType, trueType, falseType);
}
export function createInferTypeNode({ typeParameter }) {
    return ts.factory.createInferTypeNode(typeParameter);
}
export function updateInferTypeNode({ node, typeParameter }) {
    return ts.factory.updateInferTypeNode(node, typeParameter);
}
export function createImportTypeNode({ argument, attributes, qualifier, typeArguments, isTypeOf }) {
    return ts.factory.createImportTypeNode(argument, attributes, qualifier, typeArguments, isTypeOf);
}
export function updateImportTypeNode({ node, argument, attributes, qualifier, typeArguments, isTypeOf }) {
    return ts.factory.updateImportTypeNode(node, argument, attributes, qualifier, typeArguments, isTypeOf);
}
export function createParenthesizedType({ type }) {
    return ts.factory.createParenthesizedType(type);
}
export function updateParenthesizedType({ node, type }) {
    return ts.factory.updateParenthesizedType(node, type);
}
export function createThisTypeNode() {
    return ts.factory.createThisTypeNode();
}
export function createTypeOperatorNode({ operator, type }) {
    return ts.factory.createTypeOperatorNode(operator, type);
}
export function updateTypeOperatorNode({ node, type }) {
    return ts.factory.updateTypeOperatorNode(node, type);
}
export function createIndexedAccessTypeNode({ objectType, indexType }) {
    return ts.factory.createIndexedAccessTypeNode(objectType, indexType);
}
export function updateIndexedAccessTypeNode({ node, objectType, indexType }) {
    return ts.factory.updateIndexedAccessTypeNode(node, objectType, indexType);
}
export function createMappedTypeNode({ readonlyToken, typeParameter, nameType, questionToken, type, members }) {
    return ts.factory.createMappedTypeNode(readonlyToken, typeParameter, nameType, questionToken, type, members);
}
export function updateMappedTypeNode({ node, readonlyToken, typeParameter, nameType, questionToken, type, members }) {
    return ts.factory.updateMappedTypeNode(node, readonlyToken, typeParameter, nameType, questionToken, type, members);
}
export function createLiteralTypeNode({ literal }) {
    return ts.factory.createLiteralTypeNode(literal);
}
export function updateLiteralTypeNode({ node, literal }) {
    return ts.factory.updateLiteralTypeNode(node, literal);
}
export function createTemplateLiteralType({ head, templateSpans }) {
    return ts.factory.createTemplateLiteralType(head, templateSpans);
}
export function updateTemplateLiteralType({ node, head, templateSpans }) {
    return ts.factory.updateTemplateLiteralType(node, head, templateSpans);
}
export function createObjectBindingPattern({ elements }) {
    return ts.factory.createObjectBindingPattern(elements);
}
export function updateObjectBindingPattern({ node, elements }) {
    return ts.factory.updateObjectBindingPattern(node, elements);
}
export function createArrayBindingPattern({ elements }) {
    return ts.factory.createArrayBindingPattern(elements);
}
export function updateArrayBindingPattern({ node, elements }) {
    return ts.factory.updateArrayBindingPattern(node, elements);
}
export function createBindingElement({ dotDotDotToken, propertyName, name, initializer }) {
    return ts.factory.createBindingElement(dotDotDotToken, propertyName, name, initializer);
}
export function updateBindingElement({ node, dotDotDotToken, propertyName, name, initializer }) {
    return ts.factory.updateBindingElement(node, dotDotDotToken, propertyName, name, initializer);
}
export function createArrayLiteralExpression({ elements, multiLine }) {
    return ts.factory.createArrayLiteralExpression(elements, multiLine);
}
export function updateArrayLiteralExpression({ node, elements }) {
    return ts.factory.updateArrayLiteralExpression(node, elements);
}
export function createObjectLiteralExpression({ properties, multiLine }) {
    return ts.factory.createObjectLiteralExpression(properties, multiLine);
}
export function updateObjectLiteralExpression({ node, properties }) {
    return ts.factory.updateObjectLiteralExpression(node, properties);
}
export function createPropertyAccessExpression({ expression, name }) {
    return ts.factory.createPropertyAccessExpression(expression, name);
}
export function updatePropertyAccessExpression({ node, expression, name }) {
    return ts.factory.updatePropertyAccessExpression(node, expression, name);
}
export function createPropertyAccessChain({ expression, questionDotToken, name }) {
    return ts.factory.createPropertyAccessChain(expression, questionDotToken, name);
}
export function updatePropertyAccessChain({ node, expression, questionDotToken, name }) {
    return ts.factory.updatePropertyAccessChain(node, expression, questionDotToken, name);
}
export function createElementAccessExpression({ expression, index }) {
    return ts.factory.createElementAccessExpression(expression, index);
}
export function updateElementAccessExpression({ node, expression, argumentExpression }) {
    return ts.factory.updateElementAccessExpression(node, expression, argumentExpression);
}
export function createElementAccessChain({ expression, questionDotToken, index }) {
    return ts.factory.createElementAccessChain(expression, questionDotToken, index);
}
export function updateElementAccessChain({ node, expression, questionDotToken, argumentExpression }) {
    return ts.factory.updateElementAccessChain(node, expression, questionDotToken, argumentExpression);
}
export function createCallExpression({ expression, typeArguments, argumentsArray }) {
    return ts.factory.createCallExpression(expression, typeArguments, argumentsArray);
}
export function updateCallExpression({ node, expression, typeArguments, argumentsArray }) {
    return ts.factory.updateCallExpression(node, expression, typeArguments, argumentsArray);
}
export function createCallChain({ expression, questionDotToken, typeArguments, argumentsArray }) {
    return ts.factory.createCallChain(expression, questionDotToken, typeArguments, argumentsArray);
}
export function updateCallChain({ node, expression, questionDotToken, typeArguments, argumentsArray }) {
    return ts.factory.updateCallChain(node, expression, questionDotToken, typeArguments, argumentsArray);
}
export function createNewExpression({ expression, typeArguments, argumentsArray }) {
    return ts.factory.createNewExpression(expression, typeArguments, argumentsArray);
}
export function updateNewExpression({ node, expression, typeArguments, argumentsArray }) {
    return ts.factory.updateNewExpression(node, expression, typeArguments, argumentsArray);
}
export function createTaggedTemplateExpression({ tag, typeArguments, template }) {
    return ts.factory.createTaggedTemplateExpression(tag, typeArguments, template);
}
export function updateTaggedTemplateExpression({ node, tag, typeArguments, template }) {
    return ts.factory.updateTaggedTemplateExpression(node, tag, typeArguments, template);
}
export function createTypeAssertion({ type, expression }) {
    return ts.factory.createTypeAssertion(type, expression);
}
export function updateTypeAssertion({ node, type, expression }) {
    return ts.factory.updateTypeAssertion(node, type, expression);
}
export function createParenthesizedExpression({ expression }) {
    return ts.factory.createParenthesizedExpression(expression);
}
export function updateParenthesizedExpression({ node, expression }) {
    return ts.factory.updateParenthesizedExpression(node, expression);
}
export function createFunctionExpression({ modifiers, asteriskToken, name, typeParameters, parameters, type, body }) {
    return ts.factory.createFunctionExpression(modifiers, asteriskToken, name, typeParameters, parameters, type, body);
}
export function updateFunctionExpression({ node, modifiers, asteriskToken, name, typeParameters, parameters, type, body }) {
    return ts.factory.updateFunctionExpression(node, modifiers, asteriskToken, name, typeParameters, parameters, type, body);
}
export function createArrowFunction({ modifiers, typeParameters, parameters, type, equalsGreaterThanToken, body }) {
    return ts.factory.createArrowFunction(modifiers, typeParameters, parameters, type, equalsGreaterThanToken, body);
}
export function updateArrowFunction({ node, modifiers, typeParameters, parameters, type, equalsGreaterThanToken, body }) {
    return ts.factory.updateArrowFunction(node, modifiers, typeParameters, parameters, type, equalsGreaterThanToken, body);
}
export function createDeleteExpression({ expression }) {
    return ts.factory.createDeleteExpression(expression);
}
export function updateDeleteExpression({ node, expression }) {
    return ts.factory.updateDeleteExpression(node, expression);
}
export function createTypeOfExpression({ expression }) {
    return ts.factory.createTypeOfExpression(expression);
}
export function updateTypeOfExpression({ node, expression }) {
    return ts.factory.updateTypeOfExpression(node, expression);
}
export function createVoidExpression({ expression }) {
    return ts.factory.createVoidExpression(expression);
}
export function updateVoidExpression({ node, expression }) {
    return ts.factory.updateVoidExpression(node, expression);
}
export function createAwaitExpression({ expression }) {
    return ts.factory.createAwaitExpression(expression);
}
export function updateAwaitExpression({ node, expression }) {
    return ts.factory.updateAwaitExpression(node, expression);
}
export function createPrefixUnaryExpression({ operator, operand }) {
    return ts.factory.createPrefixUnaryExpression(operator, operand);
}
export function updatePrefixUnaryExpression({ node, operand }) {
    return ts.factory.updatePrefixUnaryExpression(node, operand);
}
export function createPostfixUnaryExpression({ operand, operator }) {
    return ts.factory.createPostfixUnaryExpression(operand, operator);
}
export function updatePostfixUnaryExpression({ node, operand }) {
    return ts.factory.updatePostfixUnaryExpression(node, operand);
}
export function createBinaryExpression({ left, operator, right }) {
    return ts.factory.createBinaryExpression(left, operator, right);
}
export function updateBinaryExpression({ node, left, operator, right }) {
    return ts.factory.updateBinaryExpression(node, left, operator, right);
}
export function createConditionalExpression({ condition, questionToken, whenTrue, colonToken, whenFalse }) {
    return ts.factory.createConditionalExpression(condition, questionToken, whenTrue, colonToken, whenFalse);
}
export function updateConditionalExpression({ node, condition, questionToken, whenTrue, colonToken, whenFalse }) {
    return ts.factory.updateConditionalExpression(node, condition, questionToken, whenTrue, colonToken, whenFalse);
}
export function createTemplateExpression({ head, templateSpans }) {
    return ts.factory.createTemplateExpression(head, templateSpans);
}
export function updateTemplateExpression({ node, head, templateSpans }) {
    return ts.factory.updateTemplateExpression(node, head, templateSpans);
}
export function createTemplateHead({ text, rawText, templateFlags }) {
    return ts.factory.createTemplateHead(text, rawText, templateFlags);
}
export function createTemplateMiddle({ text, rawText, templateFlags }) {
    return ts.factory.createTemplateMiddle(text, rawText, templateFlags);
}
export function createTemplateTail({ text, rawText, templateFlags }) {
    return ts.factory.createTemplateTail(text, rawText, templateFlags);
}
export function createNoSubstitutionTemplateLiteral({ text, rawText }) {
    return ts.factory.createNoSubstitutionTemplateLiteral(text, rawText);
}
export function createYieldExpression({ asteriskToken, expression }) {
    return ts.factory.createYieldExpression(asteriskToken, expression);
}
export function updateYieldExpression({ node, asteriskToken, expression }) {
    return ts.factory.updateYieldExpression(node, asteriskToken, expression);
}
export function createSpreadElement({ expression }) {
    return ts.factory.createSpreadElement(expression);
}
export function updateSpreadElement({ node, expression }) {
    return ts.factory.updateSpreadElement(node, expression);
}
export function createClassExpression({ modifiers, name, typeParameters, heritageClauses, members }) {
    return ts.factory.createClassExpression(modifiers, name, typeParameters, heritageClauses, members);
}
export function updateClassExpression({ node, modifiers, name, typeParameters, heritageClauses, members }) {
    return ts.factory.updateClassExpression(node, modifiers, name, typeParameters, heritageClauses, members);
}
export function createOmittedExpression() {
    return ts.factory.createOmittedExpression();
}
export function createExpressionWithTypeArguments({ expression, typeArguments }) {
    return ts.factory.createExpressionWithTypeArguments(expression, typeArguments);
}
export function updateExpressionWithTypeArguments({ node, expression, typeArguments }) {
    return ts.factory.updateExpressionWithTypeArguments(node, expression, typeArguments);
}
export function createAsExpression({ expression, type }) {
    return ts.factory.createAsExpression(expression, type);
}
export function updateAsExpression({ node, expression, type }) {
    return ts.factory.updateAsExpression(node, expression, type);
}
export function createNonNullExpression({ expression }) {
    return ts.factory.createNonNullExpression(expression);
}
export function updateNonNullExpression({ node, expression }) {
    return ts.factory.updateNonNullExpression(node, expression);
}
export function createNonNullChain({ expression }) {
    return ts.factory.createNonNullChain(expression);
}
export function updateNonNullChain({ node, expression }) {
    return ts.factory.updateNonNullChain(node, expression);
}
export function createMetaProperty({ keywordToken, name }) {
    return ts.factory.createMetaProperty(keywordToken, name);
}
export function updateMetaProperty({ node, name }) {
    return ts.factory.updateMetaProperty(node, name);
}
export function createSatisfiesExpression({ expression, type }) {
    return ts.factory.createSatisfiesExpression(expression, type);
}
export function updateSatisfiesExpression({ node, expression, type }) {
    return ts.factory.updateSatisfiesExpression(node, expression, type);
}
export function createTemplateSpan({ expression, literal }) {
    return ts.factory.createTemplateSpan(expression, literal);
}
export function updateTemplateSpan({ node, expression, literal }) {
    return ts.factory.updateTemplateSpan(node, expression, literal);
}
export function createSemicolonClassElement() {
    return ts.factory.createSemicolonClassElement();
}
export function createBlock({ statements, multiLine }) {
    return ts.factory.createBlock(statements, multiLine);
}
export function updateBlock({ node, statements }) {
    return ts.factory.updateBlock(node, statements);
}
export function createVariableStatement({ modifiers, declarationList }) {
    return ts.factory.createVariableStatement(modifiers, declarationList);
}
export function updateVariableStatement({ node, modifiers, declarationList }) {
    return ts.factory.updateVariableStatement(node, modifiers, declarationList);
}
export function createEmptyStatement() {
    return ts.factory.createEmptyStatement();
}
export function createExpressionStatement({ expression }) {
    return ts.factory.createExpressionStatement(expression);
}
export function updateExpressionStatement({ node, expression }) {
    return ts.factory.updateExpressionStatement(node, expression);
}
export function createIfStatement({ expression, thenStatement, elseStatement }) {
    return ts.factory.createIfStatement(expression, thenStatement, elseStatement);
}
export function updateIfStatement({ node, expression, thenStatement, elseStatement }) {
    return ts.factory.updateIfStatement(node, expression, thenStatement, elseStatement);
}
export function createDoStatement({ statement, expression }) {
    return ts.factory.createDoStatement(statement, expression);
}
export function updateDoStatement({ node, statement, expression }) {
    return ts.factory.updateDoStatement(node, statement, expression);
}
export function createWhileStatement({ expression, statement }) {
    return ts.factory.createWhileStatement(expression, statement);
}
export function updateWhileStatement({ node, expression, statement }) {
    return ts.factory.updateWhileStatement(node, expression, statement);
}
export function createForStatement({ initializer, condition, incrementor, statement }) {
    return ts.factory.createForStatement(initializer, condition, incrementor, statement);
}
export function updateForStatement({ node, initializer, condition, incrementor, statement }) {
    return ts.factory.updateForStatement(node, initializer, condition, incrementor, statement);
}
export function createForInStatement({ initializer, expression, statement }) {
    return ts.factory.createForInStatement(initializer, expression, statement);
}
export function updateForInStatement({ node, initializer, expression, statement }) {
    return ts.factory.updateForInStatement(node, initializer, expression, statement);
}
export function createForOfStatement({ awaitModifier, initializer, expression, statement }) {
    return ts.factory.createForOfStatement(awaitModifier, initializer, expression, statement);
}
export function updateForOfStatement({ node, awaitModifier, initializer, expression, statement }) {
    return ts.factory.updateForOfStatement(node, awaitModifier, initializer, expression, statement);
}
export function createContinueStatement({ label }) {
    return ts.factory.createContinueStatement(label);
}
export function updateContinueStatement({ node, label }) {
    return ts.factory.updateContinueStatement(node, label);
}
export function createBreakStatement({ label }) {
    return ts.factory.createBreakStatement(label);
}
export function updateBreakStatement({ node, label }) {
    return ts.factory.updateBreakStatement(node, label);
}
export function createReturnStatement({ expression }) {
    return ts.factory.createReturnStatement(expression);
}
export function updateReturnStatement({ node, expression }) {
    return ts.factory.updateReturnStatement(node, expression);
}
export function createWithStatement({ expression, statement }) {
    return ts.factory.createWithStatement(expression, statement);
}
export function updateWithStatement({ node, expression, statement }) {
    return ts.factory.updateWithStatement(node, expression, statement);
}
export function createSwitchStatement({ expression, caseBlock }) {
    return ts.factory.createSwitchStatement(expression, caseBlock);
}
export function updateSwitchStatement({ node, expression, caseBlock }) {
    return ts.factory.updateSwitchStatement(node, expression, caseBlock);
}
export function createLabeledStatement({ label, statement }) {
    return ts.factory.createLabeledStatement(label, statement);
}
export function updateLabeledStatement({ node, label, statement }) {
    return ts.factory.updateLabeledStatement(node, label, statement);
}
export function createThrowStatement({ expression }) {
    return ts.factory.createThrowStatement(expression);
}
export function updateThrowStatement({ node, expression }) {
    return ts.factory.updateThrowStatement(node, expression);
}
export function createTryStatement({ tryBlock, catchClause, finallyBlock }) {
    return ts.factory.createTryStatement(tryBlock, catchClause, finallyBlock);
}
export function updateTryStatement({ node, tryBlock, catchClause, finallyBlock }) {
    return ts.factory.updateTryStatement(node, tryBlock, catchClause, finallyBlock);
}
export function createDebuggerStatement() {
    return ts.factory.createDebuggerStatement();
}
export function createVariableDeclaration({ name, exclamationToken, type, initializer }) {
    return ts.factory.createVariableDeclaration(name, exclamationToken, type, initializer);
}
export function updateVariableDeclaration({ node, name, exclamationToken, type, initializer }) {
    return ts.factory.updateVariableDeclaration(node, name, exclamationToken, type, initializer);
}
export function createVariableDeclarationList({ declarations, flags }) {
    return ts.factory.createVariableDeclarationList(declarations, flags);
}
export function updateVariableDeclarationList({ node, declarations }) {
    return ts.factory.updateVariableDeclarationList(node, declarations);
}
export function createFunctionDeclaration({ modifiers, asteriskToken, name, typeParameters, parameters, type, body }) {
    return ts.factory.createFunctionDeclaration(modifiers, asteriskToken, name, typeParameters, parameters, type, body);
}
export function updateFunctionDeclaration({ node, modifiers, asteriskToken, name, typeParameters, parameters, type, body }) {
    return ts.factory.updateFunctionDeclaration(node, modifiers, asteriskToken, name, typeParameters, parameters, type, body);
}
export function createClassDeclaration({ modifiers, name, typeParameters, heritageClauses, members }) {
    return ts.factory.createClassDeclaration(modifiers, name, typeParameters, heritageClauses, members);
}
export function updateClassDeclaration({ node, modifiers, name, typeParameters, heritageClauses, members }) {
    return ts.factory.updateClassDeclaration(node, modifiers, name, typeParameters, heritageClauses, members);
}
export function createInterfaceDeclaration({ modifiers, name, typeParameters, heritageClauses, members }) {
    return ts.factory.createInterfaceDeclaration(modifiers, name, typeParameters, heritageClauses, members);
}
export function updateInterfaceDeclaration({ node, modifiers, name, typeParameters, heritageClauses, members }) {
    return ts.factory.updateInterfaceDeclaration(node, modifiers, name, typeParameters, heritageClauses, members);
}
export function createTypeAliasDeclaration({ modifiers, name, typeParameters, type }) {
    return ts.factory.createTypeAliasDeclaration(modifiers, name, typeParameters, type);
}
export function updateTypeAliasDeclaration({ node, modifiers, name, typeParameters, type }) {
    return ts.factory.updateTypeAliasDeclaration(node, modifiers, name, typeParameters, type);
}
export function createEnumDeclaration({ modifiers, name, members }) {
    return ts.factory.createEnumDeclaration(modifiers, name, members);
}
export function updateEnumDeclaration({ node, modifiers, name, members }) {
    return ts.factory.updateEnumDeclaration(node, modifiers, name, members);
}
export function createModuleDeclaration({ modifiers, name, body, flags }) {
    return ts.factory.createModuleDeclaration(modifiers, name, body, flags);
}
export function updateModuleDeclaration({ node, modifiers, name, body }) {
    return ts.factory.updateModuleDeclaration(node, modifiers, name, body);
}
export function createModuleBlock({ statements }) {
    return ts.factory.createModuleBlock(statements);
}
export function updateModuleBlock({ node, statements }) {
    return ts.factory.updateModuleBlock(node, statements);
}
export function createCaseBlock({ clauses }) {
    return ts.factory.createCaseBlock(clauses);
}
export function updateCaseBlock({ node, clauses }) {
    return ts.factory.updateCaseBlock(node, clauses);
}
export function createNamespaceExportDeclaration({ name }) {
    return ts.factory.createNamespaceExportDeclaration(name);
}
export function updateNamespaceExportDeclaration({ node, name }) {
    return ts.factory.updateNamespaceExportDeclaration(node, name);
}
export function createImportEqualsDeclaration({ modifiers, isTypeOnly, name, moduleReference }) {
    return ts.factory.createImportEqualsDeclaration(modifiers, isTypeOnly, name, moduleReference);
}
export function updateImportEqualsDeclaration({ node, modifiers, isTypeOnly, name, moduleReference }) {
    return ts.factory.updateImportEqualsDeclaration(node, modifiers, isTypeOnly, name, moduleReference);
}
export function createImportDeclaration({ modifiers, importClause, moduleSpecifier, attributes }) {
    return ts.factory.createImportDeclaration(modifiers, importClause, moduleSpecifier, attributes);
}
export function updateImportDeclaration({ node, modifiers, importClause, moduleSpecifier, attributes }) {
    return ts.factory.updateImportDeclaration(node, modifiers, importClause, moduleSpecifier, attributes);
}
export function createImportClause({ isTypeOnly, name, namedBindings }) {
    return ts.factory.createImportClause(isTypeOnly, name, namedBindings);
}
export function updateImportClause({ node, isTypeOnly, name, namedBindings }) {
    return ts.factory.updateImportClause(node, isTypeOnly, name, namedBindings);
}
export function createAssertClause({ elements, multiLine }) {
    return ts.factory.createAssertClause(elements, multiLine);
}
export function updateAssertClause({ node, elements, multiLine }) {
    return ts.factory.updateAssertClause(node, elements, multiLine);
}
export function createAssertEntry({ name, value }) {
    return ts.factory.createAssertEntry(name, value);
}
export function updateAssertEntry({ node, name, value }) {
    return ts.factory.updateAssertEntry(node, name, value);
}
export function createImportTypeAssertionContainer({ clause, multiLine }) {
    return ts.factory.createImportTypeAssertionContainer(clause, multiLine);
}
export function updateImportTypeAssertionContainer({ node, clause, multiLine }) {
    return ts.factory.updateImportTypeAssertionContainer(node, clause, multiLine);
}
export function createImportAttributes({ elements, multiLine }) {
    return ts.factory.createImportAttributes(elements, multiLine);
}
export function updateImportAttributes({ node, elements, multiLine }) {
    return ts.factory.updateImportAttributes(node, elements, multiLine);
}
export function createImportAttribute({ name, value }) {
    return ts.factory.createImportAttribute(name, value);
}
export function updateImportAttribute({ node, name, value }) {
    return ts.factory.updateImportAttribute(node, name, value);
}
export function createNamespaceImport({ name }) {
    return ts.factory.createNamespaceImport(name);
}
export function updateNamespaceImport({ node, name }) {
    return ts.factory.updateNamespaceImport(node, name);
}
export function createNamespaceExport({ name }) {
    return ts.factory.createNamespaceExport(name);
}
export function updateNamespaceExport({ node, name }) {
    return ts.factory.updateNamespaceExport(node, name);
}
export function createNamedImports({ elements }) {
    return ts.factory.createNamedImports(elements);
}
export function updateNamedImports({ node, elements }) {
    return ts.factory.updateNamedImports(node, elements);
}
export function createImportSpecifier({ isTypeOnly, propertyName, name }) {
    return ts.factory.createImportSpecifier(isTypeOnly, propertyName, name);
}
export function updateImportSpecifier({ node, isTypeOnly, propertyName, name }) {
    return ts.factory.updateImportSpecifier(node, isTypeOnly, propertyName, name);
}
export function createExportAssignment({ modifiers, isExportEquals, expression }) {
    return ts.factory.createExportAssignment(modifiers, isExportEquals, expression);
}
export function updateExportAssignment({ node, modifiers, expression }) {
    return ts.factory.updateExportAssignment(node, modifiers, expression);
}
export function createExportDeclaration({ modifiers, isTypeOnly, exportClause, moduleSpecifier, attributes }) {
    return ts.factory.createExportDeclaration(modifiers, isTypeOnly, exportClause, moduleSpecifier, attributes);
}
export function updateExportDeclaration({ node, modifiers, isTypeOnly, exportClause, moduleSpecifier, attributes }) {
    return ts.factory.updateExportDeclaration(node, modifiers, isTypeOnly, exportClause, moduleSpecifier, attributes);
}
export function createNamedExports({ elements }) {
    return ts.factory.createNamedExports(elements);
}
export function updateNamedExports({ node, elements }) {
    return ts.factory.updateNamedExports(node, elements);
}
export function createExportSpecifier({ isTypeOnly, propertyName, name }) {
    return ts.factory.createExportSpecifier(isTypeOnly, propertyName, name);
}
export function updateExportSpecifier({ node, isTypeOnly, propertyName, name }) {
    return ts.factory.updateExportSpecifier(node, isTypeOnly, propertyName, name);
}
export function createExternalModuleReference({ expression }) {
    return ts.factory.createExternalModuleReference(expression);
}
export function updateExternalModuleReference({ node, expression }) {
    return ts.factory.updateExternalModuleReference(node, expression);
}
export function createJSDocAllType() {
    return ts.factory.createJSDocAllType();
}
export function createJSDocUnknownType() {
    return ts.factory.createJSDocUnknownType();
}
export function createJSDocNonNullableType({ type, postfix }) {
    return ts.factory.createJSDocNonNullableType(type, postfix);
}
export function updateJSDocNonNullableType({ node, type }) {
    return ts.factory.updateJSDocNonNullableType(node, type);
}
export function createJSDocNullableType({ type, postfix }) {
    return ts.factory.createJSDocNullableType(type, postfix);
}
export function updateJSDocNullableType({ node, type }) {
    return ts.factory.updateJSDocNullableType(node, type);
}
export function createJSDocOptionalType({ type }) {
    return ts.factory.createJSDocOptionalType(type);
}
export function updateJSDocOptionalType({ node, type }) {
    return ts.factory.updateJSDocOptionalType(node, type);
}
export function createJSDocFunctionType({ parameters, type }) {
    return ts.factory.createJSDocFunctionType(parameters, type);
}
export function updateJSDocFunctionType({ node, parameters, type }) {
    return ts.factory.updateJSDocFunctionType(node, parameters, type);
}
export function createJSDocVariadicType({ type }) {
    return ts.factory.createJSDocVariadicType(type);
}
export function updateJSDocVariadicType({ node, type }) {
    return ts.factory.updateJSDocVariadicType(node, type);
}
export function createJSDocNamepathType({ type }) {
    return ts.factory.createJSDocNamepathType(type);
}
export function updateJSDocNamepathType({ node, type }) {
    return ts.factory.updateJSDocNamepathType(node, type);
}
export function createJSDocTypeExpression({ type }) {
    return ts.factory.createJSDocTypeExpression(type);
}
export function updateJSDocTypeExpression({ node, type }) {
    return ts.factory.updateJSDocTypeExpression(node, type);
}
export function createJSDocNameReference({ name }) {
    return ts.factory.createJSDocNameReference(name);
}
export function updateJSDocNameReference({ node, name }) {
    return ts.factory.updateJSDocNameReference(node, name);
}
export function createJSDocMemberName({ left, right }) {
    return ts.factory.createJSDocMemberName(left, right);
}
export function updateJSDocMemberName({ node, left, right }) {
    return ts.factory.updateJSDocMemberName(node, left, right);
}
export function createJSDocLink({ name, text }) {
    return ts.factory.createJSDocLink(name, text);
}
export function updateJSDocLink({ node, name, text }) {
    return ts.factory.updateJSDocLink(node, name, text);
}
export function createJSDocLinkCode({ name, text }) {
    return ts.factory.createJSDocLinkCode(name, text);
}
export function updateJSDocLinkCode({ node, name, text }) {
    return ts.factory.updateJSDocLinkCode(node, name, text);
}
export function createJSDocLinkPlain({ name, text }) {
    return ts.factory.createJSDocLinkPlain(name, text);
}
export function updateJSDocLinkPlain({ node, name, text }) {
    return ts.factory.updateJSDocLinkPlain(node, name, text);
}
export function createJSDocTypeLiteral({ jsDocPropertyTags, isArrayType }) {
    return ts.factory.createJSDocTypeLiteral(jsDocPropertyTags, isArrayType);
}
export function updateJSDocTypeLiteral({ node, jsDocPropertyTags, isArrayType }) {
    return ts.factory.updateJSDocTypeLiteral(node, jsDocPropertyTags, isArrayType);
}
export function createJSDocSignature({ typeParameters, parameters, type }) {
    return ts.factory.createJSDocSignature(typeParameters, parameters, type);
}
export function updateJSDocSignature({ node, typeParameters, parameters, type }) {
    return ts.factory.updateJSDocSignature(node, typeParameters, parameters, type);
}
export function createJSDocTemplateTag({ tagName, constraint, typeParameters, comment }) {
    return ts.factory.createJSDocTemplateTag(tagName, constraint, typeParameters, comment);
}
export function updateJSDocTemplateTag({ node, tagName, constraint, typeParameters, comment }) {
    return ts.factory.updateJSDocTemplateTag(node, tagName, constraint, typeParameters, comment);
}
export function createJSDocTypedefTag({ tagName, typeExpression, fullName, comment }) {
    return ts.factory.createJSDocTypedefTag(tagName, typeExpression, fullName, comment);
}
export function updateJSDocTypedefTag({ node, tagName, typeExpression, fullName, comment }) {
    return ts.factory.updateJSDocTypedefTag(node, tagName, typeExpression, fullName, comment);
}
export function createJSDocParameterTag({ tagName, name, isBracketed, typeExpression, isNameFirst, comment }) {
    return ts.factory.createJSDocParameterTag(tagName, name, isBracketed, typeExpression, isNameFirst, comment);
}
export function updateJSDocParameterTag({ node, tagName, name, isBracketed, typeExpression, isNameFirst, comment }) {
    return ts.factory.updateJSDocParameterTag(node, tagName, name, isBracketed, typeExpression, isNameFirst, comment);
}
export function createJSDocPropertyTag({ tagName, name, isBracketed, typeExpression, isNameFirst, comment }) {
    return ts.factory.createJSDocPropertyTag(tagName, name, isBracketed, typeExpression, isNameFirst, comment);
}
export function updateJSDocPropertyTag({ node, tagName, name, isBracketed, typeExpression, isNameFirst, comment }) {
    return ts.factory.updateJSDocPropertyTag(node, tagName, name, isBracketed, typeExpression, isNameFirst, comment);
}
export function createJSDocTypeTag({ tagName, typeExpression, comment }) {
    return ts.factory.createJSDocTypeTag(tagName, typeExpression, comment);
}
export function updateJSDocTypeTag({ node, tagName, typeExpression, comment }) {
    return ts.factory.updateJSDocTypeTag(node, tagName, typeExpression, comment);
}
export function createJSDocSeeTag({ tagName, nameExpression, comment }) {
    return ts.factory.createJSDocSeeTag(tagName, nameExpression, comment);
}
export function updateJSDocSeeTag({ node, tagName, nameExpression, comment }) {
    return ts.factory.updateJSDocSeeTag(node, tagName, nameExpression, comment);
}
export function createJSDocReturnTag({ tagName, typeExpression, comment }) {
    return ts.factory.createJSDocReturnTag(tagName, typeExpression, comment);
}
export function updateJSDocReturnTag({ node, tagName, typeExpression, comment }) {
    return ts.factory.updateJSDocReturnTag(node, tagName, typeExpression, comment);
}
export function createJSDocThisTag({ tagName, typeExpression, comment }) {
    return ts.factory.createJSDocThisTag(tagName, typeExpression, comment);
}
export function updateJSDocThisTag({ node, tagName, typeExpression, comment }) {
    return ts.factory.updateJSDocThisTag(node, tagName, typeExpression, comment);
}
export function createJSDocEnumTag({ tagName, typeExpression, comment }) {
    return ts.factory.createJSDocEnumTag(tagName, typeExpression, comment);
}
export function updateJSDocEnumTag({ node, tagName, typeExpression, comment }) {
    return ts.factory.updateJSDocEnumTag(node, tagName, typeExpression, comment);
}
export function createJSDocCallbackTag({ tagName, typeExpression, fullName, comment }) {
    return ts.factory.createJSDocCallbackTag(tagName, typeExpression, fullName, comment);
}
export function updateJSDocCallbackTag({ node, tagName, typeExpression, fullName, comment }) {
    return ts.factory.updateJSDocCallbackTag(node, tagName, typeExpression, fullName, comment);
}
export function createJSDocOverloadTag({ tagName, typeExpression, comment }) {
    return ts.factory.createJSDocOverloadTag(tagName, typeExpression, comment);
}
export function updateJSDocOverloadTag({ node, tagName, typeExpression, comment }) {
    return ts.factory.updateJSDocOverloadTag(node, tagName, typeExpression, comment);
}
export function createJSDocAugmentsTag({ tagName, className, comment }) {
    return ts.factory.createJSDocAugmentsTag(tagName, className, comment);
}
export function updateJSDocAugmentsTag({ node, tagName, className, comment }) {
    return ts.factory.updateJSDocAugmentsTag(node, tagName, className, comment);
}
export function createJSDocImplementsTag({ tagName, className, comment }) {
    return ts.factory.createJSDocImplementsTag(tagName, className, comment);
}
export function updateJSDocImplementsTag({ node, tagName, className, comment }) {
    return ts.factory.updateJSDocImplementsTag(node, tagName, className, comment);
}
export function createJSDocAuthorTag({ tagName, comment }) {
    return ts.factory.createJSDocAuthorTag(tagName, comment);
}
export function updateJSDocAuthorTag({ node, tagName, comment }) {
    return ts.factory.updateJSDocAuthorTag(node, tagName, comment);
}
export function createJSDocClassTag({ tagName, comment }) {
    return ts.factory.createJSDocClassTag(tagName, comment);
}
export function updateJSDocClassTag({ node, tagName, comment }) {
    return ts.factory.updateJSDocClassTag(node, tagName, comment);
}
export function createJSDocPublicTag({ tagName, comment }) {
    return ts.factory.createJSDocPublicTag(tagName, comment);
}
export function updateJSDocPublicTag({ node, tagName, comment }) {
    return ts.factory.updateJSDocPublicTag(node, tagName, comment);
}
export function createJSDocPrivateTag({ tagName, comment }) {
    return ts.factory.createJSDocPrivateTag(tagName, comment);
}
export function updateJSDocPrivateTag({ node, tagName, comment }) {
    return ts.factory.updateJSDocPrivateTag(node, tagName, comment);
}
export function createJSDocProtectedTag({ tagName, comment }) {
    return ts.factory.createJSDocProtectedTag(tagName, comment);
}
export function updateJSDocProtectedTag({ node, tagName, comment }) {
    return ts.factory.updateJSDocProtectedTag(node, tagName, comment);
}
export function createJSDocReadonlyTag({ tagName, comment }) {
    return ts.factory.createJSDocReadonlyTag(tagName, comment);
}
export function updateJSDocReadonlyTag({ node, tagName, comment }) {
    return ts.factory.updateJSDocReadonlyTag(node, tagName, comment);
}
export function createJSDocUnknownTag({ tagName, comment }) {
    return ts.factory.createJSDocUnknownTag(tagName, comment);
}
export function updateJSDocUnknownTag({ node, tagName, comment }) {
    return ts.factory.updateJSDocUnknownTag(node, tagName, comment);
}
export function createJSDocDeprecatedTag({ tagName, comment }) {
    return ts.factory.createJSDocDeprecatedTag(tagName, comment);
}
export function updateJSDocDeprecatedTag({ node, tagName, comment }) {
    return ts.factory.updateJSDocDeprecatedTag(node, tagName, comment);
}
export function createJSDocOverrideTag({ tagName, comment }) {
    return ts.factory.createJSDocOverrideTag(tagName, comment);
}
export function updateJSDocOverrideTag({ node, tagName, comment }) {
    return ts.factory.updateJSDocOverrideTag(node, tagName, comment);
}
export function createJSDocThrowsTag({ tagName, typeExpression, comment }) {
    return ts.factory.createJSDocThrowsTag(tagName, typeExpression, comment);
}
export function updateJSDocThrowsTag({ node, tagName, typeExpression, comment }) {
    return ts.factory.updateJSDocThrowsTag(node, tagName, typeExpression, comment);
}
export function createJSDocSatisfiesTag({ tagName, typeExpression, comment }) {
    return ts.factory.createJSDocSatisfiesTag(tagName, typeExpression, comment);
}
export function updateJSDocSatisfiesTag({ node, tagName, typeExpression, comment }) {
    return ts.factory.updateJSDocSatisfiesTag(node, tagName, typeExpression, comment);
}
export function createJSDocText({ text }) {
    return ts.factory.createJSDocText(text);
}
export function updateJSDocText({ node, text }) {
    return ts.factory.updateJSDocText(node, text);
}
export function createJSDocComment({ comment, tags }) {
    return ts.factory.createJSDocComment(comment, tags);
}
export function updateJSDocComment({ node, comment, tags }) {
    return ts.factory.updateJSDocComment(node, comment, tags);
}
export function createJsxElement({ openingElement, children, closingElement }) {
    return ts.factory.createJsxElement(openingElement, children, closingElement);
}
export function updateJsxElement({ node, openingElement, children, closingElement }) {
    return ts.factory.updateJsxElement(node, openingElement, children, closingElement);
}
export function createJsxSelfClosingElement({ tagName, typeArguments, attributes }) {
    return ts.factory.createJsxSelfClosingElement(tagName, typeArguments, attributes);
}
export function updateJsxSelfClosingElement({ node, tagName, typeArguments, attributes }) {
    return ts.factory.updateJsxSelfClosingElement(node, tagName, typeArguments, attributes);
}
export function createJsxOpeningElement({ tagName, typeArguments, attributes }) {
    return ts.factory.createJsxOpeningElement(tagName, typeArguments, attributes);
}
export function updateJsxOpeningElement({ node, tagName, typeArguments, attributes }) {
    return ts.factory.updateJsxOpeningElement(node, tagName, typeArguments, attributes);
}
export function createJsxClosingElement({ tagName }) {
    return ts.factory.createJsxClosingElement(tagName);
}
export function updateJsxClosingElement({ node, tagName }) {
    return ts.factory.updateJsxClosingElement(node, tagName);
}
export function createJsxFragment({ openingFragment, children, closingFragment }) {
    return ts.factory.createJsxFragment(openingFragment, children, closingFragment);
}
export function createJsxText({ text, containsOnlyTriviaWhiteSpaces }) {
    return ts.factory.createJsxText(text, containsOnlyTriviaWhiteSpaces);
}
export function updateJsxText({ node, text, containsOnlyTriviaWhiteSpaces }) {
    return ts.factory.updateJsxText(node, text, containsOnlyTriviaWhiteSpaces);
}
export function createJsxOpeningFragment() {
    return ts.factory.createJsxOpeningFragment();
}
export function createJsxJsxClosingFragment() {
    return ts.factory.createJsxJsxClosingFragment();
}
export function updateJsxFragment({ node, openingFragment, children, closingFragment }) {
    return ts.factory.updateJsxFragment(node, openingFragment, children, closingFragment);
}
export function createJsxAttribute({ name, initializer }) {
    return ts.factory.createJsxAttribute(name, initializer);
}
export function updateJsxAttribute({ node, name, initializer }) {
    return ts.factory.updateJsxAttribute(node, name, initializer);
}
export function createJsxAttributes({ properties }) {
    return ts.factory.createJsxAttributes(properties);
}
export function updateJsxAttributes({ node, properties }) {
    return ts.factory.updateJsxAttributes(node, properties);
}
export function createJsxSpreadAttribute({ expression }) {
    return ts.factory.createJsxSpreadAttribute(expression);
}
export function updateJsxSpreadAttribute({ node, expression }) {
    return ts.factory.updateJsxSpreadAttribute(node, expression);
}
export function createJsxExpression({ dotDotDotToken, expression }) {
    return ts.factory.createJsxExpression(dotDotDotToken, expression);
}
export function updateJsxExpression({ node, expression }) {
    return ts.factory.updateJsxExpression(node, expression);
}
export function createJsxNamespacedName({ namespace, name }) {
    return ts.factory.createJsxNamespacedName(namespace, name);
}
export function updateJsxNamespacedName({ node, namespace, name }) {
    return ts.factory.updateJsxNamespacedName(node, namespace, name);
}
export function createCaseClause({ expression, statements }) {
    return ts.factory.createCaseClause(expression, statements);
}
export function updateCaseClause({ node, expression, statements }) {
    return ts.factory.updateCaseClause(node, expression, statements);
}
export function createDefaultClause({ statements }) {
    return ts.factory.createDefaultClause(statements);
}
export function updateDefaultClause({ node, statements }) {
    return ts.factory.updateDefaultClause(node, statements);
}
export function createHeritageClause({ token, types }) {
    return ts.factory.createHeritageClause(token, types);
}
export function updateHeritageClause({ node, types }) {
    return ts.factory.updateHeritageClause(node, types);
}
export function createCatchClause({ variableDeclaration, block }) {
    return ts.factory.createCatchClause(variableDeclaration, block);
}
export function updateCatchClause({ node, variableDeclaration, block }) {
    return ts.factory.updateCatchClause(node, variableDeclaration, block);
}
export function createPropertyAssignment({ name, initializer }) {
    return ts.factory.createPropertyAssignment(name, initializer);
}
export function updatePropertyAssignment({ node, name, initializer }) {
    return ts.factory.updatePropertyAssignment(node, name, initializer);
}
export function createShorthandPropertyAssignment({ name, objectAssignmentInitializer }) {
    return ts.factory.createShorthandPropertyAssignment(name, objectAssignmentInitializer);
}
export function updateShorthandPropertyAssignment({ node, name, objectAssignmentInitializer }) {
    return ts.factory.updateShorthandPropertyAssignment(node, name, objectAssignmentInitializer);
}
export function createSpreadAssignment({ expression }) {
    return ts.factory.createSpreadAssignment(expression);
}
export function updateSpreadAssignment({ node, expression }) {
    return ts.factory.updateSpreadAssignment(node, expression);
}
export function createEnumMember({ name, initializer }) {
    return ts.factory.createEnumMember(name, initializer);
}
export function updateEnumMember({ node, name, initializer }) {
    return ts.factory.updateEnumMember(node, name, initializer);
}
export function createSourceFile({ statements, endOfFileToken, flags }) {
    return ts.factory.createSourceFile(statements, endOfFileToken, flags);
}
export function updateSourceFile({ node, statements, isDeclarationFile, referencedFiles, typeReferences, hasNoDefaultLib, libReferences }) {
    return ts.factory.updateSourceFile(node, statements, isDeclarationFile, referencedFiles, typeReferences, hasNoDefaultLib, libReferences);
}
export function createNotEmittedStatement({ original }) {
    return ts.factory.createNotEmittedStatement(original);
}
export function createPartiallyEmittedExpression({ expression, original }) {
    return ts.factory.createPartiallyEmittedExpression(expression, original);
}
export function updatePartiallyEmittedExpression({ node, expression }) {
    return ts.factory.updatePartiallyEmittedExpression(node, expression);
}
export function createCommaListExpression({ elements }) {
    return ts.factory.createCommaListExpression(elements);
}
export function updateCommaListExpression({ node, elements }) {
    return ts.factory.updateCommaListExpression(node, elements);
}
export function createBundle({ sourceFiles, prepends }) {
    return ts.factory.createBundle(sourceFiles, prepends);
}
export function updateBundle({ node, sourceFiles, prepends }) {
    return ts.factory.updateBundle(node, sourceFiles, prepends);
}
export function createComma({ left, right }) {
    return ts.factory.createComma(left, right);
}
export function createAssignment({ left, right }) {
    return ts.factory.createAssignment(left, right);
}
export function createLogicalOr({ left, right }) {
    return ts.factory.createLogicalOr(left, right);
}
export function createLogicalAnd({ left, right }) {
    return ts.factory.createLogicalAnd(left, right);
}
export function createBitwiseOr({ left, right }) {
    return ts.factory.createBitwiseOr(left, right);
}
export function createBitwiseXor({ left, right }) {
    return ts.factory.createBitwiseXor(left, right);
}
export function createBitwiseAnd({ left, right }) {
    return ts.factory.createBitwiseAnd(left, right);
}
export function createStrictEquality({ left, right }) {
    return ts.factory.createStrictEquality(left, right);
}
export function createStrictInequality({ left, right }) {
    return ts.factory.createStrictInequality(left, right);
}
export function createEquality({ left, right }) {
    return ts.factory.createEquality(left, right);
}
export function createInequality({ left, right }) {
    return ts.factory.createInequality(left, right);
}
export function createLessThan({ left, right }) {
    return ts.factory.createLessThan(left, right);
}
export function createLessThanEquals({ left, right }) {
    return ts.factory.createLessThanEquals(left, right);
}
export function createGreaterThan({ left, right }) {
    return ts.factory.createGreaterThan(left, right);
}
export function createGreaterThanEquals({ left, right }) {
    return ts.factory.createGreaterThanEquals(left, right);
}
export function createLeftShift({ left, right }) {
    return ts.factory.createLeftShift(left, right);
}
export function createRightShift({ left, right }) {
    return ts.factory.createRightShift(left, right);
}
export function createUnsignedRightShift({ left, right }) {
    return ts.factory.createUnsignedRightShift(left, right);
}
export function createAdd({ left, right }) {
    return ts.factory.createAdd(left, right);
}
export function createSubtract({ left, right }) {
    return ts.factory.createSubtract(left, right);
}
export function createMultiply({ left, right }) {
    return ts.factory.createMultiply(left, right);
}
export function createDivide({ left, right }) {
    return ts.factory.createDivide(left, right);
}
export function createModulo({ left, right }) {
    return ts.factory.createModulo(left, right);
}
export function createExponent({ left, right }) {
    return ts.factory.createExponent(left, right);
}
export function createPrefixPlus({ operand }) {
    return ts.factory.createPrefixPlus(operand);
}
export function createPrefixMinus({ operand }) {
    return ts.factory.createPrefixMinus(operand);
}
export function createPrefixIncrement({ operand }) {
    return ts.factory.createPrefixIncrement(operand);
}
export function createPrefixDecrement({ operand }) {
    return ts.factory.createPrefixDecrement(operand);
}
export function createBitwiseNot({ operand }) {
    return ts.factory.createBitwiseNot(operand);
}
export function createLogicalNot({ operand }) {
    return ts.factory.createLogicalNot(operand);
}
export function createPostfixIncrement({ operand }) {
    return ts.factory.createPostfixIncrement(operand);
}
export function createPostfixDecrement({ operand }) {
    return ts.factory.createPostfixDecrement(operand);
}
export function createImmediatelyInvokedFunctionExpression({ statements, param, paramValue }) {
    return ts.factory.createImmediatelyInvokedFunctionExpression(statements, param, paramValue);
}
export function createImmediatelyInvokedArrowFunction({ statements, param, paramValue }) {
    return ts.factory.createImmediatelyInvokedArrowFunction(statements, param, paramValue);
}
export function createVoidZero() {
    return ts.factory.createVoidZero();
}
export function createExportDefault({ expression }) {
    return ts.factory.createExportDefault(expression);
}
export function createExternalModuleExport({ exportName }) {
    return ts.factory.createExternalModuleExport(exportName);
}
export function restoreOuterExpressions({ outerExpression, innerExpression, kinds }) {
    return ts.factory.restoreOuterExpressions(outerExpression, innerExpression, kinds);
}
export function replaceModifiers({ node, modifiers }) {
    return ts.factory.replaceModifiers(node, modifiers);
}
export function replaceDecoratorsAndModifiers({ node, modifiers }) {
    return ts.factory.replaceDecoratorsAndModifiers(node, modifiers);
}
export function replacePropertyName({ node, name }) {
    return ts.factory.replacePropertyName(node, name);
}
//# sourceMappingURL=generated.js.map