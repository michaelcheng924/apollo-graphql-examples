import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const channelsQuery = graphql(
    gql`
        query {
            channels {
                id
                name
            }
        }
    `,
    {
        props: ({ data: { loading, channels } }) => ({
            loading,
            channels
        })
    }
);

const addChannelNameInputQuery = graphql(
    gql`
        query {
            channelsPage @client {
                nameInput
            }
        }
    `,
    {
        props: ({ data: { channelsPage: { nameInput } }}) => ({ addChannelNameInput: nameInput })
    }
);

const addChannelMutation = graphql(
    gql`
        mutation addChannel($name: String!) {
            addChannel(name: $string) {
                id
                name
            }
        }
    `,
    {
        props: ({ mutate }) => ({
            addChannel(name) {
                mutate({
                    variables: { name }
                })
            }
        })
    }
);

const deleteChannelMutation = graphql(
    gql`
        mutation deleteChannel($id: ID!) {
            deleteChannel(id: $id) {
                id
            }
        }
    `,
    {
        props: ({ mutate }) => ({
            deleteChannel(id) {
                mutate({
                    variables: { id }
                })
            }
        })
    }
);

const updateAddChannelNameInputMutation = graphql(
    gql`
        mutation updateAddChannelNameInput ($nameInput: String) {
            updateAddChannelNameInput(nameInput: $nameInput) @client {
                channelsPage {
                    nameInput
                }
            }
        }
    `,
    {
        props: ({ mutate }) => ({
            updateAddChannelNameInput(nameInput) {
                mutate({
                    variables: { nameInput }
                })
            }
        })
    }
)

export {
    addChannelNameInputQuery,
    channelsQuery,

    addChannelMutation,
    deleteChannelMutation,
    updateAddChannelNameInputMutation,
};
