var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');
var nunjucks = require('nunjucks');

nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);


router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

module.exports = router;

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
