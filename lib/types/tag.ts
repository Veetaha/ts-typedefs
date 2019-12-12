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
 * import { Tag } from 'ts-typedefs';
 *
 * // Number value that is strictly grater than zero.
 * type PositiveInt = Tag<number, 'PositiveInt'>;
 *
 * // Represents valid csv string.
 * type CsvString = Tag<string, 'CsvString'>;
 *
 *
 * async function getUser(userId: PositiveInt) {
 *      return userRepository.findById(userId);
 * }
 *
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
 * parseCsv('a,b,c\nd,e,f' as CsvString); // fine
 * ```
 */
export type Tag<TTarget, TTagName> = TTarget & { [PHANTOM_TAGNAME_US]: TTagName };

declare const PHANTOM_TAGNAME_US: unique symbol;
