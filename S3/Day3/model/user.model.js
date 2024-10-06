const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
    name:String,
    age:Number,
    is_married:Boolean,
    city:String,
    lagguage:String
},{
   versionKey:false 
})

const userModel= mongoose.model("user",userSchema)

module.exports={
    userModel
}