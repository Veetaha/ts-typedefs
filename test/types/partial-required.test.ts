import { DeepPartial, AreSame, DeepRequired, Partial } from "../../lib";
import { Obj1, AssertTrue, Obj2, NestedObj, Obj4, describeType } from "../helpers";

describeType('DeepPartial', () => {

    type t1  = DeepPartial<Obj1>;
    type _t1 = AssertTrue<AreSame<
        t1['Obj1_null'], 
        undefined | null | DeepPartial<Obj1>
    >>;

    type t2 = DeepPartial<NestedObj>;
    type _t2 = AssertTrue<AreSame<
        t2['Obj4'],
        DeepPartial<Obj4> | undefined
    >>;


});

describeType('DeepRequired', () => {

    type t1  = DeepRequired<Obj2>;
    type _t1 = AssertTrue<AreSame<
        t1['Obj2'], 
        DeepRequired<Obj2>
    >>;

});


describeType('Patial', () => {

    type t1 = Partial<Obj1, 'num' | 'bool'>;
    type _t1 = AssertTrue<AreSame<
        t1['num'], number | undefined
    >>;
    type __t1 = AssertTrue<AreSame<
        t1['bool'], boolean | undefined
    >>;
});
