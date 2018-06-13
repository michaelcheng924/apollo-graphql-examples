import { channelQuery } from './channel/resolvers';
import { channelsQuery, channelsMutation } from './channels/resolvers';

const resolvers = {
    Query: {
        ...channelQuery,
        ...channelsQuery,
    },
    Mutation: {
        ...channelsMutation,
    }
};

export default resolvers;
