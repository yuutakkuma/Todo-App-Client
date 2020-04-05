import React, { useState } from 'react';
import './pageStyle/Register.css';

import { useRegisterMutation } from '../generated/graphql';
import { useHistory } from 'react-router-dom';
import { RegisterButton } from '../components/button/RegisterButton';
import { CharacterCount } from '../components/CharacterCount';

export const Register: React.FC = () => {
  const history = useHistory();
  const [nickName, setNickName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [register, { loading, error }] = useRegisterMutation();

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <div className="main">
      <div className="register-wrapper">
        <form
          className="register-form"
          onSubmit={async event => {
            event.preventDefault();

            await register({
              variables: {
                nickName: nickName,
                email: email,
                password: password
              }
            });
            history.push('/todo');
          }}
        >
          <div className="input-form-inner">
            <CharacterCount value={nickName} />
            <input
              className="form-input"
              value={nickName}
              placeholder="ニックネーム"
              onChange={event => {
                setNickName(event.target.value);
              }}
            />
            <input
              className="form-input"
              value={email}
              placeholder="Eメール"
              onChange={event => {
                setEmail(event.target.value);
              }}
            />
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
