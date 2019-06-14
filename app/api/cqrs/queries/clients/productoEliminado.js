module.exports = require('cqrs-eventdenormalizer').defineViewBuilder({
  name: 'productoEliminado',
  aggregate: 'productos',
  id: 'payload.id'
}, 'delete');