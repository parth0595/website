var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'website.html'));
});
// app.get('/aman.jpg', function (req, res) {
//   res.sendFile(path.join(__dirname, 'aman.jpg'));
// });
// app.get('/kajal.jpg', function (req, res) {
//   res.sendFile(path.join(__dirname, 'kajal.jpg'));
// });
// app.get('/parth.jpg', function (req, res) {
//   res.sendFile(path.join(__dirname, 'parth.jpg'));
// });
// app.get('/gurnor.jpg', function (req, res) {
//   res.sendFile(path.join(__dirname, 'gurnor.jpg'));
// });
// app.get('/anirudh.jpg', function (req, res) {
//   res.sendFile(path.join(__dirname, 'anirudh.jpg'));
// });
// app.get('/muskan.jpg', function (req, res) {
//   res.sendFile(path.join(__dirname, 'muskan.jpg'));
// });
var port = process.env.PORT || 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(port, function () {
  console.log(`Mozilla Campus Club ${port}!`);
});
