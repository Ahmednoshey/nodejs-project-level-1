const express = require('express')
const router = express.Router()
const addController = require("../controllers/addController")
const requireAuth = require('../middleware/middleware')
router.post("/user/add.html",requireAuth,addController.addRouting);
module.exports = router
