import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink, split } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";

import getStateLink from "./get-state-link";
import errorLink from "./error-link";

const cache = new InMemoryCache();

const stateLink = getStateLink(cache);
const httpLink = new HttpLink();

const wsLink = new WebSocketLink({
  uri: "ws://localhost:5000/subscriptions",
  options: {
    reconnect: true
  }
});

const httpWsLink = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);

    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  httpLink
);

const apolloClient = new ApolloClient({
  cache,
  link: ApolloLink.from([errorLink, stateLink, httpWsLink])
});

export default apolloClient;
