"use strict";
/**
 * MultipleWays to Import and Export
 */
//import {IdolModel as IM, rose, number, ICat} from "./2_export_1";
//console.log(new IM('아이유', 32));
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(new IdolModel('아이유', 32)); -> 기존 이름은 더이상 사용불가
const allTogether = __importStar(require("./2_export_1")); // 해당 파일에 있는 모든것을 가져옴 (*)
console.log(allTogether.number);
const _2_export_1_1 = __importStar(require("./2_export_1"));
console.log(_2_export_1_1.default);
console.log(_2_export_1_1.rose);
console.log(_2_export_1_1.number);
