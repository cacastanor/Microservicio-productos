const mongoose = require('./commands_db_connect');

//Define a schema for Clients
const Schema = mongoose.Schema;
const EventsSchema = new Schema({
 id: {
  type: String
 },
 payload: {}
}, { collection : 'events' });


module.exports = mongoose.model('events', EventsSchema);