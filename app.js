var express = require('express');
var app = express();
var port = 3000;
var nunjucks = require('nunjucks');
nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);


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


app.get('/', function(request, response){
  // response.statusCode = 200;
  // console.log(response.statusCode);
  // response.status(200);
  console.log("get request");

  nunjucks.render('index.html', locals, function (err, output) {
      console.log(output);
  });

  response.render('index', {title: locals.title, people: locals.people})

});



app.get('/news', function(request, response){
  response.send('welcome to our fake twitter news page!');
});


app.listen(port, function(){
  console.log("server is listening on port "+ port)
});


app.use('/special/', function(request, response){
  console.log("you've reached the special page");
})
