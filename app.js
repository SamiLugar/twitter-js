var express = require('express');
var app = express();
var port = 3000;
var nunjucks = require('nunjucks');
var routes = require('./routes/');
var bodyParser = require('body-parser');
var socketio = require('socket.io');


app.set('view engine', 'html');
app.engine('html', nunjucks.render);


var server = app.listen(3000);
var io = socketio.listen(server);

app.use('/', routes(io));

// app.listen(port, function(){
//   console.log("server is listening on port "+ port)
// });


app.use('/',function(request, response, next){
  console.log(request.method + " / ");
  next();
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// app.use(express.static('public'));
