const mongoose = require('mongoose')
const geocoder = require('../middleware/geocoder')

const {ObjectId} = mongoose.Schema.Types
const postSchema = new mongoose.Schema({
    address:{
        type: String,
        required: true
    },
    location:{
        type:{
            type: String,
            enum: ['Point']
        },
        coordinates:{
            type: [Number],
            index: '2dsphere'
        },
        formattedAddress: String
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
    contact:{
        type: String,
        required: true
    },
    happyface:[{type:ObjectId, ref:"User"}],
    sadface:[{type:ObjectId, ref:"User"}],
    reviews:[{
        text:String,
        postedBy:{type:ObjectId, ref:"User"}
    }],
    postedBy:{
        type:ObjectId,
        ref:"User"
    },
});

postSchema.pre('save', async function(next) {
    const loc =await geocoder.geocode(this.address);
    this.location = {
        type: 'Point',
        coordinates: [loc[0].longitude, loc[0].latitude],
        formattedAddress: loc[0].formattedAddress
    }

});

mongoose.model("Post", postSchema)