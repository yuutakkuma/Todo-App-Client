import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { Container } from './pageStyle/Container.style'
import { Box } from './pageStyle/Box.style'
import { Inner } from './pageStyle/Inner.style'

import { Login } from '../components/Login'
import { Portal } from '../components/Portal'
import { ModalContext } from '../createContext/ModalContext'

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #fffdf9;
  font-size: 15px;
  border-color: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.3);
  cursor: pointer;

  &:hover {
    background-color: rgba(3, 209, 255, 0.2);
  }

  &:active {
    box-shadow: none;
    transform: translate(2px, 2px);
  }
`

const MainText = styled.p`
  text-align: center;
  color: #2d334a;
`

export const Landing: React.FC = () => {
  const history = useHistory()
  const modalCtx = useContext(ModalContext)
  return (
    <main>
      <Container>
        <Box>
          <h1>ToDoアプリケーションへようこそ！！！</h1>
          <MainText>
            ログイン、又は新規登録でアプリケーションを使用出来ます
          </MainText>
        </Box>
      </Container>
      <Container>
        <Box>
          <Login />
          <Inner innerWidth={50}>
            <MainText>又は</MainText>
            <Button type='button' onClick={() => history.push('/register')}>
              新規登録
            </Button>
          </Inner>
        </Box>
      </Container>
      {modalCtx.state ? <Portal modalText={modalCtx.text} /> : undefined}
    </main>
  )
}
