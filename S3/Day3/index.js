const { default: mongoose } = require("mongoose")
const {connection} = require("./db.js")
const express = require("express")
require("dotenv").config()
const {userRouter}=require("./routes/user.routes.js")


const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
     res.send("HOME PAGE")
})
 
app.use("/users",userRouter)

app.listen(process.env.port,async ()=>{
     try {
        await connection
    console.log("Connected to mongo")
     } catch (error) {
        console.log("Something went wrong check the connection")
        console.log(error.message)
     }
    
    console.log(`server is running on port no ${process.env.port}`)
})