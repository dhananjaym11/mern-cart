const express = require('express');
const router = express.Router();
const Order = require('../models/order');

router.get('/orders', async (req, res) => {
    const order = await Order.find();
    res.json({ order })
});

router.post('/order', async (req, res) => {
    const order = new Order(req.body);
    await order.save();
    res.status(201).send('Success')
});

module.exports = router;