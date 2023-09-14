const EmployeeModel = require("../models/Employees");


exports.create = async (req, res) => {
  const { email } = req.body;
  try {
    const match = await EmployeeModel.findOne({ email });
    if (match) {
      console.log("Email already in use");
      return res.status(400).json({ error: "Email already in use" });
    } else {
      const newUser = await EmployeeModel.create(req.body);
      return res.json(newUser);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
