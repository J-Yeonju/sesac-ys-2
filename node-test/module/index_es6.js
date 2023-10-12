// const math = require("./math_es6.js") 
// math.add()

// const {add} = require("./math_es6.js") // common js 문법

//import add from "./math_es6.js"
// math_es6.js파일에서 default로 export하고 있는 식별자를 add2라는 식별자로 받아옴

//import { } from "./"
//console.log(add(2, 3));

// es6 문법에서 모듈을 import할 때, 구조분해 없이 식별자를 만들어서 받아오는 방법은 
// module 파일(math_es6.js)에 default로 export하는 값이 있어야 함 
import math from "./math_es6.js";
console.log(math);


// import math from "./math_es6.js";
// console.log(math.add(2, 3));     오류 발생!!

//불러오는 방법 두가지 
import math from "./math_es6.js";
import {} from "./math_es6.js"; // 구조분해해서 가져올 경우