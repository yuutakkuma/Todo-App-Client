import React, { useReducer } from 'react';
import _ from 'lodash';

import './componentStyle/Login.css';
import { LoginButton } from './button/LoginButton';
import { useLoginMutation } from '../generated/graphql';
import { useHistory } from 'react-router-dom';
import { loginGqlError } from '../models/loginGqlError';
import { TestUserButton } from './button/TestUserButton';
import { formReducer, initialState } from '../store/FormStore';

let errorMessage: loginGqlError;

export const Login: React.FC = () => {
  const history = useHistory();
  const [login, { loading, error }] = useLoginMutation();
  const [state, dispatch] = useReducer(formReducer, initialState);

  if (error) {
    // GraphQLErrorを取得
    const arry = _.map(error.graphQLErrors, 'message');
    errorMessage = arry[0] as any;
  }

  return (
    <form
      className="login-form"
      onSubmit={async (event) => {
        event.preventDefault();
        console.log(state.email);

        try {
          await login({
            variables: {
              email: state.email,
              password: state.password,
            },
          });
          history.push('/home');
        } catch {}
      }}
    >
      <div className="login-form-inner">
        {error ? <p className="error">{errorMessage.message}</p> : undefined}
        <input
          className="login-input"
          placeholder="Eメール"
          value={state.email}
          onChange={(event) => {
            dispatch({ type: 'emailType', value: event.target.value });
          }}
        />
        <input
          className="login-input"
          type="password"
          placeholder="パスワード"
          value={state.password}
          onChange={(event) => {
            dispatch({ type: 'passwordType', value: event.target.value });
          }}
        />
        <LoginButton isLoginLoading={loading} />
        <TestUserButton />
      </div>
    </form>
  );
};
