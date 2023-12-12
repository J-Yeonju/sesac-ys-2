let str: string = "hello";
// str = 5; // error
console.log(str);

let num: number;
num = 5;

let undif: undefined;
// undif = 3;
let nu: null = null;
// nu = 3;

// 숫자로 이루어진 배열의 type number[]
let arr: number[] = [1, 2, 3, 4];

let strArr: string[] = ["abc", "def"];
let strArr2: Array<string> = ["abc", "def"];

let numStrArr: (number | string)[] = [1, "a"];
let numStrArr2: Array<number | string> = [1, "a"];

let abc: number | string = "a";
abc = 5;

// typescript 에서 any를 사용하는 건 지양 해야함.
let anyArr: any[] = [1, "a", null, undefined, {}];

// 예습 inteface, type
let obj: object = {
  name: "lily",
};

// Tuple
let drink: [string, number] = ["cola", 2500];
console.log(drink[0]);
drink[0] = "cider";
console.log(drink[0]);
// drink[2] = 'aaaa'
// Tuple의 한계 위처럼 할당하는 건 오류로 잡지만, push 메소드를 이용하면 오류를 잡지 않음
drink.push("aaa");
console.log(drink);

let drink2: readonly [string, number] = ["cola", 2500];
// drink2[0] = 'aaaa' // error
// drink2.push("aaaa")

// Enum
// sun, rain, cloud
enum Weather {
  sun,
  rain,
  cloud,
}

console.log(Weather.sun);

const weather = 0;

if (weather == Weather.sun) {
  console.log("맑은 날씨");
}

let aaaaa: Weather = 2;
// let aaaaa: Weather = 3; // error

enum Weather2 {
  sun = "sun",
  rain = "rain",
  cloud = "cloud",
}

console.log(Weather2.sun);


let olimpic_newgame: readonly [object, boolean] = [
    {
        name: "쇼트트랙",
        type: "혼성 계주"
    },
    true,
];

olimpic_newgame[1]=false;