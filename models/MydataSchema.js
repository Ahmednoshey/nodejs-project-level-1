const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const articleSchema = new Schema({
  Customer: String,
  price: Number,
  Back: String,
  Branch: String,
  First_Date: String,
  Second_Date: String,
  Info: String,

});
const Mydata = mongoose.model("Mydataa", articleSchema);
module.exports = Mydata;