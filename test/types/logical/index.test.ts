import { Extends, IsUnknown, IsAny, IsNever, And, Or, Not, IsNullable } from "../../../lib";
import { AssertFalse, AssertTrue, AssertNever, describeType } from "../../helpers";

export * from './are-same.test';

describeType('Extends', () => {

    type t1  = Extends<string | null, string>;
    type _t1 = AssertFalse<t1>;

    type t2  = Extends<true, boolean>;
    type _t2 = AssertTrue<t2>;

    type t3  = Extends<never, never>;
    type _t3 = AssertTrue<t3>;
});

describeType('IsUnknown', () => {

    type t1  = IsUnknown<unknown>;
    type _t1 = AssertTrue<t1>;

    type t2  = IsUnknown<any>;
    type _t2 = AssertFalse<t2>;

    type t3  = IsUnknown<never>;
    type _t3 = AssertFalse<t3>;

    type t4  = IsUnknown<number | string>;
    type _t4 = AssertFalse<t4>;

});

describeType('IsAny', () => {

    type t1  = IsAny<unknown>;
    type _t1 = AssertFalse<t1>;

    type t2  = IsAny<any>;
    type _t2 = AssertTrue<t2>;

    type t3  = IsAny<never>;
    type _t3 = AssertFalse<t3>;

    type t4  = IsAny<number | string>;
    type _t4 = AssertFalse<t4>;

});

describeType('IsNever', () => {

    type t1  = IsNever<unknown>;
    type _t1 = AssertFalse<t1>;

    type t2  = IsNever<any>;
    type _t2 = AssertFalse<t2>;

    type t3  = IsNever<never>;
    type _t3 = AssertTrue<t3>;

    type t4  = IsNever<number | string>;
    type _t4 = AssertFalse<t4>;

});

describeType('And', () => {

    type t1  = And<[true]>;
    type _t1 = AssertTrue<t1>;

    type t2  = And<[false]>;
    type _t2 = AssertFalse<t2>;

    type t3  = And<[true, false]>;
    type _t3 = AssertFalse<t3>;

    type t4  = And<[true, true]>;
    type _t4 = AssertTrue<t4>;

    type t5  = And<[boolean]>;
    type _t5 = AssertFalse<t5>;

    type t6  = And<boolean[]>;
    type _t6 = AssertFalse<t6>;

    type t7  = And<true[]>;
    type _t7 = AssertTrue<t7>;

    type t8  = And<false[]>;
    type _t8 = AssertFalse<t8>;

});

describeType('Or', () => {

    type t1  = Or<[true]>;
    type _t1 = AssertTrue<t1>;

    type t2  = Or<[false]>;
    type _t2 = AssertFalse<t2>;

    type t3  = Or<[true, false]>;
    type _t3 = AssertTrue<t3>;

    type t4  = Or<[true, true]>;
    type _t4 = AssertTrue<t4>;

    type t5  = Or<[boolean]>;
    type _t5 = AssertTrue<t5>;

    type t6  = Or<boolean[]>;
    type _t6 = AssertTrue<t6>;

    type t7  = Or<true[]>;
    type _t7 = AssertTrue<t7>;

    type t8  = Or<false[]>;
    type _t8 = AssertFalse<t8>;

});

describeType('Not', () => {

    type t1  = Not<true>;
    type _t1 = AssertFalse<t1>;

    type t2  = Not<false>;
    type _t2 = AssertTrue<t2>;

    type t3  = Not<boolean>;
    type _t3 = AssertNever<t3>;

    type t4  = Not<Not<Not<true>>>;
    type _t4 = AssertFalse<t4>;

});

describeType('IsNullable', () => {

    type t1  = IsNullable<string>;
    type _t1 = AssertFalse<t1>;

    type t2  = IsNullable<any>;
    type _t2 = AssertTrue<t2>;

    type t3  = IsNullable<unknown>;
    type _t3 = AssertTrue<t3>;

    type t4  = IsNullable<never>;
    type _t4 = AssertFalse<t4>;

    type t5  = IsNullable<null>;
    type _t5 = AssertFalse<t5>;

    type t6  = IsNullable<undefined>;
    type _t6 = AssertFalse<t6>;

    type t7  = IsNullable<null | undefined>;
    type _t7 = AssertTrue<t7>;

    type t8  = IsNullable<string | null | undefined>;
    type _t8 = AssertTrue<t8>;
});
