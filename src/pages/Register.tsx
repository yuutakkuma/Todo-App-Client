import React, { useState } from 'react';
import _ from 'lodash';

import './pageStyle/Register.css';
import { useRegisterMutation } from '../generated/graphql';
import { useHistory } from 'react-router-dom';
import { RegisterButton } from '../components/button/RegisterButton';
import { RegisterGqlError, ConstraintsError } from '../models/registerGqlError';
import { Explanation } from '../components/explanation';

let nickNameError: string | undefined;
let emailError: string | undefined;
let passwordError: string | undefined;
let arry: ConstraintsError;

export const Register: React.FC = () => {
  const history = useHistory();
  const [nickName, setNickName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [register, { loading, error }] = useRegisterMutation();

  if (error) {
    // GraphQLErrorを取得
    const obj = _.map(error.graphQLErrors, 'message');
    const errors: RegisterGqlError = obj[0] as any;
    // 発生したエラーの箇所に代入する
    for (let i = 0; i < errors.message.length; i++) {
      arry = errors.message[i].constraints;

      if (arry.length === 'ニックネームは1文字以上、20文字以下です。') {
        nickNameError = arry.length;
      }

      if (arry.isEmail === 'Emailを入力してください。') {
        emailError = arry.isEmail;
      }

      if (arry.length === 'パスワードは4文字以上、16文字以下です。') {
        passwordError = arry.length;
      }
    }
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
            // エラーメッセージをリセット
            nickNameError = undefined;
            emailError = undefined;
            passwordError = undefined;

            try {
              await register({
                variables: {
                  nickname: nickName,
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
