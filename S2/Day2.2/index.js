const express = require("express")
const cors =require("cors")
const {logger} = require ("./middlewares/logger.middleware")
const {studentRouter} = require("./routs/student.routes")
const {teacherRouter} = require("./routs/teacher.routes")

const app = express()

//middlewares
app.use(logger)
app.use(express.json())
app.use(cors())
app.use("/students",studentRouter)
app.use("/teachers",teacherRouter)

 
//running the server
app.listen(4300,()=>{
    console.log("server is running on port 4300")
})