import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const channelsQuery = graphql(
    gql`
        query {
            channels {
                id
                name
                messages
            }
        }
    `,
    {
        props: ({
            data: { loading, error, channels }
        }) => {
            if (error) {
                console.log(`Error: ${error.message}`);
            }

            return {
                loading,
                channels: channels || []
            };
        }
    }
);

export {
    channelsQuery
};
