/**
 * Generic in Interface
 */
interface Cache<T>{
    data: T[];
    lastUpdate: Date;
}

const cache1: Cache<string> = {
    data: ['data1', 'data2'],
    lastUpdate: new Date(),
}

// value 에 따른 자동유추는 안된다 . (number) 를 지정해줘야함
const cache2: Cache<number> = {
    data: [123, 456],
    lastUpdate: new Date(),
}

interface DefaultGeneric<T = string>{
    data:T[]
}

const cache3: DefaultGeneric = {
    //data:[123,456] Default 타입이 string 이기때문에 이건안됨
    data:['123','456']
}

const cache4: DefaultGeneric<number> ={
    data:[123,234]
}

console.log(cache4)