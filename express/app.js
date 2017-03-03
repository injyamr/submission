var express=require('express');
var bodyParser= require('body-parser');
var path=require('path');
var expressValidator= require('express-validator');
var mongoose = require('mongoose');
//var router = require('./app/routes.js');
var config = require('./app/model/Project'); // get db config file
var url="mongodb://localhost/thedb";
var session = require('express-session');
var flash = require('connect-flash');

var app=express();

//the view
app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'));

//Bodyparser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//static file like css
app.use(express.static(__dirname+ '/public'));

//for the session
app.use(session({ secret: "secret", resave: false, saveUninitialized: true }));
/*app.use(session({secret: "Shh, its a secret!"}));*/

// expressvalidator which sets the format of the error
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

app.use(flash());

mongoose.connect(url);

app.use('/register', require('./app/controllers/register.js'));
app.use('/login', require('./app/controllers/logincontroller.js'));
app.use('/upload', require('./app/controllers/uploadcontroller.js'));
app.use('/mypage', require('./app/controllers/mypagecontroller.js'));
app.use('/createport', require('./app/controllers/createportcontroller.js'));



app.get('/logout', function (req, res) {

req.session.destroy(function(){
    res.redirect('/');
  });
   console.log("Logged out!");
});

app.get('/', function (req, res) {
    return res.redirect('/login');
});


app.listen(3000,function(){
console.log('Server Started on Port 3000...')
  });
