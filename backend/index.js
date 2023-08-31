//1
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//10
const UserModel = require("./models/Users");

//2
const app = express();
app.use(cors()); // middleware that allows Cross origin resource sharing to allow reqst from diff origins
app.use(express.json()); // parse the frontend data into json format

//4
//connection with MongoDb Database
mongoose.connect("mongodb://localhost:27017/crud");

//11
//Create Api to add new record
//specify Route
app.post("/CreateUser", (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});
//12
//Get Api
app.get("/", (req, res) => {
  UserModel.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(users));
});

//13
//Update Api
app.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findById({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});
//14
//Update Api
app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate(
    { _id: id },
    { namee: req.body.namee, email: req.body.email, age: req.body.age }
  )
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});
//15
//Delete Api
app.delete("/deleteUser/:id", (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id: id})
    .then((res) => res.json(res))
    .catch((error) => res.json(error));
})


//5
//craete a Model for users in new Folder(models->Users)

//3
app.listen(9000, () => {
  console.log("server is running...");
});
