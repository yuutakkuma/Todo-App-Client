import React, { useReducer, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import _ from 'lodash'

import { Form } from './pageStyle/Form.style'
import { Wrapper } from './pageStyle/Wrapper.style'
import { Inner } from './pageStyle/Inner.style'
import { Input } from './pageStyle/Input.style'

import { useDeleteAccountMutation } from '../graphql/generated/graphql'
import { loginGqlError } from '../models/loginGqlError'
import { DeleteAccountButton } from '../components/button/DeleteAccountButton'
import { Explanation } from '../components/explanation'
import { formReducer, initialState } from '../store/FormStore'
import { ModalContext } from '../createContext/ModalContext'

let errorMessage: loginGqlError

export const DeleteAccount: React.FC = () => {
  const [deleteAccount, { loading, error }] = useDeleteAccountMutation()
  const [state, dispatch] = useReducer(formReducer, initialState)
  const history = useHistory()
  const modalCtx = useContext(ModalContext)

  if (error) {
    // GraphQLErrorを取得
    const arry = _.map(error.graphQLErrors, 'message')
    errorMessage = arry[0] as any
  }

  return (
    <main>
      <Wrapper>
        <Explanation
          value={
            'アカウントを削除するにはユーザー情報を正しく入力してください。'
          }
          buttonName={'ホームへ戻る'}
          history={'/home'}
        />
        <Form
          onSubmit={async event => {
            event.preventDefault()

            try {
              await deleteAccount({
                variables: {
                  nickname: state.nickName,
                  email: state.email,
                  password: state.password
                }
              })
              // ランディングページでモーダルを表示させる
              modalCtx.text = 'アカウントを削除しました。'
              modalCtx.state = true
              // ランディングページへ遷移する
              history.push('/')
            } catch {}
          }}>
          <Inner innerWidth={80}>
            {error ? (
              <p className='error'>{errorMessage.message}</p>
            ) : undefined}
            <Input
              className='form-input'
              value={state.nickName}
              placeholder='ニックネーム'
              onChange={event => {
                dispatch({ type: 'nickNameType', value: event.target.value })
              }}
            />
            <Input
              className='form-input'
              value={state.email}
              placeholder='Eメール'
              onChange={event => {
                dispatch({ type: 'emailType', value: event.target.value })
              }}
            />
            <Input
              className='form-input'
              type='password'
              value={state.password}
              placeholder='パスワード'
              onChange={event => {
                dispatch({ type: 'passwordType', value: event.target.value })
              }}
            />
            <DeleteAccountButton isDeleteAccountLoading={loading} />
          </Inner>
        </Form>
      </Wrapper>
    </main>
  )
}
