export interface MergeObj1 {
    _0: string;
    _1: number | undefined;
    _2: number | string | null | undefined;
    _3: number;
    _4: boolean;
    _5: Obj1 | null;
}

export interface MergeObj2 {
    _0: null;
    _1: boolean;
    _6?: Obj1;
    _7?: Obj2;
}


export interface Obj1 {
    str: string;
    undef: undefined;
    undef_bool: undefined | boolean;
    undef_num: number | undefined;
    undef_null_num_str: number | string | null | undefined;
    num: number;
    bool: boolean;
    Obj1_null: Obj1 | null;
}

export interface Obj2 {
    null: null;
    bool: boolean;
    Obj1?: Obj1;
    Obj2?: Obj2;
}

export interface Obj3 {
    ustr: 'unit';
    unum: 9;
    true: true;
    tuple$true_false_unum$: [true, false, 32];
    tuple$Obj3$: [Obj3];
}

export interface Obj4 {
    num:      number;
    str_null: string | null;
    str:      string;
    bool:     boolean;
}

export class ClassObj { 
    num!: number;
    fn = function (this: Obj1) {};
    voidMethod() {}    
}

export interface CyclicObjOr<T> {
    next: CyclicObjOr<T> | T;
}

export type CyclicObj = CyclicObjOr<number>;
export interface NestedObj {
    num: number;
    nested: {
        str: string;
        last2:  string;
    };
    Obj4: Obj4;
}


export declare class ClassObj2 {
    static promiseObj4Method(num: number): Promise<Obj4>;
}