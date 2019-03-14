
export type Condition = (
    | true 
    | false

    | Not<any> 
    | Or<any, any>
    | And<any, any> 

    | UnionIncludes 
    | AssignableTo
);

/**
 * Defines a negation of some condition.
 * @param TCond Condition type to negate.
 */
export interface Not<TCond extends Condition> {
    'ts-types.Cond.Not': TCond;
}

/**
 * Defines logical `and` operator of all the given conditions
 */
export interface And<TConds extends any[]> {
    'ts-types.Cond.And': TConds;
}

/**
 * Defines logical `or` operator of all the given conditions
 */
export interface Or<TConds extends any[]> {
    'ts-types.Cond.Or': TConds;
}


/**
 * Defines properties which values are assignable to the given type.
 */
export interface AssignableTo<T = unknown> {
    'ts-types.Cond.Assignable': T;
}

/**
 * Defines union types that contain items that are assignable to the given type.
 */                   
export interface UnionIncludes<T = unknown> {
    'ts-types.Cond.UnionIncludes': T;
}
