import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const channelQuery = graphql(
    gql`
        query channel($id: ID!) {
            channel(id: $id) {
                id
                name
                messages
            }
        }
    `,
        {
            options: ({ match: { params: { id } } }) =>  ({ variables: { id } }),
            props: ({ data: { loading, channel }}) => ({ loading, ...channel })
        }
);

export {
    channelQuery,
};
