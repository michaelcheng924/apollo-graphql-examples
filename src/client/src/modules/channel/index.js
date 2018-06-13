import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'react-apollo';

import {
    channelQuery,
} from './graphql';
import {
    AddMessage,
    ChannelMessages
} from './components';

class Channel extends Component {
    render() {
        const { loading, messages, name } = this.props;

        if (loading) {
            return <h2>Loading</h2>;
        }

        return (
            <div>
                <Link to="/">Home</Link>
                <hr />
                <h2>{name}</h2>
                <hr />
                <AddMessage />
                <ChannelMessages messages={messages} />
            </div>
        );
    }
}

export default compose(
    channelQuery
)(Channel);
