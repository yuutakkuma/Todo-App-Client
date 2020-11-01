import React, { FC } from 'react'

import { StyledDoneButton } from './style'
import { Props } from './type'

const DoneButton: FC<Props> = ({ title, disabled, onClick }) => (
  <StyledDoneButton
    type='button'
    title={title}
    disabled={disabled}
    onClick={onClick}
  />
)

export default DoneButton
