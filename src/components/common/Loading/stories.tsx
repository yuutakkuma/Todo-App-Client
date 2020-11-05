import React from 'react'
import { Story } from '@storybook/react/types-6-0'

import { Props } from './type'

import Component from '.'

export default {
  component: Component
}

const Template: Story<Props> = args => <Component {...args} />

export const Default = Template.bind({})
Default.args = {
  width: '100px',
  height: '100px'
}
export const small = Template.bind({})
small.args = {
  width: '20px',
  height: '20px'
}
