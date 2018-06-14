import React from "react";

const ChannelMessages = ({ messages }) => (
  <div>
    {messages
      ? messages.map((message, index) => <div key={index}>{message}</div>)
      : "No messages"}
  </div>
);

export default ChannelMessages;
