import React from 'react'
import { Story } from '@storybook/react/types-6-0'

import { FormButtonBase as Component, Props } from '.'

export default {
  component: Component
}

const Template: Story<Props> = args => <Component {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'FormButton'
}
