const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
const UserModel = require('./Models/Users')
const userdata = require('./Routes/UsersRoute')

mongoose.connect("mongodb://127.0.0.1:27017/tnplab")

app.use('/',userdata);
app.listen(3000, () =>{
    console.log("on port 3000")
})
