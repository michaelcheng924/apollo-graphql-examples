import { graphql } from "react-apollo";
import gql from "graphql-tag";

const subscriptionsDemoQuery = graphql(
  gql`
    query subscriptionsDemo {
      subscriptionsDemo {
        id
        messages
      }
    }
  `,
  {
    props: ({ data: { loading, refetch, subscriptionsDemo } }) => ({
      ...subscriptionsDemo,
      loading,
      refetch
    })
  }
);

const addMessageMutation = graphql(
  gql`
    mutation addMessage($text: String!) {
      addMessage(text: $text)
    }
  `,
  {
    props: ({ mutate }) => ({
      addMessage(text) {
        mutate({
          variables: { text }
        });
      }
    })
  }
);

const messageAddedSubscription = graphql(
  gql`
    subscription messageAdded {
      messageAdded {
        messages
      }
    }
  `,
  {
    props: ({ data: { loading } }) => ({ messageAddedLoading: loading })
  }
);

export { subscriptionsDemoQuery, addMessageMutation, messageAddedSubscription };
