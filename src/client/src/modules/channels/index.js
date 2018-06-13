import React, { Component } from 'react';
import { compose } from 'react-apollo';

import {
    addChannelNameInputQuery,
    channelsQuery,

    addChannelMutation,
    deleteChannelMutation,
    updateAddChannelNameInputMutation,
} from './graphql';
import {
    AddChannel,
    ChannelsList,
    Loading,
} from './components';

class Channels extends Component {
    updateAddChannelNameInput = event => {
        this.props.updateAddChannelNameInput(event.target.value);
    };
    
    render() {
        const {
            addChannelNameInput,
            channels,
            loading,
        } = this.props;

        return loading
            ? <Loading />
            : (
            <div>
                <AddChannel
                    addChannelNameInput={addChannelNameInput}
                    updateAddChannelNameInput={this.updateAddChannelNameInput}
                />
                <ChannelsList channels={channels} />
            </div>
        );
    }
}

export default compose(
    addChannelNameInputQuery,
    channelsQuery,

    addChannelMutation,
    deleteChannelMutation,
    updateAddChannelNameInputMutation,
)(Channels);
