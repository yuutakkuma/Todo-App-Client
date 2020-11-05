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
  characterCounts: 20
}

export const Error = Template.bind({})
Error.args = {
  characterCounts: 26,
  error: '入力出来る文字数は25文字までです。'
}
