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

export interface Obj3 {
    _8: 'unit';
    _9: 9;
    _10: true;
    _11: [true, false, 32];
    _12: [Obj3];
}

export class ClassObj { 
    _1!: number;
    _2 = function (this: Obj1) {};
    method() {}    
}

export interface User {
    id:         number;
    login:      string | null;
    password:   string;
    isDisabled: boolean;
}

export interface CyclicObjOr<T> {
    next: CyclicObjOr<T> | T;
}
export type CyclicObj = CyclicObjOr<number>;
export interface User2 {
    id: number;
    name: {
        first: string;
        last:  string;
    }
    parent: User;
}


export declare class User3 {
    static getById(id: number): Promise<User>;
}