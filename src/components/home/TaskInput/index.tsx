import React, { FC } from 'react'

import AddTaskButton from '../AddTaskButton'

import { TaskInputContainer, Input } from './style'
import { Props } from './type'

const TaskInput: FC<Props> = ({ inputValue, disabled, onChange, onClick }) => (
  <TaskInputContainer>
    <Input placeholder='やること' value={inputValue} onChange={onChange} />
    <AddTaskButton disabled={disabled} onClick={onClick} />
  </TaskInputContainer>
)

export default TaskInput
