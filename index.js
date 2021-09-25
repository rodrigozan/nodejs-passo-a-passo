const express = require('express')
const db = require("./db")

const app = express() 
app.use(express.json())
app.use(express.urlencoded({extended: true}))

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
})

app.post('/add', async (req, res) => {
    let name = req.body.name
    let username = req.body.username
    let email = req.body.email
    let idade = req.body.idade
    let user = new Users({ name, username, email, idade })

    await user.save()
    .then(data => {
        console.log(`Usuário salvo na base: ${data}`)
        res.redirect('/')
    })
    .catch(error => {
        console.log(`Erro ao salvar o usuário: ${error}`)
    })
    res.end()
})

app.post('/update/:id', async (req, res) => {
    if (!req.body) {
        return res.status(400).json({
          message: "Para atualizar os dados, a requisição não pode estar vazia"
        });
    }
    let filter = req.params.id 

    const update = { 
        $set: {
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            username: req.body.username,
            idade: req.body.idade,
        } 
    }

    await Users.findByIdAndUpdate(filter, update)
    .then(data => {
        console.log(`Usuário atualizado na base: ${data}`)
        res.redirect('/')
    })
    .catch(error => {
        console.log(`Erro ao atualizar o usuário: ${error}`)
    })
    res.end()
})

app.post('/delete/:id', async (req, res) => {
    let id = req.params.id
    await Users.findByIdAndRemove(id).exec()
    .then(data => {
        console.log(`Usuário deletado na base: ${data}`)
        res.redirect('/')
    })
    .catch(error => {
        console.log(`Erro ao deletar o usuário: ${error}`)
    })
    res.end()
})

const port = 3000 

app.listen(port, () => console.log(`Aí sim! Servidor à todo vapor na porta ${port}!`))