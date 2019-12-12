import { Obj, Merge } from './index';
import { PickAsReadonly, PickAsMutable } from './pick';

/**
 * Defines the same type as `TObj` but with `readonly` modifier removed from its `TKeys`.
 * @param TObj  Object type to make `TKeys` mutable in.
 * @param TKeys Union type of keys that will be defined as mutable in the resulting type.
 */
export type Mutable<
    TObj extends Obj,
    TKeys extends keyof TObj = keyof TObj
> = Merge<TObj, PickAsMutable<TObj, TKeys>>;

/**
 * Defines the same type as `TObj` but with `readonly` modifier removed from its properties recursively.
 * @param TObj Target object type to make its properties recursively mutable.
 */
export type DeepMutable<TObj extends Obj> = {
    -readonly [TKey in keyof TObj]: TObj[TKey] extends infer TVal
        ? (TVal extends Obj ? DeepMutable<TVal> : TVal)
        : never;
};

/**
 * Defines the same type as `TObj` but with `readonly` modifier added to its properties recursively.
 * @param TObj Target object type to make its properties recursively readonly.
 */
export type DeepReadonly<TObj extends Obj> = {
    +readonly [TKey in keyof TObj]: TObj[TKey] extends infer TVal
        ? (TVal extends Obj ? DeepReadonly<TVal> : TVal)
        : never;
};

/**
 * Defines the same type as `TObj` but with `TKeys` made readonly.
 * @param TObj  Object type to make `TKeys` readonly in.
 * @param TKeys Union type of keys that will be defined as readonly in the resulting type.
 */
export type Readonly<
    TObj extends Obj,
    TKeys extends keyof TObj
> = Merge<TObj, PickAsReadonly<TObj, TKeys>>;
