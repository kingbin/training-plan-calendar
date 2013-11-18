var express = require("express")
    , stylus = require('stylus')
    , nib = require('nib')




var app = express();



function compile(str, path) {
      return stylus(str)
              .set('filename', path)
                  .use(nib());
};
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger());
app.use(stylus.middleware(
              { src: __dirname + '/public'
                    , compile: compile
      }
      ));

app.use(express.static(__dirname + '/public'));



//app.get('/', function(request, response) {
//  response.send('Hello World!');
//});

app.get('/', function (req, res) {
  res.render('index',
  { title : 'Home' }
  )
});


app.post("/upload", function (request, response) {
    console.log("uploaded file", JSON.stringify(request.files) );
    response.end("upload complete");
});



var port = process.env.PORT || 8081;
//var port = 8081;
app.listen(port, function() {
  console.log("Listening on " + port);
});
