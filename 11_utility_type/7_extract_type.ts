/**
 * Extract Type
 * 어떠한 유니온 타입에서 특정 type 만 뽑아내라(추출해라) 라는 유틸리티 클래스
 */

type stringOnly = Extract<string | boolean | number, string>; // string

type functionOnly = Extract<string | (()=> void), Function>; // -> Initial type: () => void