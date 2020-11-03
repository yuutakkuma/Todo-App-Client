import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'

import {
  StyledTopMain,
  StyledTopBox,
  StyledTopHeading,
  Button
} from './styles/top'

const TopPage: FC = () => {
  const { push } = useHistory()

  return (
    <StyledTopMain>
      <StyledTopBox>
        <StyledTopHeading>TODO APP</StyledTopHeading>
      </StyledTopBox>
      <StyledTopBox>
        <Button
          type='button'
          title='ログイン'
          marginBottom={50}
          onClick={() => push('login')}
        />
        <Button
          type='button'
          title='新規登録'
          marginBottom={50}
          onClick={() => push('register')}
        />
        <Button
          type='button'
          title='テストユーザーログイン'
          onClick={() => console.log('テストユーザーログイン')}
        />
      </StyledTopBox>
    </StyledTopMain>
  )
}

export default TopPage
