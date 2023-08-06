// Create web server
// Run: node comments.js
// Open browser: http://localhost:3000
// Test: curl -X GET http://localhost:3000/comments

var express = require('express');
var app = express();

// Set up the comments data
var COMMENTS_FILE = __dirname + '/comments.json';

// Set up the public directory
app.use(express.static(__dirname + '/public'));

// Set up the route
app.get('/comments', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.sendFile(COMMENTS_FILE);
});

// Start the server
app.listen(3000, function() {
  console.log('Server started: http://localhost:3000');
});