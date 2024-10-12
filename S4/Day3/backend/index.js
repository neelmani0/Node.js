const express = require("express")
const {connection} = require("./db")
const {userRouter} = require("./routes/user.route")
const {noteRouter} = require("./routes/note.route")
const {auth} = require("./middleware/auth.middleware")
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
  //Authorization
//user router
app.use("/users",userRouter)

//middleware
app.use(auth)

// note Router 
app.use("/notes",noteRouter)

// server running port
app.listen(4500,async ()=>{
    try {
        await connection
        console.log("Connected to DB")
    } catch (err) {
        console.log(err.message)
    }
    console.log("App is running on port 4500")
})