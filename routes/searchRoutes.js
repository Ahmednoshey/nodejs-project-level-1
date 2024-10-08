const express = require('express')
const router = express.Router()
const Mydata = require("../models/MydataSchema");
const searchController = require("../controllers/searchController")
const requireAuth = require('../middleware/middleware')

// search

router.post("/search",requireAuth,searchController.searchRoutes);
router.post("/Search_Branch", searchController.search_Routes);

module.exports = router 