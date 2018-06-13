import { withClientState } from "apollo-link-state";

import {
  channelPageDefaults,
  channelPageMutations
} from "../modules/channel/state-link";
import {
  channelsPageDefaults,
  channelsPageMutations
} from "../modules/channels/state-link";

function getStateLink(cache) {
  return withClientState({
    cache,
    resolvers: {
      Mutation: {
        ...channelPageMutations,
        ...channelsPageMutations
      }
    },
    defaults: {
      ...channelPageDefaults,
      ...channelsPageDefaults
    }
  });
}

export default getStateLink;
