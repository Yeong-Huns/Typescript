/**
 * Multi Dimension Array
 */
/**
 * (1)
 * [1,2,3]
 *
 * (2)
 * [
 *     [1,2,3],
 *     [1,2,3]
 * ]
 *
 * (3)
 * [
 *     [
 *         [1,2,3]
 *     ]
 * ]
 */

const number2DArr: number[][] = [
    [1,2,3],
    [4,5,6]
]

const str2DArr:  string[][] = [
    ['1', '2', '3'],
    ['4', '5', '6']
] ;

const strAndNumbArr: (number|string)[][] = [
    [1, '2', 3],
    ['4', 5, 6]
]

let strArrOrNumArr: string[][] | number[][] = [
    [1,2,3],
    [4,5,6]
]

strArrOrNumArr = [
    ['1','2','3'],
    ['4','5','6']
]


for(let arr of number2DArr){
    for(let item of arr){
        item; // number
    }
}
