import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto' };
  border-radius: ${({ theme }) => theme.radius.small };
  padding: ${({ theme }) => theme.spacing.small };
  background-color: ${({ theme, variant }) => theme.colors[variant] || theme.colors.info };
  box-shadow: 2px 3px 3px rgba(0,0,0,0.1);

  &:hover {
    opacity: .9;
  }

  &:disabled {
    opacity: .7;
  }
`

export const LoadingIcon = styled(FontAwesomeIcon)`
  margin-left: ${({ theme }) => theme.spacing.small };
  animation: 1.5s infinite spin;

  @keyframes spin {
    from { transform: rotate(0); }
    to { transform: rotate(360deg); }
  }
`