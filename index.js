const express = require('express')
const mongoose = require('mongoose')
const { Piada } = require('./models/piadas')
const route = require('./routes/piadas')
const cors = require('cors')
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors('*'))
app.use(route)
app


const connect_uri = 'mongodb+srv://alexfreitas:mamf1983@cluster0.wo2yfyj.mongodb.net/lol?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(connect_uri).then(()=>console.log("Conectou"))


app.listen(3000,()=>console.log("App rodando em http://localhost:3000"))
