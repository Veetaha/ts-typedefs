import { AreSame, Func } from "../../../lib";
import { AssertTrue, AssertFalse, describeType } from "../../helpers";

describeType('AreSame', () => {

    type t1  = AreSame<{ num: number, str: string}, { num: number, str: string}>;
    type _t1 = AssertTrue<t1>;

    type t2  = AreSame<{}, { num: number }>;
    type _t2 = AssertFalse<t2>;

    type t3  = AreSame<any, unknown>;
    type _t3 = AssertFalse<t3>;

    type t4  = AreSame<any, never>;
    type _t4 = AssertFalse<t4>;

    type t5  = AreSame<unknown, never>;
    type _t5 = AssertFalse<t5>;

    type t6  = AreSame<unknown, never>;
    type _t6 = AssertFalse<t6>;

    type t7  = AreSame<number, never>;
    type _t7 = AssertFalse<t7>;

    type t8  = AreSame<unknown, number>;
    type _t8 = AssertFalse<t8>;

    type t9  = AreSame<Func, Func>;
    type _t9 = AssertTrue<t9>;

    type t10  = AreSame<[number], [number]>;
    type _t10 = AssertTrue<t10>;

    type t11  = AreSame<[number, string], [number]>;
    type _t11 = AssertFalse<t11>;

});
