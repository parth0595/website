var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'web1.html'));
});
app.get('/wall1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname,'wall1.jpg'));
});
app.get('/wall2.jpg', function (req, res) {
  res.sendFile(path.join(__dirname,'wall2.jpg'));
});
app.get('/wall3.jpg', function (req, res) {
  res.sendFile(path.join(__dirname,'web3.jpg'));
});
app.get('/wall4.jpg', function (req, res) {
  res.sendFile(path.join(__dirname,'wall4.jpg'));
});
app.get('/wall5.jpg', function (req, res) {
  res.sendFile(path.join(__dirname,'wall5.jpg'));
});
app.get('/aman.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'aman.jpg'));
});
app.get('/aakriti.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'aakriti.jpg'));
});
app.get('/GitHub.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'GitHub.png'));
});
app.get('/rust.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'rust.jpg'));
});
app.get('/mozilla.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'mozilla.png'));
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
