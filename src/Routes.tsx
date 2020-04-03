import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { TodoApp } from './pages/TodoApp';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Landing } from './pages/Landing';
import { Loading } from './components/Loading';

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/todo" component={TodoApp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/loading" component={Loading} />
      </Switch>
    </BrowserRouter>
  );
};
