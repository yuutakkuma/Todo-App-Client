import React, { FC } from 'react'
import styled from 'styled-components'

import BaseButton from '../components/common/BaseButton'

import { StyledTopMain, StyledTopBox, StyledTopHeading } from './styles/top'

const TopPage: FC = () => {
  const Button = styled(BaseButton)<{ marginBottom?: number }>`
    width: 50%;
    height: 50px;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: ${({ marginBottom = 0 }) => `${marginBottom}px`};
  `
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
          onClick={() => console.log('ログイン')}
        />
        <Button
          type='button'
          title='新規登録'
          marginBottom={50}
          onClick={() => console.log('新規登録')}
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
