// models.js
const mongoose = require('mongoose');

// Defina o esquema do produto
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  imageUrl: String,
  stock: Number,
});

// Crie um modelo com base no esquema
const Product = mongoose.model('Product', productSchema);

module.exports = { Product };
