import { UnpackArray, AreSame, Widen, DeepWiden, UnpackTypePredicate, TypePredicate } from "../../lib";
import { AssertTrue, Obj3, Obj4, describeType } from "../helpers";

describeType('UnpackArray', () => {

    type t1  = UnpackArray<(number | string)[]>;
    type _t1 = AssertTrue<AreSame<
        t1, 
        string | number
    >>;

});

describeType('Widen', () => {

    type t1  = Widen<Obj3>;
    type _t1 = AssertTrue<AreSame<
        t1, 
        Obj3
    >>;

});

describeType('DeepWiden', () => {

    type t1  = DeepWiden<Obj3>;
    type _t1 = AssertTrue<AreSame<
        t1,
        {
            ustr:                   string;
            unum:                   number;
            true:                   boolean;
            tuple$true_false_unum$: (boolean | number)[];
            tuple$Obj3$:            t1[];
        }
    >>;
});

describeType('UnpackTypePredicate', () => {

    type t1 = UnpackTypePredicate<TypePredicate<Obj4>>;
    type _t1 = AssertTrue<AreSame<
        t1,
        Obj4
    >>;

});
