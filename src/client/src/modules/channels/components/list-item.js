import React, { PureComponent } from 'react';

class ChannelsListItem extends PureComponent {
    deleteChannel = () => {
        const { deleteChannel, id } = this.props;

        deleteChannel(id);
    };
    
    render() {
        const { name } = this.props;

        return (
            <div>
                {name}
                {` | `}
                <button onClick={this.deleteChannel}>Delete</button>
            </div>
        );
    }
}

export default ChannelsListItem;
