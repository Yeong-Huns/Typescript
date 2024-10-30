import 'reflect-metadata';

const paramValue = Symbol('paramValue');

interface ParamInfo<T>{
    index: number;
    value: T[];
}

class Cat {
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    @ValidateMethod
    eat(@RestrictParam(['밥', '츄르']) food: string, @RestrictParam([1, 2, 3]) num: number){
        return `${this.name}는 하루에 ${food}(을)를  ${num}번 먹습니다.`;
    }
}

function RestrictParam<T>(value: T[]){
    return (target: any, keyName: string, index: number) => {
        const defineMeta = Reflect.getOwnMetadata(paramValue, target, keyName) ?? [];
        const paramInfo : ParamInfo<T> = {
            index,
            value
        }
        Reflect.defineMetadata(paramValue, [
            ...defineMeta,
            paramInfo
        ], target, keyName);
        console.log(Reflect.getOwnMetadata(paramValue, target, keyName))
    }
}

function ValidateMethod(target:any, keyName: string, descriptor: PropertyDescriptor){
    const metaData: ParamInfo<any>[] = Reflect.getOwnMetadata(paramValue, target, keyName) ?? [];
    const prev = descriptor.value;
    descriptor.value = function(...args: any[]){
        const invalidValues = metaData.filter(meta => !meta.value.includes(args[meta.index]));
        if(invalidValues.length > 0) throw Error(`잘못된 값입니다. ${invalidValues.map(i => args[i.index]).join(', ')}`);
        return prev.apply(this, args);
    }
}

const myCat = new Cat('깜이', 5);
console.log('---');
console.log(myCat.eat('밥', 3));
console.log(myCat.eat('츄르', 1));
console.log(myCat.eat('생선', 4))
