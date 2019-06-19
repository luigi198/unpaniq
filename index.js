var bodyParser = require('body-parser');
//Add express framework
var express = require('express');
var app = express();

//Set the port
app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

// load Database config
var DB = require('./server/config/db');

//start connection
DB.createConnection() //Once the promise finish then:
  .then(function (db) { //It's connected, so now setup the DB
    DB.setupConnection(db);

    // Config API Routes
    require('./server/config/routes')(app, DB.getConnection());
    app.listen(app.get('port'), function() {
      console.log('Node app is running on port', app.get('port'));
    });
    
  }).catch(function(err) {
    console.error("ERROR", err);
  });

  //Exports app to be used somewhere else.
  module.exports = {app};
