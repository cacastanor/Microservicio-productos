module.exports = require('cqrs-eventdenormalizer').defineViewBuilder({
  name: 'deletedProduct',
  aggregate: 'products',
  id: 'payload.id'
}, 'delete');