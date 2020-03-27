import React, { useState } from 'react';
import { useLoginMutation } from '../generated/graphql';
import { RouteComponentProps } from 'react-router-dom';
import { setLogOutStatus } from '../logOutStatus';

export const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [login, { error }] = useLoginMutation();

  if (error) {
    return <div>Error...</div>;
  }

  if (typeof email === 'undefined') {
    return <div>email type is undefined</div>;
  }
  if (typeof password === 'undefined') {
    return <div>password type is undefined</div>;
  }

  return (
    <form
      className="auth-form"
      onSubmit={async event => {
        event.preventDefault();

        await login({
          variables: {
            email: email,
            password: password
          }
        });
        setLogOutStatus(false);
        history.push('/Todo');
      }}
    >
      <div className="auth-form-inner">
        <input
          className="auth-input"
          value={email}
          placeholder="email"
          onChange={event => {
            setEmail(event.target.value);
          }}
        />
        <input
          className="auth-input"
          type="password"
          value={password}
          placeholder="password"
          onChange={event => {
            setPassword(event.target.value);
          }}
        />
        <button className="auth-btn" type="submit">
          ログイン
        </button>
      </div>
    </form>
  );
};
