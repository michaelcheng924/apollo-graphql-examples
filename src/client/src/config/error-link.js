import { onError } from "apollo-link-error";

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

export default errorLink;
