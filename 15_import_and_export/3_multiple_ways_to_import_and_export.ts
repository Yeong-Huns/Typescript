/**
 * MultipleWays to Import and Export
 */
//import {IdolModel as IM, rose, number, ICat} from "./2_export_1";
//console.log(new IM('아이유', 32));

// console.log(new IdolModel('아이유', 32)); -> 기존 이름은 더이상 사용불가

import * as allTogether from './2_export_1'; // 해당 파일에 있는 모든것을 가져옴 (*)

console.log(allTogether.number)

import cf, {rose, number} from './2_export_1'

console.log(cf)
console.log(rose)
console.log(number)