/**
 * Class used to perform `never` type value checks in unreachable code.
 * 
 * @remarks
 * ```ts
 * import * as I from 'ts-typedefs';
 * const val: string | number;
 * 
 * 
 * if (typeof val === 'string') {
 *      return null;
 * } else if (typeof val === 'number') {
 *      throw new I.UnreachableCodeError(val); // compiler error: val is not of type `never`
 *      return;
 * } else {
 *      throw new I.UnreachableCodeError(val); // this is ok val has `never` type here
 * }
 * ```
 */
export class UnreachableCodeError extends Error {
    constructor(never: never) {
        super(`no implementation defined, this value was supposed to be handled elsewhere: ${never}`);
    }
}