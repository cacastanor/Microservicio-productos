module.exports = {
    eventStore: {
        type: 'mongodb',
        host: 'mongo-server',                          // optional
        port: 27017,                                // optional
        dbName: 'domain-products',                           // optional
        eventsCollectionName: 'events',             // optional
        snapshotsCollectionName: 'snapshots',       // optional 
        transactionsCollectionName: 'transactions', // optional
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
