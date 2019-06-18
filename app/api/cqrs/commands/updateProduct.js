module.exports = require('cqrs-domain').defineCommand({
  name: 'updateProduct'
}, function (data, aggregate) {
  console.log(data)
  aggregate.apply('updatedProduct', data);
});