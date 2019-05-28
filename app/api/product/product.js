const mongoose = require('mongoose');

//Define a schema for Products
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
 name: {
  type: String,
  trim: true,
  required: true,
 },
 cc: {
  type: String,
  trim: true,
  required: true
 }
}, { collection : 'product' });


module.exports = mongoose.model('Product', ProductSchema);