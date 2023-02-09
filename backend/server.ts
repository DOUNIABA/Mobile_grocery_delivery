import express = require('express')
const app = express()
require('./config/db')
const cors = require('cors')
const auth= require('./routes/Auth')


app.use(cors()) 
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/public',express.static('public'))


app.use('/api/auth',auth)


app.listen(8080);

module.exports= app