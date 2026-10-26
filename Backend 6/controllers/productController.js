
const {
    findProductById,
    addProduct
} = require('../models/productModel');

const getProductById = (req, res) => {
    const id = Number(req.params.id);

    const product = findProductById(id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.json(product);
};

const createProduct = (req, res) => {
    const { name, price } = req.body;

    if (!name || price === undefined || price === null || price === '') {
        return res.status(400).json({
            message: "Name and price are required"
        });
    }

    const newProduct = addProduct(name, Number(price));

    res.status(201).json({
        message: "Product added successfully",
        product: newProduct
    });
};

module.exports = {
    getProductById,
    createProduct
};
