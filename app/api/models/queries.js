const mongoose = require('./queries_db_connect');

//Define a schema for Clients
const Schema = mongoose.Schema;
const QueriesSchema = new Schema({
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


module.exports = mongoose.model('products', QueriesSchema);