import React, { FC } from 'react'

import {
  StyledHeader,
  StyledHeaderBox,
  StyledHeaderButton,
  StyledHeaderHeading
} from './style'
import { Props } from './type'

const Header: FC<Props> = ({ onLogoutClick, onAccountDeleteClick }) => (
  <StyledHeader>
    <StyledHeaderBox justifyContent='flex-start'>
      <StyledHeaderHeading>TODO APP</StyledHeaderHeading>
    </StyledHeaderBox>
    <StyledHeaderBox justifyContent='flex-end'>
      <StyledHeaderButton
        type='button'
        title='アカウント削除'
        onClick={onAccountDeleteClick}
      />
      <StyledHeaderButton
        marginHorizontal='20px'
        type='button'
        title='ログアウト'
        onClick={onLogoutClick}
      />
    </StyledHeaderBox>
  </StyledHeader>
)

export default Header
