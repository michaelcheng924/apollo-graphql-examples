import React from 'react';

const AddMessage = ({
    addMessage,
    addMessageInput,
    updateAddMessageInput,
}) => (
        <form onSubmit={addMessage}>
            <input
                onChange={updateAddMessageInput}
                placeholder="Type here..."
            />
            <button>
                Add Message
            </button>
        </form>
    );

export default AddMessage;
