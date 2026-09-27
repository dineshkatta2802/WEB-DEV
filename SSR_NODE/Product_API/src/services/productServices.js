const productRepository = require('../repositories/productRepositories');

function getProducts() {
    return productRepository.findAll();
}

function getProductsId(id) {
    return productRepository.findById(id);
}

function createProduct(name, price) {
    const productsList = productRepository.findAll();
    const newProduct = {
        id : productsList.length + 1,
        name,
        price
    }
    return productRepository.create(newProduct);
}

function deleteProduct(id) {
    return productRepository.removeById(id);
}

module.exports = {
    getProducts,
    getProductsId,
    createProduct,
    deleteProduct
}