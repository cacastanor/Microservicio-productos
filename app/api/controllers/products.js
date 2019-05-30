const productModel = require('../product/product');
const E = require("../events");

module.exports = {
// commands
  eventCreate: async(req, res) => {
    const createProduct = E.CreateProduct({cc: req.body.cc, name: req.body.name})
    const product = await E.saveEvents([createProduct])

    return res.json({product})
  },

  eventUpdateCC: async(req, res) => {
    const updateProduct = E.UpdateProductCC({cc: req.body.cc, new_cc: req.body.new_cc})
    const product = await E.saveEvents([updateProduct])

    return res.json({product})
  },

  eventUpdateName: async(req, res) => {
    const updateProduct = E.UpdateProductName({cc: req.body.cc, name: req.body.name})
    const product = await E.saveEvents([updateProduct])

    return res.json({product})
  },

  eventDelete: async(req, res) => {
    const deleteProduct = E.DeleteProduct({cc: req.body.cc})
    const output = await E.saveEvents([deleteProduct])

    return res.json({output})
  },


//// Querys
  listEvents: async(req, res) => {
    E.ProductEvent.find(function (err, result){
      if (err){
        console.log("Error listing events : "+err)
        return res.json({status:"failed"})
      }else{
        return res.json({result})
      }
    });
  },

  findProduct: async(req, res) => {
    const product = productModel.findOne({cc: req.body.cc}, function(err, result){
      if (err){
        console.log("Error finding product : "+err)
        return res.json({status:"failed"})
      }else{
        return res.json({result})
      }
    });
  },

  listProducts: async(req, res) => {
    productModel.find(function (err, result){
      if(err){
        console.log("Error listing products : "+err)
        return res.json({status:"failed"})
      }else{
        return res.json({result})
      }
    });
  }
} 
