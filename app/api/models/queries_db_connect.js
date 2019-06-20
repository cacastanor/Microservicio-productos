const mongoose = require('mongoose');
const config = require('../../../config/database');

mongoose.connect(config.db_queries,{ useNewUrlParser: true});

module.exports = mongoose;