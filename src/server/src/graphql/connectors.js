const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('database.sqlite');

db.serialize();

const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: 'database.sqlite'
    },
    useNullAsDefault: true
});

knex.schema.hasTable('channels').then(hasTable => {
    if (!hasTable) {
        knex.schema.createTable('channels', table => {
            table.increments('id');
            table.string('name');
        }).then(() => {
            knex('channels').insert({
                name: 'Seed channel'
            }).then(() => {
                console.log('Table "channels" created and seeded');
            });
        });
    }
});

knex.schema.hasTable('messages').then(hasTable => {
    if (!hasTable) {
        knex.schema.createTable('messages', table => {
            table.increments('id');
            table.string('text');
            table.integer('channel');
        }).then(() => {
            knex('messages').insert({
                text: 'Seed message',
                channel: 1
            }).then(() => {
                console.log('Table "messages" created and seeded');
            });
        });
    }
});

export default knex;
