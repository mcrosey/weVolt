const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLogin = require('../middleware/requireLogin')
const geocoder = require('../middleware/geocoder')
// const accountSid = 'ACaffb76c56918b16443c279305e84b466';
// const authToken = 'e6e3816577851033ffc54bf1875608f6';
// const twilio = require('twilio')
// const client =  new twilio(
//     accountSid,
//     authToken
//   );

const Post = mongoose.model("Post")

router.get('/alllistings', (req, res)=>{
    Post.find()
    .populate("postedBy" ,"_id userName")
    .populate("review.postedBy","_id userName")
    .populate("Contact", "_id contact" )
    .then((posts)=>{
        res.json({posts})
    }).catch(err=>{
        console.log(err)
    })

})


router.post('/createlisting', requireLogin, (req, res)=>{
    const {address, description, price, contact, pic} = req.body

    if(!address || !description || !price || !contact || !pic){
        return  res.status(422).json({error:"Plase add all the fields"})
      }
      req.user.password = undefined
      const post = new Post({
          address,
          description,
          price,
          contact,
          photo: pic,
          postedBy:req.user
          
      })
      post.save(geocoder).then(result=>{
          res.json({post:result})
      })
      .catch(err=>{
          console.log(err)
      })
  })


router.get('/mylisting', requireLogin, (req, res)=>{
    Post.find({postedBy:req.user._id})
    .populate("PostedBy", "_id userName")
    .populate("Contact", "_id phoneNumber")
    .then(mypost=>{
        res.json({mypost})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.put('/happyface',requireLogin,(req,res)=>{
    Post.findByIdAndUpdate(req.body.postId,{
        $push:{happyface:req.user._id}
    },{
        new:true
    }).exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})

router.put('/sadface',requireLogin,(req,res)=>{
    Post.findByIdAndUpdate(req.body.postId,{
        $push:{sadface:req.user._id}
    },{
        new:true
    }).exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})

router.put('/review', requireLogin, (req, res)=>{
const review = {
    text:req.body.text,
    postedBy:req.user._id
    }
    Post.findByIdAndUpdate(req.body.postId,{
        $push:{reviews:review}
    },{
        new:true
    })
    .populate("reviews.postedBy", "_id userName")
    .exec((err, result)=>{
        if(err){
        return res.status(422).json({error:err})
        }else{
        res.json(result)
        }
    })
})


module.exports = router