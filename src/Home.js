import React, { Component } from 'react';
import logo from './logo.svg';

class Home extends Component {
  render() {
    return (
      <div>
        <nav>
          <img src={logo} alt="logo" />
        </nav>
        <div className="page">
          <p>This is the home page</p>
        </div>
      </div>
    );
  }
}

export default Home;
