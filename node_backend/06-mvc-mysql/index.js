const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const router = require("./routes")   //index.js 불러올 때는 파일명까지만 해도 불러 올 수 있다. 
app.use("/", router);

app.get("*", function(req, res) {
    res.render("404");
});

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});