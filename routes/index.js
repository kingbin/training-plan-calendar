
var uploadHelper = require('./uploadHelper');
exports.index = function(req, res){
    res.render('index', { title : 'Home' });
};

exports.uploadFile = function(req,res){
    uploadHelper.uploadFile(req,res);
};
