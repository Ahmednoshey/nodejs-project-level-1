const express = require('express')
const router = express.Router()
const Mydata = require("../models/MydataSchema");
const deleteController = require("../controllers/deleteController")

router.delete("/edit/:id", deleteController.deleteRoutes); 

router.delete("/:id", deleteController.delete_Routes); 

module.exports = router