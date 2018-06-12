import React, { Component } from 'react';
import { compose } from 'react-apollo';
import { FlatList, Text, View } from 'react-native';

import { channelsQuery } from './graphql';

class Channels extends Component {
    render() {
        console.log(this.props)
        return (
            <View>
                <Text>Channels</Text>
            </View>
        );
    }
}

export default compose(
    channelsQuery
)(Channels);
