import React, { FC } from 'react'

import { StyledFormButton } from './style'
import { Props } from './type'

const FormButton: FC<Props> = ({ title, disabled, onClick }) => (
  <StyledFormButton title={title} disabled={disabled} onClick={onClick} />
)

export default FormButton
