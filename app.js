const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
app.get("/", (req, res) => {
  res.sendFile("./views/home.html", { root: __dirname });
});
mongoose
  .connect("mongodb+srv://ahmedeldomiaty0:Bhm4PvQxL0DmLahK@nodejsproject.x786z.mongodb.net/?retryWrites=true&w=majority&appName=nodejsproject")
  .then(() => {
    app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
  });
})
  .catch((error) => {console.log(error)});
