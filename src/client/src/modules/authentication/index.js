import React, { Component } from "react";
import { compose } from "react-apollo";

class AuthenticationDemo extends Component {
  render() {
    return (
      <div>
        <h2>Authentication Demo</h2>
        <hr />
      </div>
    );
  }
}

export default compose()(AuthenticationDemo);
