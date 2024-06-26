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

export class fEnum<Members extends EnumMemberList = {}> {
    get type() { return "enum"; }
    get name() { return this.#name; }

    /** @ignore */
    readonly $statement: ts.EnumDeclaration;

    #name: string;
    #members: Set<string>;

    constructor(name: string, statement: ts.EnumDeclaration, members: string[]) {
        this.#name = name,
        this.#members = new Set(members);
        
        this.$statement = statement;
    }

    get<Name extends KeyOf<Members>>(name: Name): _EnumMember<Members, Name>;
    get<Type extends number | string>(name: string): _EnumMember<Members, unknown, Type>
    
    get(name: string) {
        if (this.#members.has(name))
            throw new Error("No member with name: " + name);
        
        return new fEnumMember(this, name);
    }
}

export class fEnumMember<Name extends string, Expression extends string, Type extends number | string> {
    #enum: fEnum;
    #name: string;

    constructor(_enum: fEnum<any>, name: string) {
        this.#enum = _enum;
        this.#name = name;
    }
}