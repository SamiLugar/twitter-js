var express = require('express');
var app = express();
var port = 3000;
var nunjucks = require('nunjucks');
var routes = require('./routes/');


app.use('/', routes);



var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};


app.use('/',function(request, response, next){
  console.log(request.method + " / ");
  next();
});
