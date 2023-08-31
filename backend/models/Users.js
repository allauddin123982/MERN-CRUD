//6
//specify the fields for users table

//7
//import mongoose
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    namee: String,
    email: String,
    age: Number

})

//8                    users -> collection name in DB
const UserModel = mongoose.model("users",UserSchema)

//9
module.exports = UserModel
//imprt it inside index.js(backend)