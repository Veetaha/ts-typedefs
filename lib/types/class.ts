/** 
 * Defines constructor function type.
 * @param TInstance Type of instances produced by this constructor.
 * @param TArgs     Tuple type of arguments, this constructor accepts.
 */
export interface Class<
    TInstance = unknown,
    TArgs extends any[] = any[]
> 
extends Function {
    // Note: callable interface type seems better than intersecting with `Function`
    // tslint:disable-next-line: callable-types
    new (...args: TArgs): TInstance;
}

/**
 * Defines constructor function prototype property type.
 * @param TClass Target constructor function type.
 */
export type ClassPrototype<TClass extends Class> = (
    TClass['prototype']
);