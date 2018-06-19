import {
  subscriptionsDemoQuery,
  subscriptionsDemoMutation,
  subscriptionsDemoSubscription
} from "./subscriptions/resolvers";

const resolvers = {
  Query: {
    ...subscriptionsDemoQuery
  },
  Mutation: {
    ...subscriptionsDemoMutation
  },
  Subscription: {
    ...subscriptionsDemoSubscription
  }
};

export default resolvers;
