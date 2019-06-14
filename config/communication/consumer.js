const kafka = require('kafka-node');
const config = require('./config');
//const E = require('../events')


const client = new kafka.KafkaClient(config.kafka_server);

function executeEvent(decodedMessage){
  console.log(decodedMessage)

  switch(decodedMessage.type){
    case "userDeleted":
      //const deleteProducts = E.DeleteProduct({cc:decodedMessage.cc})
      //E.saveEvents([deleteProducts])
      break
    case "userUpdated":
      console.log("Updated")
      break
    case "userCreated":
      //const createProduct = E.CreateProduct({cc:decodedMessage.cc,name:"Débito"})
      //E.saveEvents([createProduct])
      break

  }
}
module.exports = {
  startConsumer: function(){
    let consumer = new kafka.Consumer(
      client,
      [{ topic: config.kafka_topic, partition: 0 }],
      {
        autoCommit: true,
        fetchMaxWaitMs: 1000,
        fetchMaxBytes: 1024 * 1024,
        encoding: "buffer",
        fromOffset: false
      }
    );


    consumer.on('error', function(err) {
      console.log('error', err);
    });

    consumer.on('message', async function(message) {
      // Read string into a buffer.
      var buf = new Buffer.from(message.value, "binary");
      var decodedMessage = JSON.parse(buf.toString());
      executeEvent(decodedMessage)
    })
  }
};