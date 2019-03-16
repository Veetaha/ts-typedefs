/**
 * Defines an intersection type of all union items.
 * 
 * @param TUnion Union of any types that will be intersected.
 * 
 * @remarks
 * Because of TypeScript boolean representation as `type boolean = true | false`
 * you get the following result:
 * `UnionToIntersection<boolean> === true & false`
 * 
 * @copyright
 * https://stackoverflow.com/a/50375286/9259330
 */
export type UnionToIntersection<TUnion> = (
    PackIntoFunctionParam<TUnion> extends (param: infer TItem) => void ? TItem : never
);
type PackIntoFunctionParam<T> = T extends any ? (param: T) => void : never;

