import { makeExecutableSchema } from "graphql-tools";

import Base from "./base";
import SubscriptionsDemo from "./subscriptions/schema";

import resolvers from "./resolvers";

const schema = makeExecutableSchema({
  typeDefs: [Base, SubscriptionsDemo],
  resolvers
});

export default schema;
