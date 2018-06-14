import React, { Component } from "react";
import { Link } from "react-router-dom";
import { compose } from "react-apollo";

import {
  messageInputQuery,
  channelQuery,
  addMessageMutation,
  updateMessageInputMutation,
  messageAddedSubscription
} from "./graphql";
import { AddMessage, ChannelMessages } from "./components";

class Channel extends Component {
  componentWillUpdate(nextProps) {
    const { messageAddedLoading, refetch } = this.props;
    if (messageAddedLoading && !nextProps.messageAddedLoading) {
      refetch();
    }
  }

  updateMessageInput = event => {
    this.props.updateMessageInput(event.target.value);
  };

  addMessage = event => {
    event.preventDefault();

    const {
      addMessage,
      id,
      messageInput,
      refetch,
      updateMessageInput
    } = this.props;

    addMessage(id, messageInput);
    updateMessageInput("");
    refetch();
  };

  render() {
    const { loading, messageInput, messages, name } = this.props;

    if (loading) {
      return <h2>Loading</h2>;
    }

    return (
      <div>
        <Link to="/">Home</Link>
        <hr />
        <h2>{name}</h2>
        <hr />
        <AddMessage
          addMessage={this.addMessage}
          messageInput={messageInput}
          updateMessageInput={this.updateMessageInput}
        />
        <ChannelMessages messages={messages} />
      </div>
    );
  }
}

export default compose(
  channelQuery,
  messageInputQuery,
  addMessageMutation,
  updateMessageInputMutation,
  messageAddedSubscription
)(Channel);
