const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    Name: { type: String, required: true }
});

module.exports = CategorySchema;