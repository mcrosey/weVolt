const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')
const requireLogin = require('../middleware/requireLogin')


router.post('/signup', (req, res) =>{
    const {firstName, lastName, phoneNumber, email, userName, password} = req.body
    if(!firstName || !lastName || !phoneNumber || !email || !userName || !password ){
        res.status(422).json({error: "please add all the required feilds"})
    }
    User.findOne({email:email})
    .then((savedUser)=>{
        if(savedUser){
            res.status(422).json({error: "user already exists with this email"})
        }
        bcrypt.hash(password, 12)
        .then(hashedpassword=>{
            const user = new User({
                firstName,
                lastName,
                phoneNumber,
                email,
                userName,
                password: hashedpassword,
            })
            user.save()
            .then(user=>{
                res.json({message: "saved successfully"})
            })
            .catch(err=>{
                console.log(err)
            })
        })
    })
    .catch(err=>{
        console.log(err)
    })
})


router.post('/signin', (req, res)=>{
    const {userName, password} = req.body
    if(!userName || !password){
       return res.status(422).json({error:"please add User Name or password"})
    }
    User.findOne({userName:userName})
    .then(savedUser=>{
        if(!savedUser){
           return res.status(422).json({error:"Invalid User Name or password"})
        }
        bcrypt.compare(password, savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                const token = jwt.sign({_id:savedUser._id}, JWT_SECRET)
                const {_id, userName, email} = savedUser
                res.json({token, user:{_id, userName, email}})
            }
            else{
                return res.status(422).json({error:"Invalid userName or password"})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
})


module.exports = router 