import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink } from "apollo-link";

import errorLink from "./error-link";
import httpWsLink from "./http-ws-link";

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  cache,
  link: ApolloLink.from([errorLink, httpWsLink])
});

export default apolloClient;
