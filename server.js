var express = require('express');

var app = express();

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    console.log('I hit /');
});

app.listen(port, function(){
    console.log('Server running at localhost:3000');
});
