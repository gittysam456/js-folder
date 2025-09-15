var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/index.html', function (req, res){
res.sendFile( __dirname + "/" + "index.html" );
})
app.post('/process-post', urlencodedParser, function (req, res)
{
    const fname = req.body.fname;
    const lname = req.body.lname;
    res.write(`<h1>Your first name is: ${fname} </h1>`);
    res.write(`<h1>Your last name is: ${lname} </h1>`);
})