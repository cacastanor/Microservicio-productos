module.exports = require('cqrs-eventdenormalizer').defineViewBuilder({
  name: 'createdProduct',
  aggregate: 'products',
  id: 'payload.id'
}, 'create');