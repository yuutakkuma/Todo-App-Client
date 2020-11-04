import React from 'react'
import { Story } from '@storybook/react/types-6-0'

import { Props } from './type'

import Component from '.'

export default {
  component: Component,
  argTypes: { onClick: {} }
}

const Template: Story<Props> = args => <Component {...args} />

export const TokenError = Template.bind({})
TokenError.args = {
  title: 'エラー',
  discription:
    'アクセストークンを取得出来ませんでした。再度ログインするか、しばらくたってからログインしてください。'
}

export const GetTaskError = Template.bind({})
GetTaskError.args = {
  title: 'タスクを取得出来ませんでした',
  discription: 'リロードするか、再度ログインしてください。'
}

export const AddTaskError = Template.bind({})
AddTaskError.args = {
  title: 'タスクを追加出来ませんでした',
  discription: '時間を置いて再度投稿するか、開発者へ問合せてください。'
}

export const DeleteTaskError = Template.bind({})
DeleteTaskError.args = {
  title: 'タスクを削除出来ませんでした',
  discription:
    'ブラウザをリロードしても直らない場合は開発者へ問い合わせてください。'
}

export const TestLoginError = Template.bind({})
TestLoginError.args = {
  title: 'ログイン出来ませんでした',
  discription: 'サーバーエラーの可能性があります。'
}

export const LoginComplete = Template.bind({})
LoginComplete.args = {
  title: 'ログインしました',
  discription: 'タスクを管理しよう'
}

export const RegisterComplete = Template.bind({})
RegisterComplete.args = {
  title: 'アカウント作成したよ!',
  discription: 'さっそくログインしよう!'
}

export const AccountDeleteComplete = Template.bind({})
AccountDeleteComplete.args = {
  title: 'アカウントを削除しました',
  discription: 'ご利用ありがとうございました。'
}
