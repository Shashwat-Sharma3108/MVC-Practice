const mongoose = require("mongoose");

const userDeviceSchema = new mongoose.Schema({
    userID : {
        required : true,
        type : String
    },
    deviceID : {
        required : true,
        type : String
    },
    lineID : {
        required : true,
        type : String
    }
});

const UserDevice = new mongoose.model("User-Device",userDeviceSchema);
module.exports = {UserDevice};