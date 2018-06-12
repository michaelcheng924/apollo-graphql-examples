import { Channel } from '../connectors';

const channelsQuery = {
    channels() {
        return Channel.find({});
    }
};

const channelsMutation = {
    addChannel(_, { name }) {
        const channel = new Channel({
            name,
            messages: []
        });

        return channel.save();
    },
    deleteChannel(_, { id }) {
        return Channel.remove({ _id: id }).then(() => ({
            id
        }));
    }
}

export {
    channelsQuery,
    channelsMutation,
};
