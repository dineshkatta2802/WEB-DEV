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

function findAll() {
    return productsList;
}

function findById(id) {
    return productsList.find(p => p.id === id);
}

function create(element) {
    productsList.push(element);
    return element;
}

function removeById(id) {
    const index = productsList.findIndex(p => p.id === id);
    if(index === -1) return null;
    return productsList.splice(index, 1)[0];
}

module.exports = {
    findAll,
    findById,
    create,
    removeById
}