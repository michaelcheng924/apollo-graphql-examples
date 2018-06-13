import { withClientState } from 'apollo-link-state';

import { channelsPageDefaults, channelsPageMutations } from '../modules/channels/state-link';

function getStateLink(cache) {
    return withClientState({
        cache,
        resolvers: {
            Mutation: {
                ...channelsPageMutations
            }
        },
        defaults: {
            ...channelsPageDefaults
        }
    });
}

export default getStateLink;
