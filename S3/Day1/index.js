const mongoose = require("mongoose")

const main = async ()=>{
    try {
        const connection = await mongoose.connect("mongodb://127.0.0.1:27017/webnxm");
        console.log("Connection Established");
       await UserModel.insertMany([{name:"Grue",age:21,city:"AP"},{name:"Viru",age:22,city:"Hyd"}])
        connection.didconnect() 
    } catch (error) {
        console.log(error.message)
    }
    
}

main()

//schema for user documents
const userSchema = mongoose.Schema({
    name:String,
    age:Number,
    city:String
},{
  versionKey:false
})

//model for user document
//the name of model should be in pascal case "UserModel" this is a constructor function
const UserModel = mongoose.model("user",userSchema)
