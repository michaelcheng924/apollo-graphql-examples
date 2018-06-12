import React, { Component } from 'react';
import { compose } from 'react-apollo';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import {
    channelsQuery,

    addChannelMutation,
} from './graphql';

class Channels extends Component {
    renderChannel(channel) {
        const { name } = channel.item;

        return (
            <Text style={styles.channel}>
                {name}
            </Text>
        );
    }
    
    render() {
        const { channels, loading } = this.props;

        if (loading) {
            return <Text style={styles.loading}>Loading...</Text>;
        }

        return (
            <View>
                <Text style={styles.header}>Channels</Text>
                <FlatList
                    data={channels}
                    keyExtractor={({ id }) => id}
                    renderItem={this.renderChannel}
                    style={styles.channels}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    loading: {
        fontSize: 20
    },
    header: {
        fontSize: 20
    },
    channels: {
        marginTop: 20
    },
    channel: {
        color: 'green'
    }
});

export default compose(
    channelsQuery,

    addChannelMutation,
)(Channels);
