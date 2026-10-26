
const fs = require('fs');
const path = require('path');

const filePath = path.join(
    __dirname,
    '../data/products.json'
);

const readProducts = () => {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
};

const saveProducts = (products) => {
    fs.writeFileSync(
        filePath,
        JSON.stringify(products, null, 2)
    );
};

const findProductById = (id) => {
    const products = readProducts();
    return products.find((item) => item.id === id);
};

const addProduct = (name, price) => {
    const products = readProducts();

    const newProduct = {
        id: products.length
            ? Math.max(...products.map((item) => item.id)) + 1
            : 1,
        name,
        price
    };

    products.push(newProduct);
    saveProducts(products);

    return newProduct;
};

module.exports = {
    findProductById,
    addProduct
};
