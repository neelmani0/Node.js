const express = require("express")
const userRouter = express.Router()
const {userModel} = require("../model/user.model")
const jwt = require('jsonwebtoken');

userRouter.post("/register",async (req,res)=>{
    try {
        const user =new userModel(req.body)
         await user.save()
        res.status(200).send({"msg":"Registaatio Done"})
    } catch (err) {
      res.status(400).send({"msg":err.message})
    }  
})

// Login
userRouter.post("/login",async (req,res)=>{
    const {email,pas} = req.body
    try {
        //const user = await userModel.find({email:email,pas:pas})
        const user = await userModel.find({email,pas})
        user.length>0? res.status(200).send({"msg":"LogedIn","token" : jwt.sign({ name: 'batman' }, 'bruce')}) :
       res.status(400).send({"msg":"No User found"})

        // if(user.length>0){
        //     console.log(user)
        //     res.status(200).send({"msg":"LogedIn",user})
        // }else{
        //     res.status(400).send({"msg":"No User found"})
        // }
        
    } catch (err) {
        console.log(err.message)
    }  
})
 userRouter.get("/details",(req,res)=>{
    const {token}=req.query
    jwt.verify(token,'bruce',(err,decoded)=>{
        decoded?res.status(200).send("User Details") : res.status(400).send({"mag":"Login require, cannot CCESS THE RESTRICTED ROUTS"})
    });
 })

 userRouter.get("/moviedata",(req,res)=>{
    //const {token}=req.query
    const token = req.headers.authorization
    jwt.verify(token,'bruce',(err,decoded)=>{
        decoded?res.status(200).send("Movie") : res.status(400).send({"mag":"Login require, cannot CCESS THE RESTRICTED ROUTS"})
    });
 })


module.exports={
    userRouter
}