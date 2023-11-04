const express = require("express");
const app = express();
const PORT = 8000;

const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");
app.use(cookieParser()); //쿠키를 해석하고 사용할 수 있게 해줌.


// 생성, 설정
const cookieConfig = {  //쿠키컨피그는 라우터 안에 넣어두어도 된다. 
    httpOnly: true, // document.cookie로 접근 불가. 서버에서만 쿠키에 접근할 수 있다. 
    maxAge: 24 * 60 * 60 * 1000,//3000, // 24 * 60 * 1000 //ms 단위로 보존하고자 하는 기간을 설정 (오타내면 해석 못 해요)   예)지금부터 몇시간
    // expires: "2023-11-04T18:00",
    // path: "/", // "/test" -> localhost:8000/test/~~~~~~  라우터 설정
    // secure: true, // https 보안 서버에서만 쿠키를 동작하게 한다. 
    // signed: true //쿠키 암호화 -> req.signedCookies   // 원래는 req.cookies 이렇게 가져와야 한다. 
};

app.get("/", (req, res) => {
    const noPopup = req.cookies.popup; 
    res.render("index", {noPopup} ); //ejs에다 변수를 보내준다. {noPopup: noPopup} 키 이름 같으면 {noPopup} 이렇게 보내도 됨
  });
  
app.post("/setCookie", (req, res)=>{
  res.cookie("popup", "y", cookieConfig)
  res.send({result:true});
});

// app.get("/set", (req, res)=>{
//     // 서버가 쿠키를 만들어서 응답으로 보낸다. 
//     // key: key1 / value1
//     res.cookie("key", "value", cookieConfig);
//     res.cookie("popup", "1", cookieConfig);
//     res.send("set cookie");
// });
// // set에서는 계속 생성- 다른 브라우저 띄워서 보면 사라진다. 


// app.get("/get", (req, res)=>{
//     console.log("cookie: ", req.cookies.key1);
//     res.send(req.cookie);
// })

app.listen(PORT, () => {
  console.log("Sever Open: ", PORT);
});
