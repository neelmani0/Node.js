const express = require("express")
 
const teacherRouter = express.Router()

teacherRouter.get("/", (req,res)=>{
    res.send({"msg" : "Teacher data"})
})

module.exports = {
    teacherRouter
}