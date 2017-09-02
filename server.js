var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'web1.html'));
});
app.get('/aman.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'aman.jpg'));
});
app.get('/college.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'college.jpg'));
});
app.get('/shantanu.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'shantanu.jpg'));
});
app.get('/kajal.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'kajal.jpg'));
});
app.get('/sir.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'sir.jpg'));
});
app.get('/parth1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'parth1.jpg'));
});
app.get('/shubham.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'shubham.jpg'));
});
app.get('/gurnoor.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'gurnoor.jpg'));
});
app.get('/anirudh.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'anirudh.jpg'));
});
app.get('/muskan.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'muskan.jpg'));
});
var port = process.env.PORT || 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(port, function () {
  console.log(`Mozilla Campus Club ${port}!`);
});
