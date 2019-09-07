import { Merge, AreSame, RemoveKeys, ValueOf, MapValues, OptionalLikelyUndefProps, DeepMapValues } from "../../lib";
import { MergeObj1, MergeObj2, AssertTrue, Obj4, Obj1, Obj5, describeType } from "../helpers";

describeType('Merge', () => {

    type t1  = Merge<MergeObj1, MergeObj2>;
    type _t1 = AssertTrue<AreSame<
        t1, 
        Pick<MergeObj1, '_2' | '_3' | '_4' | '_5'> & MergeObj2
    >>;

});

describeType('RemoveKeys', () => {

    type t1  = RemoveKeys<Obj4, 'str'>; 
    type _t1 = AssertTrue<AreSame<
        t1,
        Pick<Obj4, 'bool' | 'num' | 'str_null' | 'opt_num'>
    >>;


    type t2  = RemoveKeys<Obj4, 'str' | 'bool' | 'str_null'>;
    type _t2 = AssertTrue<AreSame<
        t2,
        Pick<Obj4, 'num' | 'opt_num'>
    >>;

});

describeType('ValueOf', () => {

    type t1  = ValueOf<Obj4>;
    type _t1 = AssertTrue<AreSame<
        t1,
        | Obj4['num'] 
        | Obj4['bool'] 
        | Obj4['str_null']
        | Obj4['str']
        | Obj4['opt_num'] 
    >>;

    type t2 = ValueOf<boolean[]>;
    type _t2 = AssertTrue<AreSame<
        t2,
        boolean[][keyof boolean[]]
    >>;

});

describeType('MapValues', () => {

    type t1 = MapValues<Obj4, boolean>;
    type _t1 = AssertTrue<AreSame<
        t1, 
        {
            num:      boolean;
            str_null: boolean;
            str:      boolean;
            bool:     boolean;
            opt_num:  boolean;
        }
    >>;

});

describeType('OptionalLikelyUndefProps', () => {
    
    type t1  = OptionalLikelyUndefProps<Obj1>;
    type _t1 = AssertTrue<AreSame<
        t1,
        Merge<
            Obj1, 
            Partial<Pick<
                Obj1, 
                'undef'| 'undef_bool' | 'undef_null_num_str' | 'undef_num'
            >>
        >
    >>;

    type t2 = OptionalLikelyUndefProps<Obj5>;
    type _t2 = AssertTrue<AreSame<
        t2,
        Merge<
            Obj5,
            Partial<Pick<
                Obj5,
                'any' | 'num_undef' | 'unknown' | 'opt_num'
            >>
        >
    >>;
});

describeType('DeepMapValues', () => {
    type t1 = DeepMapValues<{ 
        num: number;
        nested:             { num: number; str: string; };
        nested_null: null | { num: number; str: string; };
    }, boolean>;
    type _t1 = AssertTrue<AreSame<
        t1, 
        {
            num:      boolean;
            nested: {
                num: boolean;
                str: boolean;
            }
            nested_null: boolean;
        }
    >>;
});
