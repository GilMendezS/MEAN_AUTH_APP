const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')
const mongoose = require('mongoose')

const app = express()
const users = require('./routes/users')
//port number
const port = 3000
//Cors Middleware
app.use(cors())
//set static folder
app.use(express.static(path.join(__dirname, 'public')))
//Body Parser Middleware
app.use(bodyParser.json())

app.use('/users', users)
//Index route
app.get('/', (req, res) => {
    res.send('Invalid endpoint')
})
//Start server 
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})