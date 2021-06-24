const express = require("express");
const {addDeviceDetails} = require("../Controller/devicedetailsController");

const router=express.Router();

router.route("/devicedetails").post(addDeviceDetails);

module.exports = {devicedetailsRouter:router};