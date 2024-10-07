const express = require("express")
const {connection} = require("./db")
const {userRouter} = require("./routes/user.route")

const app = express()
app.use(express.json())
 
app.use("/users",userRouter)


app.listen(4500,async ()=>{
    try {
        await connection
        console.log("Connected to DB")
    } catch (err) {
        console.log(err.message)
    }
    console.log("App is running on port 4500")
})