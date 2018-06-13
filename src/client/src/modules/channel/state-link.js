const channelPageDefaults = {
  channelPage: {
    __typename: "channelPage",
    messageInput: ""
  }
};

const channelPageMutations = {
  updateMessageInput(_, { messageInput }, { cache }) {
    const data = {
      channelPage: {
        __typename: "channelPage",
        messageInput
      }
    };

    cache.writeData({ data });

    return data.channelPage;
  }
};

export { channelPageDefaults, channelPageMutations };
