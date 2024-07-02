export type IsNumberKeyword<T extends number> = 0 extends T ? 1 extends T ? true : false : false;

export type IsStringKeyword<T extends string> = "a" extends T ? "b" extends T ? true : false : false;
export type IsNotStringKeyword<T extends string> = "a" extends T ? "b" extends T ? false : true : true;

export type KeyOf<O, T extends string | number | symbol = string> = T & keyof O;

export type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;

// Increment type

type ReverseString<S extends string> = S extends `${infer a}${infer b}` ? `${ReverseString<b>}${a}` : S;
type ParseNumber<S extends string> = S extends `${infer n extends number}` ? n : never;

type IncrementSingle<N extends number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10][N]

export type Increment<N extends number> =
    ReverseString<`${N}`> extends `${infer a extends number}${infer b extends number}`
    ? ParseNumber<
        a extends 9
            ? ReverseString<`0${ReverseString<`${Increment<b>}`>}`>
            : ReverseString<`${IncrementSingle<a>}${b}`>
        >
    : IncrementSingle<N>;