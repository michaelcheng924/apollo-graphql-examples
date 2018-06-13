import knex from "../connectors";
import { find } from "lodash";

const channelQuery = {
  channel(_, { id }) {
    return knex("channels")
      .join("messages", "channels.id", "=", "messages.channel")
      .then(results => {
        const result = find(results, result => result.id == id);
        result.messages = results.map(item => item.text);
        return result;
      });
  }
};

export { channelQuery };
