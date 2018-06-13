import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Channel from './modules/channel';
import Channels from './modules/channels';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="app-title">Apollo Fullstack Starter Kit Demo</div>

          <Route exact path="/" component={Channels} />
          <Route path="/channel/:id" component={Channel} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
