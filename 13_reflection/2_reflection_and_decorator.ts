/**
 * Reflection and Decorator
 */
import 'reflect-metadata';

const singValueKey = Symbol('singValue');

interface RestrictInfo<T>{
    index: number;
    value: T[];
}

class Idol{
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name =name;
        this.age = age;
    }
    @ValidateMethod
    // style 에는 '신나게' | '열정적으로'
    sing(@RestrictParamValue(['신나게', '열정적으로']) style: string, @RestrictParamValue([1,2,3]) rank: number){
        //if(style !== '신나게' && style !== '열정적으로') throw Error('안됨');
        return `${this.name}이 ${style} 노래를 부릅니다.`
    }
}

function RestrictParamValue<T>(value: T[]){
    return (target: any, keyName: string, index: number)=> {
        const prevMeta = Reflect.getOwnMetadata(singValueKey, target, keyName) ?? [];
        console.log('--prev--')
        console.log(prevMeta)
        console.log('-----')
        console.log()
        const info: RestrictInfo<T> = {
            index,
            value,
        }
        Reflect.defineMetadata(singValueKey, [
            ...prevMeta,
            info
        ], target, keyName);
        console.log('--starts---')
        console.log(Reflect.getOwnMetadata(singValueKey, target, keyName))
        console.log()
    }
}

function ValidateMethod(target: any, keyName: string, descriptor: PropertyDescriptor){
    const metas: RestrictInfo<any>[] = Reflect.getOwnMetadata(singValueKey, target, keyName) ?? [];
    const original = descriptor.value;
    descriptor.value = function(...args: any[]){
        const invalids = metas.filter(i => !i.value.includes(args[i.index]));
        if(invalids.length > 0) throw Error(`잘못된 값입니다. ${invalids.map(x=>args[x.index]).join(', ')}`);
        return original.apply(this, args);
    }
}

const yuJin = new Idol('안유진', 23);
console.log('---sing---');
console.log(yuJin.sing('신나게',1))
//console.log(yuJin.sing('열정적으로',2))
//console.log(yuJin.sing('힘없이',4))
