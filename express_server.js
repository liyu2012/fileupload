"use strict";
exports.__esModule = true;
var express = require("express");
var multer = require("multer");
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads');
    },
    filename: function(req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})
var upload = multer({ storage: storage });
var app = express();
app.use(express.static('dist'));
//var cpUpload = upload.fields([{ name: 'imgfile', maxCount: 12 }])
app.post('/uploadimg', upload.array('imgfile', 40), function(req, res, next) {
    var files = req.files
    console.log(files)
    if (!files[0]) {
        res.send('error');
    } else {
        res.send('success');
    }



    console.log(files);
})

var server = app.listen(9999, 'localhost', function() {
    console.log('server is running at port 9999...');
});