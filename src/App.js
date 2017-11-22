import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Feedback from './components/Feedback/Feedback';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Feedback />
      </div>
    );
  }
}

export default App;
