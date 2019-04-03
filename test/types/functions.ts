import { AsyncFuncReturnType, AreSame, Func, AsyncFunc, FuncContext } from "../../lib";

import { AssertTrue, Obj1, Obj4, ClassObj2 } from "../helpers";

export namespace FuncTest {

    export type t1 = Func;
    export type _t1 = AssertTrue<AreSame<
        t1,
        (this: any, ...args: unknown[]) => unknown
    >>;

    export type t2 = Func<[string, number | undefined]>;
    export type _t2 = AssertTrue<AreSame<
        t2,
        (this: any, ...args: [string, number | undefined]) => unknown
    >>;

    export type t3 = Func<[boolean], void>;
    export type _t3 = AssertTrue<AreSame<
        t3,
        (this: any, ...args: [boolean]) => void
    >>;

    export type t4 = Func<[boolean], number, Obj4>;
    export type _t4 = AssertTrue<AreSame<
        t4,
        (this: Obj4, ...args: [boolean]) => number
    >>;

}

export namespace AsyncFuncReturnTypeTest {

    export type t1  = AsyncFuncReturnType<(args: any[]) => Promise<Obj1>>;
    export type _t1 = AssertTrue<AreSame<
        t1, 
        Obj1
    >>;

    export type t2 = AsyncFuncReturnType<AsyncFunc<[number, string], ClassObj2>>;
    export type _t2 = AssertTrue<AreSame<
        t2,
        ClassObj2
    >>;

    export type t3 = AsyncFuncReturnType<typeof ClassObj2.promiseObj4Method>;
    export type _t3 = AssertTrue<AreSame<
        t3,
        Obj4
    >>;

}

export namespace FuncContextTest {

    export type t1  = FuncContext<(this: number, arg: string) => void>;
    export type _t1 = AssertTrue<AreSame<
        t1, 
        number
    >>;

    export type t2 = FuncContext<(arg: string) => Promise<void>>;
    export type _t2 = AssertTrue<AreSame<
        t2, 
        {}
    >>;

}