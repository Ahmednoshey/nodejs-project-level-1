const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const Mydata = require("./models/MydataSchema");
app.use(express.static('public'))


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
  .then((result) => {res.render("home",{mytitle:"Home Page",arr:result})})
  .catch((err) => {console.log(err)})
});
mongoose
  .connect("mongodb+srv://ahmedeldomiaty0:Bhm4PvQxL0DmLahK@nodejsproject.x786z.mongodb.net/alldata?retryWrites=true&w=majority&appName=nodejsproject")
  .then(() => {
    app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
  });
})
  .catch((error) => {console.log(error)});
  app.post("/", (req, res) => {
    const mydata = new Mydata(req.body);
    mydata.save()
    .then( result => {
      res.redirect("/");
    })
    .catch( err => {
      console.log(err);
    });
  });
