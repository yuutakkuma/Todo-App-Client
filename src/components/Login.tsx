import React, { useState } from 'react';
import _ from 'lodash';

import './componentStyle/Login.css';
import { LoginButton } from './button/LoginButton';
import { useLoginMutation } from '../generated/graphql';
import { useHistory } from 'react-router-dom';
import { loginGqlError } from '../models/loginGqlError';

let errorMessage: loginGqlError;

export const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [login, { loading, error }] = useLoginMutation();
  const history = useHistory();

  if (error) {
    // GraphQLErrorを取得
    const arry = _.map(error.graphQLErrors, 'message');
    errorMessage = arry[0] as any;
  }

  return (
    <form
      className="login-form"
      onSubmit={async event => {
        event.preventDefault();

        try {
          await login({
            variables: {
              email: email,
              password: password
            }
          });
          history.push('/todo');
        } catch {}
      }}
    >
      <div className="login-form-inner">
        {error ? <p className="error">{errorMessage.message}</p> : undefined}
        <input
          className="login-input"
          placeholder="Eメール"
          value={email}
          onChange={event => {
            setEmail(event.target.value);
          }}
        />
        <input
          className="login-input"
          type="password"
          placeholder="パスワード"
          value={password}
          onChange={event => {
            setPassword(event.target.value);
          }}
        />
        <LoginButton isLoginLoading={loading} />
      </div>
    </form>
  );
};
