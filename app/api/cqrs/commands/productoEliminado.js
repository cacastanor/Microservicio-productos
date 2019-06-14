module.exports = require('cqrs-domain').defineEvent({
  name: 'productoEliminado'
},
function (data, aggregate) {
  aggregate.destroy();
});