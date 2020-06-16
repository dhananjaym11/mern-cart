const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    contactInfo: {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        }
    },
    orderInfo: [{
        name: String,
        quantity: Number
    }]
});

module.exports = mongoose.model('order', orderSchema);