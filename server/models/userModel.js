const mongoose = require('mongoose');
//const autoIncrement= require('mongoose-auto-increment');

const userTemplate = new mongoose.Schema({
    userFirstName : {
        type : String,
        require : true,
    },
    userLastName : {
        type : String,
        require : true,
    },
    userName : {
        type : String,
        require : true,
    },
    userPassword : {
        type : String,
        require : true,
    },
    userPhone : {
        type : String,
        require : true,
    },
    userEmailID : {
        type : String,
        require : true,
    }
})

// autoIncrement.initialize(mongoose.connection);
// userTemplate.plugin(autoIncrement.plugin, 'user');


module.exports = mongoose.model('userDetail' , userTemplate);