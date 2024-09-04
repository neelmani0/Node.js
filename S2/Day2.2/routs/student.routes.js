const express = require("express")

const studentRouter = express.Router()

studentRouter.get("/",(req,res)=>{
    res.send({"msg":"All students data"})
})

studentRouter.get("/addstudent",(req,res)=>{
    res.send("Adding a new student")
})

module.exports={
   studentRouter
}