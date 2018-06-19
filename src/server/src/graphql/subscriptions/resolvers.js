import knex from "../connectors";
import { withFilter } from "graphql-subscriptions";

import pubsub from "../pubsub";

const MESSAGE_ADDED = "messageAdded";

const subscriptionsDemoQuery = {
  subscriptionsDemo() {
    return knex("subscriptions")
      .join("messages")
      .then(results => {
        const result = results[0];
        result.messages = results.map(item => item.text).reverse();
        return result;
      });
  }
};

const subscriptionsDemoMutation = {
  addMessage(_, { text }) {
    pubsub.publish(MESSAGE_ADDED, {
      [MESSAGE_ADDED]: {}
    });

    return knex("messages")
      .insert({ text })
      .then(() => {
        return text;
      });
  }
};

const subscriptionsDemoSubscription = {
  messageAdded: {
    subscribe: withFilter(
      () => pubsub.asyncIterator(MESSAGE_ADDED),
      (payload, variables) => {
        return true;
      }
    )
  }
};

export {
  subscriptionsDemoQuery,
  subscriptionsDemoMutation,
  subscriptionsDemoSubscription
};
