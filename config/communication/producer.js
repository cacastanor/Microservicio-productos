const kafka = require('kafka-node');
const config = require('./config');


const Producer = kafka.Producer;
const client = new kafka.KafkaClient({kafkaHost:config.kafkaHost});
const producer = new Producer(client);

producer.on('ready', async function() {
    console.log("Kafka producer ready")
});

producer.on('error', function(err) {
    console.log(err);
    throw err;
});

const KafkaService = {
    sendRecord: (event, callback = () => {}) => { 
        const buffer = new Buffer.from(JSON.stringify(event));
        // Create a new payload
        const record = [
            {
                topic: config.kafka_products_topic,
                messages: buffer,
                attributes: 1 /* Use GZip compression for the payload */
            }
        ];
        //Send record to Kafka and log result/error
        if(event.payload.done !== 1){
            producer.send(record, callback);
        }
    }
};
 

module.exports = KafkaService


  