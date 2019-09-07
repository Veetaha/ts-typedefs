import { Op, Eval } from "../../lib";
import { AssertTrue, describeType } from "../helpers";

describeType('Eval', () => {

    type t1 = Eval<Op.Or<[Op.Extends<string>, false]>, 'val'>;
    type _t1 = AssertTrue<t1>;

});
