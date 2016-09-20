var express = require('express');
var router = express.Router();
var fs = require('fs');
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');
var nunjucks = require('nunjucks');

nunjucks.configure('views', {noCache: true});

//router.use(express.static('public'));

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

module.exports = router;

router.get('/', function(request, response){
  // response.statusCode = 200;
  // console.log(response.statusCode);
  // response.status(200);
  console.log("get request");

  nunjucks.render('index.html', locals, function (err, output) {
      console.log(output);
  });

  response.render('index', {title: locals.title, people: locals.people})

});


router.get('/news', function(request, response){
  response.send('welcome to our fake twitter news page!');
});


// router.get('/stylesheets/style.css', function(request,response){
//   response.sendFile('/stylesheets/style.css')
// })

router.use('/special/', function(request, response){
  console.log("you've reached the special page");
})
