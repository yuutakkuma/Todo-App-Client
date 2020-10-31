import React, { FC } from 'react'

import { StyledErrorMessage } from './style'
import { Props } from './type'

const ErrorMessage: FC<Props> = ({ message, className }) => (
  <StyledErrorMessage className={className}>{message}</StyledErrorMessage>
)

export default ErrorMessage
