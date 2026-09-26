import router from './router';

const http = require("node:http");

const server = http.createServer((req, res) => {
    router(req, res);
}).listen(3000, () => {
    console.log("Server live on http://localhost:3000");
})