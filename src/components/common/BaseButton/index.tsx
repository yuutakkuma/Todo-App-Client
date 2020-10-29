import React, { FC } from 'react'

import { Button } from './style'
import { Props } from './type'

const BaseButton: FC<Props> = ({ title, disabled, onClick }) => (
  <Button disabled={disabled} onClick={onClick}>
    {title}
  </Button>
)

export default BaseButton
