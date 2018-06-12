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
    }
}

export {
    channelsQuery,
    channelsMutation,
};
