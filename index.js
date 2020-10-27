const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')

const app = express()

//Handlebars Middleware
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

//Body Parser Middleware
app.use(express.json()) //allows raw json handling
app.use(express.urlencoded({
    extended: false
}))



//Set a static folder
app.use(express.static(path.join(__dirname, '/public')))

const router = require('./router') //pulls in and runs router.js 

app.use('/', router)
//this tells express that for home directory, use router.js which contains get request and html function.

// set port to either environment variable or to 5000
const PORT = process.env.PORT || 5000

//Listen on PORT runs function on request from PORT
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))