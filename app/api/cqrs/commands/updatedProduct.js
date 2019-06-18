module.exports = require('cqrs-domain').defineEvent({
  name: 'updatedProduct'
},
function (data, aggregate) {
  aggregate.set(data);
});