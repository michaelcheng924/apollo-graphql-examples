import { channelQuery, channelMutation } from "./channel/resolvers";
import { channelsQuery, channelsMutation } from "./channels/resolvers";

const resolvers = {
  Query: {
    ...channelQuery,
    ...channelsQuery
  },
  Mutation: {
    ...channelMutation,
    ...channelsMutation
  }
};

export default resolvers;
