const channelsPageDefaults = {
    channelsPage: {
        __typename: 'channelsPage',
        nameInput: '',
    }
};

const channelsPageMutations = {
    updateAddChannelNameInput(_, { nameInput }, { cache }) {
        const data = {
            channelsPage: {
                __typename: 'channelsPage',
                nameInput,
            }
        };

        cache.writeData({ data });

        return data.channelsPage;
    }
}

export {
    channelsPageDefaults,
    channelsPageMutations,
};
