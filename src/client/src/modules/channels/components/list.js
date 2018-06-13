import React, { Component } from "react";

import { ChannelsListItem } from ".";

class ChannelsList extends Component {
  render() {
    const { channels, deleteChannel } = this.props;

    return channels.map(channel => (
      <ChannelsListItem
        {...channel}
        deleteChannel={deleteChannel}
        key={channel.id}
      />
    ));
  }
}

export default ChannelsList;
