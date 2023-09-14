const express = require("express");
const router = express.Router();
const endPointUsersController = require("../controllers/EndPointUsers");

// Create a new User
router.post("/CreateUser", endPointUsersController.create);

// Retrieve all Users
router.get("/", endPointUsersController.findAll);

// getTrue
router.get("/getTrue", endPointUsersController.getTrue);

// getFalse
router.get("/getFalse", endPointUsersController.getFalse);

// DesSort
router.get("/getDesSort", endPointUsersController.getDesSort);

// AscSort
router.get("/getAscSort", endPointUsersController.getAscSort);

// getNameSort
router.get("/getNameSort", endPointUsersController.getNameSort);

// getAgeSort
router.get("/getAgeSort", endPointUsersController.getAgeSort);

// Retrieve a single User with id
router.get("/:id", endPointUsersController.findOne);

// Update a User with id
router.put("/:id", endPointUsersController.update);

// Delete a User with id
router.delete("/:id", endPointUsersController.delete);


module.exports = router; // Export the router
