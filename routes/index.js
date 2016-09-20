
module.exports = function(io){
  var express = require('express');
  var router = express.Router();
  var fs = require('fs');
  // could use one line instead: var router = require('express').Router();
  var tweetBank = require('../tweetBank');
  var nunjucks = require('nunjucks');
  var bodyParser = require('body-parser');

  router.use(bodyParser.urlencoded({extended: false}));
  router.use(bodyParser.json());

  nunjucks.configure('views', {noCache: true});

  router.use(express.static('public'));

  router.get('/', function (req, res) {
    var tweets = tweetBank.list();
    //console.log(tweets);

    res.render( 'index', { tweets: tweets, showForm: true, name: ""} );
  });
  // router.get('/', function(request, response){
  //   // response.statusCode = 200;
  //   // console.log(response.statusCode);
  //   // response.status(200);
  //   console.log("get request");
  //
  //   nunjucks.render('index.html', locals, function (err, output) {
  //       console.log(output);
  //   });
  //
  // });

  router.get('/users/:name', function(request, response){
    var name = request.params.name;
    var tweets = tweetBank.find({'name': name});
    console.log(name);
    response.render('index', { tweets: tweets, showForm: true, name: name} ); // why only first name??
  });

  router.get('/tweets/:id', function(request, response){
    var id = request.params.id;
    var tweets = tweetBank.find({'id': id});
    console.log(id);
    response.render('index', {tweets: tweets, showForm: false});
  })

  router.get('/news', function(request, response){
    response.send('welcome to our fake twitter news page!');
  });

  router.post('/tweets', function(req, res) {
    var name = req.body.name;
    var text = req.body.text;
    var postedTweet = tweetBank.add(name, text);
    io.sockets.emit('newTweet', { tweet: postedTweet });
    res.redirect('/');
  });



  router.use('/special/', function(request, response){
    console.log("you've reached the special page");
  });

  return router;
};
