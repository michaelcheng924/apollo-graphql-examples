import React from 'react';

const AddChannel = ({
    addChannel,
    addChannelNameInput,
    updateAddChannelNameInput,
}) => (
    <form onSubmit={addChannel}>
        <input
            onChange={updateAddChannelNameInput}
            placeholder="Channel name"
        />
        <button>
            Add Channel
        </button>
    </form>
);

export default AddChannel;
