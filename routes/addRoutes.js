const express = require('express')
const router = express.Router()
const Mydata = require("../models/MydataSchema");
const addController = require("../controllers/addController")
router.post("/user/add.html", addController.addRouting);
module.exports = router