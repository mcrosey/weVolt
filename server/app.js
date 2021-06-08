const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 5000
const {mongoURI} =require('./keys')




mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', ()=>{
    console.log("connected to mongo")
})

mongoose.connection.on('error', (err)=>{
    console.log("error connecting", err)
}) 

app.get('/', (req, res)=>{
    res.send("hello world")
})

app.listen(PORT, ()=>{
    console.log('server is running on' , PORT)
})
