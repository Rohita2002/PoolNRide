const mongoose = require('mongoose');
const { userTemplate } = require('./userModel');

const feedbackTemplate = new mongoose.Schema({
    fromUser: {type: userTemplate, required: true },
    toUser: {type: userTemplate, required: true },
    message: {type: String, required: true },
    rating: {type: String, required: true }
})

const waypointsTemplate = new mongoose.Schema({
    locationName: {type: String, required: true },
    timeToReach: {type: String, required: true }
})


const poolTemplate = new mongoose.Schema({
    createdBy: { type: String, required: true },
    poolUsers: [userTemplate],
    noOfUsers: {type: String, required: true },
    waypoints: [waypointsTemplate],
    destinationLocation: {type: String, required: true },
    time: {type: time, required: true },
    travelCharge: {type: String, required: true },
    feedback: {type: feedbackTemplate, required: true },
  });


module.exports = mongoose.model('poolDetail' , poolTemplate);