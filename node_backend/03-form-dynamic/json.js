const data = {name: "yeonju", gender: "woman"};

const jsonData = JSON.stringify(data);
console.log("json: ", jsonData);

console.log("js object: ", JSON.parse(jsonData));


// JSON은 통신하기 쉬운 하나의 통신 포맷
