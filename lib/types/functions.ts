import { UnpackPromise, Tuple, Obj } from './index';

/**
 * Defines a function type with the given arguments, return value and `this` context.
 *
 * @param TArgs   Tuple of argument types that defined function accepts.
 * @param TRet    Type of value this function returns.
 * @param TThis   Type of `this` function context.
 */
export type Func<
    TArgs extends Tuple<any> = any,
    TRet                     = unknown,
    TThis                    = any
> = (this: TThis, ...args: TArgs) => TRet;

/**
 * Defines an asyncronous function, which is typically marked with `async` modifier,
 * with arguments specified as a tuple type `TArgs` and return type as `Promise<TRet>`.
 *
 * @param TArgs   Tuple type of arguments that defined async function accepts.
 * @param TRet    Type this function returns `Promise` for.
 * @param TThis   Type of `this` function context.
 *
 */
export type AsyncFunc<
    TArgs extends Tuple<any> = any,
    TRet                     = unknown,
    TThis                    = any
> = Func<TArgs, Promise<TRet>, TThis>;

/**
 * Defines the unpacked result type of the `Promise` returned by the specified `AsyncFunc`.
 *
 * @param TAsyncFunc `AsyncFunc` to unpack `Promise` return type from.
 */
export type AsyncFuncReturnType<TAsyncFunc extends AsyncFunc> = (
    UnpackPromise<ReturnType<TAsyncFunc>>
);


/**
 * Defines type predicate function, i.e. a function that takes `suspect` of `unknown` type
 * and returns a boolean that denotes whether `suspect` is of `TTarget` type or not.
 *
 * @param TTarget Type that this predicate checks `suspect` to conform to.
 * @param TThis   Type of `this` context of the predicate.
 */
export type TypePredicate<
    TTarget = unknown,
    TThis   = any
> = (this: TThis, suspect: unknown) => suspect is TTarget;


/**
 * Defines a type that is the same as `TClass[TMethodName]`, but restricts `this`
 * context to be of type `TClass`. This is usefull when you want to create proxies
 * for some methods and have `this` type being automatically set to `TClass` in their bodies,
 * so that compiler won't `this is implicit any` error and you don't have to type `this`
 * manually.
 *
 * @param TClass      Class instance type to take method from (also becomes `this` type).
 * @param TMethodName Keyof `TClass` that defines the method name to take from `TClass`.
 */
export type Method<
    TClass      extends Obj<Func, TMethodName>,
    TMethodName extends keyof TClass
> = (this: TClass, ...args: Parameters<TClass[TMethodName]>) => ReturnType<TClass[TMethodName]>;


/**
 * Defines `typeof this` that the given `TFunc` must be run with.
 *
 * @param TFunc Function type to infer `this` context type from.
 */
export type FuncContext<
    TFunc extends Func
> = TFunc extends Func<any, any, infer TThis> ? TThis : never;


/**
 * Defines a function type with the given arguments, and `this` context.
 * Return value of the defined function type is `void`.
 *
 *
 * @param TArgs   Tuple of argument types that this function accepts.
 * @param TThis   Type `this` function context.
 *
 */
export type Routine<
    TArgs extends Tuple<any> = any,
    TThis                    = any
> = Func<TArgs, void, TThis>;

/**
 * Defines an asyncronous function, which is typically marked with `async` modifier,
 * with arguments specified as a tuple type `TArgs` and return type as `Promise<unknown>`.
 *
 * @param TArgs   Tuple type of arguments that defined async function accepts.
 * @param TThis   Type `this` function context.
 */
export type AsyncRoutine<
    TArgs extends Tuple<any> = any,
    TThis                    = any
> = Func<TArgs, Promise<unknown>, TThis>;


/**
 * Defines a function type with the given arguments and `this` context.
 * Defined function may return `TRet` synchronously or asynchronously i.e.
 * `Promise<TRet>`.
 *
 * @param TArgs   Tuple of argument types that defined function accepts.
 * @param TRet    Type of value this function returns.
 * @param TThis   Type of `this` function context.
 */
export type SyncOrAsyncFunc<
    TArgs extends Tuple<any> = any,
    TRet                     = unknown,
    TThis                    = any
> = (this: TThis, ...args: TArgs) => (TRet | Promise<TRet>);


/**
 * Defines a function type with the given arguments and `this` context.
 * Defined function may return synchronously or asynchronously. Its return value
 * should be ignored (it is `void | Promise<unknown>`).
 *
 * @param TArgs   Tuple of argument types that defined function accepts.
 * @param TThis   Type of `this` function context.
 */
export type SyncOrAsyncRoutine<
    TArgs extends Tuple<any> = any,
    TThis                    = any
> = (this: TThis, ...args: TArgs) => (void | Promise<unknown>);
