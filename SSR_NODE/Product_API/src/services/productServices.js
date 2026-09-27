const productsList = [
    {
        id : 1,
        name : 'Laptop',
        price : 50000
    },
    {
        id : 2,
        name : 'Keyboard',
        price : 2000
    }
];

// let nextId = 3;

function getProducts() {
    return productsList;
}

function getProductsId(id) {
    return productsList.find(p => p.id === id)
}

function createProduct(name, price) {
    const newProduct = {
        id : productsList.length + 1,
        name,
        price
    }

    productsList.push(newProduct);
    return newProduct;
}

function deleteProduct(id) {
    const index = productsList.findIndex(p => p.id === id);
    if(index === -1) return null;
    return productsList.splice(index, 1)[0];
}

module.exports = {
    getProducts,
    getProductsId,
    createProduct,
    deleteProduct
}