const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    items: [{
        id: Number,
        title: String,
        price: Number,
        qty: Number,
        image: String
    }],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Order', orderSchema);
