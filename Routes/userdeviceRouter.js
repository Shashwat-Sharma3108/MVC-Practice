const express=require("express");
const Router=express.Router();
const {userDeviceController} = require("../Controller/userdeviceController");

Router.route("/userdevice").post(userDeviceController);

module.exports = {userdeviceRouter:Router};