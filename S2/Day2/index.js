const express = require("express")

const app = express()

// //middleware will run before every rout
app.use((req,res,next)=>{
    console.log("Hello from middleware")
    next() //=> it is going to take your compiler to the next thing in the line to be execcuted
console.log("Bye from middleware")
})

app.use((req,res,next)=>{
    console.log("Hello from middleware")
    next() //=> it is going to take your compiler to the next thing in the line to be execcuted
console.log("Bye from middleware")
})

// const timeLoger= (req,res,next)=>{
//     const startTime = new Date().getTime()
//     next()
//     const endTime = new Date().getTime()
//     console.log(`Time taken to execute the request is ${endTime - startTime} ms`)
// }

// app.use(timeLoger)

app.get("/",(req,res)=>{
    console.log("Hello from HOME ")
    res.send("HOME PAGE")
})
app.get("/about", (req, res)=>{
    console.log("Hello from About")
    res.send("ABOUT PAGE")
})

// app.use((req,res,next)=>{
//     console.log("Hello from middleware")
//     next() //=> it is going to take your compiler to the next thing in the line to be execcuted
// console.log("Bye from middleware")
// })

app.get("/contact",(req, res)=>{
    console.log("Hello from Contact")
    res.send("CONTECT PAGE")
})
app.get("/data",(req, res)=>{
    console.log("Hello from Data")
    res.send("DATA PAGE")
})




app.listen(4300, ()=>{
    console.log("Server is running on port 4300 ")
})