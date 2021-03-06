//Imports
const express = require('express');
const bodyParser = require('body-parser')
//App imports
const products = require('./routes/products');

const config = require('./config/database'); //database configuration
const mongoose = require('mongoose');

//Creates the instance
const app = express();


//Connection to DB
mongoose.connect(config.db,{ useNewUrlParser: true });
var db = mongoose.connection;
//console.log(config.db)
db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db);
});

app.use(bodyParser.urlencoded({
  extended: true
}));

/*//Redirect all '/' request  to authentication.
app.get('/', function(req, res){  
  res.send('Products microservice ');
});*/

//Statics (Styles and JS)
app.use(express.static(__dirname + '/public/'));

//Public routes
app.use('/products', products);

// Handle errors
app.use(function(err, req, res, next) {
  if(err.status === 404)
  	res.status(404).json({message: "Not found"});
  else
    if(err[0] && err[0].msg){
    res.status(500).json({message: "There was an error : " + err[0].msg});
    }
});

//Server listening at port 4000
app.listen(4000, function(){
	console.log('Node server listening on port 4000');
});