//chama o módulo express e o adiciona na constante express
const express = require('express')

//declara as constantes app e port, adicionando os valores correspondentes a cada uma
const app = express() // adiciona uma instância do Express à constante app
const port = 3000 //porta em que o servidor será inicializado

//cria o servidor web
app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => console.log(`Aí sim! Servidor à todo vapor na porta ${port}!`))