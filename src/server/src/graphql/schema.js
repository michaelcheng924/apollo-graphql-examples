import { makeExecutableSchema } from "graphql-tools";

import Base from "./base";
import Channel from "./channel/schema";
import Channels from "./channels/schema";

import resolvers from "./resolvers";

const schema = makeExecutableSchema({
  typeDefs: [Base, Channel, Channels],
  resolvers
});

export default schema;
