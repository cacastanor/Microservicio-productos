const ProductEvent = require("./ProductEvent");
const eventNames = require("./eventNames");

const reduce = async productQuery => {
  let state;
  const events = await ProductEvent.find({id: productQuery.id});

  for(const event of events){
    if (event.type === eventNames.CreateProduct) {
      state = {id: productQuery.id, name: event.data.name, cc: event.data.cc};
    } else if (event.type === eventNames.UpdateProductCC) {
      state.cc = event.data.cc;
    } else if (event.type === eventNames.UpdateProductName) {
      state.name = event.data.name;
    } else {
      state = {};
    }
  }

  return state
};

module.exports = async query => {
  let state;

  state = await reduce(query);

  return state;
};