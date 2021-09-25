const express = require('express')
const path = require('path')

const app = express()

const index = require('./app/routes/users')

app.set('views', path.join(__dirname, 'app/views'))
app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(index)

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Ok, app running in port ${port} 🔥`))