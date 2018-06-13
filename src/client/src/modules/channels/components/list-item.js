import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class ChannelsListItem extends PureComponent {
    deleteChannel = () => {
        const { deleteChannel, id } = this.props;

        deleteChannel(id);
    };
    
    render() {
        const { id, name } = this.props;

        return (
            <div>
                {name}
                {` | `}
                <Link to={`/channel/${id}`}>
                    <button>Enter</button>
                </Link>
                {` | `}
                <button onClick={this.deleteChannel}>Delete</button>
            </div>
        );
    }
}

export default ChannelsListItem;
