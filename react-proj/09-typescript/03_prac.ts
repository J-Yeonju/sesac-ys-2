// 두 개의 수를 매개 변수로 받고 합을 console.log 로 출력하는 함수 sum1 만들기

function sum11 (a:number, b:number):void{
    return console.log(a+b);
}

sum11(5, 11); 




// 매개 변수로 여러 개의 수를 받고 전달된 값을 모두 더하는 함수 sum2

function sum22(...numbers: number[]): number {
    return [...numbers].reduce((acc, cur) => acc + cur, 0);
}

console.log(sum22(1, 2, 3, 4, 10)); // 20