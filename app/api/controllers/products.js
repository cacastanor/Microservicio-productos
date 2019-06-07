const productModel = require('../product/product');
const E = require("../events");


//Fs reads a file to later write it to user
const fs = require('fs');
module.exports = {
// Commands
  eventCreate: async(req, res) => {
    const createProduct = E.CreateProduct({cc: req.body.cc, name: req.body.name})
    const product = await E.saveEvents([createProduct])
    return res.json({product})
  },

  eventUpdateCC: async(req, res) => {
    const updateProduct = E.UpdateProductCC({id: req.body.id, cc: req.body.cc})
    const product = await E.saveEvents([updateProduct])

    return res.json({product})
  },

  eventUpdateName: async(req, res) => {
    const updateProduct = E.UpdateProductName({id: req.body.id, name: req.body.name})
    await E.saveEvents([updateProduct])

    return res.json({status:"success"})
  },

  eventDelete: async(req, res) => {
    const deleteProduct = E.DeleteProduct({id: req.body.id})
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
    const findP = await E.execQuery({id: req.body.id})
    return res.json(findP)
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
  },

  loadProducts: function(req, res, next) {
    fs.readFile('./app/views/index.html',function (err, data){
       res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
       res.write(data);
       res.end();
     })
  },

  loadEvents: function(req, res, next) {
    fs.readFile('./app/views/eventos.html',function (err, data){
       res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
       res.write(data);
       res.end();
     })
  }
} 
