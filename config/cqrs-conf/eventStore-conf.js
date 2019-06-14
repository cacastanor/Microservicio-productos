module.exports = {
    eventStore: {
        type: 'mongodb',
        host: 'localhost',                          // optional
        port: 27017,                                // optional
        dbName: 'domain-productos',                           // optional
        eventsCollectionName: 'eventos',             // optional
        snapshotsCollectionName: 'snapshots',       // optional 
        transactionsCollectionName: 'transactiones', // optional
    },
    eventDefinition : {
        correlationId: 'commandId',
        id: 'id',
        name: 'event',
        aggregateId: 'id',
        aggregate: 'aggregate.name',
        payload: 'payload',
        revision: 'head.revision',
        meta: 'meta'
    },
    commandDefinition: {
        id: 'id',
        name: 'command',
        aggregateId: 'id',
        aggregate: 'aggregate.name',
        payload: 'payload',
        revision: 'head.revision',
        meta: 'meta'
    }
}
