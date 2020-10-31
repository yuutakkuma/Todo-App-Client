import React, { FC } from 'react'

import { StyledAddTaskButton } from './style'
import { Props } from './type'

const AddTaskButton: FC<Props> = ({ type, disabled, className, onClick }) => (
  <StyledAddTaskButton
    type={type}
    className={className}
    disabled={disabled}
    onClick={onClick}
  />
)

export default AddTaskButton
