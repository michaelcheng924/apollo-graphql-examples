import { channelsQuery, channelsMutation } from './channels/resolvers';

const resolvers = {
    Query: {
        ...channelsQuery
    },
    Mutation: {
        ...channelsMutation
    }
};

export default resolvers;
