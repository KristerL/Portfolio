import React, { Component } from 'react';
import './App.css';

import Landingpage from "./Containers/LandingPage/LandingPage.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landingpage/>
      </div>
    );
  }
}

export default App;
