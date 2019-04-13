import { Obj } from "./objects";
import { Nullable } from "./nullable-non-nullable";

/**
 * Shorthand for `Partial<Pick<TObj, TKeys>>`, but better optimized (into one mapped object type).
 * @param TObj  Object type to pick properties from.
 * @param TKeys Union type of keys to pick.
 */
export type PickAsOptional<TObj extends Obj, TKeys extends keyof TObj> = {
    [TKey in TKeys]+?: TObj[TKey];
};

/**
 * Shorthand for `Required<Pick<TObj, TKeys>>`, but better optimized (into one mapped object type).
 * @param TObj  Object type to pick properties from.
 * @param TKeys Union type of keys to pick.
 */
export type PickAsRequired<TObj extends Obj, TKeys extends keyof TObj> = {
    [TKey in TKeys]-?: TObj[TKey];
};

/**
 * Shorthand for `Readonly<Pick<TObj, TKeys>>`, but better optimized (into one mapped object type).
 * @param TObj  Object type to pick properties from.
 * @param TKeys Union type of keys to pick.
 */
export type PickAsReadonly<TObj extends Obj, TKeys extends keyof TObj> = {
    +readonly [TKey in TKeys]: TObj[TKey];
};

/**
 * Shorthand for `Mutable<Pick<TObj, TKeys>>`, but better optimized (into one mapped object type).
 * @param TObj  Object type to pick properties from.
 * @param TKeys Union type of keys to pick.
 */
export type PickAsMutable<TObj extends Obj, TKeys extends keyof TObj> = {
    -readonly [TKey in TKeys]: TObj[TKey];
};


/**
 * Shorthand for `NullableProps<Pick<TObj, TKeys>>`, but better optimized (into one mapped object type).
 * @param TObj  Object type to pick properties from.
 * @param TKeys Union type of keys to pick.
 */
export type PickAsNullableProps<TObj extends Obj, TKeys extends keyof TObj> = {
    [TKey in TKeys]?: Nullable<TObj[TKey]>;
};