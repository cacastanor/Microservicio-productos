const ProductEvent = require("./ProductEvent");
const saveEvents = require("./reducer");
const eventNames = require("./eventNames");
const execQuery = require("./reducer_queries");
const gud = require('gud')



const makeProductEvent = type => (data = {}) => {
  const tmp = Object.assign({}, data);

  if(type == eventNames.CreateProduct){
    id = gud();
    /*if(id == 1){
      var limit = 0;
      events = await ProductEvent.find({}, function(err, events){
        events.forEach(function(event){
        //console.log(event.id)
          if(event.id >= id){
            //limit = event.id;
            //console.log(limit);
            while(id <= event.id){
              id = gud();
            }
          }
        });
      });
      events = await ProductEvent.find();

      /*for(event of events){
        if(event.id > limit){
          limit = event.id
        }
      }
      console.log(limit)
      while(id <= limit){
        id = gud();
      }*//*
    }*/
  }else{
    id = tmp.id;
    delete tmp.id;
  }

  return new ProductEvent({
    type,
    id,
    data: tmp
  });
};

const CreateProduct = makeProductEvent(eventNames.CreateProduct);
const UpdateProductCC = makeProductEvent(eventNames.UpdateProductCC);
const UpdateProductName = makeProductEvent(eventNames.UpdateProductName);
const DeleteProduct = makeProductEvent(eventNames.DeleteProduct);

module.exports = {
  CreateProduct,
  UpdateProductCC,
  UpdateProductName,
  DeleteProduct,
  ProductEvent,
  eventNames,
  saveEvents,
  execQuery
};