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
  tasks: [
    {
      id: 1,
      task: '買い物'
    },
    {
      id: 2,
      task: '筋トレ'
    },
    {
      id: 3,
      task: '掃除'
    },
    {
      id: 4,
      task: '勉強'
    },
    {
      id: 5,
      task: 'お絵かき'
    }
  ],
  disabled: false
}
