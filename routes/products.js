const express = require('express');
const router = express.Router();
const Products = require('../models/products');

router.get('/products', async (req, res) => {
    const products = await Products.find();
    res.json({ products });
});

module.exports = router;