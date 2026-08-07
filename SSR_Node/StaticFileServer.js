const http = require("node:http");
const fs = require("fs");
const path = require("path");

const routes = {
    '/' : 'Home.html',
    '/about' : 'About.html',
    '/contact' : 'Contact.html',
    '/404' : '404.html'
}

const mediaType = {
    '.css' : 'text/css',
    '.js' : 'application/javascript',
    '.png' : 'image/png',
    '.jpg' : 'image/jpeg',
    '.jpeg' : 'image/jpeg'
}

http.createServer((req, res) => {
    // Static Files
    const ext = path.extname(req.url);
    if(mediaType[ext]){
        res.setHeader('Content-Type', mediaType[ext]);
        const mediaPath = path.join(__dirname, "Public", req.url);
        fs.readFile(mediaPath, (err, data) => {
            if(err){
                res.statusCode = 500;
                res.end("500 - Internal Server");
            }
            res.statusCode = 200;
            res.end(data);
        })
        return;
    }

    // HTML Files
    let filePath;
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    if(routes[req.url] && req.method === 'GET'){
        filePath = path.join(__dirname, 'Pages', routes[req.url]);
    }
    else{
        filePath = path.join(__dirname, 'Pages', routes['/404']);
        res.statusCode = '400';
        res.end('404 -  page not found');
    }
    fs.readFile(filePath, 'utf8', (err, data) => {
        if(err){
            res.statusCode = 500;
            res.end('500 - Internal Server')
        }
        res.end(data);
    });
}).listen(3000, () => {
    console.log('Server : http://localhost:3000');
});