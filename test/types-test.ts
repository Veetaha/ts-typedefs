import { Obj1, Obj2, Obj3, Obj4, NestedObj, ClassObj2, MergeObj1, MergeObj2 } from './mocks';
import { 
    Extends, Op, FilterProps, AreSame, Merge, DeepPartial, DeepRequired,
    UnpackArray, AsyncFuncReturnType, Widen, DeepWiden, Obj, RemoveKeys,
    ValueOf, MapValues, Func, AsyncFunc, UnpackTypePredicate, TypePredicate, Method,
    FuncContext, Class, MethodDecorator
} from "../lib";

type AssertTrue<T extends true> = T;
type AssertFalse<T extends false> = T;

export type t1 = FilterProps<
    Obj1,
    Op.If<(Op.UnionIncludes<undefined>), 
        Op.Or<[Op.UnionIncludes<null>, Op.UnionIncludes<number>]>,
        false
    >
>;

export type _t1 = AssertTrue<AreSame<
    t1, 
    Pick<Obj1, 'undef_null_num_str' | 'undef_num'>
>>;

export type t2  = Merge<MergeObj1, MergeObj2>;
export type _t2 = AssertTrue<AreSame<
    t2, 
    Pick<MergeObj1, '_2' | '_3' | '_4' | '_5'> & MergeObj2
>>;

export type t3  = DeepPartial<Obj1>;
export type _t3 = AssertTrue<AreSame<
    t3['Obj1_null'], 
    undefined | null | DeepPartial<Obj1>
>>;

export type t4  = DeepRequired<Obj2>;
export type _t4 = AssertTrue<AreSame<
    t4['Obj2'], 
    DeepRequired<Obj2>
>>;

export type t5  = UnpackArray<(number | string)[]>;
export type _t5 = AssertTrue<AreSame<
    t5, 
    string | number
>>;

export type t6  = AsyncFuncReturnType<(args: any[]) => Promise<Obj1>>;
export type _t6 = AssertTrue<AreSame<
    t6, 
    Obj1
>>;

export type t7  = Widen<Obj3>;
export type _t7 = AssertTrue<AreSame<
    t7, 
    Obj3
>>;

export type t8  = DeepWiden<Obj3>;
export type _t8 = AssertTrue<AreSame<
    t8,
    {
        ustr:                   string;
        unum:                   number;
        true:                   boolean;
        tuple$true_false_unum$: (boolean | number)[];
        tuple$Obj3$:            t8[];
    }
>>;

export type t9   = Obj; 
export type _t9  = AssertTrue<AreSame<
    t9,  
    { [key: string]: unknown; }
>>;     

export type t10  = Obj<boolean>;    
export type _t10 = AssertTrue<AreSame<
    t10, 
    { [key: string]: boolean; }
>>;     

export type t11  = Obj<string, number>;     
export type _t11 = AssertTrue<AreSame<
    t11, 
    { [key: number]: string;  }
>>;

export type t12  = Obj<number, 'num1' | 'num2'>;
export type _t12 = AssertTrue<AreSame<
    t12, 
    { num1: number, num2: number; }
>>;


export type t13  = RemoveKeys<Obj4, 'str'>; 
export type _t13 = AssertTrue<AreSame<
    t13,
    Pick<Obj4, 'bool' | 'num' | 'str_null'>
>>;


export type t14  = RemoveKeys<Obj4, 'str' | 'bool' | 'str_null'>;
export type _t14 = AssertTrue<AreSame<
    t14,
    Pick<Obj4, 'num'>
>>;

export type t15  = ValueOf<Obj4>;
export type _t15 = AssertTrue<AreSame<
    t15,
    | Obj4['num'] 
    | Obj4['bool'] 
    | Obj4['str_null']
    | Obj4['str']
>>;

export type t16 = ValueOf<boolean[]>;
export type _t16 = AssertTrue<AreSame<
    t16,
    boolean[][keyof boolean[]]
>>;

export type t17  = FilterProps<Obj4, Op.Extends<string>>;
export type _t17 = AssertTrue<AreSame<
    t17, 
    Pick<Obj4, 'str'>
>>;

export type t18  = Extends<string | null, string>;
export type _t18 = AssertFalse<t18>;

export type t19 = FilterProps<
    Obj4, 
    Op.And<[
        Op.Not<Op.UnionIncludes<string>>, 
        Op.Nand<[false, true]> // this condition is always true
    ]>
>;
export type _t19 = AssertTrue<AreSame<
    t19, 
    { bool: boolean; num: number; }
>>;

export type t20 = MapValues<Obj4, boolean>;
export type _t20 = AssertTrue<AreSame<
    t20, 
    {
        num:      boolean;
        str_null: boolean;
        str:      boolean;
        bool:     boolean;
    }
>>;

export type t21 = DeepPartial<NestedObj>;
export type _t21 = AssertTrue<AreSame<
    t21['Obj4'],
    DeepPartial<Obj4> | undefined
>>;

export type t22 = Func;
export type _t22 = AssertTrue<AreSame<
    t22,
    (this: any, ...args: unknown[]) => unknown
>>;

export type t23 = Func<[string, number | undefined]>;
export type _t23 = AssertTrue<AreSame<
    t23,
    (this: any, ...args: [string, number | undefined]) => unknown
>>;

export type t24 = Func<[boolean], void>;
export type _t24 = AssertTrue<AreSame<
    t24,
    (this: any, ...args: [boolean]) => void
>>;

export type t25 = Func<[boolean], number, Obj4>;
export type _t25 = AssertTrue<AreSame<
    t25,
    (this: Obj4, ...args: [boolean]) => number
>>;

export type t26 = AsyncFuncReturnType<AsyncFunc<[number, string], ClassObj2>>;
export type _t26 = AssertTrue<AreSame<
    t26,
    ClassObj2
>>;

export type t27 = AsyncFuncReturnType<typeof ClassObj2.promiseObj4Method>;
export type _t27 = AssertTrue<AreSame<
    t27,
    Obj4
>>;

export type t28 = UnpackTypePredicate<TypePredicate<Obj4>>;
export type _t28 = AssertTrue<AreSame<
    t28,
    Obj4
>>;


export type t29 = Method<DecoratedClassObj, 'meth3'>;
export type _t29 = AssertTrue<AreSame<
    t29,
    (
        this: DecoratedClassObj, 
        ...args: Parameters<DecoratedClassObj['meth3']>
    ) => ReturnType<DecoratedClassObj['meth3']>
>>;

export type t30  = FuncContext<(this: number, arg: string) => void>;
export type _t30 = AssertTrue<AreSame<
    t30, 
    number
>>;

export type t31 = FuncContext<(arg: string) => Promise<void>>;
export type _t31 = AssertTrue<AreSame<
    t31, 
    {}
>>;






export function takeClass<TClass extends Class<any>>(TargetClass: TClass) {
    return class extends TargetClass { };
}

declare function decor0(): MethodDecorator;
declare function decor1(): MethodDecorator<[boolean]>;

declare function decor2(): MethodDecorator<[string, number], boolean>;

export class DecoratedClassObj {
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