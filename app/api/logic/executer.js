//var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/";
const eventDenormalizer = require('../../../config/cqrs-conf/cqrs').eventDenormalizer;
const queriesModel = require('../models/queries');
const commandsModel = require('../models/commands');

module.exports = {
  rebuild: function(){
    //MongoClient.connect(url, function(err, db) {
      //if (err) throw err;
      //var dbo = db.db("domain-products");
    //console.log("pasa de crear la conexion")
    commandsModel.find((err, result) => {
      if (err) throw err;
      console.log("entra en la consulta")
      console.log(result)
      for(evt of result){
        console.log(evt.payload)
        if(evt.payload.event !== "createdProduct"){
          queriesModel.find({}, (err, result3) => {console.log(result3)})
          queriesModel.find({cc: evt.payload.payload.cc}, (err, result2) =>
          {
            if (err) throw err;
            console.log(result2)
            //evt.payload.payload.id = result2[0].id;
            //eventDenormalizer.handle(evt.payload);
          })
        }else{
          console.log("pasa a crear producto")
          eventDenormalizer.handle(evt.payload);
          console.log("pasa de crear producto")
        }
        /*evt.payload.payload.id = result[0].id;
        console.log(evt.payload)
        eventDenormalizer.handle(evt.payload);*/
      }
      //db.close();
      return {status:"success"}
    });
  }
}