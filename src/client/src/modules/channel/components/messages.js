import React from 'react';

const ChannelMessages = ({ messages }) => (
    <div>
        {
            messages.map((message, index) => <div key={index}>{message}</div>)
        }
    </div>
)

export default ChannelMessages;
