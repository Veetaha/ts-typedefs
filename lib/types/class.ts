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
export type ClassPrototype<TClass extends Prototypeful> = (
    TClass['prototype']
);

/**
 * Defines an object type which has `prototype` property of `TProto` type.
 *
 * @param TProto Type of `prototype` property to define.
 */
export interface Prototypeful<TProto = unknown> {
    prototype: TProto;
}

/**
 * Defines an instance type of the given class or the type of `prototype` property
 * of the given `Prototypeful` object. `TClass` may even be an abstract class,
 * though those ones are not newable, but the type of their instances can be obtained
 * through their `prototype` property.
 *
 * @param TClass Abstract or plain class/interface to unpack instance type from.
 */
export type InstanceType<
    TClass extends Prototypeful | Class
> = TClass extends Class<infer TInstance>
    ? TInstance
    : ClassPrototype<TClass>;
