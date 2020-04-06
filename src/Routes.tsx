import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { TodoApp } from './pages/TodoApp';
import { Register } from './pages/Register';
import { Landing } from './pages/Landing';
import { DeleteAccount } from './pages/DeleteAccount';

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/todo" component={TodoApp} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/deleteaccount" component={DeleteAccount} />
      </Switch>
    </BrowserRouter>
  );
};
