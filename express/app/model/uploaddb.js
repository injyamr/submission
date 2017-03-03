var mongoose = require('mongoose');

var uploadSchema = mongoose.Schema({
    title:{
        type:String,
        required:true, 
        unique:true
    },
   URL:String,
   img: { data: Buffer, contentType: String }
 
});

var uploading = mongoose.model("thefiles", uploadSchema);

module.exports = uploading;