import React, { useState, useMemo } from 'react'
import { Container, SignupWrapper, Row } from './style'
import { useHistory } from 'react-router-dom'

import Button from '../../objects/Button'

import LoginService from '../../services/users'

const Login = () => {
  const loginService = useMemo(() => new LoginService(),[])
  const history = useHistory()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const onSignup = () => {
    setIsLoading(true)

    loginService.createUser({ firstName, lastName, login, password }).then(result => {
      history.push('/login')
    }).finally(() => {
      setIsLoading(false)
    })
  }

  return (
    <Container>
      <SignupWrapper>
        <Row>
          <label htmlFor='firstName'>First name</label>
          <input type='text' id='firstName' value={firstName} onChange={event => setFirstName(event?.target?.value)} />
        </Row>

        <Row>
          <label htmlFor='lastName'>Login</label>
          <input type='text' id='lastName' value={lastName} onChange={event => setLastName(event?.target?.value)} />
        </Row>

        <Row>
          <label htmlFor='login'>Login</label>
          <input type='text' id='login' value={login} onChange={event => setLogin(event?.target?.value)} />
        </Row>
        
        <Row>
          <label htmlFor='password'>Password</label>
          <input type='password' value={password} onChange={event => setPassword(event?.target?.value)} />
        </Row>

        <Row>
          <Button variant='success' fullWidth onClick={onSignup} isLoading={isLoading}>Register</Button>
          <Button variant='info' fullWidth onClick={() => history.push('/login')} isLoading={isLoading}>Back</Button>
        </Row>
      </SignupWrapper>
    </Container>
  )
}

export default Login