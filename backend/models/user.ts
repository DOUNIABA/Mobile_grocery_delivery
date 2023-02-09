import mongoose from "mongoose"
const Userschema= new mongoose.Schema({
    username:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
 
    password:{
        type:String,
       
    },
    
})
 const User= mongoose.model('user',Userschema)
 module.exports= User
