const express = require('express')
const router = express.Router()
const Mydata = require("../models/MydataSchema");

// search

router.post("/search", (req, res) => {
  Mydata.find({Second_Date: req.body.Search_Date})
  .then((result) => {res.render("user/search",{arr:result})})
  .catch( err => {
   console.log(err);
   });
   });

   router.post("/Search_Branch", (req, res) => {
    Mydata.find({ $and: [{Second_Date: req.body.Search_Date},{Branch: req.body.Search_Branch}]})
    .then((result) => {res.render("user/search",{arr:result})})
    .catch( err => {
     console.log(err);
     });
     });



module.exports = router