import React, { FC } from 'react'

import { StyledTaskInputArea } from './style'
import { Props } from './type'

const TaskInputArea: FC<Props> = ({ type, placeholder, value, onChange }) => (
  <StyledTaskInputArea
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
)

export default TaskInputArea
