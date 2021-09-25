const mongoose = require('../../database/db')

const userSchema  = new mongoose.Schema({  
    name: String,
    username: String,
    email: String,
    idade: Number,
},{ timestamps: true },{collection: 'users'})

module.exports = { Mongoose: mongoose, UserSchema: userSchema }