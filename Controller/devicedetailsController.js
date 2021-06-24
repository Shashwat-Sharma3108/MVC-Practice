const {DeviceDetails} = require("../Model/devicedetails");
const mongoose = require("mongoose");

const addDeviceDetails=(req,res)=>{
    const deviceID = req.body.deviceID;
    const lineID = req.body.lineID;
    const lineName = req.body.lineName;
    const site = req.body.site;

    const deviceDetails = new DeviceDetails({
        deviceID : deviceID,
        lineID : lineID,
        lineName : lineName,
        site : site
    });

    console.log(deviceDetails);

    deviceDetails.save((err)=>{
        if(err){
            console.log("Error in saving data in device_deatils collection "+err);
        }else{
            console.log("Data saved in Device Details");
        }
    });
}

module.exports= {addDeviceDetails};