import mongoose from 'mongoose';

const channelSchema = new mongoose.Schema({
    name: String,
    messages: Array
});

channelSchema.virtual('id').get(function() {
    return this._id.toHexString();
});

channelSchema.set('toObject', {
    getters: true
});

const Channel = mongoose.model('Channel', channelSchema);

export default Channel;
