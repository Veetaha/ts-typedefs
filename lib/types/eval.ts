import { Condition, Not, And, Or, AssignableTo, UnionIncludes } from "./conditions";
import { UnionToIntersection } from ".";


/**
 * @TODO 
 * Think of an type aggregation pipline like in MongoDB
 * 
 */

type EvalAssignableTo<TTo, TFrom> = TFrom extends TTo ? true : false;

type EvalUnionIncludes<TUnion, TValue> = (
    Extract<TUnion, TValue> extends never ? false : true
);

type EvalNot0<TCond extends Condition, TParam> = (
    Eval0<TCond, TParam> extends true ? false : true
);

type EvalAnd0<TConds extends Condition[], TParam> = (
    EvalUnionIncludes<EvalAll0<TConds, TParam>, false>
);

type EvalOr0<TConds extends Condition[], TParam> = (
    EvalUnionIncludes<EvalAll0<TConds, TParam>, true>
);

type EvalAll0<TConds extends Condition[], TParam> = (
    { [TKey in keyof TConds]: Eval0<TConds[TKey], TParam> }[keyof TConds]
);

export type Eval<TCond extends Condition, TParam> = (
    TCond extends true  ? true  : 
    TCond extends false ? false :

    
    TCond extends Not<infer TNegatedCond> ? EvalNot0<TNegatedCond, TParam> :
    TCond extends And<infer TAndConds>    ? EvalAnd0<TAndConds,    TParam> :
    TCond extends Or <infer TOrConds>     ? EvalOr0 <TOrConds,     TParam> :

    
    TCond extends AssignableTo <infer TAssignTarget>   ? EvalAssignableTo <TAssignTarget,   TParam> :
    TCond extends UnionIncludes<infer TIncludesTarget> ? EvalUnionIncludes<TIncludesTarget, TParam> :

    never
);



type Eval0<TCond, TParam> = (
    TCond extends true  ? true  : 
    TCond extends false ? false :

    
    TCond extends Not<infer TNegatedCond> ? EvalNot1<TNegatedCond, TParam> :
    TCond extends And<infer TAndConds>    ? EvalAnd1<TAndConds,    TParam> :
    TCond extends Or <infer TOrConds>     ? EvalOr1 <TOrConds,     TParam> :

    
    TCond extends AssignableTo <infer TAssignTarget>   ? EvalAssignableTo <TAssignTarget,   TParam> :
    TCond extends UnionIncludes<infer TIncludesTarget> ? EvalUnionIncludes<TIncludesTarget, TParam> :

    never
);

type Eval1<_TCond, _TParam> = never;