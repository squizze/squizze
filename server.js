var connect = require('connect');
var serveStatic = require('serve-static');

var buildDirectory = "/src";

connect().use(serveStatic(__dirname+buildDirectory)).listen(1234, function(){
    console.log('Server running on 1234...');
});