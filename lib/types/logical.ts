import { UnpackArray, Func, AsyncFunc } from "./index";

/**
 * Defines `false`      unit type if `T extends true`.
 * Defines `true`       unit type if `T extends false`.
 * Defines `TIfTIsBool` when `T` is exactly `boolean` type.
 * 
 * @param T          Boolean type to get negation for.
 * @param TIfTIsBool Resulting type when `T` is exactly of `boolean` type.
 */
export type Not<T extends boolean, TIfTIsBool = never> = If<(T), false, true, TIfTIsBool>;

/**
 * Sequentially performs the following logic:
 * Expands to `TIfTrue`       if `TCond extends true`.
 * Expands to `TElse`         if `TCond extends false`.
 * Expands to `TIfCondIsBool` if `TCond extends boolean`.
 * 
 * @param TCond         Boolean type that controlls which branch to expand to.
 * @param TIfTrue       Defined type if `TCond extends true`   branch.
 * @param TElse         Defined type if `TCond extends false`  branch.
 * @param TIfCondIsBool Defined type if `TCond extends boolean`branch.
 */
export type If<
    TCond extends boolean, 
    TIfTrue, 
    TElse = never,
    TIfCondIsBool = never
> = (
    Extends<TCond, true>  extends true ? TIfTrue :
    Extends<TCond, false> extends true ? TElse   : 
    TIfCondIsBool
);


/**
 * Defines `true` or `false` according to the definition of `xor` logical operator.
 */
export type Xor<T1 extends boolean, T2 extends boolean> = T1 extends T2 ? false : true;
/**
 * Defines `true` or `false` according to the definition of `xnor` logical operator.
 */
export type Equiv<T1 extends boolean, T2 extends boolean> = Not<Xor<T1, T2>>;

/**
 * Defines `true` or `false` according to the definition of `nand` logical operator.
 * It gets applied to all the argumets in the given tuple type `T`.
 */
export type Nand<T extends boolean[]> = Not<And<T>>;
/**
 * Defines `true` or `false` accroding to the definition of `nor` logical operator.
 * It gets applied to all the argumets in the given tuple type `T`.
 */
export type Nor <T extends boolean[]> = Not<Or<T>>;
/**
 * Defines `true` or `false` accroding to the definition of `and` logical operator.
 * It gets applied to all the argumets in the given tuple type `T`.
 */
export type And<T extends boolean[]> = Not<UnionIncludes<UnpackArray<T>, false>>;
/**
 * Defines `true` or `false` according to the definition of `or` logical operator.
 * It gets applied to all the argumets in the given tuple type `T`.
 */
export type Or<T extends boolean[]> = UnionIncludes<UnpackArray<T>, true>;

/**
 * Defines `true` if `TExtender` is assignable to `TExtendee`, otherwise `false`.
 * @param TExtender Type to check for covariance     with `TExtendee`.
 * @param TExtendee Type to check for contravariance with `TExtender`.
 * 
 * @remarks
 * It verifies that you may physically assign a value of type `TExtender` to `TExtendee`.
 * That's why union types with excess members that are not assignable to `TExtendee`
 * will evaluate to `false`.
 */
export type Extends<
    TExtender, 
    TExtendee
// workaround untill this bug is resolved https://github.com/Microsoft/TypeScript/issues/30708
> = false extends (TExtender extends TExtendee ? true : false) ? false : true;

/**
 * Shorthand for `Not<Extends<>>`.
 */
export type NotExtends<TExtender, TExtendee> = Not<Extends<TExtender, TExtendee>>;

/**
 * Defines `true` if the given `TUnion` includes `TValue`.
 * This type is opposite to `UnionExcludes<>`.
 * 
 * @param TUnion Union type to search for `TValue` in.
 * @param TValue Type to match with `TUnion` members.
 */
export type UnionIncludes<TUnion, TValue> = Extends<TValue, Extract<TUnion, TValue>>;

/**
 * Defines `false` if the given `TUnion` includes `TValue`. 
 * This type is opposite to `UnionIncludes<>`.
 * 
 * @param TUnion Union type to search for `TValue` in.
 * @param TValue Type to match with `TUnion` members.
 */
export type UnionExcludes<TUnion, TValue> = IsNever<Extract<TUnion, TValue>>;


/**
 * Defines true if `T1` is exactly `T2`, `false` otherwise.
 * Even `unknown` and `any` expand to `false`. Only the same types expand to `true`.
 * Beware that this type works as vanilla `extends` clause with function types,
 * so comparing functions is not that strict.
 * 
 * @param T1 Type to strictly compare to `T2`.
 * @param T2 Type to strictly compare to `T1`.
 */
export type AreSame<T1, T2> = (
    If<(IsAny<T1>),       
        IsAny<T2>,
    If<(IsAny<T2>),
        IsAny<T1>,
        And<[
            UnionIncludes<keyof T1, keyof T2>,
            UnionIncludes<keyof T2, keyof T1>,
            Extends<T1, T2>, 
            Extends<T2, T1> 
        ]>
    >>
);

/**
 * Defines `false` if `TSuspect` is exactly of `unknown` type, `true` otherwise.
 * @param TSuspect Target type to check.
 */
export type IsNotUnknown<TSuspect> = Not<IsUnknown<TSuspect>>;

/**
 * Defines `true` if `TSuspect` is exactly of `unknown` type, `false` otherwise.
 * @param TSuspect Target type to check.
 */
export type IsUnknown<TSuspect> = And<[IsNotAny<TSuspect>, Extends<unknown, TSuspect>]>;

/**
 * Defines `false` if `TSuspect` is exactly of `any` type, `true` otherwise.
 * @param TSuspect Target type to check. 
 */
export type IsNotAny<TSuspect> = Not<IsAny<TSuspect>>;

/**
 * Defines `true` if `TSuspect` is exactly of `any` type, `false` otherwise.
 * @param TSuspect Target type to check.
 */
export type IsAny<TSuspect> = Extends<boolean, TSuspect extends never ? true : false>;

/**
 * Defines `false` if `TSuspect` is exactly of `never` type, `true` otherwise.
 * @param TSuspect Target type to check.
 */
export type IsNotNever<TSuspect> = Not<IsNever<TSuspect>>;

/**
 * Defines `true` if `TSuspect` is exactly of `never` type, `false` otherwise.
 * @param TSuspect Target type to check.
 */
export type IsNever<TSuspect> = Extends<TSuspect, never>;


/**
 * Shorthand for `Extends<TSuspect, Func>`.
 * @param TSuspect Target type to check.
 */
export type IsFunc<TSuspect> = Extends<TSuspect, Func>;

/**
 * Shorthand for `Extends<TSuspect, AsyncFunc>`.
 * @param TSuspect Target type to check.
 */
export type IsAsyncFunc<TSuspect> = Extends<TSuspect, AsyncFunc>;