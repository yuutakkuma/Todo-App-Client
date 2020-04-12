import React, { useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import _ from 'lodash';

import './pageStyle/DeleteAccount.css';
import { useDeleteAccountMutation } from '../generated/graphql';
import { loginGqlError } from '../models/loginGqlError';
import { DeleteAccountButton } from '../components/button/DeleteAccountButton';
import { Explanation } from '../components/explanation';
import { formReducer, initialState } from '../store/FormStore';

let errorMessage: loginGqlError;

export const DeleteAccount: React.FC = () => {
  const history = useHistory();
  const [deleteAccount, { loading, error }] = useDeleteAccountMutation();
  const [state, dispatch] = useReducer(formReducer, initialState);

  if (error) {
    // GraphQLErrorを取得
    const arry = _.map(error.graphQLErrors, 'message');
    errorMessage = arry[0] as any;
  }

  return (
    <div className="main">
      <div className="delete-account-wrapper">
        <Explanation
          value={
            'アカウントを削除するにはユーザー情報を正しく入力してください。'
          }
          buttonName={'ホームへ戻る'}
          history={'/home'}
        />
        <form
          className="delete-account-form"
          onSubmit={async event => {
            event.preventDefault();

            try {
              await deleteAccount({
                variables: {
                  nickname: state.nickName,
                  email: state.email,
                  password: state.password
                }
              });
              window.alert('アカウントを削除しました。');
              history.push('/');
            } catch {}
          }}
        >
          <div className="input-form-inner">
            {error ? (
              <p className="error">{errorMessage.message}</p>
            ) : (
              undefined
            )}
            <input
              className="form-input"
              value={state.nickName}
              placeholder="ニックネーム"
              onChange={event => {
                dispatch({ type: 'nickNameType', value: event.target.value });
              }}
            />
            <input
              className="form-input"
              value={state.email}
              placeholder="Eメール"
              onChange={event => {
                dispatch({ type: 'emailType', value: event.target.value });
              }}
            />
            <input
              className="form-input"
              type="password"
              value={state.password}
              placeholder="パスワード"
              onChange={event => {
                dispatch({ type: 'passwordType', value: event.target.value });
              }}
            />
            <DeleteAccountButton isDeleteAccountLoading={loading} />
          </div>
        </form>
      </div>
    </div>
  );
};
