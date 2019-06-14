const mongoose = require('mongoose');

//Define a schema for Clients
const Schema = mongoose.Schema;
const ProductsSchema = new Schema({
 tipo: {
  type: String,
  trim: true,  
  required: true,
 },
 cc: {
  type: String,
  trim: true,
  required: true
 }
}, { collection : 'productos' });


module.exports = mongoose.model('productos', ProductsSchema);