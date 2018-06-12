import { Channel } from '../connectors';

const channelsQuery = {
    channels() {
        return Channel.find({});
    }
};

export {
    channelsQuery
};
