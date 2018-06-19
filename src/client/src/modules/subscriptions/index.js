import React, { Component } from "react";
import { compose } from "react-apollo";

import {
  subscriptionsDemoQuery,
  addMessageMutation,
  messageAddedSubscription
} from "./graphql";
import { ChannelMessages } from "./components";

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

    const { addMessage, refetch } = this.props;

    addMessage(this.messageInput.value);
    this.messageInput.value = "";
    refetch();
  };

  render() {
    const { loading, messages } = this.props;

    if (loading) {
      return <h2>Loading</h2>;
    }

    return (
      <div>
        <h2>Subscriptions Demo</h2>
        <div>
          Open this page in two tabs. Add a message to one tab. That message
          should automatically appear in the second tab also!
        </div>
        <hr />
        <form onSubmit={this.addMessage}>
          <input
            placeholder="Type here..."
            ref={messageInput => (this.messageInput = messageInput)}
          />
          <button>Add Message</button>
        </form>
        <ChannelMessages messages={messages} />
      </div>
    );
  }
}

export default compose(
  subscriptionsDemoQuery,
  addMessageMutation,
  messageAddedSubscription
)(Channel);
