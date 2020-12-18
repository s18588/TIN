const fs = require('fs');
const http = require('http');
const url = require('url');

http.createServer(function (req, res) {

    const query = url.parse(req.url,true).query;
    const directory = query.directory;

    fs.watch(directory, (eventType, filename) => {
        console.log(directory);
        console.log(eventType);
        console.log(filename);
    });

    var responseText = "Watching: " + directory;
    res.end(responseText);

}).listen(5001);

