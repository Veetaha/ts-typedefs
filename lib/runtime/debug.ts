export function assertTrue(suspect: true) {
    throw new TypeError(`Expected true === ${suspect}`);
}
export function assertFalse(suspect: false) {
    throw new TypeError(`Expected false === ${suspect}`);
}

export class UnreachableCodeError extends Error {
    constructor(never: never) {
        super(`no implementation defined, this value was supposed to be handled elsewhere: ${never}`);
    }
}