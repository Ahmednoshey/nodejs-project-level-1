const express = require('express')
const router = express.Router()
const Mydata = require("../models/MydataSchema");
const deleteController = require("../controllers/deleteController")
const requireAuth = require('../middleware/middleware')

router.delete("/edit/:id",requireAuth, deleteController.deleteRoutes); 

router.delete("/:id", deleteController.delete_Routes); 

module.exports = router