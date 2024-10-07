const express = require('express')
const router = express.Router()
const addController = require("../controllers/addController")
router.post("/user/add.html", addController.addRouting);
module.exports = router
