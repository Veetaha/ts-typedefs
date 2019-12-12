import { Obj } from "./objects";


/**
 * Defines tuple type of `TItems` union type values.
 * @param TItems Union type of items of the defined tuple.
 */
export type Tuple<TItems = unknown> = [TItems] | TItems[];

/**
 * Shorthand for `TTuple[0]`.
 * @param TTuple Target tuple to get first item from.
 *
 * @copyright https://github.com/fightingcat/Typescript4Fun/blob/master/src/tuple.d.ts
 */
export type TupleFirstItem<TTuple extends any[]> = TTuple[0];

/**
 * Defines the type of the last item in `TTuple`.
 * If `TTuple` is empty, then expands to `undefined`.
 * @param TTuple Target tuple to get last item from.
 *
 * @copyright https://github.com/fightingcat/Typescript4Fun/blob/master/src/tuple.d.ts
 */
export type TupleLastItem<TTuple extends any[]> = TTuple[TupleShift<TTuple>['length']];


/**
 * Removes the first item from `TTuple`. Does nothing if tuple is empty.
 *
 * @param TTuple Tuple to remove first item from.
 *
 * @copyright https://github.com/fightingcat/Typescript4Fun/blob/master/src/tuple.d.ts
 */
export type TupleShift<TTuple extends any[]> =
    ((...t: TTuple) => void) extends (x: any, ...t: infer TRet) => void
        ? TRet : never;

/**
 * Removes the last item from `TTuple`. Does nothing if tuple is empty.
 *
 * @param TTuple Tuple to remove last item from.
 */
export type TuplePop<TTuple extends any[]> = Overwrite<TupleShift<TTuple>, TTuple>;

/**
 * Pushes `TNewFirstItem` item to the front of `TTuple`.
 *
 * @param TTuple Tuple to push `TNewFirstItem` to the front.
 * @param TNewFirstItem Item type to push to the front of `TTuple`.
 *
 * @copyright https://github.com/fightingcat/Typescript4Fun/blob/master/src/tuple.d.ts
 */
export type TupleUnshift<TTuple extends any[], TNewFirstItem> =
    ((x: TNewFirstItem, ...t: TTuple) => void) extends (...t: infer TRet) => void
        ? TRet : never;

/**
 * Pushes `TNewLastItem` item to the back of `TTuple`.
 *
 * @param TTuple Tuple to push `TNewLastItem` to the back.
 * @param TNewLastItem Item type to push to the back of `TTuple`.
 *
 * @copyright https://github.com/fightingcat/Typescript4Fun/blob/master/src/tuple.d.ts
 */
export type TuplePush<TTuple extends any[], TNewLastItem> =
    Overwrite<TupleUnshift<TTuple, any>, TTuple & Obj<TNewLastItem>>;


/** internal */
type Overwrite<TTarget, TNewValues extends any> = {
    [TTargetKey in keyof TTarget]: TNewValues[TTargetKey]
};
