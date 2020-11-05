import React, { FC } from 'react'

import TaskItem from '../TaskItem'
import DoneButton from '../DoneButton'
import Loading from '../../common/Loading'

import { StyledTaskList, StyledTaskListBox } from './style'
import { Props } from './type'

const TaskList: FC<Props> = ({ tasks, disabled, isLoading, onClick }) => (
  <>
    {isLoading && (
      <StyledTaskListBox width='90%' marginBottom='20px'>
        <Loading
          width='50px'
          height='50px'
          circleColor='rgba(45, 97, 135, 1)'
        />
      </StyledTaskListBox>
    )}
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
            <DoneButton
              title='完了'
              disabled={disabled}
              onClick={() => onClick(id)}
            />
          </StyledTaskListBox>
        </StyledTaskList>
      ))}
  </>
)

export default TaskList
