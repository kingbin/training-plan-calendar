require('newrelic');

var express = require("express")
    , stylus = require('stylus')
    , nib = require('nib')
    , routes = require('./routes')

var app = express();

function compile(str, path) {
    return stylus(str)
           .set('filename', path)
           .use(nib());
};
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(stylus.middleware({ src: __dirname + '/public', compile: compile } ));
app.use(express.static(__dirname + '/public'));

app.configure('development', function(){
      app.use(express.errorHandler());
});

app.get('/', routes.index);
app.post('/uploadFile', routes.uploadFile);

var port = process.env.PORT || 8081;
app.listen(port, function() {
  console.log("Listening on " + port);
});
