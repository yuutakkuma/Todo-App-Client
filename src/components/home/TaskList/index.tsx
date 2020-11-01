import React, { FC } from 'react'

import TaskItem from '../TaskItem'
import DoneButton from '../DoneButton'

import { StyledTaskList, StyledTaskListBox } from './style'
import { Props } from './type'

const TaskList: FC<Props> = ({ tasks, disabled, onClick }) => (
  <>
    {tasks
      .sort((tasksA, tasksB) => (tasksA.id < tasksB.id ? 1 : -1))
      .map(({ id, task }, index) => (
        <StyledTaskList
          style={{ marginBottom: index === tasks.length - 1 ? 0 : 20 }}
          key={id}
        >
          <StyledTaskListBox width={'90%'}>
            <TaskItem task={task} />
          </StyledTaskListBox>
          <StyledTaskListBox width={'10%'}>
            <DoneButton title='完了' disabled={disabled} onClick={onClick} />
          </StyledTaskListBox>
        </StyledTaskList>
      ))}
  </>
)

export default TaskList
