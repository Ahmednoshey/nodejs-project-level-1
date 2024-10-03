const express = require('express')
const router = express.Router()
const Mydata = require("../models/MydataSchema");
const searchController = require("../controllers/searchController")

// search

router.post("/search",searchController.searchRoutes);
router.post("/Search_Branch", searchController.search_Routes);
module.exports = router