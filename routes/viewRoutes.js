const express = require('express')
const router = express.Router()
const Mydata = require("../models/MydataSchema");

router.get("/view/:id", (req, res) => {
  Mydata.findById(req.params.id)
  .then((result) => {res.render("user/view",{obj:result})})
  .catch((err) => {console.log(err)})
 });




module.exports = router