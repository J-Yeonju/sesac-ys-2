const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router = require("./routes/user");
app.use("/", router);
// localhost:8000/user/~~~~

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});


// router, constroller, model, view
// 1. router 분리 (요청을 정의) -> 완료
// 2. controller 분리 (요청에 대해 데이터 처리, veiw render, client에 응답)
// 3. model 분리 (db에 접근하여 데이터를 select, insert, update, delete)

// app.get("/", function(req, res) {

// })

// 아래는 routes의  user.js로 보내고   app -> router로 변경

// app.get("/", function (req, res) {
//   res.render("index");
// });

// app.get("/register", function (req, res) {
//   console.log(req.query);
//   res.send(req.query);
// });

// app.post("/login", function (req, res) {
//   const id = "lily";
//   const pw = "12345";
//   let data;
//   if (req.body.userid == id && req.body.password == pw) {
//     data = {
//       isSuccess: true,
//       msg: "로그인 성공!",
//     };
//   } else {
//     data = {
//       isSuccess: false,
//       msg: "로그인 실패!",
//     };
//   }
//   // console.log(req.body);
//   res.send(data);
// });

// app.listen(PORT, function () {
//   console.log(`Sever Open: ${PORT}`);
// });






