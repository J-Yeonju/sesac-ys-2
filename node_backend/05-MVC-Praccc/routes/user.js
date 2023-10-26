const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");


// localhost:8000/
router.get("/", controller.main);

// localhost:8000/user/login (post)
router.post("/login", controller.login);

module.exports = router;



// index.js 에서 가져온 코드를
// 컨트롤러 부분을 지우고 컨트롤러 부분을 import한다. 

// app.get("/", function (req, res) {
//     res.render("index");
//   });
  
//   app.get("/register", function (req, res) {
//     console.log(req.query);
//     res.send(req.query);
//   });
  
//   app.post("/login", function (req, res) {
//     const id = "lily";
//     const pw = "12345";
//     let data;
//     if (req.body.userid == id && req.body.password == pw) {
//       data = {
//         isSuccess: true,
//         msg: "로그인 성공!",
//       };
//     } else {
//       data = {
//         isSuccess: false,
//         msg: "로그인 실패!",
//       };
//     }
//     // console.log(req.body);
//     res.send(data);
//   });
  