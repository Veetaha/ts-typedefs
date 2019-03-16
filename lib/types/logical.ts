/**
 * Defines `false` unit type if `T extends true`, otherwise `false`.
 * @param T Boolean type to get negation for.
 */
export type Not<T extends boolean> = T extends true ? false : true;

/**
 * Expands to `TIfTrue` if `TCond extends true`, otherwise expands to `TElse`.
 * @param TCond    Boolean type that controlls which branch to expand to.
 * @param TIfTrue  True branch type.
 * @param TElse    False branch type.
 */
export type If<TCond extends boolean, TIfTrue, TElse = never> = TCond extends true ? TIfTrue : TElse;


/**
 * Defines `true` or `false` according to the definition of `xor` logical operator.
 */
export type Xor  <T1 extends boolean, T2 extends boolean> = T1 extends T2 ? false : true;
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
export type Nor <T extends boolean[]> = Not<Or <T>>;
/**
 * Defines `true` or `false` accroding to the definition of `and` logical operator.
 * It gets applied to all the argumets in the given tuple type `T`.
 */
export type And<T extends boolean[]> = Not<UnionIncludes<T[number], false>>;
/**
 * Defines `true` or `false` according to the definition of `or` logical operator.
 * It gets applied to all the argumets in the given tuple type `T`.
 */
export type Or <T extends boolean[]> = UnionIncludes<T[number], true>;

/**
 * Defines `true` if `TExtender` is assignable to `TExtendee`, otherwise false.
 * @param TExtender Type to check for covariance     with `TExtendee`.
 * @param TExtendee Type to check for contravariance with `TExtender`.
 * 
 * @remarks
 * It verifies that you may physically assign a value of type `TExtender` to `TExtendee`.
 * That's why union types with excess members that are not assignable to `TExtendee`
 * will evaluate to `false`.
 */
export type Extends<TExtender, TExtendee> = (
    false extends (TExtender extends TExtendee ? true : false) ? false : true
);

/**
 * Defines `true` if the given `TUnion` includes `TValue`.
 * @param TUnion Union type to search for `TValue` in.
 * @param TValue Type to match with `TUnion` members.
 */
export type UnionIncludes<TUnion, TValue> = Extract<TUnion, TValue> extends never ? false : true;
