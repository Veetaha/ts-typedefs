import { DeepPartial, AreSame, DeepRequired } from "../../lib";
import { Obj1, AssertTrue, Obj2, NestedObj, Obj4 } from "../helpers";

export namespace DeepPartialTest {

    export type t1  = DeepPartial<Obj1>;
    export type _t1 = AssertTrue<AreSame<
        t1['Obj1_null'], 
        undefined | null | DeepPartial<Obj1>
    >>;

    export type t2 = DeepPartial<NestedObj>;
    export type _t2 = AssertTrue<AreSame<
        t2['Obj4'],
        DeepPartial<Obj4> | undefined
    >>;


}

export namespace DeepRequiredTest {

    export type t1  = DeepRequired<Obj2>;
    export type _t1 = AssertTrue<AreSame<
        t1['Obj2'], 
        DeepRequired<Obj2>
    >>;

}
