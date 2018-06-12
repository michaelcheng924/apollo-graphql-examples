import React, { Component } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';

class ChannelsList extends Component {
    renderChannel(channel) {
        const { name } = channel.item;

        return (
            <Text style={styles.channel}>
                {name}
            </Text>
        );
    }

    render() {
        const { channels } = this.props;

        return (
            <FlatList
                data={channels}
                keyExtractor={({ id }) => id}
                renderItem={this.renderChannel}
                style={styles.channels}
            />
        );
    }
}

const styles = StyleSheet.create({
    channels: {
        marginTop: 20
    },
    channel: {
        color: 'green'
    }
});

export default ChannelsList;
