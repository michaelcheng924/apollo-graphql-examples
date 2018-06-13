import knex from "../connectors";
import { withFilter } from "graphql-subscriptions";
import { find } from "lodash";

import pubsub from "../pubsub";

const MESSAGE_ADDED = "messageAdded";

const channelQuery = {
  channel(_, { id }) {
    return knex("channels")
      .join("messages", "channels.id", "=", "messages.channel")
      .then(results => {
        const result = find(results, result => result.id == id);
        result.messages = results.map(item => item.text).reverse();
        return result;
      });
  }
};

const channelMutation = {
  addMessage(_, { channel, text }) {
    pubsub.publish(MESSAGE_ADDED, {
      [MESSAGE_ADDED]: {
        id: channel,
        messages: knex("messages")
          .where({ channel })
          .map(message => message.text)
          .then(messages => messages.reverse())
      }
    });

    return knex("messages")
      .insert({ channel, text })
      .then(() => text);
  }
};

const channelSubscription = {
  messageAdded: {
    subscribe: withFilter(
      () => pubsub.asyncIterator(MESSAGE_ADDED),
      (payload, variables) => payload[MESSAGE_ADDED].id == variables.id
    )
  }
};

export { channelQuery, channelMutation, channelSubscription };
