import { Method, AreSame, InstanceType } from "../../lib";
import { ClassObj, AssertTrue, AbstractClass } from "../helpers";

export namespace MethodTest {

    export type t1 = Method<ClassObj, 'voidMethod'>;
    export type _t1 = AssertTrue<AreSame<
        t1,
        (this: ClassObj, ...args: []) => void
    >>;

}

export namespace InstanceTypeTest {
    export type t1 = InstanceType<typeof AbstractClass>;
    export type _t1 = AssertTrue<AreSame<
        t1,
        AbstractClass
    >>;

    export type t2 = InstanceType<typeof ClassObj>;
    export type _t2 = AssertTrue<AreSame<
        t2,
        ClassObj
    >>;

    type NewAble = new (a: string) => { b: string };

    export type t3 = InstanceType<NewAble>;
    export type _t3 = AssertTrue<AreSame<
        t3,
        { b: string }
    >>;
}