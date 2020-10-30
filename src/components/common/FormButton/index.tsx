import React, { FC } from 'react'

import { StyledFormButton } from './style'
import { Props } from './type'

const FormButton: FC<Props> = ({ type, title, disabled }) => (
  <StyledFormButton type={type} title={title} disabled={disabled} />
)

export default FormButton
