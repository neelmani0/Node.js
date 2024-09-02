const http = require("http")
const fs =require("fs")

const server = http.createServer((req,res)=>{
    if(req.url==="/"){
        res.setHeader("Content-type","text/html")
         res.end("<h1>Home Page</h1>")
    }else if(req.url==="/user"){
        res.end("User Page")
    }else if(req.url==="/data"){
        fs.readFile("./data.json","utf-8",(err,data)=>{
            if(err){
                res.end(err)
            }else{
                res.setHeader("Content-type","application/json")
                res.write("These are the followind data you have requested\n")
                res.end(data)
            }
        }) 
    }else if(req.url==="/blog"){
        res.write("Data1")
        res.write("Data2")
        res.write("Data 3")
        res.end
    }else if(req.url==="/add"){
      const user= {
        name:"Neel",
        age:25,
        gender:"Male"
      }
      let data = JSON.parse(fs.readFileSync("./data.json","utf-8"))
      data.push(user)
      fs.writeFileSync("./data.json",JSON.stringify(data))
      res.end("Data is pushed and updated")
    }else{
        res.end("404 Not Found !!")
    }
})

server.listen(4500, ()=>{
    console.log("server runing on port 4500")
})