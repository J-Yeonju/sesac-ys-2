const express = require("express");
const router = express.Router();
const user = require('../controller/Cuser')


router.get('/', user.index)

module.exports = router;
