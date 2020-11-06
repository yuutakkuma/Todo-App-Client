import React, { FC } from 'react'

import AddTaskButton from '../AddTaskButton'

import { Container, Input } from './style'
import { Props } from './type'

const TaskInput: FC<Props> = ({ inputValue, disabled, onChange, onClick }) => (
  <Container>
    <Input placeholder='やること' value={inputValue} onChange={onChange} />
    <AddTaskButton disabled={disabled} onClick={onClick} />
  </Container>
)

export default TaskInput
