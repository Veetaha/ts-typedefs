<h1 align="center">ts-typedefs</h1>

<p align="center">
    <a href="https://www.npmjs.com/package/ts-typedefs">
        <img 
            src="assets/jumbotron.png" 
            width="500px"
        />
    </a>
</p>

---

[![npm version](https://badge.fury.io/js/ts-typedefs.svg)](https://badge.fury.io/js/ts-typedefs)
![npm](https://img.shields.io/npm/dm/ts-typedefs.svg?color=%2317c4b5)
[![Build Status](https://travis-ci.com/Veetaha/ts-typedefs.svg?branch=master)](https://travis-ci.com/Veetaha/ts-typedefs)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](https://www.typescriptlang.org/)

This library is a handy collection of TypeScript plain and generic type definitions and interfaces **for both frontend and backend**. You may expect **zero runtime overhead** if you use only type definitions importing neither functions nor classes.

## [API documentation](https://veetaha.github.io/ts-typedefs/)
Generated by [typedoc](https://github.com/TypeStrong/typedoc)

## [Contribution guidelines](CONTRIBUTING.md)

## Credits
This project was inspired by ['ts-essentials'](https://github.com/krzkaczor/ts-essentials) library.
Some type names were taken from them.

## Quick API review
The most convenient way to explore `'ts-typedefs'` API is by easily browsing your *editor's completion 
list* that shows signatures and descriptions for selected items. Types, functions, and classes names are intended to be super descriptive and intuitive. 
All functional units provide *`typedoc` documentation in comments* so it is easy for
IDEs to provide you with good hints.

If your coding conventions allow this, you are encouraged to reexport this library in your project's `types.ts` or `interfaces.ts` file where
you can define your additional custom definitions that will be merged with 
generic ones from `'ts-typedefs'`, and import them in your source files as `I` or `T`:

```ts
// @app/interfaces.ts 
export * from 'ts-typedefs';
export type MyCustomType = /* ... */

// app.ts
import * as I from '@app/interfaces';
class User { /* ... */ }
type UserData = I.FilterProps<User, I.Op.NotExtends<I.Func>>;

function someFn(userUpd: I.DeepPartial<UserData>, arg: I.MyCustomType) { /* ... */ }
```

## Provided type definitions and runtime units:

* [Objects](#objects)
    * [`Obj<>`](#objtvalues-tkeys)
    * [`Class<>`](#classtinstance-targs)
    * [`ValueOf<>`](#valueoftobj)
    * [`RemoveKeys<>`](#removekeystsrcobj-tkeysunion)
    * [`FilterProps<>`](#filterpropstobj-tapprovecond)
    * [`MapValues<>`](#mapvaluestsrcobj-tmappedvalue)
    * [`Merge<>`](#mergetobj1-tobj2)
    * [`DeepPartial<>`](#deeppartialtobj)
    * [`...`](https://veetaha.github.io/ts-typedefs/modules/_types_objects_.html)
* [Functions](#functions)
    * [`[Async]Func<>`](#asyncfunctargs-tretval-tthis)
    * [`AsyncFuncReturnType<>`](#asyncfuncreturntypetasyncfunc)
    * [`...`](https://veetaha.github.io/ts-typedefs/modules/_types_functions_.html)
* [Decorators](#decorators)
    * [`MethodDecorator<>`](#methoddecoratortargs-tretval)
    * [`PropertyDecorator<>`](#propertydecoratortproptype)
    * [`...`](https://veetaha.github.io/ts-typedefs/modules/_types_decorators_.html)
* [Logical](#logical)
    * [`If<>`](#iftcond-tiftrue-telse-tifcondisbool)
    * [`Not<>`](#nott-tiftisbool)
    * [`And/Nand<>`](#andnandt)
    * [`Or/Nor<>`](#ornort)
    * [`[Not]Extends<>`](#notextendstextender-textendee)
    * [`AreSame<>`](#aresamet1-t2)
    * [`Is[Not]Any<>`](#isnotanytsuspect)
    * [`Is[Not]Unknown<>`](#isnotunknowntsuspect)
    * [`...`](https://veetaha.github.io/ts-typedefs/modules/_types_logical_.html)
* [Runtime](#runtime)
    * [`reinterpret()`](#reinterprettvalue-any-t)
    * [`class Debug.UnreachableCodeError`](#class-debugunreachablecodeerror)
    * [`...`](https://veetaha.github.io/ts-typedefs/modules/_runtime_index_.html)
* [Misc](#misc)
    * [`Tag<>`](#tagttarget-ttagname)
    * [`UnionToIntersection<>`](#uniontointersectiontunion)
    * [`UnpackPromise<>` ](#unpackpromisetpromise)
    * [`[Deep]Nullable<>`](#deepnullablet)
    * [`Primitive`](#primitive)
    * [`TypeName`](#typename)
    * [`...`](https://veetaha.github.io/ts-typedefs/globals.html)
    

Let's see them in details.

## Objects

### [`Obj<TValues, TKeys>`](#provided-type-definitions-and-runtime-units "Go back to contents")

Defines an object with keys of type `TKeys`, and all values of `TValue` type.
```ts
type t0 = Obj;                      // { [key: string]: unknown; }     
type t1 = Obj<boolean>;             // { [key: string]: boolean; }     
type t2 = Obj<string, number>;      // { [key: number]: string;  }
type t3 = Obj<number, 'p1' | 'p2'>; // { p1: number, p2: number; }
```
### [`Class<TInstance, TArgs>`](#provided-type-definitions-and-runtime-units "Go back to contents")
Defines constructor function type that instantiates `TInstance` and accepts arguments of `TArgs` type.

```ts
interface User { /* ... */ }

// new (...args: any) => User
type t0 = Class<User>;

// new (...args: [string, number]) => User
type t1 = Class<User, [string, number]>;
```


### [`ValueOf<TObj>`](#provided-type-definitions-and-runtime-units "Go back to contents")

Defines a union type of all the values stored in `TObj`.
```ts
interface User {
    id:         number;
    login:      string | null;
    password:   string;
    isDisabled: boolean;
}
/* number | string | null | boolean */
type t0 = ValueOf<User>; 
/* union type of all properties and methods of `Array<boolean>` */
type t1 = ValueOf<boolean[]>; 
```

### [`RemoveKeys<TSrcObj, TKeysUnion>`](#provided-type-definitions-and-runtime-units "Go back to contents")
Defines the same object type as `TSrcObj`, but without `TKeysUnion` keys.
```ts 
interface User {
    id:         number;
    login:      string | null;
    password:   string;
    isDisabled: boolean;
}
/* 
{ 
    id:         number; 
    login:      string | null; 
    isDisabled: boolean; 
}
*/
type t0 = RemoveKeys<User, 'password'>; 

/* { id: number; } */
type t1 = RemoveKeys<User, 'password' | 'isDisabled' | 'login'>;
```

### [`FilterProps<TObj, TApproveCond>`](#provided-type-definitions-and-runtime-units "Go back to contents")
Defines the same type as `TObj` but with particular properties filtered out according to `TApproveCond`. `TApproveCond` is a boolean operator tree structure that defines the criteria that the filtered values must match. All these operators are defined in `Op` namespace.

```ts
interface User {
    id:         number;
    login:      string | null;
    password:   string;
    isDisabled: boolean;
    flag:       boolean;
}

/* { login: string;  } */
type t0 = FilterProps<User, Op.Extends<string>>; 

/* 
{ 
    isDisabled: boolean; 
    flag:       boolean; 
}
*/
type t0 = FilterProps<User, Op.Extends<boolean>>; 

/* 
{ 
    isDisabled: boolean; 
    flag:       boolean; 
    id:         number; 
}
*/
type t1 = FilterProps<
    User, 
    Op.And<[
        Op.Not<Op.UnionIncludes<string>>,  // Op.UnionExcludes<> is another option
        Op.Nand<[false, true, true, true]> // this condition is always true
    ]>
>;
```
Because of some TypeScript [limitations and bugs](https://stackoverflow.com/questions/55192212/typescript-circular-type-alias-produces-no-error-and-instead-widens-unit-types) `TApproveCond` tree must be not more than 5 levels deep (number of levels limitation may change, but it can only become greater).
### [`MapValues<TSrcObj, TMappedValue>`](#provided-type-definitions-and-runtime-units "Go back to contents")
Defines the same object type as `TSrcObj`, but all values of `TMappedValue` type.
```ts
interface User {
    id:         number;
    login:      string | null;
    password:   string;
}

/* 
{ 
    id:       boolean; 
    login:    boolean; 
    password: boolean; 
}
*/
type t0 = MapValues<User, boolean>;
```

### [`Merge<TObj1, TObj2>`](#provided-type-definitions-and-runtime-units "Go back to contents")
Merge objects `TObj1` and `TObj2`.
Properties types from `TObj2` override the ones defined on `TObj1`.
This type is analogous to the return type of `Object.assign()`

```ts
interface O1 {
    p1: number;
    p2: string;
    p3: boolean;
}

interface O2 {
    p2: number | null;
    p3: string;
    p4: O1;
}

/*
{ 
    p1: number; 
    p2: number | null;
    p3: string;
    p4: O1;
}
*/
type t0 = Merge<O1, O2>;

/*
{
    p1: number;
    p2: string;
    p3: boolean;
    p4: O1;
}
*/
type t1 = Merge<O2, O1>;
```

### [`DeepPartial<TObj>`](#provided-type-definitions-and-runtime-units "Go back to contents")
Defines the same type as `TObj` but all properties are made recursively `Partial<>`.

```ts
interface User {
    id: number;
    name: {
        first: string;
        last:  string;
    }
    parent: User;
}

/*
{
    id?:     number | undefined;
    name?:   undefined | {
        first?: string | undefined;
        last?:  string | undefined;
    };
    parent?: DeepPartial<User> | undefined;
}
*/
type t0 = DeepPartial<User>;
```

## Functions

### [`[Async]Func<TArgs, TRetval, TThis>`](#provided-type-definitions-and-runtime-units "Go back to contents")
Defines a Function subtype with the given arguments, return type and `this` context. If it is `AsyncFunc<>` `TRetval` is packed into `Promise<TRetval>`

```ts
interface User { /* ... */ }

// (this: unknown, ...args: any) => unknown
type t0 = Func;                               

// (this: unknown, ...args: [string, number | undefined]) => unknown
type t1 = Func<[string, number | undefined]>;

// (this: unknown, ...args: [boolean]) => void
type t2 = Func<[boolean], void>;

// (this: User,    ...args: [boolean]) => number
type t3 = Func<[boolean], number, User>;

// (this: unknown, ...args: [string]) => Promise<User>
type t4 = AsyncFunc<[string], User>
```

### [`AsyncFuncReturnType<TAsyncFunc>`](#provided-type-definitions-and-runtime-units "Go back to contents")
Defines the unpacked result type of the `Promise` returned by the specified `TAsyncFunc`.

```ts
class User {
    static async getById(id: number): Promise<User> {
        // ...
    }
}

// User
type t0 = AsyncFuncReturnType<AsyncFunc<[number], User>>;

// User
type t1 = AsyncFuncReturnType<typeof User.getById>
```

## Decorators

### [`MethodDecorator<TArgs, TRetval>`](#provided-type-definitions-and-runtime-units "Go back to contents")
Defines a static or instance method decorator function type. `TArgs` tuple type limits the arguments' type decorated method accepts, `TRetval` limits the return type of the decorated method.

```ts
declare function decor0(): MethodDecorator;
declare function decor1(): MethodDecorator<[boolean]>;
function decor2(): MethodDecorator<[string, number], boolean> {
    // argument types are automatically deduced and strongly typed here
    return (protoOrClass, methodName, propDescriptor) => {
        /* (this: typeof protoOrClass, ...args: [string, number]) => boolean */
        const val = propDescriptor.value;
        // ...
    };
};

class User {
    @decor0() // works fine
    @decor1() // `decor1()` and `decor2()` generate compile-time error
    @decor2()
    meth0(bol: boolean, num: number): void {}

    @decor0()
    @decor1() // works fine
    meth1(bol: boolean) {
        return bol ? 32 : 'kek';
    }

    @decor0()
    @decor2() // works fine
    meth2(str: string, num: number) {
        return !!str && !!num;
    }
}
```

### [`PropertyDecorator<TPropType>`](#provided-type-definitions-and-runtime-units "Go back to contents")
Defines a static or instance property decorator function type.

```ts
declare function decor1(): PropertyDecorator;
function decor0(): PropertyDecorator<string> {
    return /* function arguments are analogously deduced */;
};

export class User {
    @decor0()
    @decor1() // works fine
    prop0!: string;

    @decor1() // compile error
    @decor0() // works fine
    prop1!: boolean;
}
```
## Logical

### [`If<TCond, TIfTrue, TElse, TIfCondIsBool>`](#provided-type-definitions-and-runtime-units "Go back to contents")

Sequentially performs the following logic:

Expands to `TIfTrue`       if `TCond extends true`.

Expands to `TElse`         if `TCond extends false`.

Expands to `TIfCondIsBool` if `TCond extends boolean`.

*As a convention, enclose `TCond` argument in parens.*

```ts
type t0 = If<(true), number, string>;            // number
type t1 = If<(false), number, string>;           // number
type t2 = If<(boolean), number, string, bigint>; // bigint

type t3 = If<(And<[NotExtends<22, number>, true, true]>),
    string,
    If<(false),  // nested condition
        number, 
        string
>>; // string

// You may use leading ampersand or pipe in order to explicitly separate branches visually
type t4 = If<(true)
    | number, // you may use & instead of |

    | string
>; // number
```

### [`Not<T, TIfTIsBool>`](#provided-type-definitions-and-runtime-units "Go back to contents")

Defines `false`      unit type if `T extends true`.
Defines `true`       unit type if `T extends false`.
Defines `TIfTIsBool` when `T` is exactly `boolean` type.

```ts
type t0 = Not<true>;            // false
type t1 = Not<false>;           // true  
type t2 = Not<boolean, number>; // number
type t3 = Not<Not<true>>;       // true
```
### [`And/Nand<T>`](#provided-type-definitions-and-runtime-units "Go back to contents")

Defines `true` or `false` accroding to the definition of `and/nand(negated and)` logical operator.
It gets applied to all the argumets in the given tuple type `T`.

```ts
type t0 = And<[true, true, true]>; // true
type t1 = And<true[]>;             // true
type t2 = And<[true, false, true]> // false

type t3 = And<boolean[]>;          // false
type t4 = And<[boolean, true]>;    // false

type t5 = Nand<[true, true]>;      // false
```

### [`Or/Nor<T>`](#provided-type-definitions-and-runtime-units "Go back to contents")

Defines `true` or `false` accroding to the definition of `or/nor(negated or)` logical operator.
It gets applied to all the argumets in the given tuple type `T`.

```ts
type t0 = Or<[false, false, false]>; // false
type t1 = Or<false[]>;               // false
type t2 = Or<[false, true, false]>   // true

type t3 = Or<boolean[]>;             // true
type t4 = Or<[boolean, false]>;      // true

type t5 = Nor<[true, true]>;         // false
```

### [`[Not]Extends<TExtender, TExtendee>`](#provided-type-definitions-and-runtime-units "Go back to contents")

Defines `true` if `TExtender` is assignable to `TExtendee`, otherwise `false`.

It verifies that you may physically assign a value of type `TExtender` to `TExtendee`.
That's why union types with excess members that are not assignable to `TExtendee`
will evaluate to `false`.

```ts
type t0 = Extends<string | null, string>; // false
type t1 = Extends<true, boolean>;         // true
type t2 = Extends<never, never>;          // true

type t3 = NotExtends<22, number>;         // false
```

### [`AreSame<T1, T2>`](#provided-type-definitions-and-runtime-units "Go back to contents")

Defines `true` if `T1` is exactly `T2`, `false` otherwise.
Even `AreSame<unknown, any>` expands to `false`. Only the same types expand to `true`. 

It doesn't tolerate co/bi/contravaraince, only the types of exactly the same shapes (excluding function types limitation) will cause to return `true`.

Beware that this type works as vanilla `extends` clause with function types,
so comparing functions is not that strict.

```ts
type t0 = AreSame<{}, { num: number }>; // false
type t1 = AreSame<
    { num: number, str: string }, 
    { num: number, str: string }
>; // true
type t2 = AreSame<any, unknown>;        // false   
type t8 = AreSame<Func, Func>;          // true
type t9 = AreSame<[number], [number]>;  // true
type t10 = AreSame<[number, string], [number]>; // false
```

### [`Is[Not]Any<TSuspect>`](#provided-type-definitions-and-runtime-units "Go back to contents")

Defines `true[false]` if `TSuspect` is exactly of `any` type, `false[true]` otherwise.

```ts
type t0 = IsAny<any>;        // true
type t1 = IsAny<unknown>;    // false
type t2 = IsAny<never>;      // false
type t3 = IsAny<string>;     // false

type t4 = IsNotAny<any>;     // false
type t5 = IsNotAny<unknown>; // true
// ...
```

### [`Is[Not]Unknown<TSuspect>`](#provided-type-definitions-and-runtime-units "Go back to contents")

Defines `true[false]` if `TSuspect` is exactly of `unknown` type, `false[true]` otherwise.

```ts
type t0 = IsUnknown<unknown>;  // true
type t1 = IsUnknown<boolean>;  // false

type t2 = IsNotUnknown<never>; // true
// ...
```

## Runtime

### [`reinterpret<T>(value: any): T`](#provided-type-definitions-and-runtime-units "Go back to contents")

C++ style operator, a syntactic sugar for writing casts like 
`value as any as T` when a simple `value as T` cast cannot be performed. 
Use it with caution! 

This function is actually noop at runtime, all it does is it suppresses 
*'inability to cast'* *tsc* error. It's better to use this function rather than
`value as any as T` cast, because it amplifies your attention to such uneven
places in code and it may be easier to do a <kbd>Ctrl</kbd> + <kbd>F</kbd> search for these.

```ts
interface User {
 // ...
}
type UserUpdate = DeepPartial<RemoveKeys<User, 'password'>>;

const userUpd: UserUpdate = // ...

Object.assign(userUpd, { 
    password: 'somepassword-pfff', otherRequiredFields: // ...
});

// For future devs: reinterpreting here, because userUpd has the same shape as `User`
let user = reinterpret<User>(userUpd); 

// `typeof user` is `User` 
```
 
### [`class Debug.UnreachableCodeError`](#provided-type-definitions-and-runtime-units "Go back to contents")
Class used to perform `never` type value checks in unreachable code.


```ts
const val: string | number;


if (typeof val === 'string') {
     return null;
} else if (typeof val === 'number') {
     throw new Debug.UnreachableCodeError(val); // compiler error: val is not of type `never` here
     return;
} else {
     throw new Debug.UnreachableCodeError(val); // this is ok val has `never` type here
}

enum Enum {
    A, B, C
}
let suspect: Enum = // ...
switch (suspect) {
    case Enum.A: return;
    case Enum.B: return;
    default: {
        // compiler error, this path is reachable
        // as we didn't handle `suspect === Enum.C` case
        throw new Debug.UnreachableCodeError(suspect);
    }
}
```

## Misc

### [`Tag<TTarget, TTagName>`](#provided-type-definitions-and-runtime-units "Go back to contents")
Defines nominal type by adding a property with `TTagName` value to `TTarget`.
`TTagName` must be unique across your application, treat it like the name of
your nominal type.

With this type, you may pick particular subclass of values from the given type and force
your clients to filter other values that are assignable to `TTarget` but don't
obey to your prerequisites, thus making them pay more attention to them.

```ts
type PositiveInt = Tag<number, 'PositiveInt'>;
type CsvString   = Tag<string, 'CsvString'>;

// Prerequisites: `userId > 0`
async function getUser(userId: PositiveInt) {
     return userRepository.findById(userId);
}

// Prerequisites: given string must be valid csv
function parseCsv(csvString: CsvString) {
     // Here you may be sure that client payed attention to checking the input

     const lines = csvString.split('\n').map(line => line.split(','));
}

getUser(-2);                // compile error
getUser(58);                // compile error
getUser(58 as PositiveInt); // fine (explicit cast pays your attention to prerequisites)

parseCsv('\nbla bla');      // compile error
parseCsv('a,b,c\nd,e,f' as CsvString);   // fine
```

### [`UnionToIntersection<TUnion>`](#provided-type-definitions-and-runtime-units "Go back to contents")

Defines an intersection type of all union's items.

Because of TypeScript boolean representation as `type boolean = true | false`
you get the following result:
`UnionToIntersection<boolean>` is `true & false`

```ts
// string & number & number[]
type t0 = UnionToIntersection<string | number | number[]>;
```

### [`UnpackPromise<TPromise>`](#provided-type-definitions-and-runtime-units "Go back to contents") 
Defines the type of value, which is passed to `TPromise.then(cb)` `cb` callback.

```ts
type t0 = UnpackPromise<Promise<number>>; // number;
type t1 = UnpackPromise<Promise<void>>;   // void;

// Promise<string>;
type t2 = UnpackPromise<
    Promise<Promise<string>>
>; 

// string
type t3 = UnpackPromise<UnpackPromise<
    Promise<Promise<string>>
>>;
```

### [`[Deep]Nullable<T>`](#provided-type-definitions-and-runtime-units "Go back to contents")
`Nullable<T>` defines type `T` that may also be `null` or `undefined`:
```ts
export type Nullable<T> = T | undefined | null;
```

`DeepNullable<T>` defines the same type as `TObj` but with all properties made `NonNullable<>` recursively.

```ts
interface User {
    id: number;
    name: {
        first: string;
        last:  string;
    };
}

/*
Nullable<{
    id?:  Nullable<number>;
    name?: Nullable<{
        first?: Nullable<string>;
        last?:  Nullable<string>;
    }>;
}>
*/
type t0 = DeepNullable<User>;
```

### [`Primitive`](#provided-type-definitions-and-runtime-units "Go back to contents")
Defines a union of all possible value types defined in the language,
`null` and `undefined` are considered to be primitive types.

```ts
export type Primitive = (
    | number 
    | string 
    | boolean  
    | undefined 
    | symbol 
    | null
    | bigint
);
```


### [`TypeName`](#provided-type-definitions-and-runtime-units "Go back to contents")

Defines a union of all possible strings retuned by applying `typeof` operator.

```ts
export type TypeName = (
    | 'number'    
    | 'string' 
    | 'boolean'  
    | 'undefined' 
    | 'object' 
    | 'function' 
    | 'symbol'
    | 'bigint'
);
```