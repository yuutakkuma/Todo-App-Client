import React from 'react'
import { Story } from '@storybook/react/types-6-0'

import { Loading as Component } from '.'

export default {
  component: Component
}

const Template: Story = args => <Component {...args} />

export const Default = Template.bind({})
