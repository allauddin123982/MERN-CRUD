//1
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//2
const app = express();
const port = process.env.PORT || 9000; // Use environment variable for the port

app.use(cors()); // middleware that allows Cross origin resource sharing to allow reqst from diff origins
app.use(express.json()); // parse the frontend data into json format

//4
//connection with MongoDb Database
mongoose
  .connect("mongodb://127.0.0.1:27017/crud")
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("Error occured while starting db", err);
  });
  
// Import and use your routes here
const appRouter = require("./routes/AppRoutes"); // Adjust the path as needed
const empRouter = require("./routes/EmployeeRoutes"); // Adjust the path as needed
app.use("/app", appRouter); // Use the router with the "/app" prefix
app.use("/employee", empRouter); // Use the router with the "/app" prefix





//5
//create a Model for users in new Folder(models)-> File(Users.js)



// 3
// app.listen(9000, () => {
//   console.log("server is running...");
// });



