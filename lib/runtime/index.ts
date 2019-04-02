import * as Debug from './debug';
export { Debug };

/**
 * C++ style operator, a syntactic sugar for writing casts like 
 * `value as any as T` when a simple `value as T` cast cannot be performed. 
 * Use it with caution! 
 *  
 * @param target value to cast by any means to T.
 * 
 * 
 * @remarks 
 * This function is actually noop at runtime, all it does is it suppresses 
 * 'inability to cast' tsc error. It's better to use this function rather than
 * `value as any as T` cast, because it amplifies your attention to such uneven
 * places in code and it may be easier to do a Ctrl + F search for these.
 * 
 * ```ts
 * import * as I from 'ts-typedefs';
 * 
 * interface User {
 *  // ...
 * }
 * type UserUpdate = I.DeepPartial<I.RemoveKeys<User, 'password'>>;
 * 
 * const userUpd: UserUpdate = // ...
 * 
 * Object.assign(userUpd, { 
 *     password: 'somepassword-pfff', otherRequiredFields: // ...
 * });
 *
 * let user = I.reinterpret<User>(userUpd); // Here userUpd has the same shape as `User`
 * // `typeof user` is `User`
 *  
 * ```
 * 
 * 
 */
export function reinterpret<T>(value: any): T {
    return value;
}