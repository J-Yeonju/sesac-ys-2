// ------ case 3) ------ //
// 파일에서 여러 개의 식별자를 객체 형태로 내보내는 경우
// 특정 식별자만 필요한 경우(add, PI)만 필요한 경우 객체구조분해 할당 문법을 통해 모듈을 받아올 수 있다. 
const { add } = require("./math.js");

const sum = add(2, 3);
console.log(sum);
console.log(PI);  //PI는 사용할 수 없다. 오류 발생 
// const { add, PI } = require("./math.js"); 이렇게 가져와야 사용 가능

// ------ case 2) ------ //
// 파일에서 여러 개의 식별자를 객체 형태로 내보내는 경우
// 모듈을 받아올 때 객체를 그대로 math라는 식별자로 받음.
// const math = require("./math.js")

// const sum = math.add(3, 5);
// console.log(sum);
// console.log(math.PI);


// ------ case 1) ------ //
// 파일에서 한개의 식별자만 내보내는 경우 
// const add =  require("./math.js");

// const sum = add(2, 3);
// console.log(sum);