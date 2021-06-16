const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const postSchema = new mongoose.Schema({
    address:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required:true
    },
    price:{
        type: String,
        required: true
    
    },
    photo:{
        type: String,
        required:true
    },
    heart:[{type:ObjectId, ref:"User"}],
    reviews:[{
        text:String,
        postedBy:{type:ObjectId, ref:"User"}
    }],
    postedBy:{
        type:ObjectId,
        ref:"User"
    }
})
mongoose.model("Post", postSchema)