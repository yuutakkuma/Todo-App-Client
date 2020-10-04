import React, { useReducer, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import _ from 'lodash'

import { Wrapper } from './pageStyle/Wrapper.style'
import { Form } from './pageStyle/Form.style'
import { Inner } from './pageStyle/Inner.style'
import { Input } from './pageStyle/Input.style'

import { useRegisterMutation } from '../generated/graphql'
import { FormButtonBase } from '../components/button/FormButtonBase'
import { RegisterGqlError, ConstraintsError } from '../models/registerGqlError'
import { Explanation } from '../components/explanation'
import { formReducer, initialState } from '../store/FormStore'
import { ModalContext } from '../createContext/ModalContext'
import { Loading } from '../components/Loading'

let nickNameError: string | undefined
let emailError: string | undefined
let passwordError: string | undefined
let arry: ConstraintsError

export const Register: React.FC = () => {
  const history = useHistory()
  const [register, { loading, error }] = useRegisterMutation()
  const [state, dispatch] = useReducer(formReducer, initialState)
  const modalCtx = useContext(ModalContext)

  if (error) {
    // GraphQLErrorを取得
    const obj = _.map(error.graphQLErrors, 'message')
    const errors: RegisterGqlError = obj[0] as any
    // 発生したエラーの箇所に代入する
    for (let i = 0; i < errors.message.length; i++) {
      arry = errors.message[i].constraints

      if (arry.length === 'ニックネームは1文字以上、20文字以下です。') {
        nickNameError = arry.length
      }

      if (arry.isEmail === 'Emailを入力してください。') {
        emailError = arry.isEmail
      }

      if (arry.length === 'パスワードは4文字以上、16文字以下です。') {
        passwordError = arry.length
      }
    }
  }
  return (
    <main>
      <Wrapper>
        <Explanation
          value={
            '新規登録するにはニックネーム、Eメール、パスワードを入力してください。'
          }
          buttonName={'戻る'}
          history={'/'}
        />
        <Form
          onSubmit={async event => {
            event.preventDefault()
            // エラーメッセージをリセット
            nickNameError = undefined
            emailError = undefined
            passwordError = undefined

            try {
              await register({
                variables: {
                  nickname: state.nickName,
                  email: state.email,
                  password: state.password
                }
              })
              // ランディングページでモーダルを表示させる
              modalCtx.text = '登録完了しました！ログインしてください！'
              modalCtx.state = true
              // ランディングページに遷移する
              history.push('/')
            } catch {}
          }}
        >
          <Inner innerWidth={80}>
            {error ? <p className='error'>{nickNameError}</p> : undefined}
            <Input
              value={state.nickName}
              placeholder='ニックネーム'
              onChange={event => {
                dispatch({ type: 'nickNameType', value: event.target.value })
              }}
            />
            {error ? <p className='error'>{emailError}</p> : undefined}
            <Input
              value={state.email}
              placeholder='Eメール'
              onChange={event => {
                dispatch({ type: 'emailType', value: event.target.value })
              }}
            />
            {error ? <p className='error'>{passwordError}</p> : undefined}
            <Input
              type='password'
              value={state.password}
              placeholder='パスワード'
              onChange={event => {
                dispatch({ type: 'passwordType', value: event.target.value })
              }}
            />
            {loading ? (
              <Loading />
            ) : (
              <FormButtonBase title='ログイン' type='submit' />
            )}
          </Inner>
        </Form>
      </Wrapper>
    </main>
  )
}
