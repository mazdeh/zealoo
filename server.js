var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    console.log('I hit /');
});

app.listen(3000, function(){
    console.log('Server running at localhost:3000');
});
