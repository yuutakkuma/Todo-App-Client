import React, { useState } from 'react';
import './pageStyle/Register.css';

import { useRegisterMutation } from '../generated/graphql';
import { useHistory } from 'react-router-dom';
import { RegisterButton } from '../components/button/RegisterButton';
import { StringCount } from '../components/StringCount';

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
    <div className="main">
      <div className="box">
        <form
          className="register-form"
          onSubmit={async event => {
            event.preventDefault();

            await register({
              variables: {
                userName: userName,
                email: email,
                password: password
              }
            });
            history.push('/todo');
          }}
        >
          <div className="input-form-inner">
            <div className="input-container">
              <StringCount value={userName} />
              <input
                className="form-input"
                value={userName}
                placeholder="userName"
                onChange={event => {
                  setUserName(event.target.value);
                }}
              />
              <input
                className="form-input"
                value={email}
                placeholder="email"
                onChange={event => {
                  setEmail(event.target.value);
                }}
              />
              <input
                className="form-input"
                type="password"
                value={password}
                placeholder="password"
                onChange={event => {
                  setPassword(event.target.value);
                }}
              />
              <RegisterButton isRegisterLoading={loading} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
