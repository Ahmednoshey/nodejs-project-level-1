const express = require('express')
const router = express.Router()
const Mydata = require("../models/MydataSchema");

router.delete("/edit/:id", (req, res) => {
  Mydata.deleteOne({ _id: req.params.id })
.then((result) => {res.redirect("/")})
.catch((err) => {console.log(err)})
}); 

router.delete("/:id", (req, res) => {
Mydata.findByIdAndDelete(req.params.id)
.then((result) => {res.redirect("/")})
.catch((err) => {console.log(err)})
}); 

module.exports = router