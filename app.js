const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const Mydata = require("./models/MydataSchema");
app.use(express.static('public'))
var moment = require('moment');
var methodOverride = require('method-override')
app.use(methodOverride('_method'))

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

app.get("/", (req, res) => {
  Mydata.find()
  .then((result) => {res.render("index",{arr:result,moment:moment})})
  .catch((err) => {console.log(err)})
 });

 app.get("/user/add.html", (req, res) => {
 res.render("user/add")
  });

  
mongoose
  .connect("mongodb+srv://ahmedeldomiaty0:Bhm4PvQxL0DmLahK@nodejsproject.x786z.mongodb.net/alldata?retryWrites=true&w=majority&appName=nodejsproject")
  .then(() => {
    app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
  });
})
  .catch((error) => {console.log(error)});

app.post("/user/add.html", (req, res) => {
  Mydata.create(req.body)
     .then( result => {
     res.redirect("/");
     })
  .catch( err => {
   console.log(err);
   });
   });
    
   app.get("/view/:id", (req, res) => {
    Mydata.findById(req.params.id)
    .then((result) => {res.render("user/view",{obj:result})})
    .catch((err) => {console.log(err)})
   });
  
   app.get("/edit/:id", (req, res) => {
    Mydata.findById(req.params.id)
    .then((result) => {res.render("user/edit",{obj:result})})
    .catch((err) => {console.log(err)})
  });

  app.delete("/edit/:id", (req, res) => {
    Mydata.deleteOne({ _id: req.params.id })
  .then((result) => {res.redirect("/")})
  .catch((err) => {console.log(err)})
}); 

app.delete("/:id", (req, res) => {
  Mydata.findByIdAndDelete(req.params.id)
.then((result) => {res.redirect("/")})
.catch((err) => {console.log(err)})
}); 

app.put("/edit/:id", (req, res) => {
  Mydata.findByIdAndUpdate(req.params.id, req.body)
  .then((result) => {res.redirect("/")})
.catch((err) => {console.log(err)})
});

  
app.post("/search", (req, res) => {
  Mydata.find({Branch:"نور العاشر"})
  .then((result) => {res.render("user/search",{arr:result})})
  .catch( err => {
   console.log(err);
   });
   });  

  


    