const express = require("express");
const app = express();
const port = 8000;
const session = require("express-session")

// session 걸어주기
app.use(
    session({
      secret: "secret key",
      resave: false, // 모든 요청마다 session을 다시 저장할 거냐?
      saveUninitialized: true, // 클라이언트가 처음 접속할 때, 세션을 한 번 초기화 할 건지 말건지?
    // cookie: {
    //     httpOnly: true, // document.cookie로는 접속 x
    //     maxAge: 10 * 60 * 1000
    // }, 
    // secure: true // http에서만 동작하도록 함.
}));

app.get("/", (req, res) => {
    res.send("hello world");
});

// 세션 생성
app.get("/get", (req, res) => {
    console.log("1: ", req.session);
    // 로그인 성공한 시점에 req.session.user에 user를 식별할 수 있는 고유한 값
    req.session.user = "yeonju";
    // req.session.user = {             //갹체로도 저장 가능하다. 
    //     name: "yeonju",
    //     email: ""
    // },
    console.log("2: ", req.session);
    req.send("set session")
});

app.get("/get", (req, res) => {
    console.log("user: ", req.session.user);
    res.send({ user: req.session.user }) //user: undifined
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  