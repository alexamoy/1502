import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import App from './App';
import history from './history';
// import { Provider } from 'react-redux';
// import store from './store';

ReactDOM.render(
  // <Provider store={store}>
  <Router history={ history }>
    <App/>
  </Router>,
  // </Provider>,
  document.getElementById('app')
);
