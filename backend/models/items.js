const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    title: String,
    images: [String],
    category: String,
    price: Number
});

module.exports = mongoose.model('Items', ItemSchema);