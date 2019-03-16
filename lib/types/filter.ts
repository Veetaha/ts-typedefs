import { Obj, FindKeys, Op } from './index';

/**
 * Defines the same type as `TObj` but with particular properties filtered out
 * according to `TApproveCond`.
 * 
 * @param TObj         Target object type to filter properties from.
 * @param TApproveCond `Op.BoolOp` type that gets evaluated for each property of `TObj`.
 *                     If `Eval<TApproveCond, TObj[TKey]> === false`
 *                     `TKey` will be filtered out.
 */
export type FilterProps<TObj extends Obj, TApproveCond extends Op.BoolOp> = Pick<
    TObj, FindKeys<TObj, TApproveCond>
>;