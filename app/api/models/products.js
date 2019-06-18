const mongoose = require('mongoose');

//Define a schema for Clients
const Schema = mongoose.Schema;
const ProductsSchema = new Schema({
 type: {
  type: String,
  trim: true,  
  required: true,
 },
 cc: {
  type: String,
  trim: true,
  required: true
 }
}, { collection : 'products' });


module.exports = mongoose.model('products', ProductsSchema);