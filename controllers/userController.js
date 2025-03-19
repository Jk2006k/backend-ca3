const User=require('../models/userModel')

const newUser=async()=>{
    try{
        const {email,password}=req.body
        const user=await User.findOne({email});
        if(user==''){
            res.status(400).json({message:"Email cannot be empty"})
        }
        await newUser.save();
        res.status(200).json({message:"New user created successfully"})
    }catch(error){
        res.status(404).json({message:"error in creating the user", error})
    }

}

module.exports=newUser