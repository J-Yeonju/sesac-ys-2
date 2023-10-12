const add = (a, b)=> a + b; //return을 쓰지 않았지만 return값 존재
const minus = (a, b) => a - b;
const PI = 3.14;

// 1) 하나만 내보낼 경우
// module.experts = add      아래와 동일한 의미
// export default add;

// 2) 여러개 내보낼 경우 (내보낼 때는 위에와 다를 게 없다. )
// module.export = {
//     add,
//     minus
// };
// export default PI;

export {add, minus}; //es6 문법, 위 코드와 동일 
