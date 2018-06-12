import './App.css';
import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Channels from './modules/channels';

class App extends Component {
  render() {
    return (
      <View>
        <Channels />
      </View>
    );
  }
}

export default App;
