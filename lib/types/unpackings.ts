import { Tuple, Obj } from './index';

/**
 * Defines the type of value, which is passed to `TPromise.then(cb)` `cb` callback.
 * 
 * @param TPromise Target `Promise` to unpack result from.
 */
export type UnpackPromise<TPromise extends Promise<any>> = (
    TPromise extends Promise<infer TResult> ? TResult : never
);

/**
 * Defines the type of values of the given `TArray`
 * 
 * @param TArray Type of array to infer items type from.
 */
export type UnpackArray<TArray extends any[]> = (
    TArray extends Array<infer TItems> ? TItems : never
);

/**
 * Widens `[T1, T2, T3, ...]` tuple type into an array type `(T1 | T2 | T3 | ...)[]`
 * @param TTuple Tuple type to widen to array.
 */
export type TupleToArray<TTuple extends Tuple> = (
    TTuple extends Tuple<infer TItems> ? TItems[] : never
);

/**
 * Defines `string` or `number` or `boolean` or `Array<T[number]>` that represents
 * a widened contravariant version of the given unit type `T`.
 * 
 * @param T Unit type to widen.
 * 
 * @remarks
 * * If `T` is a tuple type it is widened to `Array<>` type.
 * * If `T` is string or number literal or `true` or `false` it gets widened to
 * `string` or `number` or `boolean` respectivelly.
 * * If `T` is not a unit type, it is left as it is. 
 */
export type Widen<T> = (
    T extends number  ? number  : 
    T extends boolean ? boolean :
    T extends string  ? string  :
    T extends Tuple   ? TupleToArray<T> :
    T
);


/**
 * Defines a `Widen<>`ed version of `TObj` with all its values widened recursively.
 * See [[Widen]]
 * @param TObj Target object (including tuple) type to widen recursively.
 */
export type DeepWiden<TObj extends Obj> = DeepWidenImpl<
    TObj extends Tuple ? TupleToArray<TObj> : TObj
>;

type DeepWidenImpl<TObj extends Obj> = {
    [TKey in keyof TObj]: TObj[TKey] extends infer TVal 
        ? (TVal extends Obj ? DeepWiden<TVal> : Widen<TVal>)
        : never;
};