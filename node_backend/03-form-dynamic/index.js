const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get("/", function(req, res) {
    res.render("index");
});

app.get("/ajax", function(req, res) {
    console.log(req.query);     //query는 객체
    // {key: value, key: value}
    res.send(req.query);
});

app.post("/ajax", function(req, res) {          // url은 같고 메소드만 다르다
    console.log(req.body);  
    res.send(req.body);
});

// render로 보내게 되면 받는 응답이 html코드가 된다. 

app.get("/axios", function(req, res) {          // req, res 순서 중요
    console.log(req.query);    
    res.send(req.query);
});

app.post("/axios", function(req, res) {  
    console.log(req.body);
    const data = {          //딕셔너리 형태.... 형태는 통일 시키는 것이 좋다.
        ...req.body,       // {id: 'yeonju', pw: '123', name: '연주', msg: '반가워요'}
        msg: "반가워요",
    };    
    res.send(data);
});

app.get("/fetch", function(req, res) {  
    console.log(req.query);    
    res.send(req.query);
});


app.post("/fetch", function(req, res) {  
    console.log(req.body);    
    res.send(req.body);
});

// 실습 2번 참고
app.post("/~~~", function(req,res){
    const id = "yeonju";
    const pw = "12134";
    // req와 id,pw를 비교하는 코드 작성
    // 일치 x -> 로그인 실패
    // 일치 o n -> 로그인 성공
})


app.listen(PORT, function(){
    console.log(`server Open: ${PORT}`);
});


