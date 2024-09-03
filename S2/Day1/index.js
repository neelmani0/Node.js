const express = require("express")
const fs = require("fs")

const app = express()
app.use(express.json())  //middlewares

app.get("/",(req,res)=>{
    res.end("Home Page")
})

// app.get("/report",(req,res)=>{
//     res.send("Report Page")
// })

// app.post("/add",(req,res)=>{
//      console.log(req.body)
//      res.send("Data Sent")
// })

 app.get("/students",(req, res)=>{
     const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))
     res.send(data.students)
 })

 app.post("/addteachers",(req,res)=>{
    const data = JSON.parse(fs.readFileSync("./db.json","utf-8"))
    data.teachers.push(req.body)
    fs.writeFileSync("./db.json",JSON.stringify(data))
    res.send("Teacher added")
 })
 app.patch("/updatestudents",(req,res)=>{
    const data = JSON.parse(fs.readFileSync("./db.json","utf-8"))
    for(let i=0; i<=data.students.length-1; i++){
        if(data.students[i].name==="Neelmani"){
            data.students[i].age=req.body.age
        }
        fs.writeFileSync("./db.json",JSON.stringify(data))
        res.send("Student updated");
    }
 })
 app.delete("/delstudents",(req,res)=>{
    const data = JSON.parse(fs.readFileSync("./db.json","utf-8"))
    const new_data = data.students.filter((ele)=>{
        return ele.name !== "Neelmani"
    })  
    data.students = new_data
    fs.writeFileSync("./db.json",JSON.stringify(data))
    res.send("Student deleted")
 })
 app.get("/movies",(req,res)=>{
    const movies_chunk = fs.createReadStream("./data.txt","utf-8")
    movies_chunk.pipe(res)
 })

app.listen(8080,()=>{
    console.log("App runing on port 80880")
})