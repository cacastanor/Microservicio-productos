module.exports = require('cqrs-eventdenormalizer').defineViewBuilder({
  name: 'productoCreado',
  aggregate: 'productos',
  id: 'payload.id'
}, 'create');