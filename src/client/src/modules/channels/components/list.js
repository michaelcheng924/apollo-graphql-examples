import React, { Component } from 'react';

class ChannelsList extends Component {
    renderChannel(channel) {
        const { name } = channel.item;

        return (
            <div>
                {name}
            </div>
        );
    }

    render() {
        const { channels } = this.props;

        return channels.map(channel => (
            <div key={channel.id}>
                {channel.name}
            </div>
        ));
    }
}

export default ChannelsList;
