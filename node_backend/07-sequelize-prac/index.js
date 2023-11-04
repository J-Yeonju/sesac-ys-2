const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use( "/static", express.static( "static" ) );

const router = require("./routes/VisitorRoutes");
app.use("/", router);

const useRouter = require("./routes/userRoutes");
app.use("/user", useRouter);

app.get("*", function (req, res) {
  res.render("404");
});

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
