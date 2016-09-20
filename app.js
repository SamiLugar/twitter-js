var express = require('express');
var app = express();
var port = 3000;
var nunjucks = require('nunjucks');
var routes = require('./routes/');

app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use('/', routes);


var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};

app.listen(port, function(){
  console.log("server is listening on port "+ port)
});


app.use('/',function(request, response, next){
  console.log(request.method + " / ");
  next();
});


// app.use(express.static('public'));
