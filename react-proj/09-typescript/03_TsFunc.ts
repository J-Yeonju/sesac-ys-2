// function abc () {
//     console.log("abc");
// }

//함수 자체의 type -> 함수가 실행되어 결국 return값
function sum(a: number, b: number): number {
    return a + b;
    // return "hello" // error
}

// console.log(sum(1));       하나만 쓰면 오류
console.log(sum(1,2));


const sum1 = (a:number, b: number) => {
    return a + b;
}

// : number  정의가 필요한 순간에 적어준다. 

// 옵셔널 매개변수 
const sum2 = (a:number, b?: number) : number => {
    if(b) return a + b;
    return a;           // 이걸 안 써도 오류 return값이 없는 경우도 생각해야하므로 
};

// b?는 undefined 숫자랑 undefined는 더할 수 없다. 






interface Calculator {
    sum: (a: number, b: number) => number;
    sub?: () => void;
  }
  
  const calc: Calculator = {
    sum: sum,
  };
  
  function goingOn(): never {
    while (true) {
      console.log("go");
    }
  }
  






// void: 함수 자체의 return 값이 없을 때 사용
// 오버로딩? -> 함수의 이름은 같으나, 형태가 다른 함수 (매개변수)
function hello(num: number): number;
function hello(str: string, str2: string): string;

function hello(param: any, param2?: any) {
  console.log(param);
  console.log(param2);
  return param;
}

hello(2);
hello("hello", "world");








// void: 함수 자체의 리턴값이 없을 때 사용한다. 

// function hello = (): void => {
//     console.log("hello");
//    // return "hello"; 
// };


// // 함수 오버로딩
// function hello = (a: string, b:string): void => {
//     console.log("hello");
//    // return "hello"; 
// };
