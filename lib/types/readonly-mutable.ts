import { Obj } from './index';

/**
 * Defines the same type as `TObj` but with `readonly` modifier removed from its properties.
 * @param TObj Target object type to make its properties mutable.
 */
export type Mutable<TObj extends Obj> = {
    -readonly [TKey in keyof TObj]: TObj[TKey];
};

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