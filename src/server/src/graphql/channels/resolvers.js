import knex from "../connectors";

const channelsQuery = {
  channels() {
    return knex("channels");
  }
};

const channelsMutation = {
  addChannel(_, { name }) {
    return knex("channels")
      .insert({
        name
      })
      .then(() => {
        return knex("channels")
          .where({ name })
          .then(results => {
            return results[0];
          });
      });
  },
  deleteChannel(_, { id }) {
    return knex("channels")
      .where({ id })
      .del()
      .then(() => ({
        id
      }));
  }
};

export { channelsQuery, channelsMutation };
