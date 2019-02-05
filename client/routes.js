import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login, Home } from './components';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={ Home } />
      <Route path='/login' component={ Login } />
    </Switch>
  );
};
