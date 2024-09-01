const fs = require("fs")

fs.readFile("./fs.txt",{encoding:"utf-8"}, (err, data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})
let data 

try{
    data =fs.readFileSync("./fs.txt", "utf-8")
}catch(err){
 console.log(err.massage)
}
console.log(data)
console.log("Bye Gyes")