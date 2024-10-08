const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const Mydata = require("./models/MydataSchema");
const AuthUser = require("./models/SignupSchema");
app.use(express.static('public'))
var moment = require('moment');
var methodOverride = require('method-override')
app.use(methodOverride('_method'))
const searchRoutes = require('./routes/searchRoutes')
const deleteRoutes = require('./routes/deleteRoutes')
const addRoutes = require('./routes/addRoutes')
const updateRoutes = require('./routes/updateRoutes')
const viewRoutes = require('./routes/viewRoutes')
const adduserRoutes = require('./routes/adduserRoutes')
const loginRoutes = require('./routes/loginRoutes')
const requireAuth = require('./middleware/middleware')


//Auto refresh
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));
const connectLivereload = require("connect-livereload");
app.use(connectLivereload());
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }));

//cookie-parser
var cookieParser = require('cookie-parser')
app.use(cookieParser())




app.get("/home",requireAuth, (req, res) => {
  Mydata.find()
  .then((result) => {res.render("index",{arr:result,moment:moment})})
  .catch((err) => {console.log(err)})
 });

 app.get("/user/add.html",requireAuth, (req, res) => {
 res.render("user/add")
  });

  //check user login for show other design
  var jwt = require("jsonwebtoken");
  const checkIfUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
      jwt.verify(token, "layan", async (err, decoded) => {
        if (err) {
          res.locals.user = null;
          next();
        } else {
          const currentUser = await AuthUser.findById(decoded.id);
          res.locals.user = currentUser;
          next();
        }
      });
    } else {
      res.locals.user = null;
      next();
    }
  };

  app.get("*",checkIfUser);

  app.get("/",checkIfUser, (req, res) => {
    res.render("wellcome.ejs")
     });

     app.get("/login",checkIfUser,(req, res) => {
      res.render("auth/login")
       });

       app.get("/register",checkIfUser,(req, res) => {
        res.render("auth/register")
         });
       
      
      // signup
         app.use(adduserRoutes) 
         
         
              //  login
       app.use(loginRoutes)  

    

mongoose
  .connect("mongodb+srv://ahmedeldomiaty0:Bhm4PvQxL0DmLahK@nodejsproject.x786z.mongodb.net/alldata?retryWrites=true&w=majority&appName=nodejsproject")
  .then(() => {
    app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
  });
})
  .catch((error) => {console.log(error)});


   
   
app.use(searchRoutes)   
app.use(deleteRoutes)  
app.use(addRoutes)
app.use(updateRoutes) 
app.use(viewRoutes) 






  


    