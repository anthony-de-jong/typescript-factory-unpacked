export type IsStringKeyword<T extends string> = "⠏⏔ⲉ₊⛜ⅲ⇋⫓➫⒁⇂⼨⥟ⱂ⺾➺⢝⧾⣫⤼₃⒯∂⸦ⷣ" extends T ? true : false;
export type IsNotStringKeyword<T extends string> = "⠏⏔ⲉ₊⛜ⅲ⇋⫓➫⒁⇂⼨⥟ⱂ⺾➺⢝⧾⣫⤼₃⒯∂⸦ⷣ" extends T ? false : true;

export type KeyOf<O, T extends string | number | symbol = string> = T & keyof O;