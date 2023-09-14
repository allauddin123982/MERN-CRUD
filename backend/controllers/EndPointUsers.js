
//10
const UserModel = require("../models/Users");

//11
//Create Api to add new record
//specify Route

exports.create = async (req, res) => {
  const { email } = req.body;
  try {
    const match = await UserModel.findOne({ email });
    if (match) {
      console.log("Email already in use");
      return res.status(400).json({ error: "Email already in use" });
    } else {
      const newUser = await UserModel.create(req.body);
      return res.json(newUser);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
//12
//Get Api
exports.findAll = (req, res) => {
  UserModel.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
};

//13
//Update Api
exports.findOne = (req, res) => {
  const id = req.params.id;
  UserModel.findById({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
};
//14
//Update Api
exports.update = (req, res) => {
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
};

//15
//Delete Api
exports.delete = (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete({ _id: id })
    .then((res) => res.json(res))
    .catch((error) => res.json(error));
};

//16
exports.getTrue = (req, res) => {  
  UserModel.find({ score: { $gte: 50 } })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
};
//17
exports.getFalse = (req, res) => {
  UserModel.find({ score: { $lte: 49 } })
    .then((users) =>  res.json(users))
    .catch((err) =>  res.json(err));
};

//18
 //      1 = asc
 //     -1 = des
exports.getDesSort = async (req, res) => {
    try {
      // Fetch and sort data in descending order based on the "score" field
      const data = await UserModel.find({}).sort({ score: -1 });
      // Send the sorted data as JSON in the response
      res.status(200).json({ data });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "An error occurred while fetching and sorting data." });
    }
  }
  
//19
exports.getAscSort = async (req, res) => {
    try {
      // Fetch and sort data in descending order based on the "score" field
      const data = await UserModel.find({}).sort({ score: 1 });
      // Send the sorted data as JSON in the response
      res.status(200).json({ data });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "An error occurred while fetching and sorting data." });
    }
}

//20
exports.getNameSort = async (req, res) => {
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
}
//21
  exports.getAgeSort = async (req, res) => {
    try {
      const sortAge = await UserModel.find({}).sort({ age: 1});
      res.status(200).json({ data: sortAge });
    } catch (error) {
      console.error(err);
      res
        .status(500)
        .json({ error: "An error occurred while fetching and sorting data." });
    }
  }
