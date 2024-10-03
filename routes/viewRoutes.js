const express = require('express')
const router = express.Router()
const Mydata = require("../models/MydataSchema");
const viewController = require("../controllers/viewController");

router.get("/view/:id", viewController.viewRoutes);




module.exports = router