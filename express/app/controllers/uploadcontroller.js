var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser= require('body-parser');
var session = require('express-session');

let uploading = require('../model/uploaddb');

router.get('/', function(req, res){
        var loggedinuser=req.session.user;

        uploading.find({user:loggedinuser},function(err, thefiles){
            
            if(err)
                res.send(err.message);
            else
                res.render('upload',{thefiles});
        })

});

router.post('/',function(req,res){
     var dataparsed = req.body; //Get the parsed information
    
        var primarywork ={
            title: dataparsed.title,
            URL: dataparsed.URL,
            img: dataparsed.fileToUpload
        };

  uploading.create(primarywork);
console.log(primarywork);
res.redirect('/upload');  

});


module.exports = router;