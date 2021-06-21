import React, { useState, useMemo } from 'react'
import { Container, LoginWrapper, Row } from './style'
import { useHistory } from 'react-router-dom'

import Button from '../../objects/Button'

import LoginService from '../../services/users'

const Login = () => {
  const loginService = useMemo(() => new LoginService(),[])
  const history = useHistory()

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const onLogin = () => {
    setIsLoading(true)

    loginService.login({ login, password }).then(result => {
      localStorage.setItem('token', result?.data)
      history.push('/')
    }).finally(() => {
      setIsLoading(false)
    })
  }

  return (
    <Container>
      <LoginWrapper>
        <Row>
          <label htmlFor='login'>Login</label>
          <input type='text' id='login' value={login} onChange={event => setLogin(event?.target?.value)} />
        </Row>
        
        <Row>
          <label htmlFor='password'>Password</label>
          <input type='password' value={password} onChange={event => setPassword(event?.target?.value)} />
        </Row>

        <Row>
          <Button variant='success' fullWidth onClick={onLogin} isLoading={isLoading}>Login</Button>
          <Button variant='info' fullWidth onClick={() => history.push('/signup')} isLoading={isLoading}>Register</Button>
        </Row>
      </LoginWrapper>
    </Container>
  )
}

export default Login