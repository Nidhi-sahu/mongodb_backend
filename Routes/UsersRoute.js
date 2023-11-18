const express = require("express");
const userdata = express.Router();

const{
    getuser,
    partgetuser,
    postuser,
    putuser,
    patchuser
} = require ('../Controller/UsersController')

userdata.get('/getusers',getuser);
userdata.get('/partget/:id',partgetuser)
userdata.post('/postuser',postuser)
userdata.put('/putuser/:_id',putuser)
userdata.patch('/patchuser/:id',patchuser)

module.exports = userdata;
