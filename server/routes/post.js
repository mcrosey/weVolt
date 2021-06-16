const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLogin = require('../middleware/requireLogin')
const Post = mongoose.model("Post")

router.get('/alllistings', requireLogin,(req, res)=>{
    Post.find()
    .populate("postedBy" ,"_id name")
    .populate("review.postedBy","_id name")
    .then((posts)=>{
        res.json({posts})
    }).catch(err=>{
        console.log(err)
    })

})


router.post('/createlisting', requireLogin, (req, res)=>{
    const {address, description, price, pic} = req.body

    if(!address || !description || !price || !pic){
        return  res.status(422).json({error:"Plase add all the fields"})
      }
      req.user.password = undefined
      const post = new Post({
          address,
          description,
          price,
          photo: pic,
          postedBy:req.user
          
      })
      console.log(post)
      post.save().then(result=>{
          res.json({post:result})
      })
      .catch(err=>{
          console.log(err)
      })
  })


router.get('/mylisting', requireLogin, (req, res)=>{
    Post.find({postedBy:req.user._id})
    .populate("PostedBy", "_id name")
    .then(mypost=>{
        res.json({mypost})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.put('/heart',requireLogin,(req,res)=>{
    Post.findByIdAndUpdate(req.body.postId,{
        $push:{heart:req.user._id}
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
const comment = {
    text:req.body.text,
    postedBy:req.user._id
    }
    Post.findByIdAndUpdate(req.body.postId,{
        $push:{review:review}
    },{
        new:true
    })
    .populate("review.postedBy", "_id name")
    .populate("postedBy", "_id name")
    .exec((err, result)=>{
        if(err){
        return res.status(422).json({error:err})
        }else{
        res.json(result)
        }
    })
})

router.delete('/deletelisting/:postId',requireLogin,(req,res)=>{
    Post.findOne({_id:req.params.postId})
    .populate("postedBy","_id")
    .exec((err,post)=>{
        if(err || !post){
            return res.status(422).json({error:err})
        }
        if(post.postedBy._id.toString() === req.user._id.toString()){
              post.remove()
              .then(result=>{
                  res.json(result)
              }).catch(err=>{
                  console.log(err)
              })
        }
    })
})


module.exports = router