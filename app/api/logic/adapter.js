//Imports User Model

const domain = require('../../../config/cqrs-conf/cqrs').domain;
const productModel = require('../models/products');
const uuid4 = require('uuid4');
//Fs reads a file to later write it to user
const fs = require('fs');

function commandHandler(data,command){
    domain.handle({
       id: uuid4(),
       command: command,
       aggregate: {
       name: 'productos'
       },
       payload: data
    }, err => {
       if(err){
          console.log(err)
       }
  }) ;
}


module.exports = {
/*

*********COMANDS*********

*/
//Creates a new client with name and cc
 create: async(req, res, next) => {
     console.log("Crear")
     data = {tipo: req.body.tipo, cc: req.body.cc }
     commandHandler(data,'crearProducto')
     return res.json({status:"success"})
 },

 //Updates a client CC and name via its cc
 update: async(req, res, next) => {
   productModel.find({cc:req.body.cc, tipo:req.body.tipo}, (err,result) =>
   {
      console.log("Update")
      data = {cc:req.body.cc, tipo:req.body.tipo, id:result[0].id}
      commandHandler(data,'actualizarProducto')
      return res.json({status:"success"})
   })
},

//Deletes a client via its cc
delete: async(req, res, next) => {
   productModel.find({cc:req.body.cc, tipo:req.body.tipo}, (err,result) =>
   {
      console.log("Delete")
      data = {cc:req.body.cc, tipo:req.body.tipo, id:result[0].id}
      commandHandler(data,'eliminarProducto')
      return res.json({status:"success"})
   })
 },

 /*

*********QUERIES*********

*/

 //Returns the clients found   
 findOne: async(req, res, next) => {
   productModel.find({cc:req.body.cc, tipo:req.body.tipo}, (err,result) =>
   {
      console.log("FindOne")
      return res.json(result)
   })
},

 //Returns the clients found   
 findByType: async(req, res, next) => {
   productModel.find({tipo:req.body.tipo}, (err,result) =>
   {
      console.log("FindByType")
      return res.json(result)
   })
  },

  findAll: async(req, res, next) => {
   productModel.find((err,result) =>
   {
      console.log("findAll")
      return res.json(result)
   })
  },

  findByClient: async(req, res, next) => {
   productModel.find({cc:req.body.cc}, (err,result) =>
   {
      console.log("FindByCC")
      return res.json(result)
   })
  },


//If user logged previously : redirects to UserPage
//If user has not log in the system, loads registration page.
loadRegister: function(req, res, next) {
      fs.readFile('./app/views/create.html',function (err, data){
         res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
         res.write(data);
         res.end();
       })
    },


    loadDelete: function(req, res, next) {
      fs.readFile('./app/views/delete.html',function (err, data){
         res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
         res.write(data);
         res.end();
       })
    },

    loadUpdate: function(req, res, next) {
      fs.readFile('./app/views/update.html',function (err, data){
         res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
         res.write(data);
         res.end();
       })
    }
} 
