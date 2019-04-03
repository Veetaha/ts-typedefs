import { Obj1, Obj4 } from "../helpers/mocks";
import { FilterProps, Op, AreSame } from "../../lib";
import { AssertTrue } from "../helpers/utils";

export namespace FilterPropsTest {

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


    export type t2  = FilterProps<Obj4, Op.Extends<string>>;
    export type _t2 = AssertTrue<AreSame<
        t2, 
        Pick<Obj4, 'str'>
    >>;

    export type t3 = FilterProps<
        Obj4, 
        Op.And<[
            Op.Not<Op.UnionIncludes<string>>, 
            Op.Nand<[false, true]> // this condition is always true
        ]>
    >;
    export type _t3 = AssertTrue<AreSame<
        t3, 
        { bool: boolean; num: number; }
    >>;

}