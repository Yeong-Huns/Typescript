/**
 * Extract Type
 * 어떠한 유니온 타입에서 특정 type 만 뽑아내라(추출해라) 라는 유틸리티 클래스
 */

type unionType = string | boolean | number

type stringOnly = Extract<unionType, string>; // type: string

type functionOnly = Extract<string | (()=> void), Function>; // type: () => void