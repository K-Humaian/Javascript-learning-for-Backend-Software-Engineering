const http = require('http');
const webserver = http.createServer((req, res) => {
    // Setting up the header and response
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end('<h1>This is an Html text served by raw Node Js</h1>');
})
// Listenig to server and port range 3000
webserver.listen(3000, () => {
    console.log('Server is running....');
})