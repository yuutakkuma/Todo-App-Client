import React, { FC } from 'react'

import { StyledTaskInput } from './style'
import { Props } from './type'

const TaskInput: FC<Props> = ({ type, placeholder, value, onChange }) => (
  <StyledTaskInput
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
)

export default TaskInput
