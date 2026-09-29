const productRepository = require('../repositories/productRepositories');

let nextId = 3;

// GET
function getProducts() {
    return productRepository.findAll();
}

// GET :id
function getProductsId(id) {
    return productRepository.findById(id);
}

// POST
function createProduct(name, price) {
    const productsList = productRepository.findAll();
    const newProduct = {
        id : nextId++,
        name,
        price
    }
    return productRepository.create(newProduct);
}

// PUT
function replaceProduct(id, name, price) {
    const oldProduct = productRepository.findById(id);
    if(!oldProduct) return null;
    const newProduct = {
        id, 
        name,
        price
    }
    return productRepository.update(id, newProduct);
}

// PATCH
function updateProduct(id , changes) {
    const oldProduct = productRepository.findById(id);
    if(!oldProduct) return null;
    const allowedChanges = {};
    if(changes.name !== undefined) allowedChanges.name = changes.name;
    if(changes.price !== undefined) allowedChanges.price = changes.price;
    const newProduct = {
        ...oldProduct,
        ...allowedChanges
    }
    return productRepository.update(id, newProduct);
}


//DELETE
function deleteProduct(id) {
    return productRepository.removeById(id);
}

module.exports = {
    getProducts,
    getProductsId,
    createProduct,
    replaceProduct,
    updateProduct,
    deleteProduct
}