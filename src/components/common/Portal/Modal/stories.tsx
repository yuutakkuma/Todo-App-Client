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
  content: 'さっそくログインしよう!'
}
