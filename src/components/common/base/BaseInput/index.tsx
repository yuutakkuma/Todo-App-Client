import React, { FC } from 'react'

import { StyledBaseInput } from './style'
import { Props } from './type'

const BaseInput: FC<Props> = ({ type, placeholder, value, onChange }) => (
  <StyledBaseInput
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
)

export default BaseInput
