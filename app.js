const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const Mydata = require("./models/MydataSchema");
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

app.get("/home", (req, res) => {
  Mydata.find()
  .then((result) => {res.render("index",{arr:result,moment:moment})})
  .catch((err) => {console.log(err)})
 });

 app.get("/user/add.html", (req, res) => {
 res.render("user/add")
  });

  app.get("/", (req, res) => {
    res.render("wellcome.ejs")
     });

     app.get("/login", (req, res) => {
      res.render("auth/login")
       });

       app.get("/register", (req, res) => {
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






  


    