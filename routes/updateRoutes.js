const express = require('express')
const router = express.Router()
const Mydata = require("../models/MydataSchema");

router.get("/edit/:id", (req, res) => {
  Mydata.findById(req.params.id)
  .then((result) => {res.render("user/edit",{obj:result})})
  .catch((err) => {console.log(err)})
});



router.put("/edit/:id", (req, res) => {
Mydata.findByIdAndUpdate(req.params.id, req.body)
.then((result) => {res.redirect("/")})
.catch((err) => {console.log(err)})
});




module.exports = router