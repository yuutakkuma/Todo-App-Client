import React, { FC } from 'react'

import { Message } from './style'
import { Props } from './type'

const ErrorMessage: FC<Props> = ({ message, className }) => (
  <Message className={className}>{message}</Message>
)

export default ErrorMessage
