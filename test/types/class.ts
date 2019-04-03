import { Method, AreSame } from "../../lib";
import { ClassObj, AssertTrue } from "../helpers";

export namespace MethodTest {

    export type t1 = Method<ClassObj, 'voidMethod'>;
    export type _t1 = AssertTrue<AreSame<
        t1,
        (this: ClassObj, ...args: []) => void
    >>;

}