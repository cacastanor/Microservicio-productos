module.exports = require('cqrs-domain').defineEvent({
  name: 'productoActualizado'
},
function (data, aggregate) {
  aggregate.set(data);
});