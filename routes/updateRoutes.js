const express = require('express')
const router = express.Router()
const Mydata = require("../models/MydataSchema");
const updateController = require("../controllers/updateController");

router.get("/edit/:id", updateController.updateRoutes);



router.put("/edit/:id", updateController.update_Routes);




module.exports = router