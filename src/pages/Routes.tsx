import React, { FC } from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  RouteProps
} from 'react-router-dom'

import TopPage from './TopPage'
import RegisterPage from './RegisterPage'
import LoginPage from './LoginPage'
import HomePage from './HomePage'
import DeleteAccountPage from './DeleteAccountPage'

const PrivateRoute: FC<RouteProps> = ({ children, ...props }) => {
  const token = localStorage.getItem('token')
  return (
    <Route {...props} render={() => (token ? children : <Redirect to='/' />)} />
  )
}

export const Routes: FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={TopPage} />
      <Route path='/register' component={RegisterPage} />
      <Route path='/login' component={LoginPage} />
      <PrivateRoute>
        <Route path='/home' component={HomePage} />
        <Route path='/deleteAccount' component={DeleteAccountPage} />
      </PrivateRoute>
    </Switch>
  </BrowserRouter>
)
