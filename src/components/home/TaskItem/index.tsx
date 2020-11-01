import React, { FC } from 'react'

import { StyledTask } from './style'
import { Props } from './type'

const TaskItem: FC<Props> = ({ task }) => <StyledTask>{task}</StyledTask>

export default TaskItem
