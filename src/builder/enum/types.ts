import type ts from "typescript"
import type { Increment, IsNotStringKeyword, IsNumberKeyword, IsStringKeyword, KeyOf } from "../types.ts"

import type { fEnumBuilder } from "./fEnumBuilder.ts"

export type EnumMemberList = { 
    [_: string]: EnumMember<any, any, any> 
}

export type EnumMemberListNames<List extends EnumMemberList> = {
    [k in KeyOf<List, number> as (List[k] extends EnumMember<infer N, any, any> ? unknown extends N ? never : N : never)]: List[k]
}

export type EnumMemberType<List extends EnumMemberList, Name extends KeyOf<EnumMemberListNames<List>>> =
    EnumMemberListNames<List>[Name] extends EnumMember<any, any, infer X> ? X : never;

type EnumMember<
    Name extends string | unknown,
    Init extends number | string | unknown,
    Type extends number | string,
> = {};

export type EnumBuilderAdd<B extends fEnumBuilder<any, any>, Name extends string, Init extends number | string | Expression | unknown, Type extends number | string = never> =
    B extends fEnumBuilder<infer EnumName, infer Members, infer N extends number>
    ? fEnumBuilder<EnumName, { [k in keyof Members | N]: k extends keyof Members ? Members[k] :
        Init extends Expression<infer Init, infer Type>
        ? EnumMember<IsNotStringKeyword<Name> extends true ? Name : unknown, Init, Type>
        : EnumMember<
            IsNotStringKeyword<Name> extends true ? Name : unknown,
            Init extends string ? IsStringKeyword<Init> extends true ? unknown : Init :
            Init extends number ? IsNumberKeyword<Init> extends true ? unknown : Init :
            Init,
            never extends Type
            ? Init extends string ? string : number
            : Type extends string ? string : number
        >
    }, Increment<N>>
    : B;

export class Expression<E extends string = string, Type extends number | string = number | string> {
    /** @ignore */
    readonly $expression: ts.Expression;

    constructor(expression: ts.Expression) {
        this.$expression = expression;
    }
}