
const AuthUser = require("../models/SignupSchema");
const addUserRoutes = async (req, res) => {
  try {
    const result = await AuthUser.create(req.body);
    res.redirect("/login");
  } catch (error) {
    console.log(error);
  }
}
module.exports = {addUserRoutes}