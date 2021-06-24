const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {User}= require("../Model/user");
const mongoose = require("mongoose");

const login=(req,res)=>
{
    const username = req.body.username;
    const password = req.body.password;

    console.log(username,password,User);

    User.findOne({username : username},(err,foundUser)=>{
        if(err){
            console.log("Error finding user "+err);
        }
        else{
            if(!foundUser){
                console.log("USername not found");
                res.redirect("/login");
            }else{
                bcrypt.compare(password, foundUser.password,(err,result)=>{
                    if(err){
                        console.log("Error in checking passoword");
                        res.redirect("/login");
                    }else{
                        const token = jwt.sign({username : foundUser.username},process.env.SECRET);
                        res.cookie("authToken",token);
                        res.redirect("/view");
                    }
                });
            }
        }
});
}

const loginget=(req,res)=>{
    res.render("login");
}

module.exports={login,loginget};