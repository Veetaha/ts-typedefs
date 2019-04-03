import { AreSame, Func } from "../../../lib";
import { AssertTrue, AssertFalse } from "../../helpers";

export namespace AreSameTest {

    export type t1  = AreSame<{ num: number, str: string}, { num: number, str: string}>;
    export type _t1 = AssertTrue<t1>;

    export type t2  = AreSame<{}, { num: number }>;
    export type _t2 = AssertFalse<t2>;

    export type t3  = AreSame<any, unknown>;
    export type _t3 = AssertFalse<t3>;

    export type t4  = AreSame<any, never>;
    export type _t4 = AssertFalse<t4>;

    export type t5  = AreSame<unknown, never>;
    export type _t5 = AssertFalse<t5>;

    export type t6  = AreSame<unknown, never>;
    export type _t6 = AssertFalse<t6>;

    export type t7  = AreSame<number, never>;
    export type _t7 = AssertFalse<t7>;

    export type t8  = AreSame<unknown, number>;
    export type _t8 = AssertFalse<t8>;

    export type t9  = AreSame<Func, Func>;
    export type _t9 = AssertTrue<t9>;

    export type t10  = AreSame<[number], [number]>;
    export type _t10 = AssertTrue<t10>;

    export type t11  = AreSame<[number, string], [number]>;
    export type _t11 = AssertFalse<t11>;

}