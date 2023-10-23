const express = require("express");
const multer = require("multer");   
const path = require("path");

const app = express();
const PORT = 8000;

const uploadDetail = multer({
    storage: multer.diskStorage({
        destination : function(req, file, done){
            done(null, "upload/");
        },
        filename(req, file, done){
            const ext = path.extname(file.originalname) 

            done(null, req.body.id + '_' + Date.now() + ext);
        },
    }),
    limits: { fileSize: 5 * 1024 * 1024 }, 
});

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use("/upload", express.static(__dirname + "/upload"));
// app.use("/static", express.static(__dirname + "/static"));

// const upload = multer({
//     dest: "upload/", 
// });

app.get("/", function(req, res) {
    res.render("index");
});


app.post("/result", uploadDetail.single("userfile"), function (req, res) {
    res.render("result", {
        src: req.file.path,
        id: req.body.id,
        pw: req.body.pw,
        name: req.body.name,
        age: req.body.age,
    });
});

app.post("/upload", uploadDetail.single("userFile"), function (req, res) {
    res.send({
        src: req.file.path,
        id: req.body.id,
        pw: req.body.pw,
        name: req.body.name,
        age: req.body.age,
    });
});



app.listen(PORT, function(){
    console.log(`server Open: ${PORT}`);
});