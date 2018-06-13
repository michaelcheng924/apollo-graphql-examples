import React from "react";

const AddMessage = ({ addMessage, messageInput, updateMessageInput }) => (
  <form onSubmit={addMessage}>
    <input
      onChange={updateMessageInput}
      placeholder="Type here..."
      value={messageInput}
    />
    <button>Add Message</button>
  </form>
);

export default AddMessage;
