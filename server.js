const fs = require('fs');
const path = require('path');
const http = require('http');

const pathToIndex = path.join(__dirname, 'static', 'index.html');
const indexHtmlFile = fs.readFileSync(pathToIndex);

const server = http.createServer((req,res) => {

});

server.listen(3000);