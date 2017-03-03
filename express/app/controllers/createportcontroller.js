var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser= require('body-parser');
var session = require('express-session');

let uploading = require('../model/uploaddb');

router.get('/', function (req, res) {
    res.render('createport');
});

router.post('/', function (req, res) {
 
 var work = req.body; //Get the parsed information
    
        var work ={
            title: work.workname,
            URL: work.URL,
            img: work.fileToUpload2
        };

  uploading.create(work);
console.log(work);
console.log("shaghala");
res.redirect('/mypage');  
});


module.exports = router;