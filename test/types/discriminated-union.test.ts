import { MutuallyExclusive, AreSame } from "../../lib";
import { AssertTrue, describeType } from "../helpers";

describeType('MutuallyExclusive', () => {

    type t1 = MutuallyExclusive<{ }, { }>;
    type _t1 = AssertTrue<AreSame<t1, { }>>;

    type t2 = MutuallyExclusive<{ a: string }, { }>;
    type _t2 = AssertTrue<AreSame<t2, { a: string } | { a?: undefined }>>;

    type t3 = MutuallyExclusive<{ a: string }, { a: string }>;
    type _t3 = AssertTrue<AreSame<t3, { a: string }>>;

    type t4 = MutuallyExclusive<{ a: string }, { b: number }>;
    type _t4 = AssertTrue<AreSame<
        t4,
        | { a: string, b?: undefined }
        | { a?: undefined, b: number }
    >>;

    type t5 = MutuallyExclusive<
        { a: string, b: number },
        { a: bigint, c: boolean }
    >;
    type _t5 = AssertTrue<AreSame<
        t5,
        | { a: string, b: number, c?: undefined }
        | { a: bigint, b?: undefined, c: boolean }
    >>;

});
