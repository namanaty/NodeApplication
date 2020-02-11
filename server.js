const http = require('http');
const app = require('./app');

const port = process.env.PORT || 8080;

const server = http.createServer(app);

server.listen(port, function(req,res) {
    console.log("Server running on port " + port);
});




