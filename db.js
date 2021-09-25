const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/teste')

const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    idade: Number
}, { collection: 'users' }
);

module.exports = { Mongoose: mongoose, UserSchema: userSchema }