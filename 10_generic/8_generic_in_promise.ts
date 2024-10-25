/**
 * Generic in promise
 */

const afterTwoSeconds = function (){
    return new Promise((res) => {
        setTimeout(()=>{res('done')}, 2000)
    })
}

const runner = async function (){
    const res = await afterTwoSeconds(); // res: unknown
    console.log(res);
}

runner();

const afterOneSecond = function (): Promise<string>{
    return new Promise((res)=> {
        setTimeout(()=> {
            res('done')
        }, 1000)
    })
}

const runner2 = async function (){
    const res = await afterOneSecond(); // res: string
    console.log(res);
}

runner2();

const runner3 = async function (){
    return 'string return'
} // async 를 붙이기만하면 Promise 가 리턴된다.

console.log(runner3());