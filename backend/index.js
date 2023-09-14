//1
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


//2
const app = express();
app.use(cors()); // middleware that allows Cross origin resource sharing to allow reqst from diff origins
app.use(express.json()); // parse the frontend data into json format

//4
//connection with MongoDb Database
mongoose
  .connect("mongodb://localhost:27017/crud")
  .then((resss) => {
    console.log("MongoDB Started");
  })
  .catch((errrr) => {
    console.log("Error occured while starting db", errrr);
  });

//5
//create a Model for users in new Folder(models)-> File(Users.js)



//3
app.listen(9000, () => {
  console.log("server is running...");
});



