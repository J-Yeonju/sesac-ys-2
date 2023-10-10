function run() {
    makeTag();
    appendHtml();

    console.log("3초 뒤 실행");
}

console.log("시작");

// 콜백 함수 : 함수의 인자로 함수를 넘길때, 인자로 넘기는 그 함수
setTimeout(run, 3000);
console.log("끝");