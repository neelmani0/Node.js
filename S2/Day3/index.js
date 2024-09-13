const express = require("express")
const fs = require("fs")

const app = express()


// query hanaling
app.get("/search",(req,res)=>{
   // console.log(req.query)
    // if(req.query.movie){
    //     res.send({"movie":`${req.query.movie}`,"msg":"This is the movies that you have searched"})
    // }else{
    //     res.send("No movie data found")
    // }
   const {movie} = req.query
//    console.log(movie)
//    res.send("Check the terminal")
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))
    let response = data.movies.filter((ele)=>{
        return ele.name === movie
    })
    if(response.length>0){
        res.json({"msg":"This is the request Data",data:response[0]})
    }else{
        res.send("No such movies found in db")
    }
}) 

//params handling

app.get("/search/:id",(req,res)=>{
    // console.log(req.params)
    // res.send("New APIs")
    const {id} = req.params
    const data = JSON.parse(fs.readFileSync("./db.json","utf-8"))
    const response = data.movies.filter((ele)=>{
        return ele.id === +id
    })
    if(response.length>0){
        res.json({"msg":"This is the movie you searche for", data:response})
    }else{
        res.send("No movie data in db")
    }
})

app.listen(3300,()=>{
    console.log("App is running on port 2000")
}) 