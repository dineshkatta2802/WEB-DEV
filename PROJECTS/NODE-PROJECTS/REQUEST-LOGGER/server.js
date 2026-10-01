const http = require("node:http");
const EventEmitter = require("node:events");
const fs = require("fs/promises");

const PORT = 3000;
const logger = new EventEmitter();

const sendJSON = (res, statusCode, data) => {
    res.statusCode = statusCode;
    res.setHeader('Content-Type', 'text/plain');
    res.end(data);
}

logger.on("request", async(req) => {
    const date = new Date().toISOString();
    const data = `${date} | ${req.method} | ${req.url}\n`;
    await fs.appendFile('./server.log', data);
});

const server = http.createServer((req, res) => {
    if(req.method === 'GET' && req.url === '/'){
        logger.emit("request", req, res);
        sendJSON(res, 200, "Home");
        return;
    }
    if(req.method === 'GET' && req.url === '/users'){
        logger.emit("request", req, res);
        sendJSON(res, 200, "Users");
        return;
    }
    if(req.method === 'GET' && req.url === '/about'){
        logger.emit("request", req, res);
        sendJSON(res, 200, "About");
        return;
    }
    sendJSON(res, 404, 'Route not Found')
}).listen(PORT, () => {
    console.log("Server live at http://localhost:3000");
});