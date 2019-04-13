import { Class, MethodDecorator, PropertyDecorator, AccessorDecorator, ParameterDecorator } from "../../lib";

export function takeClass<TClass extends Class<any>>(TargetClass: TClass) {
    return class extends TargetClass { };
}

function anyMethDecor(): MethodDecorator 
{ return () => {}; }
function $bool$MethDecor(): MethodDecorator<[boolean]> 
{ return () => {}; }
function $str__num$boolMethDecor(): MethodDecorator<[string, number], boolean> 
{ return () => {}; }

function anyPropDecor(): PropertyDecorator
{ return () => {}; }

function strPropDecor(): PropertyDecorator<string>
{ return () => {}; }

function anyAccDecor(): AccessorDecorator<any>
{ return () => {}; }

function strAccDecor(): AccessorDecorator<string>
{ return () => {}; }

function str_undefAccDecor(): AccessorDecorator<string | undefined>
{ return () => {}; }

function anyParamDecor(): ParameterDecorator
{ return () => {}; }

function numParamDecor(): ParameterDecorator<number>
{ return () => {}; }

export class DecoratedClassObj {



    // err
    // @strAccDecor()
    // @anyParamDecor()
    @str_undefAccDecor()
    @anyAccDecor()
    set acc_str_undef(_val: string | undefined) {
    }

    // err
    // @str_undefAccDecor()
    @strAccDecor()
    @anyAccDecor()
    get acc_str() {
        return 'sd';
    }


    // err
    // @strPropDecor() 
    // @anyMethDecor()
    // @anyAccDecor()
    // @anyParamDecor()
    @anyPropDecor()
    opt_str?: string;

    @strPropDecor()
    @anyPropDecor()
    str!: string;

    @anyMethDecor()
    // @$bool$MethDecor() // both decorators generate compile-time error
    // @$str__num$boolMethDecor()
    meth1(_bol: boolean, _num: number): void {}

    @$bool$MethDecor() // works fine
    meth2(bol: boolean) {
        return bol ? 32 : 'kek';
    }

    @$str__num$boolMethDecor() // works fine
    meth3(
        @numParamDecor() // should error, waiting for TypeScript update
        @anyParamDecor()
        str: string, 
        @numParamDecor()
        @anyParamDecor()
        num: number
    ) {
        return !!str && !!num;
    }
}