import { Obj } from "./objects";

/**
 * Defines a discriminated union of two object types. This simply means that
 * when properties of `A` are present in the value shape all the properties of
 * `B` **must** be `undefined` and vice versa.
 *
 * @remarks
 * The resulting type ensures that the properties of only one object type (`A` or `B`) are
 * present in the resulting object shape with all other properties of the second
 * object type being `undefined` via the special handling of unit type properties
 * in TypeScript object unions.
 *
 * In this case the discriminator of the union is the unit type `undefined`.
 *
 * ```ts
 * // Properties "a" and "c" on foo may not coexist, one of them must be undefined.
 * // Type of property "b" depends on the active object shape (it may be either
 * // number or string)
 * type Foo = MutuallyExclusive<{ a: string, b: string }, { b: number, c: boolean }>;
 *
 * declare const val: Foo;
 *
 * if (val.a == null) {
 *     val; // { a?: undefined, b: number, c: boolean }
 * } else {
 *     val; // { a: string, b: string, c?: undefined }
 * }
 * ```
 */
export type MutuallyExclusive<A extends Obj, B extends Obj> =
    | (A & { [TKey in Exclude<keyof B, keyof A>]?: undefined})
    | (B & { [TKey in Exclude<keyof A, keyof B>]?: undefined});
