import React, { Component } from 'react';
import {  StyleSheet, Text } from 'react-native';

const Loading = () => (
    <Text style={styles.loading}>
        Loading...
    </Text>
);

const styles = StyleSheet.create({
    loading: {
        fontSize: 20
    },
});

export default Loading;
