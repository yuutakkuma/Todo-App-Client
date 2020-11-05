import React from 'react'
import { Story } from '@storybook/react/types-6-0'

import { ErrorPropertyType, Props } from './type'

import Component from '.'

export default {
  component: Component,
  argTypes: {
    onNicknameChange: {},
    onEmailChange: {},
    onPasswordChange: {}
  }
}

const Template: Story<Props> = args => <Component {...args} />

export const Default = Template.bind({})
Default.args = {
  onSubmit: e => {
    e.preventDefault()
  }
}

export const Error = Template.bind({})
Error.args = {
  onSubmit: e => {
    e.preventDefault()
  },
  errors: {
    message: [
      {
        property: ErrorPropertyType.NICKNAME,
        constraints: {
          length: 'ニックネームエラー'
        }
      },
      {
        property: ErrorPropertyType.EMAIL,
        constraints: {
          isEmail: 'Eメールエラー'
        }
      },
      {
        property: ErrorPropertyType.PASSWORD,
        constraints: {
          length: 'パスワードエラー'
        }
      }
    ]
  }
}

export const IsLoading = Template.bind({})
IsLoading.args = {
  onSubmit: e => {
    e.preventDefault()
  },
  isLoading: true
}
