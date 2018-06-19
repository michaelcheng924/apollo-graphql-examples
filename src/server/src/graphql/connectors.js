const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("database.sqlite");

db.serialize();

const knex = require("knex")({
  client: "sqlite3",
  connection: {
    filename: "database.sqlite"
  },
  useNullAsDefault: true
});

knex.schema.hasTable("subscriptions").then(hasTable => {
  if (!hasTable) {
    knex.schema
      .createTable("subscriptions", table => {
        table.increments("id");
      })
      .then(() => {
        knex("subscriptions")
          .insert({})
          .then(() => {
            console.log('Table "subscriptions" created and seeded');
          });
      });
  }
});

knex.schema.hasTable("messages").then(hasTable => {
  if (!hasTable) {
    knex.schema
      .createTable("messages", table => {
        table.increments("messageId");
        table.string("text");
      })
      .then(() => {
        knex("messages")
          .insert({
            text: "Welcome to the Subscriptions demo!"
          })
          .then(() => {
            console.log('Table "messages" created and seeded');
          });
      });
  }
});

export default knex;
