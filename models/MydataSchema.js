const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const articleSchema = new Schema({
  username: String,
});
const Mydata = mongoose.model("Mydataa", articleSchema);
module.exports = Mydata;