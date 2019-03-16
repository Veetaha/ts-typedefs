import { Obj } from './index';

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
        ? (TVal extends TObj ? DeepRequired<TVal> : TVal)
        : never;
};
