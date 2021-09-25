const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/teste')
.then(data => console.log(`Conexão com banco de dados realizada com sucesso`))
.catch(error => console.log(`Não foi possível conectar ao banco de dados`))

module.exports = mongoose