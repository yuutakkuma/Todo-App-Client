import React from 'react';
import { Loading } from '../Loading';
import { useLoginMutation } from '../../generated/graphql';
import { useHistory } from 'react-router-dom';

export const TestUserButton: React.FC = () => {
  const [testLogin, { loading, error }] = useLoginMutation();
  const history = useHistory();
  if (loading) return <Loading />;
  if (error) return <div>error...</div>;
  return (
    <button
      className="login-btn"
      type="button"
      onClick={async () => {
        try {
          await testLogin({
            variables: {
              email: 'test@test.com',
              password: 'test'
            }
          });
        } catch {}
        history.push('/home');
      }}
    >
      テストユーザーでログインする
    </button>
  );
};
