var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser= require('body-parser');
var session = require('express-session');

let userReg = require('../model/Project');

router.get('/', function (req, res) {
    res.render('registeration');
});

router.post('/', function (req, res) {
  

  req.checkBody('username', 'Username is required').notEmpty();
req.checkBody('password', 'password is required').notEmpty();

var personInfo = req.body; //Get the parsed information
    
        var newPerson ={
            username: personInfo.username,
            password: personInfo.password
         
        };

userReg.create(newPerson);
console.log(newPerson);
/*req.session.success = 'Registration successful';  //the session is missing
res.send("Regidoewd");*/

res.redirect('/login');          
});



module.exports = router;