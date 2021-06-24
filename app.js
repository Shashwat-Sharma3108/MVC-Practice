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
const {auth}=require("./Controller/auth");

app.get("/dashboard",auth,(req,res)=>{
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