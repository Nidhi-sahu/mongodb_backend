const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
const UserModel = require('./Models/Users')
const userdata = require('./Routes/UsersRoute')
require('dotenv').config();


// mongoose.connect("mongodb://127.0.0.1:27017/tnplab")


// app.use('/',userdata);
// app.listen(3000, () =>{
//     console.log("on port 3000")
// })

;


mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to the database'))
    .catch((err) => console.error('Failed to connect to the database:', err));


app.use('/', userdata);


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});