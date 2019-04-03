import { UnpackArray, AreSame, Widen, DeepWiden, UnpackTypePredicate, TypePredicate } from "../../lib";
import { AssertTrue, Obj3, Obj4 } from "../helpers";

export namespace UnpackArrayTest {

    export type t1  = UnpackArray<(number | string)[]>;
    export type _t1 = AssertTrue<AreSame<
        t1, 
        string | number
    >>;

}

export namespace WidenTest {

    export type t1  = Widen<Obj3>;
    export type _t1 = AssertTrue<AreSame<
        t1, 
        Obj3
    >>;

}

export namespace DeepWidenTest {

    export type t1  = DeepWiden<Obj3>;
    export type _t1 = AssertTrue<AreSame<
        t1,
        {
            ustr:                   string;
            unum:                   number;
            true:                   boolean;
            tuple$true_false_unum$: (boolean | number)[];
            tuple$Obj3$:            t1[];
        }
    >>;

}

export namespace UnpackTypePredicateTest {

    export type t1 = UnpackTypePredicate<TypePredicate<Obj4>>;
    export type _t1 = AssertTrue<AreSame<
        t1,
        Obj4
    >>;

}