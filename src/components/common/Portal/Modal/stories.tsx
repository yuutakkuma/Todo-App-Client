import React from 'react'
import { Story } from '@storybook/react/types-6-0'

import { Props } from './type'

import Component from '.'

export default {
  component: Component,
  argTypes: { onClick: {} }
}

const Template: Story<Props> = args => <Component {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'アカウント作成したよ!',
  discription: 'さっそくログインしよう!'
}

export const TokenError = Template.bind({})
TokenError.args = {
  title: 'エラー',
  discription:
    'アクセストークンを取得出来ませんでした。再度ログインするか、しばらくたってからログインしてください。'
}
