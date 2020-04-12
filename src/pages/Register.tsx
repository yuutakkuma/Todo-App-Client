import React, { useReducer } from 'react';
import _ from 'lodash';

import './pageStyle/Register.css';
import { useRegisterMutation } from '../generated/graphql';
import { useHistory } from 'react-router-dom';
import { RegisterButton } from '../components/button/RegisterButton';
import { RegisterGqlError, ConstraintsError } from '../models/registerGqlError';
import { Explanation } from '../components/explanation';
import { registerReducer, initialState } from '../store/RegisterStore';

let nickNameError: string | undefined;
let emailError: string | undefined;
let passwordError: string | undefined;
let arry: ConstraintsError;

export const Register: React.FC = () => {
  const history = useHistory();
  const [register, { loading, error }] = useRegisterMutation();
  const [state, dispatch] = useReducer(registerReducer, initialState);

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
                  nickname: state.nickName,
                  email: state.email,
                  password: state.password
                }
              });
            } catch {}
            window.alert('登録完了！　ログインしてください!');
            history.push('/');
          }}
        >
          <div className="input-form-inner">
            {error ? <p className="error">{nickNameError}</p> : undefined}
            <input
              className="form-input"
              value={state.nickName}
              placeholder="ニックネーム"
              onChange={event => {
                const nickNameInput: string = event.target.value;
                dispatch({ type: 'nickNameType', value: nickNameInput });
              }}
            />
            {error ? <p className="error">{emailError}</p> : undefined}
            <input
              className="form-input"
              value={state.email}
              placeholder="Eメール"
              onChange={event => {
                const emailInput: string = event.target.value;
                dispatch({ type: 'emailType', value: emailInput });
              }}
            />
            {error ? <p className="error">{passwordError}</p> : undefined}
            <input
              className="form-input"
              type="password"
              value={state.password}
              placeholder="パスワード"
              onChange={event => {
                const passwordInput: string = event.target.value;
                dispatch({ type: 'passwordType', value: passwordInput });
              }}
            />
            <RegisterButton isRegisterLoading={loading} />
          </div>
        </form>
      </div>
    </div>
  );
};
