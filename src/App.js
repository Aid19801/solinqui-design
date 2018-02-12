import React, { Component } from 'react';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import About from './about/about';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Hero />
        <About />
      </div>
    );
  }
}

export default App;
