const db = require('../models/users')
const Users = db.Mongoose.model('users', db.UserSchema, 'users')

module.exports.get = (async (req, res) => {
    await Users.find({}).lean().exec()
    .then(data => {
        res.status(200).json({data})
        console.log(data)
    })
    .catch(error => {
        console.error(error)
    })
    res.end()
})

module.exports.getOne = (async (req, res) => {
    let id = req.params.id
    await Users.findOne({_id: id}).lean().exec()
    .then(data => {
        res.status(200).json({data})
        console.log(data)
    })
    .catch(error => {
        console.error(error)
    })
    res.end()
})

module.exports.post = (async (req, res) => {
    let user = new Users ({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        idade: req.body.idade,
    })
    await user.save()
    .then(data => {  
        res.status(201).json({message: `Usuário cadastrado com sucesso`})
        console.log(data)
    })
    .catch(error => {
        console.error(error) 
    })
    res.end()
})

module.exports.update = (async (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Para atualizar o usuário, a requisição não pode estar vazia"
        });
    }
    let filter = req.params.id 
    let update = {
        $set: {
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            idade: req.body.idade
        }
    }
    await Users.findByIdAndUpdate(filter, update) 
    .then(data => {  
        res.status(201).json({message: `Usuário atualizado com sucesso:${data}`})
        console.log(data)
    })
    .catch(error => {
        console.error(error)  
    })
    res.end()
})

module.exports.delete = (async (req, res) => {
    let id = req.params.id
    await Users.findByIdAndRemove(id).exec()
    .then(data => {
        res.status(200).json({message: `Usuário deletado com sucesso: ${data}`})
        console.log(data)
    })
    .catch(error => {
        console.error(error)
    })
    res.end()
})