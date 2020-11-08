import React from 'react'
import { Story } from '@storybook/react/types-6-0'

import { LoadingMode, Props } from './type'

import Component from '.'

export default {
  component: Component,
  decorators: [
    (Story: Story) => (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Story />
      </div>
    )
  ]
}

const Template: Story<Props> = args => <Component {...args} />

export const Large = Template.bind({})
Large.args = {
  mode: LoadingMode.LARGE
}

export const Midium = Template.bind({})
Midium.args = {
  mode: LoadingMode.MIDIUM
}

export const Small = Template.bind({})
Small.args = {
  mode: LoadingMode.SMALL
}
