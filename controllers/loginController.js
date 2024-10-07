var moment = require('moment');
const Mydata = require("../models/MydataSchema");
const bcrypt = require('bcrypt');
const AuthUser = require("../models/SignupSchema");
const loginRoutes = async (req, res) => {
  try {
   const LoginUser = await AuthUser.findOne({Email:req.body.Email});
   if (LoginUser != null) {
     const checkhashEmail = await bcrypt.compare(req.body.Password,LoginUser.Password)
     if (checkhashEmail) {
      Mydata.find()
      .then((result) => {res.render("index",{arr:result,moment:moment})})
      .catch((err) => {console.log(err)})
     }else{
       console.log("Password Not Correct");
     }
   }else{
     console.log("Email is Not Found");
   }
 } catch (error) {
   console.log(error);
 }
}
module.exports = {loginRoutes}