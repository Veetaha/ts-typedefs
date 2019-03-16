export interface Obj1 {
    _0: string;
    _1: number | undefined;
    _2: number | string | null | undefined;
    _3: number;
    _4: boolean;
    _5: Obj1 | null;
}

export interface Obj2 {
    _0: null;
    _1: boolean;
    _6?: Obj1;
    _7?: Obj2;
}


export interface CyclicObjOr<T> {
    next: CyclicObjOr<T> | T;
}
export type CyclicObj = CyclicObjOr<number>;