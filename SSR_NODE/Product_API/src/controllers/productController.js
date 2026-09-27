const productServices = require('../services/productServices');

function getProducts(req, res) {
    const items = productServices.getProducts();
    console.log(items);
    res.end(JSON.stringify(items));
}

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

function createProduct(req, res) {
    res.end("Creating Product");
}

function deleteProduct(req, res) {
    const id = Number(req.params.id);
    if(!Number.isInteger(id)){
        res.statusCode = 404;
        res.end("Invalid Id number");
        return;
    }
    const item = productServices.deleteProduct(id);
    if(!item){
        res.statusCode = 404;
        res.end("Product not found");
        return;
    }
    console.log(item);
    res.end(JSON.stringify(item));
    res.end("Deleting the Product : ",id);
}

module.exports = {
    getProducts,
    getProductId,
    createProduct,
    deleteProduct   
}