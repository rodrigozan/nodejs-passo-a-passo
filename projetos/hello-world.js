//chama o módulo HTTP do node.js e armazena na constante http
const http = require('http')

//declara as constantes hostname e port, adicionando os valores correspondentes a cada uma
const hostname = '127.0.0.1' //endereço padrão do localhost
const port = 3000 //porta em que o servidor será inicializado

//cria o servidor webb
const server = http.createServer((req, res) => { 
    res.statusCode = 200, 
    res.setHeader('Content-Type', 'text-plain') 
    res.end('Hello World\n')
}).listen(port, hostname, () => console.log(`Show! Servidor iniciado em http://${hostname}:${port}/`))