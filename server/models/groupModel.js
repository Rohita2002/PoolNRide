const mongoose = require('mongoose');
import { userTemplate } from './userModel';

const groupTemplate = new mongoose.Schema({
    createdBy: { type: String, required: true },
    groupUsers: [userTemplate],
    noOfPoolsCreated: {type: String, required: true},
    noOfPoolsRequested: {type: String, required: true}
  });


module.exports = mongoose.model('groupDetail' , groupTemplate);