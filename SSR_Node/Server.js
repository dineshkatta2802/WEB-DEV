const http = require('node:http');
const fs = require('fs');

http.createServer((req, res) => {
    if(req.url == '/' && req.method === 'GET'){
        fs.readFile('./titles.json', (err, data) => {
            if(err){
                console.log(err);
                res.end('Server Error');
            }
            else {
                const titles = JSON.parse(data.toString());
                fs.readFile('./index.html', (err,data) => {
                    if(err){
                        console.log(err);
                        res.end('Server Error');
                    }
                    else {
                        const index = data.toString();
                        const html = index.replace('%', titles.join("<li></li>"))
                        res.end(html);
                    }
                })
            }
        })
    }
}).listen(3000, () => {
    console.log("Server : http://localhost:3000");
})