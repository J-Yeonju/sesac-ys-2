const express = require("express");
const multer = require("multer");   
const path = require("path");
const app = express();
const PORT = 8000;

app.use("/uploads", express.static(__dirname + "/uploads"));

const upload = multer({
    dest: "uploads/", //파일이 저장될 기본 경로 
});

const uploadDetail = multer({
    storage: multer.diskStorage({
        destination : function(req, file, done){
            done(null, "uploads/");
        },
        filename : function(req, file, done){
            
            console.log(file); 
            const ext = path.extname(file.originalname) 
            const basename = path.basename(file.originalname, ext) 
            const filename = basename + "_" + Date.now() + ext;    
            
            done(null, filename);
        },
    }),
    limits: { fileSize: 5 * 1024 * 1024 }, 
});

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get("/", function(req, res) {
    res.render("index");
});

app.post(
    "/upload",
    uploadDetail.single("userfile"),
    function (req, res) {
      res.render("result", {
        src: req.file.path,
        id: req.body.id,
        pw: req.body.pw,
        name: req.body.name,
        age: req.body.age,
      });
      // res.send("파일 업로드");
    }
  );



app.listen(PORT, function(){
    console.log(`server Open: ${PORT}`);
});