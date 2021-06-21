import React, { useMemo } from 'react'
import { Container, Title, Wrapper, Logout } from './style'
import { useHistory } from 'react-router-dom'
import { isUserLoggedIn } from '../../helpers/user'

const Header = ({ children }) => {
  const history = useHistory()
  const userLoggedIn = useMemo(() => isUserLoggedIn(), [])

  return (
    <>
      <Container>
        <Title>EDirectInsure TODO List</Title>
        <Wrapper>
          {userLoggedIn && (
            <Logout onClick={() => {
              localStorage.removeItem('token')
              history.push('/login')
            }}>
              Sair
            </Logout>
          )}
        </Wrapper>
      </Container>
      {children}
    </>
  )
}

export default Header