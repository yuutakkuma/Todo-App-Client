import React from 'react';

import { Main } from '../pages/pageStyle/Main.style';
import { Wrapper } from '../pages/pageStyle/Wrapper.style';
import { Form } from '../pages/pageStyle/Form.style';
import { Inner } from '../pages/pageStyle/Inner.style';
import { Input } from '../pages/pageStyle/Input.style';

import { Explanation } from '../components/explanation';
import { RegisterButton } from '../components/button/RegisterButton';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Register',
};

export const RegisterForm = () => {
  return (
    <BrowserRouter>
      <Main>
        <Wrapper>
          <Explanation
            value={
              '新規登録するにはニックネーム、Eメール、パスワードを入力してください。'
            }
            buttonName={'戻る'}
            history={'/'}
          />
          <Form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Inner innerWidth={80}>
              {false ? <p className="error">{''}</p> : undefined}
              <Input placeholder="ニックネーム" onChange={() => {}} />
              {false ? <p className="error">{''}</p> : undefined}
              <Input placeholder="Eメール" onChange={() => {}} />
              {false ? <p className="error">{''}</p> : undefined}
              <Input
                type="password"
                placeholder="パスワード"
                onChange={() => {}}
              />
              <RegisterButton isRegisterLoading={false} />
            </Inner>
          </Form>
        </Wrapper>
      </Main>
    </BrowserRouter>
  );
};

export const RegisterErrorMessage = () => {
  return (
    <BrowserRouter>
      <Main>
        <Wrapper>
          <Explanation
            value={
              '新規登録するにはニックネーム、Eメール、パスワードを入力してください。'
            }
            buttonName={'戻る'}
            history={'/'}
          />
          <Form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Inner innerWidth={80}>
              {true ? (
                <p className="error">
                  {'ニックネームは1文字以上、20文字以下です。'}
                </p>
              ) : (
                undefined
              )}
              <Input placeholder="ニックネーム" onChange={() => {}} />
              {true ? (
                <p className="error">{'Emailを入力してください。'}</p>
              ) : (
                undefined
              )}
              <Input placeholder="Eメール" onChange={() => {}} />
              {true ? (
                <p className="error">
                  {'パスワードは4文字以上、16文字以下です。'}
                </p>
              ) : (
                undefined
              )}
              <Input
                type="password"
                placeholder="パスワード"
                onChange={() => {}}
              />
              <RegisterButton isRegisterLoading={false} />
            </Inner>
          </Form>
        </Wrapper>
      </Main>
    </BrowserRouter>
  );
};
