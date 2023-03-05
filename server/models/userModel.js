const mongoose = require('mongoose');

const VehicleTemplate = new mongoose.Schema({
    isVehicle: { type: String, required: true },
    vehicleType: { type: String, required: true },
    vehicleRegNo: { type: String, required: true },
    vehicleName: { type: String, required: true },
    userLicenceID: { type: String, required: true }
  });

export const userTemplate = new mongoose.Schema({
    userFirstName : { type : String, require : true },
    userLastName : { type : String,  require : true },
    userName : { type : String, require : true },
    userPassword : { type : String, require : true },
    userPhone : { type : String, require : true },
    userEmailID : { type : String, require : true },
    userVehicle :[VehicleTemplate]
})


module.exports = mongoose.model('userDetail' , userTemplate);