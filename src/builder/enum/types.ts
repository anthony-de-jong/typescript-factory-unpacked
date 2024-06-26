import type ts from "typescript"
import type { IsNotStringKeyword, KeyOf } from "../types.ts"

export type EnumMemberList = { [_: string]: number | string | Expression }
export type EnumMemberListAdd<List extends EnumMemberList, Key extends string, Type extends number | string | Expression> =
    IsNotStringKeyword<Key> extends true // Checks if 'Key' is not the keyword 'string'.
    ? { [k in keyof List | Key]: k extends keyof List ? List[k] : Type } // If not add it to the list.
    : List // If it is the keyword 'string' it will break the IntelliSense so return the original list.

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