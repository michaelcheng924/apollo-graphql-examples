import React, { Component } from 'react';
import { compose } from 'react-apollo';
import { StyleSheet, Text, View } from 'react-native';

import {
    channelsQuery,

    addChannelMutation,
    deleteChannelMutation,
} from './graphql';
import {
    AddChannel,
    ChannelsList,
    Loading,
} from './components';

class Channels extends Component {
    render() {
        const { channels, loading } = this.props;

        if (loading) {
            return <Text style={styles.loading}>Loading...</Text>;
        }

        return loading
            ? <Loading />
            : (
            <View>
                <AddChannel />
                <ChannelsList channels={channels} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    
});

export default compose(
    channelsQuery,

    addChannelMutation,
    deleteChannelMutation,
)(Channels);
