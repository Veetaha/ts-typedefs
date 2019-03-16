import { UnpackPromise, Tuple } from './index';

/**
 * Defines a Function subtype with the given arguments, return value and `this` context.
 * 
 * @param TArgs   Tuple of argument types that this function accepts.
 * @param TRetval Type of value this function returns.
 * @param TThis   Type `this` function context.
 * 
 */
export interface Func<
    TArgs extends Tuple<any> = any,
    TRetval                  = unknown,
    TThis                    = unknown
> extends Function {
    // Note: see './class.ts/Class' note to learn about suppresion reasons
    // tslint:disable-next-line: callable-types
    (this: TThis, ...args: TArgs): TRetval;
}

/**
 * Defines an asyncronous function, which is typically marked with `async` modifier,
 * with arguments specified as a tuple type `TArgs` and return type as `Promise<TRet>`.
 *
 * @param TArgs   Tuple type of arguments that defined async function accepts.
 * @param TRetval Type this function returns `Promise` for.
 * @param TRet    Type of the return value of the async function.
 * 
 */
export type AsyncFunc<
    TArgs extends Tuple<any> = any, 
    TRet                     = unknown,
    TThis                    = unknown
> = Func<TArgs, Promise<TRet>, TThis>;


/**
 * Defines the unpacked result type of the `Promise` returned by the specified `AsyncFunc`.
 * 
 * @param TAsyncFunc `AsyncFunc` to unpack `Promise` return type from.
 */
export type AsyncFuncReturnType<TAsyncFunc extends AsyncFunc> = (
    UnpackPromise<ReturnType<TAsyncFunc>>
);