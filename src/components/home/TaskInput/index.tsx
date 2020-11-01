import React, { FC } from 'react'

import TaskInputArea from '../TaskInputArea'
import AddTaskButton from '../AddTaskButton'

import { TaskInputContainer } from './style'
import { Props } from './type'

const TaskInput: FC<Props> = ({ inputValue, disabled, onChange, onClick }) => (
  <TaskInputContainer>
    <TaskInputArea
      placeholder='やること'
      value={inputValue}
      onChange={onChange}
    />
    <AddTaskButton disabled={disabled} onClick={onClick} />
  </TaskInputContainer>
)

export default TaskInput
