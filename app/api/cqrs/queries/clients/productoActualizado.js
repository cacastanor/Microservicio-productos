module.exports = require('cqrs-eventdenormalizer').defineViewBuilder({
  name: 'productoActualizado',
  aggregate: 'productos',
  id: 'payload.id'
}, 'update');