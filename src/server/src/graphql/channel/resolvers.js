import knex from '../connectors';

const channelQuery = {
    channel(_, { id }) {
        return knex('channels').where({ id });
    }
};

export {
    channelQuery,
};
