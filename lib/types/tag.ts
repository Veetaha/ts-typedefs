
/**
 * Defines nominal type by adding a property with `TTagName` value to `TTarget`.
 * `TTagName` must be unique across your application, treat it like the name of
 * your nominal type.
 * @param TTarget  Target type to put a tag on.
 * @param TTagName Unique name of the defined nominal type.
 * 
 * With this type, you may pick particular subclass of values from the given type and force
 * your clients to filter other values that are assignable to `TTarget` but don't
 * obey to your prerequisites, thus making them pay more attention to them.
 * 
 * @remarks
 * ```ts
 * import * as I from 'ts-typedefs';
 * 
 * type PositiveInt = I.Tag<number, 'PositiveInt'>;
 * type CsvString   = I.Tag<string, 'CsvString'>;
 * 
 * // Prerequisites: `userId > 0`
 * async function getUser(userId: PositiveInt) {
 *      return userRepository.findById(userId);
 * }
 * 
 * // Prerequisites: given string must be valid csv
 * function parseCsv(csvString: CsvString) {
 *      // Here you may be sure that client payed attention to checking the input
 * 
 *      const lines = csvString.split('\n').map(line => line.split(','));
 * }
 * 
 * getUser(-2);                // compile error
 * getUser(58);                // compile error
 * getUser(58 as PositiveInt); // fine (explicit cast pays your attention to prerequisites)
 * 
 * parseCsv('\nbla bla');      // compile error
 * parseCsv('a,b,c\nd,e,f' as CsvString);   // fine
 * ```
 */
export type Tag<TTarget, TTagName> = TTarget & { ['ts-typedefs.Tag']: TTagName };