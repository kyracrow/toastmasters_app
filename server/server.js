/**
 * Created by kyracrowston on 2/3/16.
 */
var express = require('express');
var index = require('./routes/index');
//var bodyParser = require('body-parser');
//var path = require('path');

var app = express();

app.use(express.static('server/public'));

app.use('/', index);

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function(){
   var port = server.address().port;
    console.log('Listening on port' + app.get('port'));
});