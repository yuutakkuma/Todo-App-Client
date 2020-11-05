import React, { FC } from 'react'

import { StyledFormButton } from './style'
import { Props } from './type'

const FormButton: FC<Props> = ({ type, title, disabled, isLoading }) => (
  <StyledFormButton
    type={type}
    title={title}
    disabled={disabled}
    isLoading={isLoading}
  />
)

export default FormButton
