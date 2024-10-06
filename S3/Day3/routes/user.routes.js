const express = require("express")
const userRouter = express.Router()
const {userModel} = require("../model/user.model")

// Create
userRouter.post("/add",async (req,res)=>{
    const payload=req.body
    try {
        const user = new userModel(payload)
        await user.save()
        res.status(200).send({"msg":"New user has been updated"})
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }  
}) 

//Read
userRouter.get("/",async (req,res)=>{
    const query = req.query
    console.log(query)
    try {
        const user = await userModel.find(query)
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
})
 //Update
 userRouter.patch("/update/:userId",async (req,res)=>{
    const {userId}=req.params
    const payload = req.body
    try{
        await userModel.findByIdAndUpdate({_id:userId},payload)
        res.status(200).send({"msg":"New user has been updated"})
    } catch(err){
        res.status(400).send({"msg":err.message})
    }
 })
// Delete
userRouter.delete("/delete/:userId",async (req,res)=>{
    const {userId} = req.params
    try{
      await userModel.findByIdAndDelete({_id:userId})
      res.status(200).send({"msg":"User has been deleted"})
    } catch(err){
        res.status(400).send({"msg":err.message})
    }
})

module.exports = {
    userRouter
}