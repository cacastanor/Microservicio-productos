module.exports = require('cqrs-domain').defineCommand({
  name: 'crearProducto'
}, function (data, aggregate) {
  data.createdAt = new Date();
  aggregate.apply('productoCreado', data);
});