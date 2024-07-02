import type ts from "typescript"
import type { Increment, IsNotStringKeyword, IsNumberKeyword, IsStringKeyword, KeyOf } from "../types.ts"

import type { fEnumBuilder } from "./fEnumBuilder.ts"

export type EnumMemberList = { [_: string]: EnumMember<any, any, any> }
export type EnumMemberType<List extends EnumMemberList, Name extends KeyOf<List>> =
    List[Name] extends number ? number :
    List[Name] extends string ? string :
    List[Name] extends Expression<any, infer T> ? T :
    never;

export class Expression<E extends string = string, Type extends number | string = number | string> {
    /** @ignore */
    readonly $expression: ts.Expression;

    constructor(expression: ts.Expression) {
        this.$expression = expression;
    }
}

type EnumMember<
    Name extends string | unknown,
    Init extends number | string | unknown,
    Type extends number | string,
> = {};

type LengthOfString<S extends string, T extends string[] = []> = 
    S extends `${infer F}${infer R}`
        ? LengthOfString<R, [...T, F]>
        : T['length'];

type PadNumber3<Value extends string> =
    LengthOfString<Value> extends 1 ? `00${Value}` :
    LengthOfString<Value> extends 2 ? `0${Value}` :
    LengthOfString<Value> extends 3 ? `${Value}` :
    Value;

export type fEnumBuilderAdd<B extends fEnumBuilder<any, any>, Name extends string, Init extends number | string | Expression | unknown, Type extends number | string = never> = 
    B extends fEnumBuilder<infer Members, infer N extends number> 
        ? fEnumBuilder<{ [k in keyof Members | PadNumber3<`${N}`>]: k extends keyof Members ? Members[k] : 
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