import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const channelQuery = graphql(
    gql`
        query {
            channel {
                id
                name
                messages
            }
        }
    `,
        {
            props: ({ data: { loading, channel }}) => ({ loading, channel })
        }
);

export {
    channelQuery,
};
