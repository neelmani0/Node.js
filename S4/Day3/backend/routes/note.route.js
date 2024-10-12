const express = require("express")
const noteRouter = express.Router()
const {NoteModel}=require("../model/note.model")
const jwt = require("jsonwebtoken")

noteRouter.get("/",async (req,res)=>{
   const token = req.headers.authorization.split(" ")[1];
   const decoded = jwt.verify(token,"bruce")
 try {
   if(decoded){
      const note = await NoteModel.find({"userID":decoded.userID})
      res.status(200).send(note)
   }
    
 } catch (err) {
    res.status(400).send({"msg":err.message})
 }
})

noteRouter.post("/add",async (req,res)=>{
    try {
        const note = new NoteModel(req.body)
       await note.save()
       res.status(200).send({"msg":"New Note is been added"})
    } catch (err) {
        res.status(400).send({"msg":err.message})
    }
   
})

noteRouter.patch("/update/:noteId",async(req,res)=>{
//logic
const payload = req.body
const noteID=req.params.noteID
try {
   await  NoteModel.findByIdAndUpdate({_id:noteID},payload)
   res.status(200).send({"msg":"Notes has been updated"})

} catch (err) {
   res.status(400).send({"msg":err.message}) 
}
})

noteRouter.delete("/delete/:noteID",async(req,res)=>{
//logic
     const token = req.headers.authorization.split(" ")[1]
     const decoded = jwt.verify(token,"bruce")
     const req_id = decoded.userID
     const note = NoteModel.findOne({_id:noteID})
     const userID_in_note = note.userID
     //const payload = req.body
     const noteID = req.params.noteID

     try {
      if(req_id===userID_in_note){
         await NoteModel.findByIdAndDelete({_id:noteID})
        res.status(200).send({"msg":"Notes has been Deleted"})
      }else{
         res.status(400).send({"msg":"Not Authorised"})
      }
     } catch (err) {
        res.status(400).send({"msg":err.message}) 

     }
 })

 
module.exports = {
    noteRouter
}


