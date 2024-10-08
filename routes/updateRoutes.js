const express = require('express')
const router = express.Router()
const Mydata = require("../models/MydataSchema");
const updateController = require("../controllers/updateController");
const requireAuth = require('../middleware/middleware')

router.get("/edit/:id",requireAuth, updateController.updateRoutes);



router.put("/edit/:id",requireAuth, updateController.update_Routes);




module.exports = router