
const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    number:Number,
    time:String,
    
});

module.exports=mongoose.model("task",userSchema)