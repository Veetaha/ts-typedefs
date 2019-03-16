import { Class, Func, Obj } from './index';

/**
 * Defines a class decorator generic function type.
 * 
 * @param TClass      Target class constructor function type.
 * 
 * @param targetClass Decorated class constructor function.
 * 
 * @remarks
 * If the class decorator returns a value, it will replace the class declaration
 * with the provided constructor function.
 * 
 * See https://www.typescriptlang.org/docs/handbook/decorators.html#-decorators
 */
export type ClassDecorator = (
    <TClass extends Class = Class>
    (targetClass: TClass) => TClass | void
);

/**
 * Defines a static or instance method decorator function type.
 * 
 * @param TArgs   Tuple type that defines arguments decorated method accepts.
 * @param TRetval Return type of the decorated method.
 * 
 * @param protoOrClass     Prototype of the decorated method's class (for instance method) 
 *                         or constructor function (for static method).
 * @param methodName       Name of the property, that contains decorated method.
 * @param methodDescriptor Descriptor of the decorated method property.
 * 
 * @remarks
 * Decorated function `this` context is of `typeof protoOrClass` type.
 * 
 * If the method decorator returns a value, it will be used as the 
 * Property Descriptor for the method.
 * 
 * When targeting versions less than ES5 `methodDescriptor` will be `undefined`
 * and the return value is ignored.
 * 
 * See https://www.typescriptlang.org/docs/handbook/decorators.html#method-decorators
 */
export type MethodDecorator<TArgs extends any[] = any[], TRetval = any> = (
    <
        TMethodName   extends string | symbol,
        TProtoOrClass extends Obj<Func<TArgs, TRetval, TProtoOrClass>, TMethodName>
    >(
        protoOrClass:     TProtoOrClass,
        methodName:       TMethodName,
        methodDescriptor: TypedPropertyDescriptor<Func<TArgs, TRetval, TProtoOrClass>>
    ) => void |           TypedPropertyDescriptor<Func<TArgs, TRetval, TProtoOrClass>>
);


/**
 * Defines a static or instance property decorator function type.
 * 
 * @param TPropType Decorated property type.
 * 
 * @param protoOrClass Decorated property class' prototype (for instance property) 
 *                     or constructor function (for static property).
 * @param propName     Name of the decorated property.
 *
 * @remarks
 * Return value is totally ignored.
 * 
 * See https://www.typescriptlang.org/docs/handbook/decorators.html#property-decorators
 */
export type PropertyDecorator<TPropType = unknown> = (
    <
        TPropName     extends string | symbol,
        TProtoOrClass extends Obj<TPropType, TPropName>
    >
    (protoOrClass: TProtoOrClass, propName: TPropName) => void
);


/**
 * Defines a static or instance get/set property accessor decorator function type.
 * 
 * @param TPropType Decorated property accessor type.
 * 
 * @param protoOrClass    Decorated accessor property class' prototype (for instance accessor) 
 *                        or constructor function (for static accessor).
 * @param propName        Name of the decorated property accessor.
 * @param propDescriptor  Descriptor of the decorated property accessor.
 * 
 * @remarks
 * If the accessor decorator returns a value, it will be used as the 
 * Property Descriptor for the member.
 * 
 * When targeting versions less than ES5 `propDescriptor` will be `undefined` 
 * and the return value is ignored.
 * 
 * 
 * See https://www.typescriptlang.org/docs/handbook/decorators.html#accessor-decorators
 */
export type AccessorDecorator<TPropType> = (
    <
        TPropName     extends string | symbol,
        TProtoOrClass extends Obj<TPropType, TPropName>
    >
    (
        protoOrClass:   TProtoOrClass, 
        propName:       TPropName,
        propDescriptor: TypedPropertyDescriptor<TPropType>
    ) => void |         TypedPropertyDescriptor<TPropType> 
);

/**
 * Defines a static or instance method parameter decorator function type.
 * Type parameter `TParamType` is an experimental feature and it won't work
 * untill the following issue is solved https://github.com/Microsoft/TypeScript/issues/30102
 * 
 * @param TParamType Type of the parameter this decorator may be applied to.
 * 
 * @param protoOrClass   Decorated method parameter class' prototype (for instance method) 
 *                       or constructor function (for static method).
 * @param methodName     Name of the decorated parameter's method.
 * @param parameterIndex The ordinal index of the parameter in the function’s parameter list.
 * 
 * 
 * @remarks
 * Return value is totally ignored.
 * 
 * See https://www.typescriptlang.org/docs/handbook/decorators.html#parameter-decorators 
 */
export type ParameterDecorator<TParamType = unknown> = (
    <
        TMethodName   extends string | symbol,
        TParamIndex   extends number,
        TProtoOrClass extends Obj<
            (this: TProtoOrClass, ...args: unknown[] & Obj<TParamType, TParamIndex>) => unknown,
            TMethodName
        >

    >
    (
        protoOrClass:   TProtoOrClass, 
        methodName:     TMethodName, 
        parameterIndex: TParamIndex
    ) => void
);

