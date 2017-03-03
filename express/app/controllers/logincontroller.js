var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var session = require('express-session');

let userReg = require('../model/Project');

router.get('/', function (req, res) {
    res.render('login');
});

router.post('/', function (req, res) {
var username=req.body.username;
var password=req.body.password;

userReg.findOne({ username: username , password:password}, function(error,user){

if(error){
	console.log("err");

		   res.send("Something went wrong");
	return res.status(500).send();

}
if(!user){
	res.send("Wrong username or password");
	
	return res.status(404).send();

}

req.session.user=user;
console.log(user);
console.log("successfull");
/*req.flash('info', 'Flash is back!')*/
res.redirect('/mypage');  
return res.status(200).send;
  
})
});




module.exports = router;