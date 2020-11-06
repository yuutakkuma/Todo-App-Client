import React, { FC } from 'react'

import { Button } from './style'
import { Props } from './type'

const AddTaskButton: FC<Props> = ({ type, disabled, className, onClick }) => (
  <Button
    type={type}
    className={className}
    disabled={disabled}
    onClick={onClick}
  />
)

export default AddTaskButton
