const path = require('path');
const express = require('express');
const webpack = require('webpack');
const mongoose = require('mongoose');
const config = require('./webpack.config.js');

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();

app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {
    res.sendFile(__dirname + 'public/index.html');
});

mongoose.connect('mongodb://admin:mahdavi@ds153765.mlab.com:53765/zealoo');

const db = mongoose.connection;

db.on('error', function(err) {
  console.log('could not connect to the db');
})

db.once('open', function() {
  console.log('were connected to the db');

  const entrySchema = mongoose.Schema({
    category: String,
    sizeX: String,
    sizeY: String
  });

  const Entry = mongoose.model('Entry', entrySchema);

  Entry.create({ sizeX: '31'}, function (err, small) {
      if (err) return console.log('err: ', err);
      console.log('saved an entry to the db');
  })

  // Entry.remove({ category: 'galeem' }, function(err) {
  //   if (err) return console.log('err: ', err);
  //   console.log('deleted an entry.');
  // })

})



app.listen(port, function(){
    console.log('Server running on port ' + port);
});
