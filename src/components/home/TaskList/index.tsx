import React, { FC } from 'react'

import TaskItem from '../TaskItem'
import DoneButton from '../DoneButton'
import Loading from '../../common/Loading'

import { StyledTaskList, Box } from './style'
import { Props } from './type'

const TaskList: FC<Props> = ({ tasks, disabled, isLoading, onClick }) => (
  <>
    {isLoading && (
      <Box width='90%' marginBottom='20px'>
        <Loading
          width='50px'
          height='50px'
          circleColor='rgba(45, 97, 135, 1)'
        />
      </Box>
    )}
    {tasks
      .sort((tasksA, tasksB) => (tasksA.id < tasksB.id ? 1 : -1))
      .map(({ id, task }, index) => (
        <StyledTaskList
          style={{ marginBottom: index === tasks.length - 1 ? 0 : 20 }}
          key={id}
        >
          <Box width='90%' mediaWidth='80%'>
            <TaskItem task={task} />
          </Box>
          <Box width='10%' mediaWidth='15%'>
            <DoneButton
              title='完了'
              disabled={disabled}
              onClick={() => onClick(id)}
            />
          </Box>
        </StyledTaskList>
      ))}
  </>
)

export default TaskList
