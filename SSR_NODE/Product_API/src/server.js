const http = require("node:http");
    const router = require('./router');
// import router from './router';

router.get('/products', (req, res) => {
    res.end("All Products");
});

router.get('/products/:id', (req, res) => {
    res.end(`Product Id : ${req.params.id}`);
});

router.post('/products', (req, res) => {
    res.end("Create Products");
});

router.delete('/products', (req, res) => {
    res.end("Delete Products");
});

router.delete('/products/:id', (req, res) => {
    res.end(`Delete Id : ${req.params.id}`);
});

const server = http.createServer((req, res) => {
    router(req, res);
}).listen(3000, () => {
    console.log("Server live on http://localhost:3000");
})