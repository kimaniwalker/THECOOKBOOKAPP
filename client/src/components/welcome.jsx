import React, { Component, Fragment } from 'react';
import '../utils/scss/pages/_welcome.scss';

class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <Fragment>
        <main className="welcome">
        <h1>Testing</h1>
        <h2>Testing</h2>
        <h3>Testing</h3>
        <h4>Testing</h4>
        <h5>Testing</h5>
        <h6>Testing</h6>
        <p>Testing</p>
        </main>
      </Fragment>

    )
  }


}

export default Welcome;