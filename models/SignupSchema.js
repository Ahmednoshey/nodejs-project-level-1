const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const authuserSchema = new Schema({
  UserName: String,
  Email: String,
  Password: String,
},{ timestamps: true });
const AuthUser = mongoose.model("User", authuserSchema);
module.exports = AuthUser;