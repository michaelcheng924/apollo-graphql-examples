import { channelsQuery } from './channels/resolvers';

const resolvers = {
    Query: {
        ...channelsQuery
    }
};

export default resolvers;
