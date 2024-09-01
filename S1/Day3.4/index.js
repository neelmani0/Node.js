const fs = require("fs")

fs.appendFile("./fs.txt", "\n\tNeelmani this side.", (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Text added Sussafelly");
    }
})
 try{
    fs.appendFileSync("./fs.txt", "Hello Everyone.")
 }
 catch(err){
    console.log(err.message)
 }