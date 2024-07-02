import type { KeyOf } from "../types.ts";
import type { fEnumBuilderAdd, EnumMemberList, EnumMemberType } from "./types.ts";

import ts, { factory, SyntaxKind } from "typescript";

import { fEnum } from "./fEnum.ts";
import { Expression} from "./types.ts";

export class fEnumBuilder<Members extends EnumMemberList = {}, N extends number = 0> {
    #name: string;
    #members = new Map<string, ts.Expression>();

    constructor(name: string) {
        this.#name = name;

        // TODO: Validate name as identifier.
    }

    member<Name extends string>(name: Name): fEnumBuilderAdd<this, Name, unknown>;
    member<Name extends string, Value extends number | string>(name: Name, initial: Value): fEnumBuilderAdd<this, Name, Value>
    member<Name extends string, Value extends Expression>(name: Name, initializer: (b: fEnumMemberBuilder<Members>) => Value): fEnumBuilderAdd<this, Name, Value>
    member(name: string, initializer?: number | string | ((b: fEnumMemberBuilder<Members>) => Expression)) {
        if (this.#members.has(name))
            throw new Error("Member already exists with name: " + name);

        // TODO: Validate name as identifier.

        let expression: ts.Expression | undefined;

        switch (typeof initializer) {
            case "undefined":
                break;
            case "string":
            case "number":
                expression = createExpressionFromValue(initializer);
                break;
            case "function":
                expression = initializer(new fEnumMemberBuilder(this.#members.keys())).$expression;
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
    $build(): fEnum<Members> {
        const statement = factory.createEnumDeclaration(
            [],
            this.#name,
            Array.from(this.#members.entries(), ([name, exp]) => factory.createEnumMember(name, exp))
        );

        return new fEnum(this.#name, statement, Array.from(this.#members.keys()));
    }
}

class fEnumMemberBuilder<Members extends EnumMemberList> {
    #members: Set<string>;

    constructor(members: Iterable<string>) {
        this.#members = new Set(members)
     }

    // Member getter:
    // First overload known members
    // Second overload anonymous members

    get<Name extends KeyOf<Members>>(name: Name): Expression<Name, EnumMemberType<Members, Name>>;
    get<Type extends number | string>(name: string): Expression<"{?}", Type>;

    get(name: string) {
        if (!this.#members.has(name))
            throw new Error("No member with name: " + name);

        return new Expression(factory.createIdentifier(name))
    }

    //
    // Unary operators:
    //

    pos<T extends number>(value: T): Expression<`+${T}`, number>;
    pos<T extends string>(value: T): Expression<`+'${T}'`, number>;
    pos<E extends string>(builder: (b: this) => Expression<E>): Expression<`+(${E})`, number>
    pos(value: any) {
        return new Expression(factory.createPrefixUnaryExpression(
            SyntaxKind.PlusToken, this.#createInnerExpression(value)
        ));
    }

    neg<T extends number>(value: T): Expression<`-${T}`, number>;
    neg<T extends string>(value: T): Expression<`-'${T}'`, number>;
    neg<E extends string>(builder: (b: this) => Expression<E>): Expression<`-(${E})`, number>
    neg(value: any) {
        return new Expression(factory.createPrefixUnaryExpression(
            SyntaxKind.MinusToken, this.#createInnerExpression(value)
        ));
    }

    //
    // Binary operators
    //

    add<L extends number, R extends number>(left: L, right: R): Expression<`${L} + ${R}`, number>;
    add<L extends string, R extends number>(left: L, right: R): Expression<`'${L}' + ${R}`, string>;
    add<L extends number, R extends string>(left: L, right: R): Expression<`${L} + '${R}'`, string>;
    add<L extends string, R extends string>(left: L, right: R): Expression<`'${L}' + '${R}'`, string>;

    add<L extends string, R extends number>(left: (b: this) => Expression<L, number>, right: R): Expression<`(${L}) + ${R}`, number>;
    add<L extends string, R extends string>(left: (b: this) => Expression<L, number | string>, right: R): Expression<`(${L}) + '${R}'`, string>;

    add<L extends number, R extends string>(left: L, right: (b: this) => Expression<R, number>): Expression<`${L} + (${R})`, number>;
    add<L extends string, R extends string>(left: L, right: (b: this) => Expression<R, number | string>): Expression<`${L} + (${R})`, string>;

    add<L extends string, R extends string>(left: (b: this) => Expression<L, number>, right: (b: this) => Expression<R, number>): Expression<`(${L}) + (${R})`, number>;
    add<L extends string, R extends string>(left: (b: this) => Expression<L, number | string>, right: (b: this) => Expression<R, string>): Expression<`(${L}) + (${R})`, string>;
    add<L extends string, R extends string>(left: (b: this) => Expression<L, string>, right: (b: this) => Expression<R, number | string>): Expression<`(${L}) + (${R})`, string>;

    add(left: any, right: any) {
        return new Expression(factory.createBinaryExpression(
            this.#createInnerExpression(left),
            SyntaxKind.PlusToken,
            this.#createInnerExpression(right),
        ));
    }


    sub<L extends number, R extends number>(left: L, right: R): Expression<`${L} - ${R}`, number>;
    sub<L extends string, R extends number>(left: (b: this) => Expression<L, number>, right: R): Expression<`(${L}) - ${R}`, number>;
    sub<L extends number, R extends string>(left: L, right: (b: this) => Expression<R, number>): Expression<`${L} - (${R})`, number>;
    sub<L extends string, R extends string>(left: (b: this) => Expression<L, number>, right: (b: this) => Expression<R, number>): Expression<`(${L}) - (${R})`, number>;
    sub(left: any, right: any) {
        return new Expression(factory.createBinaryExpression(
            this.#createInnerExpression(left),
            SyntaxKind.MinusToken,
            this.#createInnerExpression(right),
        ));
    }

    mul<L extends number, R extends number>(left: L, right: R): Expression<`${L} * ${R}`, number>;
    mul<L extends string, R extends number>(left: (b: this) => Expression<L, number>, right: R): Expression<`(${L}) * ${R}`, number>;
    mul<L extends number, R extends string>(left: L, right: (b: this) => Expression<R, number>): Expression<`${L} * (${R})`, number>;
    mul<L extends string, R extends string>(left: (b: this) => Expression<L, number>, right: (b: this) => Expression<R, number>): Expression<`(${L}) * (${R})`, number>;
    mul(left: any, right: any) {
        return new Expression(factory.createBinaryExpression(
            this.#createInnerExpression(left),
            SyntaxKind.AsteriskToken,
            this.#createInnerExpression(right),
        ));
    }

    div<L extends number, R extends number>(left: L, right: R): Expression<`${L} / ${R}`, number>;
    div<L extends string, R extends number>(left: (b: this) => Expression<L, number>, right: R): Expression<`(${L}) / ${R}`, number>;
    div<L extends number, R extends string>(left: L, right: (b: this) => Expression<R, number>): Expression<`${L} / (${R})`, number>;
    div<L extends string, R extends string>(left: (b: this) => Expression<L, number>, right: (b: this) => Expression<R, number>): Expression<`(${L}) / (${R})`, number>;
    div(left: any, right: any) {
        return new Expression(factory.createBinaryExpression(
            this.#createInnerExpression(left),
            SyntaxKind.SlashToken,
            this.#createInnerExpression(right),
        ));
    }

    mod<L extends number, R extends number>(left: L, right: R): Expression<`${L} % ${R}`, number>;
    mod<L extends string, R extends number>(left: (b: this) => Expression<L, number>, right: R): Expression<`(${L}) % ${R}`, number>;
    mod<L extends number, R extends string>(left: L, right: (b: this) => Expression<R, number>): Expression<`${L} % (${R})`, number>;
    mod<L extends string, R extends string>(left: (b: this) => Expression<L, number>, right: (b: this) => Expression<R, number>): Expression<`(${L}) % (${R})`, number>;
    mod(left: any, right: any) {
        return new Expression(factory.createBinaryExpression(
            this.#createInnerExpression(left),
            SyntaxKind.PercentToken,
            this.#createInnerExpression(right),
        ));
    }

    //
    // Bitwise operators
    //

    b_or<L extends number, R extends number>(left: L, right: R): Expression<`${L} | ${R}`, number>;
    b_or<L extends string, R extends number>(left: (b: this) => Expression<L, number>, right: R): Expression<`(${L}) | ${R}`, number>;
    b_or<L extends number, R extends string>(left: L, right: (b: this) => Expression<R, number>): Expression<`${L} | (${R})`, number>;
    b_or<L extends string, R extends string>(left: (b: this) => Expression<L, number>, right: (b: this) => Expression<R, number>): Expression<`(${L}) | (${R})`, number>;
    b_or(left: any, right: any) {
        return new Expression(factory.createBinaryExpression(
            this.#createInnerExpression(left),
            SyntaxKind.BarToken,
            this.#createInnerExpression(right),
        ));
    }

    b_xor<L extends number, R extends number>(left: L, right: R): Expression<`${L} ^ ${R}`, number>;
    b_xor<L extends string, R extends number>(left: (b: this) => Expression<L, number>, right: R): Expression<`(${L}) ^ ${R}`, number>;
    b_xor<L extends number, R extends string>(left: L, right: (b: this) => Expression<R, number>): Expression<`${L} ^ (${R})`, number>;
    b_xor<L extends string, R extends string>(left: (b: this) => Expression<L, number>, right: (b: this) => Expression<R, number>): Expression<`(${L}) ^ (${R})`, number>;
    b_xor(left: any, right: any) {
        return new Expression(factory.createBinaryExpression(
            this.#createInnerExpression(left),
            SyntaxKind.CaretToken,
            this.#createInnerExpression(right),
        ));
    }

    b_and<L extends number, R extends number>(left: L, right: R): Expression<`${L} & ${R}`, number>;
    b_and<L extends string, R extends number>(left: (b: this) => Expression<L, number>, right: R): Expression<`(${L}) & ${R}`, number>;
    b_and<L extends number, R extends string>(left: L, right: (b: this) => Expression<R, number>): Expression<`${L} & (${R})`, number>;
    b_and<L extends string, R extends string>(left: (b: this) => Expression<L, number>, right: (b: this) => Expression<R, number>): Expression<`(${L}) & (${R})`, number>;
    b_and(left: any, right: any) {
        return new Expression(factory.createBinaryExpression(
            this.#createInnerExpression(left),
            SyntaxKind.AmpersandToken,
            this.#createInnerExpression(right),
        ));
    }

    b_lshift<L extends number, R extends number>(left: L, right: R): Expression<`${L} << ${R}`, number>;
    b_lshift<L extends string, R extends number>(left: (b: this) => Expression<L, number>, right: R): Expression<`(${L}) << ${R}`, number>;
    b_lshift<L extends number, R extends string>(left: L, right: (b: this) => Expression<R, number>): Expression<`${L} << (${R})`, number>;
    b_lshift<L extends string, R extends string>(left: (b: this) => Expression<L, number>, right: (b: this) => Expression<R, number>): Expression<`(${L}) << (${R})`, number>;
    b_lshift(left: any, right: any) {
        return new Expression(factory.createBinaryExpression(
            this.#createInnerExpression(left),
            SyntaxKind.LessThanLessThanToken,
            this.#createInnerExpression(right),
        ));
    }

    b_rshift<L extends number, R extends number>(left: L, right: R, withLeadingZeros: true): Expression<`${L} >>> ${R}`, number>;
    b_rshift<L extends number, R extends number>(left: L, right: R, withLeadingZeros?: false): Expression<`${L} >> ${R}`, number>;
    b_rshift<L extends string, R extends number>(left: (b: this) => Expression<L, number>, right: R, withLeadingZeros: true): Expression<`(${L}) >>> ${R}`, number>;
    b_rshift<L extends string, R extends number>(left: (b: this) => Expression<L, number>, right: R, withLeadingZeros?: false): Expression<`(${L}) >> ${R}`, number>;
    b_rshift<L extends number, R extends string>(left: L, right: (b: this) => Expression<R, number>, withLeadingZeros: true): Expression<`${L} >>> (${R})`, number>;
    b_rshift<L extends number, R extends string>(left: L, right: (b: this) => Expression<R, number>, withLeadingZeros?: false): Expression<`${L} >> (${R})`, number>;
    b_rshift<L extends string, R extends string>(left: (b: this) => Expression<L, number>, right: (b: this) => Expression<R, number>, withLeadingZeros: true): Expression<`(${L}) >>> (${R})`, number>;
    b_rshift<L extends string, R extends string>(left: (b: this) => Expression<L, number>, right: (b: this) => Expression<R, number>, withLeadingZeros?: false): Expression<`(${L}) >> (${R})`, number>;
    b_rshift(left: any, right: any, withLeadingZeros: boolean = false) {
        return new Expression(factory.createBinaryExpression(
            this.#createInnerExpression(left),
            withLeadingZeros ? SyntaxKind.GreaterThanGreaterThanGreaterThanToken : SyntaxKind.GreaterThanGreaterThanToken,
            this.#createInnerExpression(right),
        ));
    }

    #createInnerExpression(value: number | string | Expression | ((b: this) => Expression)): ts.Expression {
        return typeof value === "function"
            ? factory.createParenthesizedExpression(value(this).$expression)
            : createExpressionFromValue(value);
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
