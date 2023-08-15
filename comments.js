// Create web server
var server = http.createServer(function(request, response) {
    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // Send the response body as "Hello World"
    response.end('Hello World\n');
});

// Listen on port 8081
server.listen(8081);

// Print URL for accessing server
console.log('Server running at http://' + os.hostname() + ':8081/');