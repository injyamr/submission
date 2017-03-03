var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser= require('body-parser');


router.get('/', function (req, res) {
    res.render('mypage');
});


module.exports = router;