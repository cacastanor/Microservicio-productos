module.exports = require('cqrs-domain').defineCommand({
  name: 'actualizarProducto'
}, function (data, aggregate) {
  console.log(data)
  aggregate.apply('productoActualizado', data);
});