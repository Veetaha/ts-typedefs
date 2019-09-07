import { AsyncFuncReturnType, AreSame, Func, AsyncFunc, FuncContext } from "../../lib";

import { AssertTrue, Obj1, Obj4, ClassObj2, describeType } from "../helpers";

describeType('Func', () => {

    type t1 = Func;
    type _t1 = AssertTrue<AreSame<
        t1,
        (this: any, ...args: unknown[]) => unknown
    >>;

    type t2 = Func<[string, number | undefined]>;
    type _t2 = AssertTrue<AreSame<
        t2,
        (this: any, ...args: [string, number | undefined]) => unknown
    >>;

    type t3 = Func<[boolean], void>;
    type _t3 = AssertTrue<AreSame<
        t3,
        (this: any, ...args: [boolean]) => void
    >>;

    type t4 = Func<[boolean], number, Obj4>;
    type _t4 = AssertTrue<AreSame<
        t4,
        (this: Obj4, ...args: [boolean]) => number
    >>;

});

describeType('AsyncFuncReturnType', () => {

    type t1  = AsyncFuncReturnType<(args: any[]) => Promise<Obj1>>;
    type _t1 = AssertTrue<AreSame<
        t1, 
        Obj1
    >>;

    type t2 = AsyncFuncReturnType<AsyncFunc<[number, string], ClassObj2>>;
    type _t2 = AssertTrue<AreSame<
        t2,
        ClassObj2
    >>;

    type t3 = AsyncFuncReturnType<typeof ClassObj2.promiseObj4Method>;
    type _t3 = AssertTrue<AreSame<
        t3,
        Obj4
    >>;

});

describeType('FuncContext', () => {

    type t1  = FuncContext<(this: number, arg: string) => void>;
    type _t1 = AssertTrue<AreSame<
        t1, 
        number
    >>;

    type t2 = FuncContext<(arg: string) => Promise<void>>;
    type _t2 = AssertTrue<AreSame<
        t2, 
        unknown
    >>;

});
