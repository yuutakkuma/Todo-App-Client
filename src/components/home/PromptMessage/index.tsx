import React, { FC } from 'react'

import Loading from '../../common/Loading'
import { LoadingMode } from '../../common/Loading/type'

import { Message } from './style'
import { Props } from './type'

const PromptMessage: FC<Props> = ({ message, isLoading }) => (
  <>
    {isLoading ? (
      <Loading mode={LoadingMode.MIDIUM} />
    ) : (
      <Message>{message}</Message>
    )}
  </>
)

export default PromptMessage
