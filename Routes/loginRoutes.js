const express=require("express");
const {login, loginget} = require("../Controller/loginController");
const router=express.Router();

router.route("/login").post(login).get(loginget);

module.exports = {loginRouter:router};