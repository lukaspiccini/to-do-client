import React from 'react'
import { Button as CustomButton, LoadingIcon } from './style'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Button = ({ children, isLoading, disabled, ...props }) => {
  return (
    <CustomButton disabled={isLoading || disabled} {...props}>
      {children}
      {isLoading && (<LoadingIcon icon={faSpinner} />)}  
    </CustomButton>
  )
}

export default Button