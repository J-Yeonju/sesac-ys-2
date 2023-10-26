const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");  // Controller main

// router.get("/", 컴트롤러함수)
// router.get("/", function(req, res) {
//     res.render("index");
// });
// ↓
// 요청에 대한 정보를 모아둠.
// localhost:8000/
router.get("/", controller.main)

// localhost:8000/comments
router.get("/comments",controller.comments)

// localhost:8000/comment/aaa
// router.get("/aaa", controller.main)

module.exports = router;