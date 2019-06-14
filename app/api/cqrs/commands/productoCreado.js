module.exports = require('cqrs-domain').defineEvent({
  name: 'productoCreado'
},
function (data, aggregate) {
  aggregate.set(data);
});