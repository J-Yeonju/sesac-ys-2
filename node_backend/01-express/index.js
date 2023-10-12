const express = require('express');     // express 모듈 import
const app = express();                  // 딱 봐도 함수. 이 한수를 이용해서 서버를 만드는 객체 생성. 즉, 서버 객체 
const PORT = 8000;                      // 포트 
                                        // 1~65536 존재. 1 ~ 1023까지는 정해진 기능이 있음.
                                        // 3000, 8000, 8080, 8010, 3010, 3001    3000대, 8000대 사용 가능 
                                        // 3306 : mysql에서 사용함.

// app객체의 view wngine 설정을 ejs로 변경 
app.set("view engine", "ejs");
// app 객체의 view 폴더 설정. 기본값 : ./views
// 만약 ./view 폴더로 바꾸고 싶다면 아래처럼 작성하면 됨.
// app.set("view", "./view")  


// app.use("/static", express.static(__dirname + "/static"));
// __dirname : ~~~~/01-express/static에 클라이언트가 /static 이름으로 들어올 수 있다. 

app.use("/static", express.static(__dirname + "/static"));   
// __dirname : ~~~~/01-express/static에 클라이언트가 /public 이름로 들어올 수 있다. 



// get 메소드 (http 메소드)  :  클라이언트가 요청할 수 있는 방법들을 정의함 
// localhost:8000
// 브라우저에 접속할 수 있다 = 아래 문법으로~
app.get('/', function (req, res) {      //app객체에 있는 get메소드(요청의 종류 중 하나) 특정 url을 입력 엔터 누르는 순간, get요청.
    // 응답 객체 내의 send 메소드 실행. "hello express" 문자열을 응답으로 전송하겠다. 
    // send: 값을 보냄
    res.send("hello express");
});
// http 메소드의 두번째 인자로 넘겨주는 콜백함수의 매개변수 2개 
// 첫번째 매개변수 : request 객체 (요청)
// 두번째 매개변수 : response 객체 (응답)


// localhost:8000/test 로도 열 수 있게 하려면~
app.get('/test', function (req, res) {     
    // res.send("<div style='color:red'> 안녕 <div>");    이렇게 줄 수도 있다.
    console.log(__dirname);
    res.sendFile(__dirname + "/index.html");
    // res.sendFile("/index.html");    // 제약 사항이 있다. 
});

// localhost:8000
app.get("/ejs", function (req, res) {
    // render 메소드의 기본 dir "./views/"
    // res.render("index")
    res.render("test/index")
});

app.get('/lily', function (req, res) {
    res.render("lily", {
        name: "lily", 
        product: ["운동화", "후드집업", "스웨터"]
    });
});

// 서버를 연다.
// localhost:8000       아래를 이것처럼 바꿀 수 있다. 
// 127.0.0.1:8000        내컴퓨터
app.listen(PORT, function () {
    console.log(`server open ${PORT}!`);
});