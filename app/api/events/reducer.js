const eventNames = require("./eventNames");

const reduce = async productEvent => {

  if (productEvent.type === eventNames.CreateProduct) {
    await productEvent.save();
    return {state: "success", id: productEvent.id};

  } else if (productEvent.type === eventNames.UpdateProductCC) {
  //update cc
    await productEvent.save();
    return "success";

  } else if (productEvent.type === eventNames.UpdateProductName) {
  // update name
    await productEvent.save();
    return "success";

  } else {
  // Delete
<<<<<<< HEAD
    const output = await Product.deleteMany({cc: productEvent.cc });
=======
>>>>>>> 3fa2904bca65be1e8fa602f25853f93a72af7dde
    await productEvent.save();
    return "success";

  }
};

module.exports = async events => {
  let product;

  // why not a map or forEach???
  // because we want each event to be synchronously applied
  for (const e of events) {
    product = await reduce(e);
  }

  return product;
};
