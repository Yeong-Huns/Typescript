/**
 * Constructor Parameter
 */
class Idol {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

type constructorParamType = ConstructorParameters<typeof Idol>;
// -> Idol 생성자의 파라미터, 즉 [name: string, age: number] 를 가져온다. 