import React, { Component } from 'react';
import { compose } from 'react-apollo';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { channelsQuery } from './graphql';

class Channels extends Component {
    render() {
        return (
            <View>
                <Text style={styles.header}>Channels</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        fontSize: 20
    }
});

export default compose(
    channelsQuery
)(Channels);
