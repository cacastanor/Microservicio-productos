module.exports = require('cqrs-domain').defineEvent({
  name: 'createdProduct'
},
function (data, aggregate) {
  aggregate.set(data);
});