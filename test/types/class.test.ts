import { Method, AreSame, InstanceType } from "../../lib";
import { ClassObj, AssertTrue, AbstractClass, describeType } from "../helpers";

describeType('Method', () => {

    type t1 = Method<ClassObj, 'voidMethod'>;
    type _t1 = AssertTrue<AreSame<
        t1,
        (this: ClassObj, ...args: []) => void
    >>;

});

describeType('InstanceType', () => {
    type t1 = InstanceType<typeof AbstractClass>;
    type _t1 = AssertTrue<AreSame<
        t1,
        AbstractClass
    >>;

    type t2 = InstanceType<typeof ClassObj>;
    type _t2 = AssertTrue<AreSame<
        t2,
        ClassObj
    >>;

    type NewAble = new (a: string) => { b: string };

    type t3 = InstanceType<NewAble>;
    type _t3 = AssertTrue<AreSame<
        t3,
        { b: string }
    >>;
});
