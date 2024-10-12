const mongoose = require("mongoose")

const noteSchema = mongoose.Schema({
    title:String,
    body:String,
    sub:String,
    userID:String
},{
    versionKey:false
})

//"NoteModel" this will Start with Caps Later because it is constructor function(Factory Function)
 const NoteModel = mongoose.model("note",noteSchema)


module.exports = { 
    NoteModel
}