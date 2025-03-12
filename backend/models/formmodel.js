import mongoose  from "mongoose";


const formSchema = mongoose.Schema({

name:{
    type:String,
    require:[true,'Enter the name!']
},
email:{
    type:String,
    required:[true,'Enter your email!']
},

password:{
    type:String,
    required:[true,'Enter your password!']
}



},{timestamps:true})


const form = mongoose.model('Form',formSchema)

export default form