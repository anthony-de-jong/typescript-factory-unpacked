import type { KeyOf } from "../types.ts";
import type { EnumBuilderAdd, EnumMemberList, EnumMemberType, EnumMemberListNames } from "./types.ts";

import ts, { factory, SyntaxKind } from "typescript";

import { fEnum } from "./fEnum.ts";
import { Expression } from "./types.ts";

export class fEnumBuilder<
    EnumName extends string = any,
    EnumMembers extends EnumMemberList = {}, 
    EnumIterator extends number = 0
> {
    #members = new Map<string, ts.Expression>();

    $identifier: ts.Identifier;

    constructor(name: EnumName) {
        // TODO: Validate name as identifier.

        this.$identifier = factory.createIdentifier(name);
    }

    member<Name extends string>(name: Name): EnumBuilderAdd<this, Name, unknown>;
    member<Name extends string, Value extends number | string>(name: Name, initial: Value): EnumBuilderAdd<this, Name, Value>
    member<Name extends string, Value extends Expression>(name: Name, initializer: (b: fEnumMemberBuilder<EnumName, EnumMembers>) => Value): EnumBuilderAdd<this, Name, Value>
    member(name: string, initializer?: number | string | ((b: fEnumMemberBuilder<EnumName,EnumMembers>) => Expression)) {
        if (this.#members.has(name))
            throw new Error("Member already exists with name: " + name);

        let expression: ts.Expression | undefined;

        switch (typeof initializer) {
            case "undefined":
                break;
            case "string":
            case "number":
                expression = createExpressionFromValue(initializer);
                break;
            case "function":
                expression = initializer(new fEnumMemberBuilder(this, this.#members.keys())).$expression;
                break;
            default:
                throw new Error("Invalid argument");
        }

        // TODO: Validate initializer if valid in existing order.

        this.#members.set(name, expression);

        // Cast to unkown to make all the method definitions happy.
        return this as unknown;
    }

    /** @ignore */
    $build(): fEnum<EnumName, EnumMembers> {
        const statement = factory.createEnumDeclaration(
            [],
            this.$identifier,
            Array.from(this.#members.entries(), ([name, exp]) => factory.createEnumMember(factory.createStringLiteral(name), exp))
        );

        return new fEnum(statement);
    }
}

class fEnumMemberBuilder<
    EnumName extends string, 
    EnumMembers extends EnumMemberList
> {
    #builder: fEnumBuilder;
    #members: Set<string>;

    constructor(builder: fEnumBuilder<any, any, any>, members: Iterable<string>) {
        this.#builder = builder;
        this.#members = new Set(members)
    }

    // Member getter:
    // First overload known members
    // Second overload anonymous members

    get<Name extends KeyOf<EnumMemberListNames<EnumMembers>>>(name: Name): Expression<`${EnumName}[${Name}]`, EnumMemberType<EnumMembers, Name>>;
    get<Type extends number | string>(name: string): Expression<`${EnumName}[?]`, Type>;

    get(name: string) {
        if (!this.#members.has(name))
            throw new Error("No member with name: " + name);

        return new Expression(
            factory.createElementAccessExpression(this.#builder.$identifier, factory.createStringLiteral(name))
        );
    }

    //
    // Unary operators:
    //

    pos<T extends number>(value: T): Expression<`+${T}`, number>;
    pos<T extends string>(value: T): Expression<`+'${T}'`, number>;
    pos<E extends string>(value: Expression<E>): Expression<`+(${E})`, number>
    pos(value: any) {
        return new Expression(factory.createPrefixUnaryExpression(
            SyntaxKind.PlusToken, createExpressionFromValue(value)
        ));
    }

    neg<T extends number>(value: T): Expression<`-${T}`, number>;
    neg<T extends string>(value: T): Expression<`-'${T}'`, number>;
    neg<E extends string>(value: Expression<E>): Expression<`-(${E})`, number>
    neg(value: any) {
        return new Expression(factory.createPrefixUnaryExpression(
            SyntaxKind.MinusToken, createExpressionFromValue(value)
        ));
    }

    //
    // Binary operators
    //

    add<L extends number, R extends number>(left: L, right: R): Expression<`${L} + ${R}`, number>;
    add<L extends string, R extends number>(left: L, right: R): Expression<`'${L}' + ${R}`, string>;
    add<L extends number, R extends string>(left: L, right: R): Expression<`${L} + '${R}'`, string>;
    add<L extends string, R extends string>(left: L, right: R): Expression<`'${L}' + '${R}'`, string>;

    add<L extends string, R extends number>(left: Expression<L, number>, right: R): Expression<`(${L}) + ${R}`, number>;
    add<L extends string, R extends string>(left: Expression<L, number | string>, right: R): Expression<`(${L}) + '${R}'`, string>;

    add<L extends number, R extends string>(left: L, right: Expression<R, number>): Expression<`${L} + (${R})`, number>;
    add<L extends string, R extends string>(left: L, right: Expression<R, number | string>): Expression<`${L} + (${R})`, string>;
    
    add<L extends string, R extends string>(left: Expression<L, number>, right: Expression<R, number>): Expression<`(${L}) + (${R})`, number>;
    add<L extends string, R extends string>(left: Expression<L, number | string>, right: Expression<R, string>): Expression<`(${L}) + (${R})`, string>;
    add<L extends string, R extends string>(left: Expression<L, string>, right: Expression<R, number | string>): Expression<`(${L}) + (${R})`, string>;

    add(left: any, right: any) {
        return new Expression(factory.createBinaryExpression(
            createExpressionFromValue(left),
            SyntaxKind.PlusToken,
            createExpressionFromValue(right),
        ));
    }


    sub<L extends number, R extends number>(left: L, right: R): Expression<`${L} - ${R}`, number>;
    sub<L extends string, R extends number>(left: Expression<L, number>, right: R): Expression<`(${L}) - ${R}`, number>;
    sub<L extends number, R extends string>(left: L, right: Expression<R, number>): Expression<`${L} - (${R})`, number>;
    sub<L extends string, R extends string>(left: Expression<L, number>, right: Expression<R, number>): Expression<`(${L}) - (${R})`, number>;
    sub(left: any, right: any) {
        return new Expression(factory.createBinaryExpression(
            createExpressionFromValue(left),
            SyntaxKind.MinusToken,
            createExpressionFromValue(right),
        ));
    }

    mul<L extends number, R extends number>(left: L, right: R): Expression<`${L} * ${R}`, number>;
    mul<L extends string, R extends number>(left: Expression<L, number>, right: R): Expression<`(${L}) * ${R}`, number>;
    mul<L extends number, R extends string>(left: L, right: Expression<R, number>): Expression<`${L} * (${R})`, number>;
    mul<L extends string, R extends string>(left: Expression<L, number>, right: Expression<R, number>): Expression<`(${L}) * (${R})`, number>;
    mul(left: any, right: any) {
        return new Expression(factory.createBinaryExpression(
            createExpressionFromValue(left),
            SyntaxKind.AsteriskToken,
            createExpressionFromValue(right),
        ));
    }

    div<L extends number, R extends number>(left: L, right: R): Expression<`${L} / ${R}`, number>;
    div<L extends string, R extends number>(left: Expression<L, number>, right: R): Expression<`(${L}) / ${R}`, number>;
    div<L extends number, R extends string>(left: L, right: Expression<R, number>): Expression<`${L} / (${R})`, number>;
    div<L extends string, R extends string>(left: Expression<L, number>, right: Expression<R, number>): Expression<`(${L}) / (${R})`, number>;
    div(left: any, right: any) {
        return new Expression(factory.createBinaryExpression(
            createExpressionFromValue(left),
            SyntaxKind.SlashToken,
            createExpressionFromValue(right),
        ));
    }

    mod<L extends number, R extends number>(left: L, right: R): Expression<`${L} % ${R}`, number>;
    mod<L extends string, R extends number>(left: Expression<L, number>, right: R): Expression<`(${L}) % ${R}`, number>;
    mod<L extends number, R extends string>(left: L, right: Expression<R, number>): Expression<`${L} % (${R})`, number>;
    mod<L extends string, R extends string>(left: Expression<L, number>, right: Expression<R, number>): Expression<`(${L}) % (${R})`, number>;
    mod(left: any, right: any) {
        return new Expression(factory.createBinaryExpression(
            createExpressionFromValue(left),
            SyntaxKind.PercentToken,
            createExpressionFromValue(right),
        ));
    }

    //
    // Bitwise operators
    //

    b_or<L extends number, R extends number>(left: L, right: R): Expression<`${L} | ${R}`, number>;
    b_or<L extends string, R extends number>(left: Expression<L, number>, right: R): Expression<`(${L}) | ${R}`, number>;
    b_or<L extends number, R extends string>(left: L, right: Expression<R, number>): Expression<`${L} | (${R})`, number>;
    b_or<L extends string, R extends string>(left: Expression<L, number>, right: Expression<R, number>): Expression<`(${L}) | (${R})`, number>;
    b_or(left: any, right: any) {
        return new Expression(factory.createBinaryExpression(
            createExpressionFromValue(left),
            SyntaxKind.BarToken,
            createExpressionFromValue(right),
        ));
    }

    b_xor<L extends number, R extends number>(left: L, right: R): Expression<`${L} ^ ${R}`, number>;
    b_xor<L extends string, R extends number>(left: Expression<L, number>, right: R): Expression<`(${L}) ^ ${R}`, number>;
    b_xor<L extends number, R extends string>(left: L, right: Expression<R, number>): Expression<`${L} ^ (${R})`, number>;
    b_xor<L extends string, R extends string>(left: Expression<L, number>, right: Expression<R, number>): Expression<`(${L}) ^ (${R})`, number>;
    b_xor(left: any, right: any) {
        return new Expression(factory.createBinaryExpression(
            createExpressionFromValue(left),
            SyntaxKind.CaretToken,
            createExpressionFromValue(right),
        ));
    }

    b_and<L extends number, R extends number>(left: L, right: R): Expression<`${L} & ${R}`, number>;
    b_and<L extends string, R extends number>(left: Expression<L, number>, right: R): Expression<`(${L}) & ${R}`, number>;
    b_and<L extends number, R extends string>(left: L, right: Expression<R, number>): Expression<`${L} & (${R})`, number>;
    b_and<L extends string, R extends string>(left: Expression<L, number>, right: Expression<R, number>): Expression<`(${L}) & (${R})`, number>;
    b_and(left: any, right: any) {
        return new Expression(factory.createBinaryExpression(
            createExpressionFromValue(left),
            SyntaxKind.AmpersandToken,
            createExpressionFromValue(right),
        ));
    }

    b_lshift<L extends number, R extends number>(left: L, right: R): Expression<`${L} << ${R}`, number>;
    b_lshift<L extends string, R extends number>(left: Expression<L, number>, right: R): Expression<`(${L}) << ${R}`, number>;
    b_lshift<L extends number, R extends string>(left: L, right: Expression<R, number>): Expression<`${L} << (${R})`, number>;
    b_lshift<L extends string, R extends string>(left: Expression<L, number>, right: Expression<R, number>): Expression<`(${L}) << (${R})`, number>;
    b_lshift(left: any, right: any) {
        return new Expression(factory.createBinaryExpression(
            createExpressionFromValue(left),
            SyntaxKind.LessThanLessThanToken,
            createExpressionFromValue(right),
        ));
    }

    b_rshift<L extends number, R extends number>(left: L, right: R, withLeadingZeros: true): Expression<`${L} >>> ${R}`, number>;
    b_rshift<L extends number, R extends number>(left: L, right: R, withLeadingZeros?: false): Expression<`${L} >> ${R}`, number>;
    b_rshift<L extends string, R extends number>(left: Expression<L, number>, right: R, withLeadingZeros: true): Expression<`(${L}) >>> ${R}`, number>;
    b_rshift<L extends string, R extends number>(left: Expression<L, number>, right: R, withLeadingZeros?: false): Expression<`(${L}) >> ${R}`, number>;
    b_rshift<L extends number, R extends string>(left: L, right: Expression<R, number>, withLeadingZeros: true): Expression<`${L} >>> (${R})`, number>;
    b_rshift<L extends number, R extends string>(left: L, right: Expression<R, number>, withLeadingZeros?: false): Expression<`${L} >> (${R})`, number>;
    b_rshift<L extends string, R extends string>(left: Expression<L, number>, right: Expression<R, number>, withLeadingZeros: true): Expression<`(${L}) >>> (${R})`, number>;
    b_rshift<L extends string, R extends string>(left: Expression<L, number>, right: Expression<R, number>, withLeadingZeros?: false): Expression<`(${L}) >> (${R})`, number>;
    b_rshift(left: any, right: any, withLeadingZeros: boolean = false) {
        return new Expression(factory.createBinaryExpression(
            createExpressionFromValue(left),
            withLeadingZeros ? SyntaxKind.GreaterThanGreaterThanGreaterThanToken : SyntaxKind.GreaterThanGreaterThanToken,
            createExpressionFromValue(right),
        ));
    }
}

function createExpressionFromValue(value: number | string | Expression): ts.Expression {
    switch (typeof value) {
        case "string":
            return factory.createStringLiteral(value);
        case "number":
            return value < 0
                ? factory.createPrefixUnaryExpression(SyntaxKind.MinusToken, factory.createNumericLiteral(value))
                : factory.createNumericLiteral(value);
        case "object":
            if (value instanceof Expression)
                return value.$expression;
        default:
            throw new Error("Invalid argument");
    }
}
