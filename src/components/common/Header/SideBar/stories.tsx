import React from 'react'
import { Story } from '@storybook/react/types-6-0'

import { Props } from './type'

import Component from '.'

export default {
  component: Component,
  argTypes: { onClick: {} }
}

const Template: Story<Props> = args => (
  <Component {...args}>
    <button
      onClick={prop => {
        prop.stopPropagation()
        console.log('テストボタン')
      }}
    >
      テストボタン
    </button>
  </Component>
)

export const Default = Template.bind({})
Default.args = {
  isOpen: true
}
