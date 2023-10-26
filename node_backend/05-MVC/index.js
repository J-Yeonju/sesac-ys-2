const express = require("express");

// 포트 설정
const app = express();
const PORT = 8000;

// ejs 
app.set("view engine", "ejs");
// 바디 해석 - 이거 위에 post요청을 주면 못 처리함
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// // [before]
// app.get("/", function (req, res) {
//     res.render("index");    
// });

// const router = require("./routes/index");  
// index.js를 불러오고 싶다면 폴더 이름까지만 접근해도 됨.
// 
// const router = require("./routes");
// app.use("/comment", router);
// localhost:8000/comment~~~

const router = require("./routes");
app.use("/", router);
// localhost:8000/~~~

//미들웨어가 위에가 먼저... 포스트 요청 처리는 순서가 중요 

// localhost:8000/user/~~~
const userRouter = require("./routes/user");
app.use("/user", userRouter);



// //존재하지 않는 get요청에 대해서 
// // 이 세줄을 위해 파일 따로 만들기 보다는 이곳에 넣어두는 게...
// // *은 어떤 라우터든 상관없다.
app.get("*", function(req,res){
    res.send("페이지를 찾을 수 없습니다.");
});


app.listen(PORT, function(){
    console.log(`server Open: ${PORT}`);
});