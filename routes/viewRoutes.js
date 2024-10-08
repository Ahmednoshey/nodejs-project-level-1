const express = require('express')
const router = express.Router()
const Mydata = require("../models/MydataSchema");
const viewController = require("../controllers/viewController");
const requireAuth = require('../middleware/middleware')
router.get("/view/:id",requireAuth, viewController.viewRoutes);




module.exports = router