import styled from 'styled-components'

export const Container = styled.div`
  height: calc(100vh - 70px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.giga};
  background: ${({ theme }) => theme.colors.grey};
  border-radius: ${({ theme }) => theme.radius.small};
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${({ theme }) => theme.spacing.medium};
`