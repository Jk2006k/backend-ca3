const mongoose =require('mongoose')

const userSchema=new mongoose.Schema({
    email:{
        required:true,
        type:String
    },
    password:{
        type:String,
        required:true,
        
    }
})

module.exports= mongoose.model('User',userSchema);

