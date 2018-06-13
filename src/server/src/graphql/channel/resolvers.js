import knex from "../connectors";
import { find } from "lodash";

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
    return knex("messages")
      .insert({ channel, text })
      .then(() => text);
  }
};

export { channelQuery, channelMutation };
