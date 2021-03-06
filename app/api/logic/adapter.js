//Imports User Model

const domain = require('../../../config/cqrs-conf/cqrs').domain;
const productModel = require('../models/products');
const uuid4 = require('uuid4');
//Fs reads a file to later write it to user
const fs = require('fs');
const executer = require('./executer')

function commandHandler(data,command){
    domain.handle({
       id: uuid4(),
       command: command,
       aggregate: {
       name: 'products'
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
 create: function(req, res, next) {
   ready = 0 
   if(req.body.done){
       ready = 1
    }
     console.log("Create")
     data = {type: req.body.type, cc: req.body.cc, done:ready}
     commandHandler(data,'createProduct')
     if(res)
     return res.json({status:"success"})
 },

 //Updates a client CC and name via its cc
 update: function(req, res, next) {
   productModel.find({cc:req.body.cc, type:req.body.type}, (err,result) =>
   {
      if(result.length > 0){
        console.log("Update")
        data = {cc:req.body.cc, type:req.body.newType, id:result[0].id, oldType : req.body.type}
        commandHandler(data,'updateProduct')
        if(res)
        return res.json({status:"success"})
      }else{
        if(res)
        return res.json({status: "failed"})
      }
   })
},

//Deletes a client via its cc
delete: function(req, res, next) {
   productModel.find({cc:req.body.cc, type:req.body.type}, (err,result) =>
   {
      if(result.length > 0){
          console.log("Delete")
          data = {cc:req.body.cc, type:req.body.type, id:result[0].id}
          commandHandler(data,'deleteProduct')
          if(res)
          return res.json({status:"success"})
      }else{
        if(res)
        return res.json({status: "failed"})
      }
   })
 },

 deleteAll: function(req, res, next) {
   productModel.find({cc:req.body.cc}, (err,result) =>
   {
      console.log("DeleteAll")
      for(product in result){
         console.log(result[product])
         data = {cc:req.body.cc, type:result[product].type, id:result[product].id, done:1}
         commandHandler(data,'deleteProduct')
      }
      if(res)
      return res.json({status:"success"})
   })
 },

 /*

*********QUERIES*********

*/

 //Returns the clients found   
 findOne: function(req, res, next) {
   productModel.find({cc:req.body.cc, type:req.body.type}, (err,result) =>
   {
      console.log("FindOne")
      return res.json(result)
   })
},

 //Returns the clients found   
 findByType: function(req, res, next) {
   productModel.find({type:req.body.type}, (err,result) =>
   {
      console.log("FindByType")
      return res.json(result)
   })
  },

  findAll: function(req, res, next) {
   productModel.find((err,result) =>
   {
      console.log("findAll")
      return res.json(result)
   })
  },

  findByClient: function(req, res, next) {
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
    },

    loadSearch: function(req, res, next) {
      fs.readFile('./app/views/find.html',function (err, data){
         res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
         res.write(data);
         res.end();
       })
    },
    
    rebuild: function(req, res, next) {
      result = executer.rebuild();
      return res.json(result);
    },

    clientsOfProduct: function(req, res, next) {
      productModel.find({type: req.body.type}, (err, result) => {
        if (err) throw err;
        if(result.length > 0){
          return res.json(JSON.parse(JSON.stringify(result[0])).cc)
        }else{
          return res.json({})
        }
      })
    }
}
