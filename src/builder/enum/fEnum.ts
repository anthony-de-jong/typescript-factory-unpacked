import type { KeyOf } from "../types.ts";
import type { EnumMemberList, Expression } from "./types.ts";

import ts from "typescript";

type _EnumMember<Members extends EnumMemberList, Name extends string | unknown, Type extends number | string = never> =
    Name extends KeyOf<Members>
        ? Members[Name] extends string | number
            ? fEnumMember<Name, `${Members[Name]}`, Members[Name] extends number ? number : string>
            : Members[Name] extends Expression<infer E, infer T> 
                ? fEnumMember<Name, E, T> 
                : never
        : fEnumMember<"{?}", "{?}", Type>

export class fEnum<
    EnumName extends string = any, 
    EnumMembers extends EnumMemberList = {}
> {
    get type() { return "enum"; }
    get name() { return this.$statement.name.text; }

    /** @ignore */
    readonly $statement: ts.EnumDeclaration;

    #members: Set<string>;

    constructor(statement: ts.EnumDeclaration) {
        this.$statement = statement;
        this.#members = new Set(statement.members.map(a => (a.name as ts.StringLiteral).text));
    }

    get<Name extends KeyOf<EnumMembers>>(name: Name): _EnumMember<EnumMembers, Name>;
    get<Type extends number | string>(name: string): _EnumMember<EnumMembers, unknown, Type>
    get(name: string) {
        if (this.#members.has(name))
            throw new Error("No member with name: " + name);
        
        return new fEnumMember(this, name);
    }
}

export class fEnumMember<
    Name extends string, 
    Expression extends string, Type extends number | string
> {
    #enum: fEnum;
    #name: string;

    constructor(_enum: fEnum<any, any>, name: string) {
        this.#enum = _enum;
        this.#name = name;
    }
}