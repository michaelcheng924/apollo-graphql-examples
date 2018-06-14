import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink } from "apollo-link";

import errorLink from "./error-link";
import getStateLink from "./get-state-link";
import httpWsLink from "./http-ws-link";

const cache = new InMemoryCache();

const stateLink = getStateLink(cache);

const apolloClient = new ApolloClient({
  cache,
  link: ApolloLink.from([errorLink, stateLink, httpWsLink])
});

export default apolloClient;
