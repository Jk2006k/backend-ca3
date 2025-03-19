const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config()

const app=express()
const User=require('./models/userModel')

app.use(express.json())

mongoose.connect(process.env.MONGOURL)
.then(()=>console.log("Database connected successfully"))
.catch(err=>console.log(err))

app.post('./signup',async()=>{
    try{
        const {email,password}=req.body
        const newUser =new User({email,password})
        await newUser.save()
        return res.status(201).json({msg:"user created",user:newUser})
    }catch(error){
        return res.status(500).json({msg:"error in creating user",desc:error.message})
    }
})

app.put('/reset',async(req,res)=>{
    try{
        const {email,password}=req.body
        if(password.length<8 || password.length>16){
            return res.status(400).send("parrword lenght greater than 8 and less than 16")
        }
        const user = await User.find({email})
        user.password=password
        await user.save()
    }catch(error){
        return res.status(500).json({msg:"error in creating user",desc:error.message})
    }
})

app.listen(3000,()=>{
    console.log("server is running")
})