const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 6000
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

// const {MongoClient} = require('mongodb');

// async function main(){

//     const client = new MongoClient(mongoURI);
// try{
//     await client.connect();

//     await listDatabases(client);

// }catch (e) {
//     console.log(e);
// }finally {
//     await client.close();
// }
// }
// main().catch(console.error);

// async function listDatabases(client){
//     databasesList = await client.db().admin().listDataBases();

//     console.log("Databases:");
//     databasesList.databases.foreach(db => console.log(` - ${db.name}`));
// };

require('./models/user')
require('./models/post')


app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))
app.use(require('./routes/user'))



app.get('/', (req, res)=>{
    res.send("hello world")
})

app.listen(PORT, ()=>{
    console.log('server is running on' , PORT)
})
