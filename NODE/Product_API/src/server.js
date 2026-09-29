const http = require("node:http");
const app = require('./app');
const logger = require('./middleware/logger');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorhandler');
const router = require('./router');
const productController = require('./controllers/productController');

// GET
router.get('/products', productController.getProducts);

// GET :id
router.get('/products/:id', productController.getProducts);

// POST
router.post('/products', productController.createProduct);

// PUT
router.put('./products/:id', productController.replaceProduct);

// PATCH
router.patch('./products/:id', productController.updateProduct);

// DELETE
router.delete('/products', productController.deleteProduct);


app.use(logger);
app.use(router);
app.use(notFound);
app.use(errorHandler);

const server = http.createServer((req, res) => {
    // router(req, res);
    app.handle(req, res);
}).listen(3000, () => {
    console.log("Server live on http://localhost:3000");
})