var express = require('express'),
app = express(),
bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
// app.use('/bower_components', express.static(__dirname + '/bower_components'));

var PORT = 8000;
app.listen(PORT, function(err){
    if (err){
      console.log('error stating app: ',err)
    }
    console.log("App listening on port", PORT);
  });