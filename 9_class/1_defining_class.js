"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Class 선언하기
 */
class sampleClass {
}
class Game {
    constructor(name, country, download) {
        this.name = name;
        this.country = country;
        this.download = download;
    }
    introduce() {
        return `${this.name}은 ${this.country}에서 제작된 ${this.download}개의 다운로드를 달성한 게임이다.`;
    }
}
const starCraft = new Game('스타크래프트', '미국', 10000000);
const returnValue = starCraft.introduce();
console.log(returnValue);
