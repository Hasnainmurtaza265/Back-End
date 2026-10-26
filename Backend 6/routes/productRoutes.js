
const express = require('express');
const router = express.Router();

const {
    getProductById,
    createProduct
} = require('../controllers/productController');

router.get('/products/:id', getProductById);

router.post('/products', createProduct);

module.exports = router;
