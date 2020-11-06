import React from 'react'
import { Story } from '@storybook/react/types-6-0'

import { Props } from './type'

import Component from '.'

export default {
  component: Component,
  argTypes: { onClick: {} },
  decorators: [
    (Story: any) => (
      <div
        style={{
          width: '100%',
          height: '80px'
        }}
      >
        <Story />
      </div>
    )
  ]
}

const Template: Story<Props> = args => <Component {...args} />

export const Default = Template.bind({})
