import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";

import getStateLink from "./get-state-link";

const cache = new InMemoryCache();

const stateLink = getStateLink(cache);
const httpLink = new HttpLink();

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      try {
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(
            locations
          )}, Path: ${path}`
        );
      } catch (error) {
        console.log(error);
      }

      return null;
    });
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

const apolloClient = new ApolloClient({
  cache,
  link: ApolloLink.from([errorLink, stateLink, httpLink])
});

export default apolloClient;
