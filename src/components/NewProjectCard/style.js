import styled from 'styled-components'
import Button from '../../objects/Button'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: ${({ theme }) => theme.spacing.medium };
  padding: ${({ theme }) => theme.spacing.giga };
  background-color: ${({ theme }) => theme.colors.grey };
  border-radius: ${({ theme }) => theme.radius.small };

  * {
    width: 100%;
  }
`

export const NewProjectTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.small };
`

export const NewProjectButton = styled(Button)`
  margin-top: ${({ theme }) => theme.spacing.small };
`