const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    namee: String,
    email: String,
    salary: Number
})

//8                               employees -> collection name in DB
const EmployeeModel = mongoose.model("employees", EmployeeSchema)

//9
module.exports = EmployeeModel