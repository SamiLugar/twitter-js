var express = require('express');
var app = express();
var port = 3000;


app.use('/',function(request, response, next){
  console.log(request.method + " / ");
  next();
});



app.get('/', function(request, response){
  response.statusCode = 200;
  console.log(response.statusCode);
  response.status(200).send('welcome to our fake twitter!');
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
