const mongoose =require("mongoose");

const deviceDetailsSchema=new mongoose.Schema({
    deviceID : {
        required : true,
        type : String
    },
    lineID:{
        required : true,
        type : String
    },
    lineName:{
        required : true,
        type :String
    },
    site:{
        required : true,
        type : String
    }
});

const DeviceDetails = new mongoose.model("DeviceDetail",deviceDetailsSchema);

module.exports= {DeviceDetails};