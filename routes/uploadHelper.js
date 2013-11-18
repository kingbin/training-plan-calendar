var fs = require("fs");
var util = require('util');

var fileName;
function uploadFile(req, res) {
    fileName = req.files.trainingPlan.name;
    console.log('getting file', fileName);
//    req.setEncoding("binary");
//    var filePath = "./files";
//    var fileStream = null;
//    var serverPath = filePath + req.files.uploadFile.name;
//    var is = fs.createReadStream(req.files.uploadFile.path)
//    var os = fs.createWriteStream(serverPath);
//
//    util.pump(is, os, function(error) {
//        fs.unlinkSync(req.files.uploadFile.path);
//            if(error) {
//                res.send(JSON.stringify({
//                error: 'Error occurred in File Upload'
//            }));
//            return;
//        }
//        upload_complete(req, res);
//     });
        upload_complete(req, res);
};

function upload_complete(req,res) {
    console.log("uploaded file", req.files.trainingPlan.name);
    res.send("upload complete");
};

exports.uploadFile=uploadFile;
