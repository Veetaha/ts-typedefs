import { Obj, Merge } from './index';
import { PickAsNullableProps } from './pick';

/**
 * Defines type `T` that may also be `null` or `undefined`.
 * @param T Target type to make "nullable".
 */
export type Nullable<T> = T | null | undefined;

/**
 * Defines the same type as `TObj` but with all properties made `Nullable<>` recursively.
 * @param TObj Target object type to make its properties recursively nullable.
 */
export type DeepNullable<TObj extends Obj> = {
    [TKey in keyof TObj]+?: TObj[TKey] extends infer TVal
        ? (TVal extends Obj ? DeepNullable<TVal> : Nullable<TVal>)
        : never;
};

/**
 * Defines the same type as `TObj` but with all properties made `NonNullable<>` recursively.
 * @param TObj Target object type to make its properties recursively non-nullable.
 */
export type DeepNonNullable<TObj extends Obj> = { 
    [TKey in keyof TObj]-?: TObj[TKey] extends infer TVal
        ? (TVal extends Obj ? DeepNonNullable<TVal> : NonNullable<TVal>)
        : never;
};

/**
 * Defines the same type as `TObj` but with `TKeys` made nullable (and optional).
 * @param TObj  Object type to make `TKeys` nullable in.
 * @param TKeys Union type of keys that will be defined as nullable in the resulting type.
 */
export type NullableProps<
    TObj extends Obj,
    TKeys extends keyof TObj = keyof TObj
> = Merge<TObj, PickAsNullableProps<TObj, TKeys>>;