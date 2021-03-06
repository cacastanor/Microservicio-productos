const kafka = require('kafka-node');
const config = require('./config');
const reducer = require('./reducer')

const client = new kafka.KafkaClient({kafkaHost:config.kafkaHost});

module.exports = {
  startConsumer: function(){
    let consumer = new kafka.Consumer(
      client,
      [{ topic: config.kafka_clients_topic, partition: 0 }],
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
        const productAdapter = require('../../app/api/logic/adapter');
        reducer.reduceEvents(decodedMessage.event,decodedMessage.payload,productAdapter)

    })
  }
};