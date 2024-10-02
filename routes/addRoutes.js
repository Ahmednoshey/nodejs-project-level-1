const express = require('express')
const router = express.Router()
const Mydata = require("../models/MydataSchema");
router.post("/user/add.html", (req, res) => {
  Mydata.create(req.body)
     .then( result => {
     res.redirect("/");
     })
  .catch( err => {
   console.log(err);
   });
   });
module.exports = router