import { Obj, Op, ValueOf, Eval } from './index';

/**
 * Defines a union of property names taken from `TObj` according to the given `TApproveCond`.
 *
 * @param TObj         Target object type to filter properties from.
 * @param TApproveCond `Op.BoolOp` type that gets evaluated for each property of `TObj`.
 *                     If `Eval<TApproveCond, TObj[TKey]> === true`
 *                     `TKey` will be present in the resulting union .
 */
export type FindKeys<TObj extends Obj, TApproveCond extends Op.BoolOp> = ValueOf<{

    [TKey in keyof TObj]-?: Eval<TApproveCond, TObj[TKey]> extends true ? TKey : never;

}>;

