import React from 'react';
import { Route } from 'react-router-dom';
import { Login } from './components';

export const Routes = () => {
  return (
    <Route path='/login' component={ Login } />
  );
};
