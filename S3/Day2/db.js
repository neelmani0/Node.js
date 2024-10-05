const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb://127.0.0.1:27017/metauser")

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
    connection,
    userModel
}