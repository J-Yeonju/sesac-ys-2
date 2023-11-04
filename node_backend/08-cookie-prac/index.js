const express = require("express");
const app = express();
const port = 8000;
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(cookieParser());

const cookieConfig = {
  maxAge: 86400000, 
  httpOnly: true,
};



app.get("/", (req, res) => {
  const showPopup = !req.cookies.popup;    // 
  console.log(showPopup)
  res.render("index", { showPopup });
});

app.get("/set", (req, res) => {
//   res.cookie("key", "value", cookieConfig);
  res.cookie("popup", "1", cookieConfig);
  res.send("set cookie");
});

app.get("/get", (req, res) => {
  console.log("cookie: ", req.cookies);
  res.send(req.cookies);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
