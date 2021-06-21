import styled from 'styled-components'

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.big};
  background-color: ${({ theme }) => theme.colors.softGrey};
`

export const Title = styled.h3`
  color: grey;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: grey;
`

export const Logout = styled.button`
  margin-left: ${({ theme }) => theme.spacing.big};
`
