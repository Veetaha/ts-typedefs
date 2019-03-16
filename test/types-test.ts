import  * as I from "../lib";
import { Obj1, Obj2 } from './mocks';

type AssertExtends<TTarget, TSuspect extends TTarget> = TTarget | TSuspect;


export type t1 = I.FilterProps<
    Obj1,
    I.Op.If<
        I.Op.And<[ I.Op.Extends<number>, I.Op.Extends<undefined>] >, 
        I.Op.UnionIncludes<undefined | null>, 
        false
    >
>;
export type _t1 = AssertExtends<t1, Pick<Obj1, '_1' | '_2'>>;

export type t2  = I.Merge<Obj1, Obj2>;
export type _t2 = AssertExtends<t2, Pick<Obj1, '_2' | '_3' | '_4' | '_5'> & Obj2>;

export type t3  = I.DeepPartial<Obj1>;
export type _t3 = AssertExtends<t3['_5'], I.DeepPartial<Obj1>>;

export type t4  = I.DeepRequired<Obj2>;
export type _t4 = AssertExtends<t4['_7'], I.DeepRequired<Obj2>>;

export type t5  = I.UnpackArray<(number | string)[]>;
export type _t5 = AssertExtends<t5, string | number>;

export type t6  = I.AsyncFuncReturnType<(args: any[]) => Promise<Obj1>>;
export type _t6 = AssertExtends<t6, Obj1>;