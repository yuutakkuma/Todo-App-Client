import React, { FC, useState, useEffect } from 'react'
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

export const Routes: FC = () => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem('token')
  )
  useEffect(() => {
    setToken(localStorage.getItem('token'))
  }, [])

  const PrivateRoute: FC<RouteProps> = ({ children, ...props }) => (
    <Route {...props} render={() => (token ? children : <Redirect to='/' />)} />
  )

  return (
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
}
