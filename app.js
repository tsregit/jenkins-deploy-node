var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World").status(200);
});

app.listen(4000);