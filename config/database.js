//Set up mongoose connection and db config

var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env =  process.env.NODE_ENV || 'dev';   

var config = {
  dev: {
    baseUrl: "/",
    root: rootPath,
    app: {
      name: 'productBD'
    },
    port: process.env.PORT || 4000,
    db: 'mongodb://localhost/productBD'
  },

  test: {
    baseUrl: "/",
    root: rootPath,
    app: {
      name: 'productBD'
    },
    port: process.env.PORT || 4000,
    db: 'mongodb://mongo-server/productBD'
  },

  prod: {
    baseUrl: "/",
    root: rootPath,
    app: {
      name: 'productBD'
    },
    port: process.env.PORT || 4000,
    db: 'mongodb://mongo-server/productBD'
  }
};

module.exports = config[env];