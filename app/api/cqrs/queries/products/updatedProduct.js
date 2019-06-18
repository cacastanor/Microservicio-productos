module.exports = require('cqrs-eventdenormalizer').defineViewBuilder({
  name: 'updatedProduct',
  aggregate: 'products',
  id: 'payload.id'
}, 'update');