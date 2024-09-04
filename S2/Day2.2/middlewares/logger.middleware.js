const fs = require("fs")
const logger = (req,res,next)=>{
    
    fs.appendFileSync("./log.txt",`Clint visited ${req.url} and the method was ${req.method} at ${Date()}\n`)
    next()  
}

module.exports = {
    logger
}