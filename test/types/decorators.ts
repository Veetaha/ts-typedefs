import { Class, MethodDecorator } from "../../lib";

export function takeClass<TClass extends Class<any>>(TargetClass: TClass) {
    return class extends TargetClass { };
}

function decor0(): MethodDecorator 
{ return () => {}; }
function decor1(): MethodDecorator<[boolean]> 
{ return () => {}; }
function decor2(): MethodDecorator<[string, number], boolean> 
{ return () => {}; }

export class DecoratedClassObj {
    @decor0()
    // @decor1() // both decorators generate compile-time error
    // @decor2()
    meth1(_bol: boolean, _num: number): void {}

    @decor1() // works fine
    meth2(bol: boolean) {
        return bol ? 32 : 'kek';
    }

    @decor2() // works fine
    meth3(str: string, num: number) {
        return !!str && !!num;
    }
}