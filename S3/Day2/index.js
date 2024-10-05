const { default: mongoose } = require("mongoose")
const {connection,userModel} = require("./db.js")
const express = require("express")


const app = express()
app.use(exprees.json())

app.get("/",(reqs,res)=>{
     res.send("HOME PAGE")
})
 
// Create
app.post("/adduser",async (req,res)=>{
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
app.get("/users",async (req,res)=>{
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
 app.patch("/updateuser/:userId",async (req,res)=>{
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
app.delete("/deleteuser/:userId",async (req,res)=>{
    const {userId} = req.params
    try{
      await userModel.findByIdAndDelete({_id:userId})
      res.status(200).send({"msg":"User has been deleted"})
    } catch(err){
        res.status(400).send({"msg":err.message})
    }
})
app.listen(8080,async ()=>{
     try {
        await connection
    console.log("Connected to mongo")
     } catch (error) {
        console.log("Something went wrong check the connection")
        console.log(error.message)
     }
    
    console.log("server is running on port no 8080")
})