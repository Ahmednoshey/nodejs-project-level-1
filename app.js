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
  res.render("index")
});
app.get("/user/add.html", (req, res) => {
  res.render("user/add")
});
app.get("/user/edit.html", (req, res) => {
  res.render("user/edit")
});
app.get("/user/view.html", (req, res) => {
  res.render("user/view")
});



mongoose
  .connect("mongodb+srv://ahmedeldomiaty0:Bhm4PvQxL0DmLahK@nodejsproject.x786z.mongodb.net/alldata?retryWrites=true&w=majority&appName=nodejsproject")
  .then(() => {
    app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
  });
})
  .catch((error) => {console.log(error)});

