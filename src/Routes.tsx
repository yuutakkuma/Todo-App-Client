import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { TodoApp } from './pages/TodoApp'
import { Register } from './pages/Register'
import { Landing } from './pages/Landing'
import { DeleteAccount } from './pages/DeleteAccount'
import { ModalContext } from './createContext/ModalContext'

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <ModalContext.Provider value={{ text: undefined, state: false }}>
          <Route exact path='/' component={Landing} />
          <Route path='/register' component={Register} />
          <Route path='/deleteaccount' component={DeleteAccount} />
          <Route path='/home' component={TodoApp} />
        </ModalContext.Provider>
      </Switch>
    </BrowserRouter>
  )
}
