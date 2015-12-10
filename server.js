var express = require('express');
var app = express();
var port = process.env.PORT || '3000';
var logger = require('morgan');
var path = require('path'); // to make path.join

app.use(logger('dev')); // log every request to the console
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));

app.route('/')
    .get(function(req, res, next){
        res.render('index');
    })

    .post(function(req, res, next){
        res.render('index')
    });

app.listen(port);
console.log('\tListening on port ' + port);