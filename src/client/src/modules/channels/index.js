import React, { Component } from "react";
import { compose } from "react-apollo";

import {
  addChannelNameInputQuery,
  channelsQuery,
  addChannelMutation,
  deleteChannelMutation,
  updateAddChannelNameInputMutation
} from "./graphql";
import { AddChannel, ChannelsList, Loading } from "./components";

class Channels extends Component {
  updateAddChannelNameInput = event => {
    this.props.updateAddChannelNameInput(event.target.value);
  };

  addChannel = event => {
    event.preventDefault();

    const { addChannel, addChannelNameInput, refetch } = this.props;

    addChannel(addChannelNameInput, refetch);
  };

  deleteChannel = id => {
    const { deleteChannel, refetch } = this.props;

    deleteChannel(id, refetch);
  };

  render() {
    const { addChannelNameInput, channels, loading } = this.props;

    return loading ? (
      <Loading />
    ) : (
      <div>
        <AddChannel
          addChannel={this.addChannel}
          addChannelNameInput={addChannelNameInput}
          updateAddChannelNameInput={this.updateAddChannelNameInput}
        />
        <ChannelsList channels={channels} deleteChannel={this.deleteChannel} />
      </div>
    );
  }
}

export default compose(
  addChannelNameInputQuery,
  channelsQuery,

  addChannelMutation,
  deleteChannelMutation,
  updateAddChannelNameInputMutation
)(Channels);
