import { TupleUnshift, TuplePush, TupleShift, TuplePop } from "../../lib/types/tuples";
import { AssertTrue } from "../helpers";
import { AreSame } from "../../lib";

export namespace TupleUnshiftTest {

    export type t1  = TupleUnshift<[], 0>;
    export type _t1 = AssertTrue<AreSame<t1, [0]>>;

    export type t2 = TupleUnshift<[0, 1, 2], 'sss'>;
    export type _t2 = AssertTrue<AreSame<t2, ['sss', 0, 1, 2]>>;

}


export namespace TuplePushTest {
    
    export type t1  = TuplePush<[], 123>;
    export type _t1 = AssertTrue<AreSame<t1, [123]>>;

    export type t2 = TuplePush<[0, 1, 2], 'sss'>;
    export type _t2 = AssertTrue<AreSame<t2, [0, 1, 2, 'sss']>>;

}


export namespace TupleShiftTest {
    
    export type t1  = TupleShift<[]>;
    export type _t1 = AssertTrue<AreSame<t1, []>>;

    export type t2 = TupleShift<[0, 1, 2]>;
    export type _t2 = AssertTrue<AreSame<t2, [1, 2]>>;

}


export namespace TuplePopTest {
    
    export type t1  = TuplePop<[]>;
    export type _t1 = AssertTrue<AreSame<t1, []>>;

    export type t2 = TuplePop<[0, 1, 2]>;
    export type _t2 = AssertTrue<AreSame<t2, [0, 1]>>;

}

