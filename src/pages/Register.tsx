import React, { useState } from 'react';
import './pageStyle/Register.css';

import { useRegisterMutation } from '../generated/graphql';
import { useHistory } from 'react-router-dom';
import { RegisterButton } from '../components/button/RegisterButton';
import { RegisterGqlError } from '../models/registerGqlError';
import { Explanation } from '../components/explanation';

let nickNameError: string;
let emailError: string;
let passwordError: string;

export const Register: React.FC = () => {
  const history = useHistory();
  const [nickName, setNickName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [register, { loading, error }] = useRegisterMutation();

  if (error) {
    // GraphQLErrorを取得
    const obj = error.graphQLErrors.map(e => e.message);
    const errors: RegisterGqlError = obj[0] as any;

    // エラー内容を変数に代入
    nickNameError = errors.message[0].constraints.length;
    emailError = errors.message[1].constraints.isEmail;
    passwordError = errors.message[2].constraints.length;
  }

  return (
    <div className="main">
      <div className="register-wrapper">
        <Explanation
          value={
            '新規登録するにはニックネーム、Eメール、パスワードを入力してください。'
          }
          buttonName={'戻る'}
          history={'/'}
        />
        <form
          className="register-form"
          onSubmit={async event => {
            event.preventDefault();

            try {
              await register({
                variables: {
                  nickName: nickName,
                  email: email,
                  password: password
                }
              });
              history.push('/todo');
            } catch {}
          }}
        >
          <div className="input-form-inner">
            {error ? <p className="error">{nickNameError}</p> : undefined}
            <input
              className="form-input"
              value={nickName}
              placeholder="ニックネーム"
              onChange={event => {
                setNickName(event.target.value);
              }}
            />
            {error ? <p className="error">{emailError}</p> : undefined}
            <input
              className="form-input"
              value={email}
              placeholder="Eメール"
              onChange={event => {
                setEmail(event.target.value);
              }}
            />
            {error ? <p className="error">{passwordError}</p> : undefined}
            <input
              className="form-input"
              type="password"
              value={password}
              placeholder="パスワード"
              onChange={event => {
                setPassword(event.target.value);
              }}
            />
            <RegisterButton isRegisterLoading={loading} />
          </div>
        </form>
      </div>
    </div>
  );
};
