const {UserDevice} = require("../Model/userDevice");

const userDeviceController=(req,res)=>{
    const userID = req.body.userID;
    const deviceID = req.body.deviceID;
    const lineID = req.body.lineID;

    const userDevice = new UserDevice({
        userID : userID,
        deviceID : deviceID,
        lineID : lineID,
    });

    console.log(userDevice);

    userDevice.save((err)=>{
        if(err){
            console.log("Error in saving data in user-device collection "+err);
        }else{
            console.log("Data saved in User Device");
        }
    });
    
}

module.exports={userDeviceController};