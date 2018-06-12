import React, { Component } from 'react';
import { compose } from 'react-apollo';
import { StyleSheet, Text, View } from 'react-native';

import {
    channelsQuery,

    addChannelMutation,
} from './graphql';
import {
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
                <Text style={styles.header}>Channels</Text>
                <ChannelsList channels={channels} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        fontSize: 20
    },
});

export default compose(
    channelsQuery,

    addChannelMutation,
)(Channels);
