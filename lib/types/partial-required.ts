import { Obj, Merge } from './index';

/** 
 * Defines the same type as `TObj` but all properties are made recursively `Partial<>`.
 * @param TObj Object type to make all properties optional.
 */
export type DeepPartial<TObj extends Obj> = {

    // define type TVal variable to distribute union

    [TKey in keyof TObj]+?: TObj[TKey] extends infer TVal 
        ? (TVal extends Obj ? DeepPartial<TVal> : TVal)     
        : never;
};


/**
 * Defines the same type as `TObj` but all properties are made recursively `Required<>`.
 * @param TObj Object type to remove optional `?` flag from.
 */
export type DeepRequired<TObj extends Obj> = { 
    [TKey in keyof TObj]-?: TObj[TKey] extends infer TVal 
        ? (TVal extends Obj ? DeepRequired<TVal> : TVal)
        : never;
};

/**
 * Defines the same type as `TObj` but with `TKeys` made optional.
 * @param TObj  Object type to make `TKeys` optional in.
 * @param TKeys Union type of keys that will be defined as optional in the resulting type.
 */
export type Partial<
    TObj extends Obj, 
    TKeys extends keyof TObj = keyof TObj
> = Merge<TObj, { [TKey in TKeys]+?: TObj[TKey]; }>;


/**
 * Defines the same type as `TObj` but with `TKeys` made required.
 * @param TObj  Object type to make `TKeys` required in.
 * @param TKeys Union type of keys that will be defined as required in the resulting type.
 */
export type Required<
    TObj extends Obj, 
    TKeys extends keyof TObj = keyof TObj
> = Merge<TObj, { [TKey in TKeys]-?: TObj[TKey]; }>;