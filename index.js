var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('assets'));
app.use(bodyParser.json());

app.get('/messages', function(req, res, next){
    res.status(200).json({messages: messages});
});

app.post('/messages', function(req, res, next){
    console.log(req.body);
});

app.listen(3000, function(){
    console.log('This Guy!')
});

var messages = [];

