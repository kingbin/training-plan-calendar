var fs = require("fs");
var util = require('util');

function uploadFile(req, res) {

    var fileName = req.files.trainingPlan.name;
    var raceDate = req.body.inputRaceDate;
    var trainingPlan = '';

    console.log('Race Date', raceDate);
    console.log('getting file', fileName);
    req.setEncoding("binary");

    var reader = fs.createReadStream(req.files.trainingPlan.path);
    //var writer = process.stdout;
    var Writable = require('stream').Writable;
    var writer = Writable({ decodeStrings: false });
    writer._write = function (chunk, enc, next) {
        trainingPlan += chunk.toString('utf8');
        next();
    };

    reader.pipe(writer, { end: false });
    reader.on('end', function() {
      console.log(trainingPlan);
      upload_complete(req, res);
      trainingplan = '';
      writer.end('Goodbye\n');
    });

};

function upload_complete(req,res) {
    console.log("");
    console.log("uploaded file", req.files.trainingPlan.name);
    res.send("upload complete");
};

exports.uploadFile=uploadFile;
