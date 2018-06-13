import { graphql } from "react-apollo";
import gql from "graphql-tag";

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
    options: ({
      match: {
        params: { id }
      }
    }) => ({ variables: { id } }),
    props: ({ data: { channel, loading, refetch } }) => ({
      ...channel,
      loading,
      refetch
    })
  }
);

const messageInputQuery = graphql(
  gql`
    query {
      channelPage @client {
        messageInput
      }
    }
  `,
  {
    props: ({
      data: {
        channelPage: { messageInput }
      }
    }) => ({ messageInput })
  }
);

const addMessageMutation = graphql(
  gql`
    mutation addMessage($channel: Int!, $text: String!) {
      addMessage(channel: $channel, text: $text)
    }
  `,
  {
    props: ({ mutate }) => ({
      addMessage(channel, text) {
        mutate({
          variables: { channel, text }
        });
      }
    })
  }
);

const updateMessageInputMutation = graphql(
  gql`
    mutation updateMessageInput($messageInput: String) {
      updateMessageInput(messageInput: $messageInput) @client {
        channelPage {
          messageInput
        }
      }
    }
  `,
  {
    props: ({ mutate }) => ({
      updateMessageInput(messageInput) {
        mutate({
          variables: { messageInput }
        });
      }
    })
  }
);

const messageAddedSubscription = graphql(
  gql`
    subscription messageAdded($id: ID!) {
      messageAdded(id: $id) {
        id
        messages
      }
    }
  `,
  {
    options: ({
      match: {
        params: { id }
      }
    }) => ({ variables: { id } }),
    props: ({ data: { messages } }) => ({ newMessages: messages })
  }
);

export {
  messageInputQuery,
  channelQuery,
  addMessageMutation,
  updateMessageInputMutation,
  messageAddedSubscription
};
