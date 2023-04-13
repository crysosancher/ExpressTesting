var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('hello world ji')
})

app.listen(3000)