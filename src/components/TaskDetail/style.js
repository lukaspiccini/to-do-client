import styled from 'styled-components'

export const SectionTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.small };
  &:not(:first-of-type) {
    margin-top: ${({ theme }) => theme.spacing.small };
  }
`

export const Task = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  input {
    margin-right: ${({ theme }) => theme.spacing.small };
    margin-top: ${({ theme }) => theme.spacing.small };
  }

  svg {
    width: 14px;
    height: 14px;
    color: ${({ theme }) => theme.colors.blue };
  }
`