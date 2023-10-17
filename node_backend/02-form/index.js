const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
// req.body를 해석하기 위한 코드
app.use(express.urlencoded({ extended: true}));
// x-www-form-unlencoded 형태의 데이터를 해석
// extended : true일 경우 qs 모듈(외부 모듈)을 이용한다. false일 경우 내장 모듈인 querystring을 사용한다. 
// ~~~~?name=lily    같은 코드를 해석할 때 qs(좀 더 고차원적인 데이터에 적합 json같은)를 사용할거냐, querystring(내장되어 있음)을 사용할 거냐
app.use(express.json());
// aplication/json 형태의 데이터를 해석


// localhost:8000 url  접속에 대한 응답을 위해 만든 코드(get요청)
app.get("/", function(req, res) {
    res.render("index");
});

// get요청은 url로 접속이 가능하다. 
// get 요청은 req.query에 데이터가 담겨서 온다.
// 데이터가 전송 시에 form 태그를 이용할 경우, method를 get으로 해놓으면 get 요청
// 클라이언트가 get 요청으로 데이터를 보낼 때 url에 직접 query를 만들어서 전송이 가능하다. 
// get은 url에 전송되는 데이터가 노출된다. (개인정보를 위한 전송은 get으로 하지 않는다)
// 정보를 조회하는 요청에 사용함 (CRUD 중에서 Read를 의미하는 요청에 사용된다)
// localhost:8000/get?id=yeonju&pw=1234
app.get("/get", function(req, res) {
    console.log(req.query);  // {id: 'yeonju', pw: '1234'}
    console.log(req.query.id); // 'yeonju'
    // req.query : get 요청에 대해 client가 보낸 데이터를 담고 있다. (req에는 많은 객체가 있지만 query는 client가 인지하고 보낸 데이터이다.)
    //req.query
    // url에서 기본 주소(localhost:8000/get) 다음에 ?뒤에 오는 문자열을 query라고 한다.
    // 기본주소?id=lily&pw=1234
    // 하나의 key value 쌍 

    res.send("get 요청 성공!");
});

// localhost:8000/post로 post요청을 받기 위한 준비
// url 은 다 get요청 post는 get요청으로 할 수 없다. 
// post 요청은 url로 직접 요청하는 건 불가능함 
// url이 바뀌는 건 form요청에 의해서 바뀐 것이고 직접 입력하면 접속 불가능하다. 
// post 요청에 대한 데이터는 req.body에 담아서 온다. 
// 정보가 숨겨짐. url에 노출되지 않음. 
// 데이터를 새로 생성하는 요청에 주로 사용 (CRUD 중에서 Create를 의미하는 요청에 사용된다)
app.post("/post", function (req, res) {
    console.log(req.body);
    res.send("post 요청 성공!");
});

// 조회, 데이터 저장(db에 데이터 삽입), 원래 있던 데이터를 변경하기 위해, 데이터 삭제 
// 의도가 있다. CRUD(create, read, update, delete)는 프로그램을 만들면 없을 수 없다. 
// get은 조회를 할 때 쓴다. 조회인데 데이터를 가져올 필요가 있나? 날짜 같은 정보를 위해 필요가 있다!
// post 데이터 생성 
// get은 query에 실어서 post는 body에 실어서 보낸다.

app.get("/get", function(req, res) {
    console.log(req.query);  
    console.log(req.query.name); 
    console.log(req.query.email); 

    res.send("get 요청 성공!");
});

app.post("/post/ver2", function(req, res) {
    console.log(req.body);
    res.render("result", {
        name: req.body.name,
        email: req.body.email,
    });
});




app.listen(PORT, function(){
    console.log(`server Open: ${PORT}`);
});