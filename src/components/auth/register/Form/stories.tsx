import React from 'react'
import { Story } from '@storybook/react/types-6-0'

import { Props } from './type'

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
