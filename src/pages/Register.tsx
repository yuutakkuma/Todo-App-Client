import React, { useState } from 'react';
import { useRegisterMutation } from '../generated/graphql';
import { useHistory } from 'react-router-dom';
import { RegisterButton } from '../components/button/RegisterButton';

export const Register: React.FC = () => {
  const history = useHistory();
  const [userName, setUserName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [register, { loading, error }] = useRegisterMutation();

  if (error) {
    return <div>Error...</div>;
  }
  if (typeof userName === 'undefined') {
    return <div>userName type is undefined</div>;
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

        await register({
          variables: {
            userName: userName,
            email: email,
            password: password
          }
        });
        history.push('/');
      }}
    >
      <div className="auth-form-inner">
        <input
          className="auth-input"
          value={userName}
          placeholder="userName"
          onChange={event => {
            setUserName(event.target.value);
          }}
        />
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
        <RegisterButton isRegisterLoading={loading} />
      </div>
    </form>
  );
};
