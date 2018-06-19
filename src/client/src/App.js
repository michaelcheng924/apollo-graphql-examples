import React, { Component } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";

import Subscriptions from "./modules/subscriptions";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="app-title">Apollo/GraphQL Examples</div>
          <div>
            <Link to="/subscriptions">Subscriptions</Link>
            {` | `}
            <Link to="/authentication">Authentication</Link>
            {` | `}
            <Link to="/pagination">Pagination</Link>
          </div>

          <Route path="/subscriptions" component={Subscriptions} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
