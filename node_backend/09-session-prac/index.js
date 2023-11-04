const express = require("express");
const app = express();
const port = 8000;
const session = require("express-session")

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    session({
      secret: "secret key",
      resave: false, 
      saveUninitialized: true, 
      cookie: {
        httpOnly: true
      }
}));

app.get("/", (req, res) => {
    console.log("send session user", req.session.user);
    res.render("index", {user: req.session.user});
  });

app.get("/set", (req, res) => {
    req.session.user = "yeonju"
    res.send( "set session" ) 
    console.log("set user", req.session.user);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  




// 1. session을 생성하는 임시 router 생성 (수업에서 한 것처럼)
// 2. GET/ => render("index", { user: ???})
// 3. index.js에서 user가 어떤지에 따라서 
//    nav에 login or logout
//    <div>에 "~~님 환영합니다" or "로그인을 해주세요"