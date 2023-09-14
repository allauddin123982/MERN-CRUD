import { app } from '../index';

//10
const UserModel = require("./models/Users");


//11
//Create Api to add new record
//specify Route

app.post("/CreateUser", async (req, res) => {
    const { email } = req.body;
    try {
      const match = await UserModel.findOne({ email });
      if (match) {
        console.log("Email already in use");
        res.status(400).json({ error: "Email already in use" });
      } else {
        const newUser = await UserModel.create(req.body);
        res.json(newUser);
      }
    } catch (error) {
      console.log(error);
    }
  });
  //12
  //Get Api
  app.get("/", (req, res) => {
    UserModel.find({})
      .then((users) => res.json(users))
      .catch((err) => res.json(err));
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
      {
        namee: req.body.namee,
        email: req.body.email,
        age: req.body.age,
        score: req.body.score,
        statuss: req.body.statuss,
      }
    )
      .then((users) => res.json(users))
      .catch((err) => res.json(err));
  });
  //15
  //Delete Api
  app.delete("/deleteUser/:id", (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({ _id: id })
      .then((res) => res.json(res))
      .catch((error) => res.json(error));
  });
  //16
  app.get("/getTrue", (req, res) => {
    UserModel.find({ score:{"$gte":50} })
      .then((users) => res.json(users))
      .catch((err) => res.json(err));
  });
  //17
  app.get("/getFalse", (req, res) => {
    UserModel.find({score: {"$lte":49}})
      .then((users) => res.json(users))
      .catch((err) => {
        res.json(err);
      });
  });
  
  //18
  app.get("/getDesSort/", async (req, res) => {
    try {
      //1 = asc
      //-1 = des
      const des = await UserModel.find({}).sort({ score: -1 });
      console.log(des);
      res.status(200).json({ data: des });
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({ error: "An error occurred while fetching and sorting data." });
    }
  });
  //19
  app.get("/getAscSort/", async (req, res) => {
    try {
      //1 = asc
      //-1 = des
      const asc = await UserModel.find({}).sort({ score: 1 });
      console.log(asc);
      res.status(200).json({ data: asc });
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({ error: "An error occurred while fetching and sorting data." });
    }
  });
  
  //20
  app.get("/getNameSort/", async (req, res) => {
    try {
      const sortName = await UserModel.find({}).sort({ namee: 1 });
      console.log(sortName);
      res.status(200).json({ data: sortName });
    } catch (error) {
      console.error(err);
      res
        .status(500)
        .json({ error: "An error occurred while fetching and sorting data." });
    }
  });
  //21
  app.get("/getAgeSort", async (req, res) => {
    try {
      const sortAge = await UserModel.find({}).sort({ age: 1});
      res.status(200).json({ data: sortAge });
    } catch (error) {
      console.error(err);
      res
        .status(500)
        .json({ error: "An error occurred while fetching and sorting data." });
    }
  });
  