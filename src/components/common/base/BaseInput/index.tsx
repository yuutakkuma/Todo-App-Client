import React, { FC } from 'react'

import { StyledBaseInput } from './style'
import { Props } from './type'

const BaseInput: FC<Props> = ({
  className,
  type,
  placeholder,
  value,
  onChange
}) => (
  <StyledBaseInput
    className={className}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
)

export default BaseInput
