//Imports User Model
const productModel = require('../models/products');

module.exports = {

//Creates a nepw product with name and cc
 create: function(req, res, next) {
      productModel.create({ name: req.body.name, cc: req.body.cc }, function (err, result) {
      if (err){ 
         console.log("Error creating product : "+err)
         return res.json({status:"failed"})
         }else
         console.log(result)
         return res.json({status:"success"})
      });
 },

 //Updates a product CC and name via its cc
 update: function(req, res, next) {
   newValues= {cc:req.body.cc, name:req.body.name}
  productModel.updateOne({cc: req.body.cc },newValues, function (err, result) {
  if (err){ 
     console.log("Error updating product : "+err)
     return res.json({status:"failed"})
     }else
     return res.json({status:"success"})
  });
},

//Deletes a product via cc
delete: function(req, res, next) {
  productModel.deleteOne({cc: req.body.cc }, function (err, result) {
  if (err){ 
     console.log("Error deleting product : "+err)
     return res.json({status:"failed"})
     }else
     return res.json({status:"success"})
  });
 },


 //Returns the products found
 findOne: function(req, res, next) {
   productModel.find({cc: req.body.cc },function (err, result) {
   if (err){ 
      console.log("Error getting data : "+err)
      return res.json({status:"failed"})
      }else
      return res.json({result})
   });
},

 //Returns the products found
 findAll: function(req, res, next) {
   productModel.find(function (err, result) {
   if (err){ 
      console.log("Error getting data : "+err)
      return res.json({status:"failed"})
      }else
      return res.json({result})
   });
  }
} 
