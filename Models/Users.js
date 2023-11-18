const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    age: Number
})

const users = mongoose.model('users', UserSchema)

module.exports = users