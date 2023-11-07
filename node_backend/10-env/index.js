const express = require("express");
const app = express();
const PORT = 8000;
const dotenv = require("dotenv");
//cross-env
// 배포 버전이냐? 개발버젼이냐에 따라서  
//실행 환경에 따라서 다른 env 파일을 로드할 수 있게 해준다. 

// console.log(process.env);

// dotenv.config(); 
//index.js와 같은 위치에 있는 .env파일을 불러와서 환경변수로 사용할 수 있게끔 함.
dotenv.config({ path: path.join(_dirname, "./config/envs/.env")});
dotenv.config({
    path: path.join(__dirname, `./config/envs/${process.env.NODE_ENV}.env`),
});

console.log("password: ", process.env.PASSWORD);

app.get("/", function (req, res) {
  res.send("helllo");
});

app.listen(process.env.PORT, function () {
  console.log(`Sever Open: ${process.env.PORT}`); 
});
  