import React, { Component } from 'react';
import { Routes } from './routes';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id='app-body'>
        <Routes/>
      </div>
    );
  }
}

export default App;
