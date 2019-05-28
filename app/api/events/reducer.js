const eventNames = require("./eventNames");
const Product = require("../product/product");

const reduce = async productEvent => {
  console.log(`Trying to apply ${productEvent.type}`);
  console.log("--------------------------");

  if (productEvent.type === eventNames.CreateProduct) {
    const product = new Product({ cc: productEvent.cc, name: productEvent.data.name });
    await productEvent.save();
    const savedProduct = await product.save();
    console.log(`Applied ${productEvent.type} successfully`);
    console.log("--------------------------");
    return savedProduct;

  } else if (productEvent.type === eventNames.UpdateProductCC) {
    const product = await Product.findOne({ cc: productEvent.cc });
    product.cc = productEvent.data.new_cc;
    await productEvent.save();
    const savedProduct = await product.save();

    console.log(`Applied ${productEvent.type} successfully`);
    console.log("--------------------------");
    return savedProduct;

  } else if (productEvent.type === eventNames.UpdateProductName) {
    const product = await Product.findOne({ cc: productEvent.cc });
    product.name = productEvent.data.name
    await productEvent.save();
    const savedProduct = await product.save();

    console.log(`Applied ${productEvent.type} successfully`);
    console.log("--------------------------");
    return savedProduct;

  } else {
    await Product.deleteOne({cc: productEvent.data.cc });
    await productEvent.save();
    console.log(`Applied ${productEvent.type} successfully`);
    console.log("--------------------------");

    return "I do not know the return value for this"

      ////// ********* find product and list products events missing *********** /////////
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
