const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 6000
const {mongoURI} =require('./keys')
const cors =require ('cors');
const twilio =require ('twilio');
const accountSid = '';
const authToken = '';
const client = require ('twilio') (accountSid, authToken);
//must enter authtoken and account sid for proper functionality 

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


require('./models/user')
require('./models/post')


app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))
app.use(require('./routes/user'))
app.use(cors());


app.get('/', (req, res)=>{
    res.send("hello world")
})

app.get('/sendtext', (req, res)=>{
    res.send('Hello to the twilio server')
    const { recipient, textmessage } = req.query;
    client.messages
    .create({
        body: textmessage,
        to: recipient,
        from: '+13237468398'
    }).then((message)=> console.log(message.body));
})


app.listen(PORT, ()=>{
    console.log('server is running on' , PORT)
})
