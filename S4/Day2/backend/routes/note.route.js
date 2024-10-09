const express = require("express")
const noteRouter = express.Router()
const {NoteModel}=require("../model/note.model")

noteRouter.get("/",async (req,res)=>{
 try {
    const note = await NoteModel.find()
    res.status(200).send(note)
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

noteRouter.patch("/update/:noteId",(req,res)=>{
//logic
})

noteRouter.delete("/delete/:noteID",(req,res)=>{
//logic
 })

 
module.exports = {
    noteRouter
}