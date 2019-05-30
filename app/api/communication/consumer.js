const kafka = require('kafka-node');
const config = require('./config');


const Consumer = kafka.HighLevelConsumer;
const client = new kafka.KafkaClient(config.kafka_server);
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

module.exports.consumer = consumer





