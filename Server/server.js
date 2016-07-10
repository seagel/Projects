var sample=require('./sample.js');
var express = require('express'),
    app     = express(),
    cors = require('cors');
   
var bodyParser = require('body-parser'); 
/*var multer = require('multer'); */
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
/*app.use(multer());*/ // for parsing multipart/form-data
app.use(cors());

app.use(bodyParser());

app.get('/', function(req, res){
    console.dir(req.headers)
    if(req.query.data="YS"){
    	res.json(sample.useful);
    }
    else{
    	res.json(sample.useful1);
    }
  
});



  
//UPDATE leakage SET value='0' WHERE person='jha' or person='deo' or person='singh'


/*app.get('/:table/:id', function(req,res){});
app.post('/:table', function(req,res){});
app.put('/:table/:id', function(req,res){});
app.delete('/:table/:id', function(req,res){});*/
app.listen(8001);
console.log('EmployeeAPI service Listening on port 80');