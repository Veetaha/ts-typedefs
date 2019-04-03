import { Extends, IsUnknown, IsAny, IsNever, And, Or, Not } from "../../../lib";
import { AssertFalse, AssertTrue, AssertNever } from "../../helpers";

export * from './are-same';

export namespace ExtendsTest {

    export type t1  = Extends<string | null, string>;
    export type _t1 = AssertFalse<t1>;

}

export namespace IsUnknownTest {

    export type t1  = IsUnknown<unknown>;
    export type _t1 = AssertTrue<t1>;

    export type t2  = IsUnknown<any>;
    export type _t2 = AssertFalse<t2>;

    export type t3  = IsUnknown<never>;
    export type _t3 = AssertFalse<t3>;

    export type t4  = IsUnknown<number | string>;
    export type _t4 = AssertFalse<t4>;

}

export namespace IsAnyTest {

    export type t1  = IsAny<unknown>;
    export type _t1 = AssertFalse<t1>;

    export type t2  = IsAny<any>;
    export type _t2 = AssertTrue<t2>;

    export type t3  = IsAny<never>;
    export type _t3 = AssertFalse<t3>;

    export type t4  = IsAny<number | string>;
    export type _t4 = AssertFalse<t4>;

}

export namespace IsNeverTest {

    export type t1  = IsNever<unknown>;
    export type _t1 = AssertFalse<t1>;

    export type t2  = IsNever<any>;
    export type _t2 = AssertFalse<t2>;

    export type t3  = IsNever<never>;
    export type _t3 = AssertTrue<t3>;

    export type t4  = IsNever<number | string>;
    export type _t4 = AssertFalse<t4>;

}

export namespace AndTest {

    export type t1  = And<[true]>;
    export type _t1 = AssertTrue<t1>;

    export type t2  = And<[false]>;
    export type _t2 = AssertFalse<t2>;

    export type t3  = And<[true, false]>;
    export type _t3 = AssertFalse<t3>;

    export type t4  = And<[true, true]>;
    export type _t4 = AssertTrue<t4>;

    export type t5  = And<[boolean]>;
    export type _t5 = AssertFalse<t5>;

    export type t6  = And<boolean[]>;
    export type _t6 = AssertFalse<t6>;

    export type t7  = And<true[]>;
    export type _t7 = AssertTrue<t7>;

    export type t8  = And<false[]>;
    export type _t8 = AssertFalse<t8>;

}

export namespace OrTest {

    export type t1  = Or<[true]>;
    export type _t1 = AssertTrue<t1>;

    export type t2  = Or<[false]>;
    export type _t2 = AssertFalse<t2>;

    export type t3  = Or<[true, false]>;
    export type _t3 = AssertTrue<t3>;

    export type t4  = Or<[true, true]>;
    export type _t4 = AssertTrue<t4>;

    export type t5  = Or<[boolean]>;
    export type _t5 = AssertTrue<t5>;

    export type t6  = Or<boolean[]>;
    export type _t6 = AssertTrue<t6>;

    export type t7  = Or<true[]>;
    export type _t7 = AssertTrue<t7>;

    export type t8  = Or<false[]>;
    export type _t8 = AssertFalse<t8>;

}

export namespace NotTest {

    export type t1  = Not<true>;
    export type _t1 = AssertFalse<t1>;

    export type t2  = Not<false>;
    export type _t2 = AssertTrue<t2>;

    export type t3  = Not<boolean>;
    export type _t3 = AssertNever<t3>;

    export type t4  = Not<Not<Not<true>>>;
    export type _t4 = AssertFalse<t4>;

}