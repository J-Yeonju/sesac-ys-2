const express = require("express");
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.use( "/static", express.static( "static" ) );   // static 추가시
app.use (express.urlencoded({ extended: true}));
app.use(express.json());


const router = require("./routes");     // 라우터 연결
app.use('/user', router);   //인덱스 파일 연결

app.get("*", function(req, res) {
    res.render("404");
});

app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});
