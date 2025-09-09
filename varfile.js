var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/index.html', function (req, res){
res.sendFile( __dirname + "/" + "index.html" );
})
app.post('/process-post', urlencodedParser, function (req, res){
    response={
        first name:req.body.first_name,
    }
})