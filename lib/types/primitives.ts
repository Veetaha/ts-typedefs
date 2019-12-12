
/**
 * Defines a union of all possible value types defined in the language.
 * @remarks null and undefined are considered to be primitive types.
 */
export type Primitive = (
    | number
    | string
    | boolean
    | undefined
    | symbol
    | null
    | bigint
);
/**
 * Defines a union of all possible strings retuned by applying `typeof` operator.
 */
export type TypeName = (
    | 'number'
    | 'string'
    | 'boolean'
    | 'undefined'
    | 'object'
    | 'function'
    | 'symbol'
    | 'bigint'
);
