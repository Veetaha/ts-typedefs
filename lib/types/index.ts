export * from './decorators';
export * from './filter-keys';
export * from './conditions';

/**
 * Defines a type T that may also be null or undefined.
 * @param T Type to make "nullable".
 */
export type Maybe<T> = T | null | undefined;

/**
 * Defines a union of all possible value types defined in the language.
 * @remarks null and undefined are considered to be primitive types.
 */
export type Primitive = 
    | number 
    | string 
    | boolean  
    | undefined 
    | symbol 
    | null
    | bigint;
/**
 * Defines a union of all possible strings retuned by applying  `typeof` operator.
 */
export type TypeName = 
    | 'number'    
    | 'string' 
    | 'boolean'  
    | 'undefined' 
    | 'object' 
    | 'function' 
    | 'symbol'
    | 'bigint';

/**
 * Defines an object with string keys, and all values of TValue type.
 * @param TValue Type of values, stored in object's properties.
 */
export type Obj<TValue = unknown, TKey extends string | number = string> = (
    Record<TKey, TValue>
);

/**
 * Same as BasicObject<>, but defines all properties as readonly.
 * @param TValue Type of values, stored in object's readonly properties.
 */
export type ReadonlyObj<TValue = unknown, TKey extends string | number = string> = (
    Readonly<Obj<TValue, TKey>>
);

/**
 * Defines a Function subtype with the given arguments, return value and `this` context.
 * 
 * @param TArgs   Tuple of argument types that this function accepts.
 * @param TRetval Type of value this function returns.
 * @param TThis   Type `this` function context.
 * 
 */
export interface Func<
    TArgs extends any[] = any[],
    TRetval             = unknown,
    TThis               = unknown
> extends Function {
    // tslint:disable-next-line: callable-types
    (this: TThis, ...args: TArgs): TRetval;
}


/**
 * Defines an asyncronous function, which is typically marked with `async` qualifier,
 * with arguments specified as a tuple type `TArgs` and return type as `Promise<TRet>`.
 *
 * @param TArgs   Tuple type of arguments that defined async function accepts.
 * @param TRetval Type this function returns `Promise` for.
 * @param TRet    Type of the return value of the async function.
 * 
 */
export type AsyncFunc<
    TArgs extends any[] = any[], 
    TRet                = unknown,
    TThis               = unknown
> = Func<TArgs, Promise<TRet>, TThis>;


/**
 * Defines the result of the `Promise` return by the specified `AsyncRoutine`
 * @param TAsyncRoutine `AsyncRoutine` to unwrap return type `Promise` result from.
 */
export type AsyncFuncReturnType<TAsyncFunc extends AsyncFunc> = (
    UnpackPromise<ReturnType<TAsyncFunc>>
);


/**
 * Defines the type of value, which is passed to `TPromise.then(cb)` `cb` callback.
 * @param TPromise Target `Promise` to unwrap result from.
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
 * Defines an object type with the same keys as `TSourceObjects`, but all values
 * of `TMappedValue`.
 * @param TSourceObject Type of object to take properties from.
 * @param TMappedValue  Type of values in the created object type.
 */
export type MapValues<TSourceObject extends Obj, TMappedValue> = {
    [TSourceObjectKey in keyof TSourceObject]: TMappedValue;
};


/**
 * Defines the same object type as `TSrcObj`, but with `TKeys` keys
 * having the value of type `TNewValue`.
 * 
 * @param TSrcObj   Type of object to replace property type of.
 * @param TKeys     Union type of keys to change value types of (often just a string literal).
 * @param TNewValue Type of values stored at `TKeys` keys in the returned type.
 */
export type ReplaceValues<
    TSrcObj extends Obj,
    TKeys   extends keyof TSrcObj,
    TNewValue
> = {
    [Key in keyof TSrcObj]: Key extends TKeys ? TNewValue : TSrcObj[Key];
};

/**
 * Defines the same object type as `TSrcObj`, but without `TKeysUnion` keys.
 * @param TSrcObj    Type of object to remove keys from.
 * @param TKeysUnion A single or union type of keys to remove from `TSrcObj`.
 */
export type RemoveKeys<
    TSrcObj extends Obj,
    TKeysUnion extends keyof TSrcObj
> = {
    [Key in Exclude<keyof TSrcObj, TKeysUnion>]: TSrcObj[Key];
};



/** 
 * Defines constructor function type.
 * @param TInstance Type of instances produced by this constructor.
 * @param TArgs     Tuple type of arguments, this constructor accepts.
 */
export interface Class<
    TInstance = unknown,
    TArgs extends any[] = any[]
> 
extends Function {
    // tslint:disable-next-line: callable-types
    new (...args: TArgs): TInstance;
}

/**
 * Defines constructor function prototype property type.
 * @param TClass Target constructor function type.
 */
export type ClassPrototype<TClass extends Class> = (
    TClass['prototype']
);

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