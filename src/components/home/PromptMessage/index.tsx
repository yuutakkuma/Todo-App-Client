import React, { FC } from 'react'

import { Message } from './style'
import { Props } from './type'

const PromptMessage: FC<Props> = ({ message }) => <Message>{message}</Message>

export default PromptMessage
