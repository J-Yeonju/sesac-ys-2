const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get("/", function(req, res) {
    res.render("login");
});

app.get("/axios", function(req, res) {
    console.log(req.query);
    res.send(req.query);
});

app.post("/axios", function (req, res) {
    console.log(req.body);

    const myId = "yeonju";
    const myPw = "1234";

    if (req.body.id == myId && req.body.pw == myPw) {
        res.send("success");
    }else res.send("fail");
        res.send(data);
})


app.listen(PORT, function(){
    console.log(`server Open: ${PORT}`);
});