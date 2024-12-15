const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const articleSchema = new Schema({
  Second_Date: String,
  Customer: String,
  price: Number,
  Bank: String,
  Branch: String,
  First_Date: String,
},{ timestamps: true });
const Mydata = mongoose.model("Mydataa", articleSchema);
module.exports = Mydata;