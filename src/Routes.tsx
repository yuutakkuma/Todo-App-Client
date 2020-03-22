import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { TodoApp } from './pages/TodoApp';
import { Register } from './pages/Register';
import { Login } from './pages/Login';

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/Todo" component={TodoApp} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Register" component={Register} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
