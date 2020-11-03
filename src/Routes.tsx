import React, { FC, useState, useEffect } from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  RouteProps
} from 'react-router-dom'

import { DeleteAccount } from './pages/DeleteAccount'
import TopPage from './pages/TopPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'

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
          <Route path='/deleteaccount' component={DeleteAccount} />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  )
}
