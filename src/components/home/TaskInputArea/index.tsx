import React, { FC } from 'react'

import { InputArea } from './style'
import { Props } from './type'

const TaskInputArea: FC<Props> = ({
  className,
  type,
  placeholder,
  value,
  onChange
}) => (
  <InputArea
    className={className}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
)

export default TaskInputArea
