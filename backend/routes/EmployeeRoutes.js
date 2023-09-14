const express = require("express")
const router = express.Router()
const employeeEndPoint = require('../controllers/EndPointEmployees')


// Create a new Employee
router.post("/CreateEmployee", employeeEndPoint.create);


module.exports = router; // Export the router