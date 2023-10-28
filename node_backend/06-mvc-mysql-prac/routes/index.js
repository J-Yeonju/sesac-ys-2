const express = require("express");
const router = express.Router();
const controller = require("../controller/Cvisitor")

router.get("/", controller.home)

router.get("/visitor", controller.visitor) 

module.exports = router;
