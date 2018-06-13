import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'react-apollo';

import {
    channelQuery,
} from './graphql';
import { ChannelMessages } from './components';

class Channel extends Component {
    render() {
        const { loading, messages, name } = this.props;

        if (loading) {
            return <div>Loading</div>;
        }

        return (
            <div>
                <Link to="/">Home</Link>
                <hr />
                <div>{name}</div>
                <hr />
                <ChannelMessages messages={messages} />
            </div>
        );
    }
}

export default compose(
    channelQuery
)(Channel);
