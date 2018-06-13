import React from 'react';

const AddChannel = ({
    addChannelNameInput,
    updateAddChannelNameInput,
}) => (
    <div>
        <input
            onChange={updateAddChannelNameInput}
            placeholder="Channel name"
        />
        <button>
            Add Channel
        </button>
    </div>
);

export default AddChannel;
