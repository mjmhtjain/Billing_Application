const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CategoryModel = require('./CategoryModel');

const ItemListSchema = new Schema({
    Name: { type: String, required: true },
    Category: CategoryModel
});

module.exports = ItemListSchema;