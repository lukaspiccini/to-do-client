import React from 'react'
import { Reset, Global, theme } from './styles'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import { ThemeProvider } from 'styled-components'

import Login from './pages/login'
import Signup from './pages/signup'
import Home from './pages/home'

import { isUserLoggedIn } from './helpers/user'

const App = () => {
  return (
    <>
      <Global />
      <Reset />

      <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Route path="/login" exact render={() => (
                isUserLoggedIn() ? (
                  <Home />
                ) : (
                  <Login />
                ))}>
              </Route>
              <Route path="/signup" exact render={() => (
                isUserLoggedIn() ? (
                  <Home />
                ) : (
                  <Signup />
                ))}>
              </Route>
              <Route path="/" exact render={() => (
                isUserLoggedIn() ? (
                  <Home />
                ) : (
                  <Redirect to='/login' />
                ))}>
              </Route>
            </Switch>
          </Router>
      </ThemeProvider>
    </>
  )
}

export default App;
