/**
 * Generic in Type
 */
type GenericSimpleType<T> = T;

const genericString: GenericSimpleType<string> = '김영훈';
//const genericString2: GenericSimpleType = '김영훈'; -> 안됨

interface DoneState<T>{
    data:T[];
}

interface LoadingState{
    requestedAt: Date;
}

interface ErrorState {
    error: string;
}

type State<T = string> = DoneState<T> | LoadingState | ErrorState;

let state: State<string> = {
    data: ['123','234'],
}
console.log(state)
state = {
    requestedAt: new Date()
}
console.log(state)
state = {
    error: 'error'
}

console.log(state)
let state2: State = {
    // data: [123, 345] -> State<T = string> 이기 때문에, Default 타입이 string 이라 당연히 에러가 남
    data: ['123', '345']
}
