const jwt = require("jsonwebtoken")

// const auth = (req,res,next)=>{
//     const token = req.headers.authorization
//     if(token){
//         const decoded=jwt.verify(token,"bruce")
//         if(decoded){
//             req.body.userID=decoded.userID
//             next()
//         }else{
//             res.status(400).send({"msg":"Please Login First"})
//         }
//     } else{
//         res.status(400).send({"msg":"Please Login First"})
//     }
// }

const auth = (req,res,next)=>{
const token=req.headers?.authorization?.split(" ")[1] 
if(token){ 
const decoded=jwt.verify(token,"bruce") 
if(decoded){ 
    req.body.userID=decoded.userID
next() 
} else { 
res.send("Please Login") 
} 
} else { 
res.send("Please Login")  
} 
} 


module.exports = {
    auth
} 