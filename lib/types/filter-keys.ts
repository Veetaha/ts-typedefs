import { Obj, RemoveKeys } from "./index";
import * as C from "./conditions";
import { Eval } from "./eval";

/**
 * Defines a union of property names taken from `TObj` which value type is 
 * assignable to `TValue`.
 * 
 * @param TObj       Target object type to filter property names from.
 * @param TValue     Type of value that filtered propnames value type must be assignable to. 
 * @param TFilterOpt Defines which class of properties to take. See `FilterOpts` for details.
 */
export type FilteredKeys<
    TObj extends Obj, 
    TApproveCond extends C.Condition
> = {

    [TKey in keyof TObj]: Eval<TApproveCond, TObj[TKey]> extends true ? TKey : never;

}[keyof TObj];
                                                                


/**
 * Defines an object type which properties are all taken from `TObj` and their values
 * are assignable to `TValue`.
 * 
 * @param TObj   Target object type to filter properties from.
 * @param TValue Type of value that filtered properties value type must be assignable to. 
 * @param TFilterOpt Defines which class of properties to take. See `FilterOpts` for details
 */
export type FilterKeys<
    TObj extends Obj, 
    TApproveCond extends C.Condition
> = Pick<TObj, FilteredKeys<TObj, TApproveCond>>;


export type MarkKeyOptionalIfUndefined<TObj extends Obj> = (
    & Partial<FilterKeys<
        TObj, C.UnionIncludes<undefined>
    >> 
    & RemoveKeys<
        TObj, 
        FilteredKeys<
            TObj, C.UnionIncludes<undefined>
        >
    >
);




interface User {
    name: string;
    name1: number;
    name4: number;
    name2: boolean;
    name3: User;
}


export type t = FilterKeys<
    User, 
    C.Or<[
        C.AssignableTo<string>,
        C.AssignableTo<number>
    ]>
>;
