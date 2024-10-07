
const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
     email:String,
     pas:String,
     location:String,
     age:Number
},{
    versionKey:false
})

const userModel = mongoose.model("user",userSchema)

module.exports = {
    userModel
}