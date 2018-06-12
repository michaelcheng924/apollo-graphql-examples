import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const AddChannel = () => (
    <View style={styles.addChannel}>
        <TextInput
            placeholder="Channel name"
            style={styles.addChannelInput}
        />
        <TouchableOpacity onPress={() => true}>
            <Text>Add Channel</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    addChannel: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
        width: 200,
    },
    addChannelInput: {
        borderColor: '#333',
        borderWidth: 1,
        marginRight: 10,
    }
});

export default AddChannel;
