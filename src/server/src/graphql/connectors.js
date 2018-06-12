import mongoose from 'mongoose';

import Channel from './channel/connectors';

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/apollo-fullstack-starter-kit');

export {
    Channel
};
