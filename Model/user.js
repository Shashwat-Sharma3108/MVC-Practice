const mongoose =require("mongoose");

const userSchema=new mongoose.Schema({
    username : {
        reuired : true,
        type:String
    },
    password:{
        required : true,
        type : String
    }
});

const User = new mongoose.model("User",userSchema);
console.log(User);
module.exports={User};