import { TupleUnshift, TuplePush, TupleShift, TuplePop } from "../../lib/types/tuples";
import { AssertTrue, describeType } from "../helpers";
import { AreSame } from "../../lib";

describeType('TupleUnshift', () => {

    type t1  = TupleUnshift<[], 0>;
    type _t1 = AssertTrue<AreSame<t1, [0]>>;

    type t2 = TupleUnshift<[0, 1, 2], 'sss'>;
    type _t2 = AssertTrue<AreSame<t2, ['sss', 0, 1, 2]>>;

});


describeType('TuplePush', () => {
    
    type t1  = TuplePush<[], 123>;
    type _t1 = AssertTrue<AreSame<t1, [123]>>;

    type t2 = TuplePush<[0, 1, 2], 'sss'>;
    type _t2 = AssertTrue<AreSame<t2, [0, 1, 2, 'sss']>>;

});


describeType('TupleShift', () => {
    
    type t1  = TupleShift<[]>;
    type _t1 = AssertTrue<AreSame<t1, []>>;

    type t2 = TupleShift<[0, 1, 2]>;
    type _t2 = AssertTrue<AreSame<t2, [1, 2]>>;

});


describeType('TuplePop', () => {
    
    type t1  = TuplePop<[]>;
    type _t1 = AssertTrue<AreSame<t1, []>>;

    type t2 = TuplePop<[0, 1, 2]>;
    type _t2 = AssertTrue<AreSame<t2, [0, 1]>>;

});

