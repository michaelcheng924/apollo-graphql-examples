import {
  channelQuery,
  channelMutation,
  channelSubscription
} from "./channel/resolvers";
import { channelsQuery, channelsMutation } from "./channels/resolvers";

const resolvers = {
  Query: {
    ...channelQuery,
    ...channelsQuery
  },
  Mutation: {
    ...channelMutation,
    ...channelsMutation
  },
  Subscription: {
    ...channelSubscription
  }
};

export default resolvers;
