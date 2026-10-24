
const products = [
    { id: 1, name: "Laptop", price: 20000 },
    { id: 2, name: "Mobile", price: 10000 },
    { id: 3, name: "Headphone", price: 3000 }
];

const findProductById = (id) => {
    return products.find((item) => item.id === id);
};

module.exports = { findProductById };
