/** 
 * Defines constructor function type.
 * @param TInstance Type of instances produced by this constructor.
 * @param TArgs     Tuple type of arguments, this constructor accepts.
 */
export type Class<
    TInstance = unknown,
    TArgs extends any[] = any[]
> = new (...args: TArgs) => TInstance;

/**
 * Defines constructor function prototype property type.
 * @param TClass Target constructor function type.
 */
export type ClassPrototype<TClass extends { prototype: unknown }> = (
    TClass['prototype']
);