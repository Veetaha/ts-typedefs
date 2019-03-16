import * as Op from '../type-operators';
import * as Impl from '../logical';

/**
 * Defines `true` or  `false` by applying the given 
 * `TOp` operator object tree to the given `TParam`.
 * @param TOp `BoolOp` operator tree to apply to `TParam`.
 * @param TParam Value of any type to pipe through `BoolOp`.  
 *
 * @remarks
 * Because of some TypeScript limitations and bugs (https://stackoverflow.com/questions/55192212/typescript-circular-type-alias-produces-no-error-and-instead-widens-unit-types)
 * `BoolOp` tree must be not more than 5 levels deep.
 */
export type Eval<TOp extends Op.BoolOp, TParam> = Eval_0<TOp, TParam>;

type Eval_5<_TOp, _TParam> = never;


type EvalAll_0<TOps extends Op.BoolOp[], TParam> = { 
    [i in keyof TOps]: TOps[i] extends Op.BoolOp ? Eval_1<TOps[i], TParam> : never;
};

type Eval_0<TOp extends Op.BoolOp, TParam> = (
    TOp extends true  ? true  :
    TOp extends false ? false :
    
    TOp extends Op.Not<infer TNegatedOp> ? Impl.Not<Eval_1<TNegatedOp, TParam>> :

    TOp extends Op.If<infer TCond, infer TIfTrue, infer TElse> ? 
    Impl.If<
        Eval_1<TCond,   TParam>, 
        Eval_1<TIfTrue, TParam>, 
        Eval_1<TElse,   TParam>
    > :
    
    TOp extends Op.And <infer TAndOps>  ? Impl.And<EvalAll_0<TAndOps, TParam>> :
    TOp extends Op.Or  <infer TOrOps >  ? Impl.Or <EvalAll_0<TOrOps,  TParam>> :

    TOp extends Op.Nand<infer TNandOps> ? Impl.Nand<EvalAll_0<TNandOps, TParam>> :
    TOp extends Op.Nor <infer TNorOps > ? Impl.Nor <EvalAll_0<TNorOps,  TParam>> :

    TOp extends Op.Xor<infer TXorOp1, infer TXorOp2> ? 
    Impl.Xor<Eval_1<TXorOp1, TParam>, Eval_1<TXorOp2, TParam>> :

    TOp extends Op.Equiv<infer TEquivOp1, infer TEquivOp2>       ? 
    Impl.Equiv<Eval_1<TEquivOp1, TParam>, Eval_1<TEquivOp2, TParam>> :

    
    TOp extends Op.Extends<infer TExtendee>       ? Impl.Extends<TParam, TExtendee>       :
    TOp extends Op.UnionIncludes<infer THaystack> ? Impl.UnionIncludes<THaystack, TParam> :

    never
);

type EvalAll_1<TOps extends Op.BoolOp[], TParam> = { 
    [i in keyof TOps]: TOps[i] extends Op.BoolOp ? Eval_2<TOps[i], TParam> : never;
};

type Eval_1<TOp extends Op.BoolOp, TParam> = (
    TOp extends true  ? true  :
    TOp extends false ? false :
    
    TOp extends Op.Not<infer TNegatedOp> ? Impl.Not<Eval_2<TNegatedOp, TParam>> :

    TOp extends Op.If<infer TCond, infer TIfTrue, infer TElse> ? 
    Impl.If<
        Eval_2<TCond,   TParam>, 
        Eval_2<TIfTrue, TParam>, 
        Eval_2<TElse,   TParam>
    > :
    
    TOp extends Op.And <infer TAndOps>  ? Impl.And<EvalAll_1<TAndOps, TParam>> :
    TOp extends Op.Or  <infer TOrOps >  ? Impl.Or <EvalAll_1<TOrOps,  TParam>> :

    TOp extends Op.Nand<infer TNandOps> ? Impl.Nand<EvalAll_1<TNandOps, TParam>> :
    TOp extends Op.Nor <infer TNorOps > ? Impl.Nor <EvalAll_1<TNorOps,  TParam>> :

    TOp extends Op.Xor<infer TXorOp1, infer TXorOp2> ? 
    Impl.Xor<Eval_2<TXorOp1, TParam>, Eval_2<TXorOp2, TParam>> :

    TOp extends Op.Equiv<infer TEquivOp1, infer TEquivOp2>       ? 
    Impl.Equiv<Eval_2<TEquivOp1, TParam>, Eval_2<TEquivOp2, TParam>> :

    
    TOp extends Op.Extends<infer TExtendee>       ? Impl.Extends<TParam, TExtendee>       :
    TOp extends Op.UnionIncludes<infer THaystack> ? Impl.UnionIncludes<THaystack, TParam> :

    never
);

type EvalAll_2<TOps extends Op.BoolOp[], TParam> = { 
    [i in keyof TOps]: TOps[i] extends Op.BoolOp ? Eval_3<TOps[i], TParam> : never;
};

type Eval_2<TOp extends Op.BoolOp, TParam> = (
    TOp extends true  ? true  :
    TOp extends false ? false :
    
    TOp extends Op.Not<infer TNegatedOp> ? Impl.Not<Eval_3<TNegatedOp, TParam>> :

    TOp extends Op.If<infer TCond, infer TIfTrue, infer TElse> ? 
    Impl.If<
        Eval_3<TCond,   TParam>, 
        Eval_3<TIfTrue, TParam>, 
        Eval_3<TElse,   TParam>
    > :
    
    TOp extends Op.And <infer TAndOps>  ? Impl.And<EvalAll_2<TAndOps, TParam>> :
    TOp extends Op.Or  <infer TOrOps >  ? Impl.Or <EvalAll_2<TOrOps,  TParam>> :

    TOp extends Op.Nand<infer TNandOps> ? Impl.Nand<EvalAll_2<TNandOps, TParam>> :
    TOp extends Op.Nor <infer TNorOps > ? Impl.Nor <EvalAll_2<TNorOps,  TParam>> :

    TOp extends Op.Xor<infer TXorOp1, infer TXorOp2> ? 
    Impl.Xor<Eval_3<TXorOp1, TParam>, Eval_3<TXorOp2, TParam>> :

    TOp extends Op.Equiv<infer TEquivOp1, infer TEquivOp2>       ? 
    Impl.Equiv<Eval_3<TEquivOp1, TParam>, Eval_3<TEquivOp2, TParam>> :

    
    TOp extends Op.Extends<infer TExtendee>       ? Impl.Extends<TParam, TExtendee>       :
    TOp extends Op.UnionIncludes<infer THaystack> ? Impl.UnionIncludes<THaystack, TParam> :

    never
);

type EvalAll_3<TOps extends Op.BoolOp[], TParam> = { 
    [i in keyof TOps]: TOps[i] extends Op.BoolOp ? Eval_4<TOps[i], TParam> : never;
};

type Eval_3<TOp extends Op.BoolOp, TParam> = (
    TOp extends true  ? true  :
    TOp extends false ? false :
    
    TOp extends Op.Not<infer TNegatedOp> ? Impl.Not<Eval_4<TNegatedOp, TParam>> :

    TOp extends Op.If<infer TCond, infer TIfTrue, infer TElse> ? 
    Impl.If<
        Eval_4<TCond,   TParam>, 
        Eval_4<TIfTrue, TParam>, 
        Eval_4<TElse,   TParam>
    > :
    
    TOp extends Op.And <infer TAndOps>  ? Impl.And<EvalAll_3<TAndOps, TParam>> :
    TOp extends Op.Or  <infer TOrOps >  ? Impl.Or <EvalAll_3<TOrOps,  TParam>> :

    TOp extends Op.Nand<infer TNandOps> ? Impl.Nand<EvalAll_3<TNandOps, TParam>> :
    TOp extends Op.Nor <infer TNorOps > ? Impl.Nor <EvalAll_3<TNorOps,  TParam>> :

    TOp extends Op.Xor<infer TXorOp1, infer TXorOp2> ? 
    Impl.Xor<Eval_4<TXorOp1, TParam>, Eval_4<TXorOp2, TParam>> :

    TOp extends Op.Equiv<infer TEquivOp1, infer TEquivOp2>       ? 
    Impl.Equiv<Eval_4<TEquivOp1, TParam>, Eval_4<TEquivOp2, TParam>> :

    
    TOp extends Op.Extends<infer TExtendee>       ? Impl.Extends<TParam, TExtendee>       :
    TOp extends Op.UnionIncludes<infer THaystack> ? Impl.UnionIncludes<THaystack, TParam> :

    never
);

type EvalAll_4<TOps extends Op.BoolOp[], TParam> = { 
    [i in keyof TOps]: TOps[i] extends Op.BoolOp ? Eval_5<TOps[i], TParam> : never;
};

type Eval_4<TOp extends Op.BoolOp, TParam> = (
    TOp extends true  ? true  :
    TOp extends false ? false :
    
    TOp extends Op.Not<infer TNegatedOp> ? Impl.Not<Eval_5<TNegatedOp, TParam>> :

    TOp extends Op.If<infer TCond, infer TIfTrue, infer TElse> ? 
    Impl.If<
        Eval_5<TCond,   TParam>, 
        Eval_5<TIfTrue, TParam>, 
        Eval_5<TElse,   TParam>
    > :
    
    TOp extends Op.And <infer TAndOps>  ? Impl.And<EvalAll_4<TAndOps, TParam>> :
    TOp extends Op.Or  <infer TOrOps >  ? Impl.Or <EvalAll_4<TOrOps,  TParam>> :

    TOp extends Op.Nand<infer TNandOps> ? Impl.Nand<EvalAll_4<TNandOps, TParam>> :
    TOp extends Op.Nor <infer TNorOps > ? Impl.Nor <EvalAll_4<TNorOps,  TParam>> :

    TOp extends Op.Xor<infer TXorOp1, infer TXorOp2> ? 
    Impl.Xor<Eval_5<TXorOp1, TParam>, Eval_5<TXorOp2, TParam>> :

    TOp extends Op.Equiv<infer TEquivOp1, infer TEquivOp2>       ? 
    Impl.Equiv<Eval_5<TEquivOp1, TParam>, Eval_5<TEquivOp2, TParam>> :

    
    TOp extends Op.Extends<infer TExtendee>       ? Impl.Extends<TParam, TExtendee>       :
    TOp extends Op.UnionIncludes<infer THaystack> ? Impl.UnionIncludes<THaystack, TParam> :

    never
);
