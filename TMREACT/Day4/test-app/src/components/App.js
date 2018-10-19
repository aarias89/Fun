import React, { Component } from 'react';
import Home from './Home'
import About from './About'
import Topic from './Topics'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <About />
        <Topic />
      </div>
    );
  }
}

export default App;
// nmp install react-router
