/**
 * Property Initialization
 */
class Person {
    //일반적인 필수값 선언법
    name: string;
    // 초기값 제공 선언법
    age: number = 23;
    // optional 값 선언법
    pet?: string;
    petAge: number | undefined;
    constructor(name: string, pet?: string) {
        this.name = name;
        this.pet = pet;
    }
}

class RouteStack{
    stack!: string[]; // 초기화가 보장됨을 알려주기 위해 ! 를 사용

    constructor() {
        this.initialize();
    }
    initialize(){
        this.stack = [];
    }
}

const routeStack = new RouteStack();
console.log(routeStack)