const express = require('express')
const db = require("./db")

const app = express() 
const port = 3000 

const Users = db.Mongoose.model('users', db.UserSchema, 'users')

app.get('/', async (req, res) => {
    await Users.find({}).lean().exec()
    .then(data => {
        console.log(data)
        res.json({ data })
    })
    .catch(error => {
        console.log(error)
    })
    res.end()
});

app.listen(port, () => console.log(`Aí sim! Servidor à todo vapor na porta ${port}!`))