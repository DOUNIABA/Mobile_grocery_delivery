const User = require('../models/user')
import {Request,Response} from 'express'
require('dotenv')
const localstorage=require('local-storage')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')

const signin=  async (req:Request,res:Response)=>{
    
    const {email,password}=req.body

    const user = await User.findOne({email})
    if(!user) res.json({msg:'user not found'})
    
    const token= await jwt.sign({user},process.env.SECRET)
    if(!token) res.json({msg:'token not valida'})
    
    localstorage('token',token)
    const tokenverif=await jwt.verify(localstorage('token'),process.env.SECRET) 
    if(!tokenverif) res.json({msg:"token not valid"})
    res.json({token:token,name:user.name})
} 

const signup=  async (req:Request,res:Response)=>{
    const {body}=req

    localstorage('email',body.email)
    const user= await User.findOne({email:body.email})
    if(user) res.json('user exist already')
    const salt = await bcrypt.genSalt(10);
    const pass= await bcrypt.hash(body.password,salt)
    body.password=pass
    const creat= await User.create({...body})
    if(!creat) res.json('user not created')
    res.json({msg:"created",
        data:creat
    })

}
const Logout = async (req:Request, res:Response) => {
    localstorage.clear();
    res.send("Logout");
  };



module.exports={signin,signup,Logout}
