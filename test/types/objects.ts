import { Merge, AreSame, Obj, RemoveKeys, ValueOf, MapValues } from "../../lib";
import { MergeObj1, MergeObj2, AssertTrue, Obj4 } from "../helpers";

export namespace MergeTest {

    export type t1  = Merge<MergeObj1, MergeObj2>;
    export type _t1 = AssertTrue<AreSame<
        t1, 
        Pick<MergeObj1, '_2' | '_3' | '_4' | '_5'> & MergeObj2
    >>;

}

export namespace ObjTest {

    export type t1   = Obj; 
    export type _t1  = AssertTrue<AreSame<
        t1,  
        { [key: string]: unknown; }
    >>;     

    export type t2  = Obj<boolean>;    
    export type _t2 = AssertTrue<AreSame<
        t2, 
        { [key: string]: boolean; }
    >>;     

    export type t3  = Obj<string, number>;     
    export type _t3 = AssertTrue<AreSame<
        t3, 
        { [key: number]: string;  }
    >>;

    export type t4  = Obj<number, 'num1' | 'num2'>;
    export type _t4 = AssertTrue<AreSame<
        t4, 
        { num1: number, num2: number; }
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