import React, { Component } from 'react';
import { Routes } from './routes';
import { MyNavbar } from './components';
class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id='app-body'>
        <MyNavbar/>
        <Routes/>
      </div>
    );
  }
}

export default App;
