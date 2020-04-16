import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { TodoApp } from './pages/TodoApp';
import { Register } from './pages/Register';
import { Landing } from './pages/Landing';
import { DeleteAccount } from './pages/DeleteAccount';
import { ModalContext } from './createContext/ModalContext';

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <ModalContext.Provider value={{ text: undefined, state: false }}>
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/deleteaccount" component={DeleteAccount} />
          <Route exact path="/home" component={TodoApp} />
        </ModalContext.Provider>
      </Switch>
    </BrowserRouter>
  );
};
