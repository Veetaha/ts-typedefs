export type AssertTrue<T extends true> = T;
export type AssertFalse<T extends false> = T;
export type AssertNever<T extends never> = T;

export function describeType(typename: string, test: () => void) {
    return describe(typename, () => void it('compiles', test));
}
