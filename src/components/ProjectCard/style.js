import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 23%;
  min-width: 250px;
  border-radius: ${({ theme }) => theme.radius.small };
  margin: ${({ theme }) => theme.spacing.medium };
  border: 1px solid ${({ theme }) => theme.colors.grey };
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.medium };
  background-color:  ${({ theme }) => theme.colors.softGrey };
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey };
`

export const CardTitle = styled.h2``

export const CardActions = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.blue };
  
  button {
    margin-left:  ${({ theme }) => theme.spacing.medium };
  }
`

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: ${({ theme }) => theme.spacing.medium };
`

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.medium };
  border-top: 1px solid ${({ theme }) => theme.colors.grey };
`