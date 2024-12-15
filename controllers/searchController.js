const Mydata = require("../models/MydataSchema");
var moment = require("moment");
const searchRoutes = (req, res) => {
  Mydata.find({Customer: req.body.Search_Date})
  .then((result) => {res.render("user/search",{arr:result, moment: moment})})
  .catch( err => {
   });
   } 
module.exports = {searchRoutes}