const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type: String,
        required: true
    },

    email:{
        type:String,
        required:true
    },
    userName:{
        type: String,
        required: true,
    },
    password:{
        type:String,
        required:true
    }
})

mongoose.model("User",userSchema)