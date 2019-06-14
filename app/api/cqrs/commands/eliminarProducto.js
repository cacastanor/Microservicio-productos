module.exports = require('cqrs-domain').defineCommand({
  name: 'eliminarProducto'
}, function (data, aggregate) {
  aggregate.apply('productoEliminado', data);
});