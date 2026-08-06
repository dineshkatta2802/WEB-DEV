const http = require("node:http");
const fs = require("fs");
const path = require("path")

http.createServer((req, res) => {
    let filePath;

    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    if(req.url === '/' && req.method === 'GET'){
        filePath = path.join(__dirname,"Pages","Home.html")
    }
    else if(req.url === '/about' && req.method === 'GET'){
        filePath = path.join(__dirname,"Pages","About.html")
    }
    else if(req.url === '/contact' && req.method === 'GET'){
        filePath = path.join(__dirname,"Pages","Contact.html")
    }
    else {
        res.statusCode = 404;
        filePath = path.join(__dirname,"Pages","404.html")
    }

    fs.readFile(filePath, 'utf8', (err, data) => {
        if(err) {
            res.statusCode = 500;
            return res.end('500 Internal Error')
        }
        res.end(data)
    })
    
}).listen(3000, () => {
    console.log("Server : http://localhost:3000");
})