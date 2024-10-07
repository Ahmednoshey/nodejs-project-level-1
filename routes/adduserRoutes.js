

const express = require('express')
const router = express.Router()
const adduserController = require("../controllers/adduserController")
router.post("/register",adduserController.addUserRoutes);
module.exports = router