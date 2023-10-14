const { log } = require("console");

const fruits = ["apple", "banana", "grape"];

//    [값을 할당하고 싶은 변수 이름]          구조분해 시 변수의 값이 undefined 일 때 기본값 할당 가능
const [apple2, banana2 = "banana2", grape2, strawberry = "strawberry"] = fruits;
console.log(apple2, strawberry, banana2);

// 사실상 아래 코드와 동일한 작업을 하고 있음
// const apple2 = fruits[0]
// const banana2 = fruits[1]
// const grape2 = fruits[2]


// 구조분해 없이 두 변수의 값 교환도 가능
let x = 1, 
    y = 3;
// x = 3, y = 1
[x, y] = [y, x];

console.log(x, y);

// //치환ㄴ하고 싶으면 temp를 만들어야 한다. 
// let temp = x;   // temp = 1
// x = y   // x = 3, y = 3 
// // y = x   // y = 3
// y = temp;


//객체 구조분해
const obj = {
    name: "Yeonju",
    gender: "여",
    age: 97,
};

// const { age, name, gender, test= "test" } = obj;
// console.log(age, test);

// key 이름 바꾸는 방법
//           존재하는 키 이름: 할당 하고픈 키 이름
const { age, name : name2} = obj;
console.log(age, name2);

// 아래 코드와 동일
// const age = obj.age;
// const name = obj.name;


const arr1 = [1,2,3,4,5];
const arr2 = ["a", "b", "c", "d", "e"];

// [1,2,3,4,5,"a", "b", "c", "d", "e"]


// const arr3 = [arr1[0]~~~, arr2[0], arr2[1], ~~~]  이렇게 하드코딩하면 효율 떨어짐
//  for()

const arr3 = [...arr1, ...arr2];
console.log( "arr3", arr3);

// ,,,[1,2,3,4,5] => 1,2,3,4,5
// 배열로 묶었던 것을 풀어준다. 
// 배열을 해제시키고 전개시킨다
// const hello = [..."hello"]
// hello = ["h", "e", "l", "l", "o"]
// console.log("hello", hello);

const word1 = "abc";
const word2 = "xyz";

const word3 = [...word1, ...word2];
console.log(word3);


const obj2 = {
    name: "Yeonju",
    gender: "여",
    age: 97,
};
const obj3 = {
    ...obj2,
    test: "test",
};
console.log("obj3", obj3);

const values = [10, 20, 30];
function get(a, ...rest) {
    console.log("a", a); // 10
    console.log("rest", rest); // [ 10, 20 ]
}

get(...values);

// ...[10, 20, 30] => 10, 20, 30
get(10, 20, 30);