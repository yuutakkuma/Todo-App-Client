import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { MainTextParagraph } from './pageStyle/MainTextParagraph.style';
import { Main } from './pageStyle/Main.style';
import { Container } from './pageStyle/Container.style';
import { Box } from './pageStyle/Box.style';
import { Inner } from './pageStyle/Inner.style';
import { H1 } from './pageStyle/H1.style';
import { Button } from './pageStyle/Button.style';

import { Login } from '../components/Login';
import { Portal } from '../components/Portal';
import { ModalContext } from '../createContext/ModalContext';

export const Landing: React.FC = () => {
  const history = useHistory();
  const modalCtx = useContext(ModalContext);
  return (
    <Main>
      <Container>
        <Box>
          <H1>ToDoアプリケーションへようこそ！！！</H1>
          <MainTextParagraph>
            ログイン、又は新規登録でアプリケーションを使用出来ます
          </MainTextParagraph>
        </Box>
      </Container>
      <Container>
        <Box>
          <Login />
          <Inner innerWidth={50}>
            <MainTextParagraph>又は</MainTextParagraph>
            <Button type="button" onClick={() => history.push('/register')}>
              新規登録
            </Button>
          </Inner>
        </Box>
      </Container>
      {modalCtx.state ? <Portal modalText={modalCtx.text} /> : undefined}
    </Main>
  );
};
