const productServices = require('../services/productServices');
const {parseBody} = require('../utils/bodyParse');
const {sendJSON, sendNoContent} = require('../utils/response');

// GET
function getProducts(req, res) {
    const items = productServices.getProducts();
    console.log(items);
    res.end(JSON.stringify(items));
}

// GET :id
function getProductId(req, res) {
    const id = Number(req.params.id);
    if(!Number.isInteger(id)){
        res.statusCode = 404;
        res.end("Invalid Id number");
        return;
    }
    const item = productServices.getProductsId(id);
    if(!item){
        res.statusCode = 404;
        res.end("Product not found");
        return;
    }
    console.log(item);
    res.end(JSON.stringify(item));
}

// POST
async function createProduct(req, res) {
    try {
        const data = await parseBody(req);
        // Validation layer
        if(typeof data.name !== 'string' || data.name.trim() === "") {
            sendJSON(res, 400, {error : 'Invalid name'});
            return;
        }
        if(typeof data.price !== 'number' || data.price < 0) {
            sendJSON(res, 400, {error : 'Invalid price'});
            return;
        }
        const item = productServices.createProduct(data.name, data.price);
        sendJSON(res, 201, item);
    } catch {
        sendJSON(res, 400, {error : "Invalid JSON"});
    }
}

// PUT
async function replaceProduct(req, res) {
    const id = Number(req.param.id);
    if(Number.isInteger(id) || id <= 0) {
        sendJSON(res, 400, {error : 'Invalid Product id'});
        return;
    }
    try {
        const data = await parseBody(req);
        // Validation layer
        if(typeof data.name !== 'string' || data.name.trim() === "") {
            sendJSON(res, 400, {error : 'Invalid name'});
            return;
        }
        if(typeof data.price !== 'number' || data.price < 0) {
            sendJSON(res, 400, {error : 'Invalid price'});
            return;
        }
        const item = productService.replaceProduct(id, data.name, data.price);
        if(!item){
            sendJSON(res, 404, {error : 'Product not found'});
            return;
        }
        sendJSON(res, 200, item);
    } catch {
        sendJSON(res, 400, {error : 'Invalid JSON'});
    }
}

// PATCH
async function updateProduct(req, res) {
    const id = Number(req.param.id);
    if(Number.isInteger(id) || id <= 0) {
        sendJSON(res, 400, {error : 'Invalid Product id'});
        return;
    }
    try {
        const data = await parseBody(req);
        // Validation layer
        if(typeof data.name !== 'string' || data.name.trim() === "") {
            sendJSON(res, 400, {error : 'Invalid name'});
            return;
        }
        if(typeof data.price !== 'number' || data.price < 0) {
            sendJSON(res, 400, {error : 'Invalid price'});
            return;
        }
        const item = productService.updateProduct(id, data);
        if(!item){
            sendJSON(res, 404, {error : 'Product not found'});
            return;
        }
        sendJSON(res, 200, item);
    } catch {
        sendJSON(res, 400, {error : 'Invalid JSON'});
    }
}

// DELETE
function deleteProduct(req, res) {
    const id = Number(req.params.id);
    if(!Number.isInteger(id)){
        sendJSON(res, 400, {error : 'Invalid Product ID'})
        return;
    }
    const item = productServices.deleteProduct(id);
    if(!item){
        sendJSON(res, 404, {error : 'Product not found'})
        return;
    }
    sendNoContent(res);
}

module.exports = {
    getProducts,
    getProductId,
    createProduct,
    replaceProduct,
    updateProduct,
    deleteProduct   
}