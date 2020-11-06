import React, { FC } from 'react'

import { Task } from './style'
import { Props } from './type'

const TaskItem: FC<Props> = ({ task }) => <Task>{task}</Task>

export default TaskItem
