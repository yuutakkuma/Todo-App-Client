import styled from 'styled-components'

export const HeaderStyle = styled.header`
  background-color: #8ac6d1;
  padding: 0 30px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
`

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
`

export const HeaderInner = styled.div`
  width: 20%;
  margin: 0 0 auto 0;
`

export const HeaderH1 = styled.h1`
  color: #fffdf9;
`

export const HeaderBtnBox = styled.div`
  width: 50%;
  margin: 0 0 0 auto;
  display: flex;
`

export const HeaderBtnContainer = styled.div`
  width: 100%;
  margin: 0 0 0 auto;
  padding: 15px 5px;
  display: flex;
`

export const DeleteAccountMoveBtn = styled.button`
  width: 20%;
  margin: 0 0 0 auto;
  font-size: 15px;
  color: #2d334a;
  border-radius: 5px;
  background-color: #fffdf9;
  border-color: #fffdf9;
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    box-shadow: none;
    transform: translate(2px, 2px);
  }
`

export const LogOutBtn = styled.button`
  width: 20%;
  margin: 0 0 0 10px;
  font-size: 15px;
  color: #2d334a;
  border-radius: 5px;
  background-color: #fffdf9;
  border-color: #fffdf9;
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    box-shadow: none;
    transform: translate(2px, 2px);
  }
`
