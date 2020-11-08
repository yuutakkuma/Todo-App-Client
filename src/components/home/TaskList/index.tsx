import React, { FC } from 'react'

import TaskItem from '../TaskItem'
import DoneButton from '../DoneButton'
import Loading from '../../common/Loading'

import { Container, Box, Absolute } from './style'
import { Props } from './type'
import { LoadingMode } from '../../common/Loading/type'

const TaskList: FC<Props> = ({
  tasks,
  disabled,
  isLoading,
  deleteId,
  onClick
}) => (
  <>
    {isLoading && (
      <Box width='100%' marginBottom='20px'>
        <Loading mode={LoadingMode.MIDIUM} />
      </Box>
    )}
    {tasks
      .sort((tasksA, tasksB) => (tasksA.id < tasksB.id ? 1 : -1))
      .map(({ id, task }, index) => (
        <Container
          style={{
            marginBottom: index === tasks.length - 1 ? 0 : 20,
            opacity: deleteId === id ? 0.5 : 1
          }}
          key={id}
        >
          {deleteId === id && (
            <Absolute>
              <Loading mode={LoadingMode.SMALL} />
            </Absolute>
          )}
          <Box width='90%' tabletWidth='80%' mobileWidth='70%'>
            <TaskItem task={task} />
          </Box>
          <Box width='10%' tabletWidth='15%' mobileWidth='25%'>
            <DoneButton
              title='完了'
              disabled={disabled}
              onClick={() => onClick(id)}
            />
          </Box>
        </Container>
      ))}
  </>
)

export default TaskList
