import React, { useState } from 'react';
import { LoginButton } from '../components/button/LoginButton';
import { useLoginMutation } from '../generated/graphql';
import { useHistory } from 'react-router-dom';

export const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [login, { loading, error }] = useLoginMutation();
  const history = useHistory();

  if (typeof email === 'undefined') {
    return <div>email type is undefined</div>;
  }
  if (typeof password === 'undefined') {
    return <div>password type is undefined</div>;
  }

  if (error) return <div>ログインエラー</div>;

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
        history.push('/todo');
      }}
    >
      <div className="auth-form-inner">
        <input
          className="auth-input"
          placeholder="email"
          value={email}
          onChange={event => {
            setEmail(event.target.value);
          }}
        />
        <input
          className="auth-input"
          type="password"
          placeholder="password"
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
