/**
 * Enum
 */

/**
 * API 요청을 한다.
 * 상태는 4가지 상태
 *
 * DONE - 요청 완료 상태
 * ERROR - 에러가 생긴 상태
 * LOADING - 로딩 상태
 * INITIAL - 초기 상태
 */

function runWork(){
    let state: string = 'INITIAL';

    try{
        state = 'LOADING';
        //작업을 한다.
        state = 'DONE';
    }catch (e){
        state = 'ERROR';
    }finally {
        return state;
    }
}
console.log(runWork() === 'DONE');
console.log(runWork() === 'DONNE') //false -> String 으로 비교하면, 실수로 잘못 입력했을때, 결과값이 달라지게됨

/**
 * 전통적인 자바스크립트 방식
 */

const doneState = 'DONE';
const loadingState = 'LOADING';
const errorState = 'ERROR';
const initialState = 'INITIAL'

function runWork2(){
    let state: string = initialState;

    try{
        state = loadingState;
        //작업을 한다.
        state = doneState;
    }catch (e){
        state = errorState;
    }finally {
        return state;
    }
}

console.log(runWork2() === doneState); // 스펠링을 틀려서 결과가 달라질 위험이 줄어든다.

/**
 *  Typescript enum 타입 사용
 */

enum State {
    DONE = 'DONE',
    LOADING = 'LOADING',
    INITIAL = 'INITIAL',
    ERROR = 'ERROR',
}

function runWork3(){
    let state: State = State.INITIAL;

    try{
        state = State.LOADING
        //작업을 한다.
        state = State.DONE
    }catch (e){
        state = State.ERROR
    }finally {
        return state;
    }
}

console.log(runWork3() === State.DONE); // true
console.log(runWork3())