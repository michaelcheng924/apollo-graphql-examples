import { graphql } from "react-apollo";
import gql from "graphql-tag";

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
    props: ({ data: { loading, channels, refetch } }) => ({
      loading,
      channels,
      refetch
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
    props: ({
      data: {
        channelsPage: { nameInput }
      }
    }) => ({ addChannelNameInput: nameInput })
  }
);

const addChannelMutation = graphql(
  gql`
    mutation addChannel($name: String!) {
      addChannel(name: $name) {
        id
        name
      }
    }
  `,
  {
    props: ({ mutate }) => ({
      addChannel(name, refetch) {
        mutate({
          variables: { name }
        }).then(refetch);
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
      deleteChannel(id, refetch) {
        mutate({
          variables: { id }
        }).then(refetch);
      }
    })
  }
);

const updateAddChannelNameInputMutation = graphql(
  gql`
    mutation updateAddChannelNameInput($nameInput: String) {
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
        });
      }
    })
  }
);

export {
  addChannelNameInputQuery,
  channelsQuery,
  addChannelMutation,
  deleteChannelMutation,
  updateAddChannelNameInputMutation
};
