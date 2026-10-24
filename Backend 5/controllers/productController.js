
const { findProductById } = require('../models/productModel');

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

module.exports = { getProductById };

