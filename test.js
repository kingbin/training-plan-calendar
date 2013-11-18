var express = require("express");
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World!');
});

//var port = process.env.PORT || 8081;
var port = 8081;
app.listen(port, function() {
  console.log("Listening on " + port);
});
