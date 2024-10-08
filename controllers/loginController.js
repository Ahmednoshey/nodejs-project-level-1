
const bcrypt = require('bcrypt');
const AuthUser = require("../models/SignupSchema");
var jwt = require("jsonwebtoken");
const loginRoutes = async (req, res) => {
  try {
   const LoginUser = await AuthUser.findOne({Email:req.body.Email});
   if (LoginUser != null) {
     const checkhashEmail = await bcrypt.compare(req.body.Password,LoginUser.Password)
     if (checkhashEmail) {
        var token = jwt.sign({ id: LoginUser._id }, "layan");
        res.cookie("jwt", token, { httpOnly: true, maxAge: 86400000 });
        res.redirect("/home")
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