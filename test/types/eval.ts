import { Op, Eval } from "../../lib";
import { AssertTrue } from "../helpers";

export namespace EvalTest {

    export type t1 = Eval<Op.Or<[Op.Extends<string>, false]>, 'val'>;
    export type _t1 = AssertTrue<t1>;

}