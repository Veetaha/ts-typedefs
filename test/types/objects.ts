import { Merge, AreSame, RemoveKeys, ValueOf, MapValues, OptionalLikelyUndefProps } from "../../lib";
import { MergeObj1, MergeObj2, AssertTrue, Obj4, Obj1, Obj5 } from "../helpers";

export namespace MergeTest {

    export type t1  = Merge<MergeObj1, MergeObj2>;
    export type _t1 = AssertTrue<AreSame<
        t1, 
        Pick<MergeObj1, '_2' | '_3' | '_4' | '_5'> & MergeObj2
    >>;

}

export namespace RemoveKeysTest {

    export type t1  = RemoveKeys<Obj4, 'str'>; 
    export type _t1 = AssertTrue<AreSame<
        t1,
        Pick<Obj4, 'bool' | 'num' | 'str_null'>
    >>;


    export type t2  = RemoveKeys<Obj4, 'str' | 'bool' | 'str_null'>;
    export type _t2 = AssertTrue<AreSame<
        t2,
        Pick<Obj4, 'num'>
    >>;

}

export namespace ValueOfTest {

    export type t1  = ValueOf<Obj4>;
    export type _t1 = AssertTrue<AreSame<
        t1,
        | Obj4['num'] 
        | Obj4['bool'] 
        | Obj4['str_null']
        | Obj4['str']
    >>;

    export type t2 = ValueOf<boolean[]>;
    export type _t2 = AssertTrue<AreSame<
        t2,
        boolean[][keyof boolean[]]
    >>;

}

export namespace MapValuesTest {

    export type t1 = MapValues<Obj4, boolean>;
    export type _t1 = AssertTrue<AreSame<
        t1, 
        {
            num:      boolean;
            str_null: boolean;
            str:      boolean;
            bool:     boolean;
        }
    >>;

}

export namespace OptionalLikelyUndefPropsTest {
    
    export type t1  = OptionalLikelyUndefProps<Obj1>;
    export type _t1 = AssertTrue<AreSame<
        t1,
        Merge<
            Obj1, 
            Partial<Pick<
                Obj1, 
                'undef'| 'undef_bool' | 'undef_null_num_str' | 'undef_num'
            >>
        >
    >>;

    export type t2 = OptionalLikelyUndefProps<Obj5>;
    export type _t2 = AssertTrue<AreSame<
        t2,
        Merge<
            Obj5,
            Partial<Pick<
                Obj5,
                'any' | 'num_undef' | 'unknown' | 'opt_num'
            >>
        >
    >>;
}