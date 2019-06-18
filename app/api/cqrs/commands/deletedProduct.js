module.exports = require('cqrs-domain').defineEvent({
  name: 'deletedProduct'
},
function (data, aggregate) {
  aggregate.destroy();
});