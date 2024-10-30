/**
 * Parameter Decorator
 */
class Cat {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    eat(@LogParam adj: string, @LogParam num: number){
        console.log(`${this.name}는 하루에 ${adj}를 ${num}번 먹습니다.`)
    }
}

const cat = new Cat('까미');
cat.eat('츄르', 3);

// 까미는 하루에 츄르를 3번 먹습니다.
function LogParam(target: any, propertyKey: string, paramIndex: number){
    console.log(`${propertyKey} 메서드의 ${paramIndex + 1}번째 파라미터가 정의됐습니다. `);
}