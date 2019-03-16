/**
 * Defines boolean type opeartor tree type.
 * E.g. 
 * ```ts
 * import { Op } from 'ts-types';
 * type ExampleBoolOp = Op.Or<
 *     Op.If< Op.UnionIncludes<number | string>,
 *         Not<Op.Extends<boolean>>,
 *         false
 *     >,
 *     Op.Extends<null>
 * >;
 * ```
 */
export type BoolOp = (
    | true 
    | false

    | If<any, any, any>
    | Not<any> 
    | Or<any>
    | Nor<any>
    | And<any> 
    | Nand<any>
    | Xor<any, any>
    | Equiv<any, any>

    | UnionIncludes 
    | Extends
);

export interface If<
    TCond   extends BoolOp, 
    TIfTrue extends BoolOp, 
    TElse   extends BoolOp = never
> {
    'ts-types.Op.If': [TCond, TIfTrue, TElse];
}

/**
 * Defines a logical negation operator applied to the given `TBoolOp`.
 */
export interface Not<TBoolOp extends BoolOp> {
    'ts-types.Op.Not': TBoolOp;
}

/**
 * Defines a logical `and` operator applied to all the given `TBoolOps`.
 */
export interface And<TBoolOps extends BoolOp[]> {
    'ts-types.Op.And': TBoolOps;
}

/**
 * Defines a logical `or` operator applied to all the given `TBoolOps`.
 */
export interface Or<TBoolOps extends BoolOp[]> {
    'ts-types.Op.Or': TBoolOps;
}


/**
 * Defines a logical `not and` operator applied to all the given `TBoolOps`.
 * Same as `Op.Not<Op.And<TBoolOps>>`.
 */
export interface Nand<TBoolOps extends BoolOp[]> {
    'ts-types.Op.Nand': TBoolOps;
}

/**
 * Defines a logical `not or` operator applied to all the given `TBoolOps`.
 * Same as `Op.Not<Op.Or<TBoolOps>>`.
 */
export interface Nor<TBoolOps extends BoolOp[]> {
    'ts-types.Op.Nor': TBoolOps;
}

/**
 * Defines a logical `xor` operator applied to the given `TBoolOp1` and `TBoolOp2`.
 * Same as `Op.Not<Op.Equiv<TBoolOp1, TBoolOp2>>`.
 */
export interface Xor<TBoolOp1 extends BoolOp, TBoolOp2 extends BoolOp> {
    'ts-types.Op.Xor': [TBoolOp1, TBoolOp2];
}

/**
 * Defines a logical `equivalence` operator applied to the given `TBoolOp1` and `TBoolOp2`.
 * Same as `Op.Not<Op.Xor<TBoolOp1, TBoolOp2>>`.
 */
export interface Equiv<TBoolOp1 extends BoolOp, TBoolOp2 extends BoolOp> {
    'ts-types.Op.Equiv': [TBoolOp1, TBoolOp2];
}


/**
 * Defines a logical operator that verifies the given parameter to extend `TExtendee`.
 */
export interface Extends<TExtendee = unknown> {
    'ts-types.Op.Extends': TExtendee;
}

/**
 * Defines the logical operator to check that the given parameter extends `TExtendee`.
 */                   
export interface UnionIncludes<TTarget = unknown> {
    'ts-types.Op.UnionIncludes': TTarget;
}

