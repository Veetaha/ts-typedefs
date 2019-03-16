/**
 * Defines the type of value, which is passed to `TPromise.then(cb)` `cb` callback.
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