const mqtt = require("mqtt");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const bcrypt = require("bcrypt");
const saltrounds = 10;
const jwt = require("jsonwebtoken");
const cookieParser=require("cookie-parser");

const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(cookieParser());
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

const {devicedetailsRouter}=require("./Routes/devicedetailsRouter");
const {loginRouter}=require("./Routes/loginRoutes");
const {userdeviceRouter}=require("./Routes/userdeviceRouter");

//Middleware to protect the route /view 
const auth = function(req,res,next){
  //getting token from cookies
  const token = req.cookies.authToken;
  if(!token){
    console.log("Token not present please login!");
    res.redirect("/login");
    return;
  }
  try {
    const verified = jwt.verify(token, process.env.SECRET);
    req.user = verified;
    User.findOne({username : req.user.username},(err,result)=>{
      if(err){
        console.log(err);
      }else{
        if(!result){
          console.log("Username not found");
          res.redirect("/login");
        }else{
          next();
        }
      }
    });
  } catch (error) {
    console.log("Invalid token "+error);
    res.redirect("/login");
  }
}

app.get("/",(req,res)=>{
    res.render("dashboard");
});

app.get("/live",auth,(req,res)=>{
    res.render("live");
});

app.use(loginRouter);
app.use(devicedetailsRouter);
app.use(userdeviceRouter);

app.listen("3000",(req,res)=>{
    console.log("Server Started at port 3000");
});