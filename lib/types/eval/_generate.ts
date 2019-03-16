import * as Fs from 'fs';

const totalCopies = 5;

let code = 
`import * as Op from '../type-operators';
import * as Impl from '../logical';

/**
 * Defines ${'`'}true${'`'} or  ${'`'}false${'`'} by applying the given 
 * ${'`'}TOp${'`'} operator object tree to the given ${'`'}TParam${'`'}.
 * @param TOp ${'`'}BoolOp${'`'} operator tree to apply to ${'`'}TParam${'`'}.
 * @param TParam Value of any type to pipe through ${'`'}BoolOp${'`'}.  
 *
 * @remarks
 * Because of some TypeScript limitations and bugs (https://stackoverflow.com/questions/55192212/typescript-circular-type-alias-produces-no-error-and-instead-widens-unit-types)
 * ${'`'}BoolOp${'`'} tree must be not more than ${totalCopies} levels deep.
 */
export type Eval<TOp extends Op.BoolOp, TParam> = Eval_0<TOp, TParam>;

type Eval_${totalCopies}<_TOp, _TParam> = never;

`;

for (let i = 0; i < totalCopies; ++i) {
    code += (
`
type EvalAll_${i}<TOps extends Op.BoolOp[], TParam> = { 
    [i in keyof TOps]: TOps[i] extends Op.BoolOp ? Eval_${i + 1}<TOps[i], TParam> : never;
};

type Eval_${i}<TOp extends Op.BoolOp, TParam> = (
    TOp extends true  ? true  :
    TOp extends false ? false :
    
    TOp extends Op.Not<infer TNegatedOp> ? Impl.Not<Eval_${i + 1}<TNegatedOp, TParam>> :

    TOp extends Op.If<infer TCond, infer TIfTrue, infer TElse> ? 
    Impl.If<
        Eval_${i + 1}<TCond,   TParam>, 
        Eval_${i + 1}<TIfTrue, TParam>, 
        Eval_${i + 1}<TElse,   TParam>
    > :
    
    TOp extends Op.And <infer TAndOps>  ? Impl.And<EvalAll_${i}<TAndOps, TParam>> :
    TOp extends Op.Or  <infer TOrOps >  ? Impl.Or <EvalAll_${i}<TOrOps,  TParam>> :

    TOp extends Op.Nand<infer TNandOps> ? Impl.Nand<EvalAll_${i}<TNandOps, TParam>> :
    TOp extends Op.Nor <infer TNorOps > ? Impl.Nor <EvalAll_${i}<TNorOps,  TParam>> :

    TOp extends Op.Xor<infer TXorOp1, infer TXorOp2> ? 
    Impl.Xor<Eval_${i + 1}<TXorOp1, TParam>, Eval_${i + 1}<TXorOp2, TParam>> :

    TOp extends Op.Equiv<infer TEquivOp1, infer TEquivOp2>       ? 
    Impl.Equiv<Eval_${i + 1}<TEquivOp1, TParam>, Eval_${i + 1}<TEquivOp2, TParam>> :

    
    TOp extends Op.Extends      <infer TAssignTarget>   ? Impl.Extends      <TAssignTarget,   TParam> :
    TOp extends Op.UnionIncludes<infer TIncludesTarget> ? Impl.UnionIncludes<TIncludesTarget, TParam> :

    never
);
`   
    );

}


Fs.writeFileSync(`${__dirname}/index.ts`, code);
