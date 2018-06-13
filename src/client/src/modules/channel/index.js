import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'react-apollo';

import {
    channelQuery,
} from './graphql';

class Channel extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <Link to="/">Home</Link>
            </div>
        );
    }
}

export default compose(
    channelQuery
)(Channel);
