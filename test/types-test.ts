import  * as I from "../lib";
import { Obj1, Obj2, Obj3, User, User2, User3 } from './mocks';

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

export type t7 = I.Widen<Obj3>;
export type t8 = I.DeepWiden<Obj3>;


export type t9  = I.Obj;                      // { [key: string]: unknown; }     
export type t10 = I.Obj<boolean>;             // { [key: string]: boolean; }     
export type t11 = I.Obj<string, number>;      // { [key: number]: string;  }
export type t12 = I.Obj<number, 'p1' | 'p2'>; // { p1: number, p2: number; }


// { id: number; login: string, isDisabled: boolean; }
export type t13 = I.RemoveKeys<User, 'password'>; 
// { id: number; }
export type t14 = I.RemoveKeys<User, 'password' | 'isDisabled' | 'login'>;

export type t15 = I.ValueOf<User>;
export type t16 = I.ValueOf<boolean[]>;

export type t17 = I.FilterProps<User, I.Op.Extends<string>>;
export type t18 = I.Extends<string | null, string>;

export type t19 = I.FilterProps<
    User, 
    I.Op.And<[
        I.Op.Not<I.Op.UnionIncludes<string>>, 
        I.Op.Nand<[false, true]> // this condition is always true
    ]>
>;

export type t20 = I.MapValues<User, boolean>;
export type t21 = I.DeepPartial<User2>;
export type t22 = I.Func;
export type t23 = I.Func<[string, number | undefined]>;
export type t24 = I.Func<[boolean], void>;
export type t25 = I.Func<[boolean], number, User>;

export type t26 = I.AsyncFuncReturnType<I.AsyncFunc<[number, string], User3>>;
export type t27 = I.AsyncFuncReturnType<typeof User3.getById>;

export type t28 = I.UnpackTypePredicate<I.TypePredicate<User, User>>;








declare function decor0(): I.MethodDecorator;
declare function decor1(): I.MethodDecorator<[boolean]>;

declare function decor2(): I.MethodDecorator<[string, number], boolean>;

export class _User {
    @decor0()
    // @decor1() // both decorators generate compile-time error
    // @decor2()
    meth1(_bol: boolean, _num: number): void {}

    @decor1() // works fine
    meth2(bol: boolean) {
        return bol ? 32 : 'kek';
    }

    @decor2() // works fine
    meth3(str: string, num: number) {
        return !!str && !!num;
    }
}