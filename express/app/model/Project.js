var mongoose = require('mongoose');



var RegSchema = mongoose.Schema({
    username:{
        type:String,
        required:true, 
        unique:true
    },
    password:{
        type:String,
        required:true, 
        unique:true
    }
 
});

var userReg = mongoose.model("users", RegSchema);

module.exports = userReg;