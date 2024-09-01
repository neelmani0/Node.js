const fs = require("fs");
// fs.writeFile("./fs.txt", "Hello Gyes, this is Neelmani", (err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Data is writen in file")
//     }
// })
console.log("Nellmani")

try{
fs.writeFileSync("./fs.txt","This is the second line")
}
catch(err){
    console.log(err.message)
}