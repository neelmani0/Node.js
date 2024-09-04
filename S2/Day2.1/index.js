const express = require("express")
const fs = require("fs")
const cors = require("cors")

const app = express()

app.use((req,res,next)=>{
    console.log("middleware 1")
    fs.appendFileSync("./log.txt",`Clint visited ${req.url} and the method was ${req.method} at ${Date()}\n`)
    next()
    console.log("8")
})

app.use(cors)
// app.use((req,res,next)=>{
//     console.log("middleware 2")
//     next()
//     console.log("9")
// })

app.get("/",(req,res)=>{
    console.log("3")
    res.send("Home Page")
})

app.get("/about", (req, res)=>{
    console.log("4")
    res.send("About Page")
})

app.get("/contact", (req,res)=>{
    console.log("5")
    res.send("Contact Page")
})

app.get("data",(req,res)=>{
    console.log("6")
    res.send("Data Page")
})

app.listen(4500, ()=>{
    console.log("Server is running on port 4500")
})