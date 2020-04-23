import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  HeaderStyle,
  HeaderContainer,
  HeaderInner,
  HeaderH1,
  HeaderBtnBox,
  DeleteAccountMoveBtn,
  HeaderBtnContainer,
} from './componentStyle/Header.style';

import { LogOutButton } from './button/LogOutButton';

export const Header: React.FC = () => {
  const history = useHistory();
  return (
    <HeaderStyle>
      <HeaderContainer>
        <HeaderInner>
          <HeaderH1>ToDo アプリ</HeaderH1>
        </HeaderInner>
        <HeaderBtnBox>
          <HeaderBtnContainer>
            <DeleteAccountMoveBtn
              type="button"
              onClick={() => history.push('/deleteaccount')}
            >
              アカウント削除
            </DeleteAccountMoveBtn>
            <LogOutButton />
          </HeaderBtnContainer>
        </HeaderBtnBox>
      </HeaderContainer>
    </HeaderStyle>
  );
};
