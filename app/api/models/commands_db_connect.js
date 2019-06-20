const mongoose = require('mongoose');
const config = require('../../../config/database');

mongoose.connect(config.db_commands,{ useNewUrlParser: true});

module.exports = mongoose;