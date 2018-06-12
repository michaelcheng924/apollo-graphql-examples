import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';


export const cache = new InMemoryCache();

const httpLink = new HttpLink();

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) => {
            try {
                console.log(`[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(locations)}, Path: ${path}`);
            } catch (error) {
                console.log(error);
            }
        })
    }
    if (networkError) {
        console.log(`[Network error]: ${networkError}`);
    }
});

const apolloClient = new ApolloClient({
    cache,
    link: ApolloLink.from([errorLink, httpLink])
});

export default apolloClient;
